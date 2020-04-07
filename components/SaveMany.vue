<style scoped>
    .layout{
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        float: left;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        float: left;
        width: 400px;
        margin: 0 auto;
        margin-left: 50px;
    }
    .upload{
        margin-top: 15px
    }
</style>
<template>
    <layout>
        <Header style="background: white;">
            <Menu mode="horizontal" theme="light" active-name="1">
                <div class="layout-logo">
                    <Select v-model="model8" clearable style="width:200px" placeholder="请选择导入数据项">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
            </Menu>
        </Header>
        <layout>
            <strong :style="{margin: '10px'}">文件格式如下(仅支持xls,xlsx)</strong>
            <Table border :columns="columns1" :data="data1"></Table>
            <div class="upload">
                <div class="layout-nav">
                    <Upload :format="['xlsx','xls']" accept=".xlsx, .xls" :before-upload="onBefore" action="//jsonplaceholder.typicode.com/posts/">
                        <Button icon="ios-cloud-upload-outline">上传文件</Button>
                        <span v-if="file !== null" style="color:green;">{{ file.name }}</span>
                    </Upload>
                </div>
                <div class="layout-ensure">
                    <Button  v-bind:disabled="comfirm_button_dis" type="primary" @click="upload_file">确定上传</Button>
                </div>
            </div>
        </layout>
    </layout>
</template>
<script>
    export default {
        data () {
            return {
                file: null,
                loadingStatus: false,
                comfirm_button_dis: true,
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model8: '',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            onBefore (file) {
                this.comfirm_button_dis = false;
                this.file = file;
                alert(1234);
                return false;
            },
            upload_file () {
                if (this.model8 === '') {
                    this.$Message.info('请选择要上传的数据');
                    return;
                }
                if (this.file === null) {
                    this.$Message.info('请上传文件');
                    return;
                }
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('Success')
                }, 1500);
                alert(123224)
            }
        }
    }
</script>
