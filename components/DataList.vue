<style scoped>
.layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
}
.layout-logo{
    width: auto;
    height: 30px;
    float: left;
    position: relative;
    top: 15px;
    left:175px;
}
.layout-nav{
    width: 200px;
    margin: 0 auto;
    margin-right: -150px;
}
.menuItem{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <layout>
            <Header style="background: white;">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo">
                        <Input v-model="value13">
                            <Select v-model="select3" slot="prepend" style="width: 80px">
                                <Option value="day">Day</Option>
                                <Option value="month">Month</Option>
                            </Select>
                            <Button slot="append" icon="ios-search"></Button>
                        </Input>
                    </div>
                    <div class="layout-nav">
                         <Button slot="append" icon="ios-plus"></Button>
                    </div>
                </Menu>
            </Header>
            <Layout >
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="created">
                        <MenuItem class="menuItem" v-for="menuItem in menuItems" v-text="menuItem[1]" :name="menuItem[2]" :key="menuItem[2]">单项录入</MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Content :style="{padding: '24px', minHeight: '600px', background: '#fff'}">
                        <keep-alive><router-view> </router-view></keep-alive>
                    </Content>
                </Layout>
            </Layout>
        </layout>
    </div>
</template>
<script>
import api from '../fetch/api'
console.log(1)
export default {
    data () {
        return {
            value13: '',
            select3: 'day',
            menuItems: [[1, '1', 'student'], [2, '2', 'teacher']] // 数据项数
        }
    },
    methods: {
        onSelect2 (name) {
            console.log(name)
            this.$router.replace('/saveOne/show')
        },
        created () {
            console.log(1)
            api.DataSchemaList()
                .then(res => {
                    console.log(res)
                    if (res.success) {
                        this.menuItems = res
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            // console.log(this.menuItems)
        }
    }
}
</script>
