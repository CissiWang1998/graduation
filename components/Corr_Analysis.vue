<style scoped>
    .col{
        border: 1px solid #beb6b6;
        border-radius: 10px;
        padding-top: 10px;
        padding-left: 10px;
        margin:20px;
    }
    .row{
        margin: 20px auto;
    }
    .bg{
        margin: 20px;
    }
</style>
<template>
    <div class="bg">
        <Row :gutter=40  class="row">
            <Col span="12">
                <div class="col">
                    <div>统计分析</div>
                    <div>
                        <ve-line :data="chartData1"></ve-line>
                    </div>
                </div>
            </Col>
            <Col span="12">
                <div class="col">
                    <div>对比分析</div>
                    <div>
                        <ve-line :data="chartData2"></ve-line>
                    </div>
                </div>
            </Col>
        </Row>
        <Row :gutter=40 class="row">
            <Col span="12">
                <div class="col">
                    <div>相关分析</div>
                    <div>
                        <ve-line :data="chartData3"></ve-line>
                    </div>
                </div>
            </Col>
            <Col span="12">
                <div class="col">
                    <div>关联分析</div>
                    <div>
                        <ve-line :data="chartData4"></ve-line>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data1: null,
            data2: null,
            data3: null,
            data4: null,
            chartData1: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                    { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            },
            chartData2: {},
            chartData3: {},
            chartData4: {}
        }
    },
    methods: {

    },
    created: {}
}
</script>
