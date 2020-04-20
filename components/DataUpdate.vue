<style scoped>
.layout-logo{
    width: auto;
    height: 30px;
    float: left;
    position: relative;
    top: 15px;
    left:175px;
    background: #ffffff;
}
</style>
<template>
    <layout>
        <Header style="background: white;">
            <div class="layout-logo">
                <Input v-model="search_key" placeholder="请输入老师id或者姓名">
                    <Select v-model="search_index" slot="prepend" style="width: 80px">
                        <Option value="update_student">学生</Option>
                        <Option value="update_teacher">老师</Option>
                    </Select>
                    <Button slot="append" icon="ios-search" @click="searchUser"></Button>
                </Input>
            </div>
        </header>
        <Layout>
            <ul item-layout="vertical">
                <li v-for="item in search_data" :key="item.name" @click="select(item)">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </Layout>
    </layout>
</template>
<script>
import api from '../../fetch/api'
export default {
    data () {
        return {
            search_key: '',
            search_index: 'update_teacher',
            search_data: null
        }
    },
    methods: {
        searchUser () {
            if (this.search_key === '' || this.search_index === '') {
                return;
            }
            let table_name = this.search_index.slice(7)
            console.log(table_name)
            api.getUpdateSearchResult(table_name, this.search_key)
                .then(res => {
                    let arr = []
                    res.forEach(element => {
                        arr.push(element)
                    })
                    this.search_data = arr
                })
                .catch(error => {
                    console.log(error);
                });
        },
        select (item) {
            this.$router.replace({name: this.search_index, params: {item: item}})
        }
    },
    
}
</script>
