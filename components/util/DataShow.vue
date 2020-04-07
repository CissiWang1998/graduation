<template>
    <div>
        <Table border :columns="columns12" :data="historyData">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
                <Button type="error" size="small" @click="remove(index)">编辑</Button>
            </template>
        </Table>
        <Page :total="dataCount" :page-size="pageSize" show-total  @on-change="changepage"></Page>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                ajaxHistoryData: [],
                // 初始化信息总条数
                dataCount: 0,
                // 每页显示多少条
                pageSize: 10,
                columns12: [
                    {
                        title: 'Name',
                        slot: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 1,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 2,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 3,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 4,
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        name: 'John Brown',
                        age: 5,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 6,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 7,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 8,
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        name: 'John Brown',
                        age: 9,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 10,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 11,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 12,
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        name: 'John Brown',
                        age: 13,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 14,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 15,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 16,
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        name: 'John Brown',
                        age: 17,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 18,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 19,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 20,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
                historyData: []
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            handleListApproveHistory () {
                // 保存取到的所有数据
                this.ajaxHistoryData = this.data6
                this.dataCount = this.data6.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if (this.data6.length < this.pageSize) {
                    this.historyData = this.ajaxHistoryData;
                } else {
                    this.historyData = this.ajaxHistoryData.slice(0, this.pageSize);
                }
            },
            changepage (index) {
                var _start = (index - 1) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start, _end);
            }
        },
        created () {
             this.handleListApproveHistory();
        }
    }
</script>
