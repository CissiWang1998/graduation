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
import api from '../fetch/api'
export default {
    data () {
        return {
            ajaxHistoryData: [],
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            columns12: [],
            data6: [],
            historyData: [],
            table_name: ''
        }
    },
    methods: {
        show (index) { // 暂未实现
            this.$Modal.info({
                title: 'User Info',
                content: `Info：${this.data6[index]}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        handleListApproveHistory () {
            console.log(this.table_name)
            // 保存取到的所有数据
            api.getTableDataByName(this.table_name)
                .then(res => {
                    let col = []
                    for (var key in res[0]) {
                        col.push({'title': key, 'key': key})
                    }
                    col.push({
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    })
                    console.log(col)
                    this.columns12 = col
                    this.data6 = res
                    this.ajaxHistoryData = this.data6
                    this.dataCount = this.data6.length;
                    // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                    if (this.data6.length < this.pageSize) {
                        this.historyData = this.ajaxHistoryData;
                    } else {
                        this.historyData = this.ajaxHistoryData.slice(0, this.pageSize);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        changepage (index) {
            var _start = (index - 1) * this.pageSize;
            var _end = index * this.pageSize;
            this.historyData = this.ajaxHistoryData.slice(_start, _end);
        },
        getTableName () {
            var routerParams = this.$route.params.table_name
            this.table_name = routerParams
            this.handleListApproveHistory()
        }
    },
    created () {
        this.getTableName()
    },
    watch: {
        '$route': 'getTableName'
    }
}
</script>
