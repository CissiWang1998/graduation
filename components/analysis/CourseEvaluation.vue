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
                    <div><p>评教老师平均值</p></div>
                    <div>
                        <ve-histogram :data="chartData1"></ve-histogram>
                    </div>
                </div>
            </Col>
            <Col span="12">
                <div class="col">
                    <div><p>评教老师成绩占比</p>
                    </div>
                    <div>
                        <ve-pie :data="chartData2"></ve-pie>
                    </div>
                </div>
            </Col>
        </Row>
        <Row :gutter=40 class="row">
            <Col>
                <div class="col">
                    <Select v-model="teacher_name" style="width:200px" @on-change='select'>
                        <Option v-for="item in teacherList" :value="item" :key="item">{{ item }}</Option>
                    </Select>
                </div>
                <div>
                    <ve-histogram :data="chartData3"></ve-histogram>
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
            chartData1: null,
            chartData2: null,
            chartData3: null,
            teacherList: null,
            teacher_name: '张三'
        }
    },
    methods: {
        getTeacherList () {
            api.getTeacherList()
            .then(res => {
                this.teacherList = res
                console.log(this.teacherList)
            })
            .catch(error => {
                console.log(error);
            });
        },
        getInitData () {
            api.getSingleTeacherEvaluation(this.teacher_name)
                .then(res => {
                    this.chartData3 = res
                })
                .catch(error => {
                    console.log(error);
                });
            api.getTeachersEvaluationAvgScores()
                .then(res => {
                    this.chartData1 = res
                })
                .catch(error => {
                    console.log(error);
                });
            api.getTeacherEvaluationGradeDistributed()
                .then(res => {
                    this.chartData2 = res
                })
                .catch(error => {
                    console.log(error);
                });
        },
        select (teacher) {
            api.getSingleTeacherEvaluation(teacher)
                .then(res => {
                    this.chartData3 = res
                })
                .catch(error => {
                    console.log(error);
                });
            }
    },
    created () {
        this.getTeacherList()
        this.getInitData()
    }
}
</script>
