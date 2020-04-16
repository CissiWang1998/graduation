<style scoped>
    .col{
        border-radius: 10px;
        padding-top: 10px;
        padding-left: 10px;
        margin:20px;
    }
    .row{
        margin: 30px auto;
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
                    <div><p>{{ titles[0] }}</p></div>
                    <div>
                        <ve-histogram :data="chartData[0]"></ve-histogram>
                    </div>
                </div>
            </Col>
            <Col span="12">
                <div class="col">
                    <div><p>{{ titles[1] }}:{{pcc}}</p>
                    </div>
                    <div>
                        <ve-scatter :data="chartData[1]"></ve-scatter>
                    </div>
                </div>
            </Col>
        </Row>
        <Row :gutter=40 class="row">
            <Col span="12">
                <div class="col">
                    <div>相关分析</div>
                </div>
            </Col>
            <Col span="12">
                <div class="col">
                    <div>关联分析</div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
import api from '../../fetch/api'
export default {
    data () {
        return {
            titles: [],
            data1: null,
            data2: null,
            data3: null,
            data4: null,
            chartData: [],
            pcc: 0
        }
    },
    methods: {
        getAnalysisInitData () {
            api.getAnalysisInitData()
            .then(res => {
                for (var i = 0; i < res.length; i++) {
                    console.log(res[i])
                    let tdata = res[i]
                    this.titles.push(tdata['title'])
                    this.chartData.push(tdata['data'])
                }
                this.pcc = res[1]['pcc']
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    created () {
        this.getAnalysisInitData()
    }
}
</script>
