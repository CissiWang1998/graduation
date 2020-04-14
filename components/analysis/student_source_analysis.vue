<template>
  <div>
    <div>
      <ve-histogram :data="chartData"></ve-histogram>
    </div>
    <div>
      <Table border :columns="cols" :data="yearData"></Table>
    </div>
  </div>
</template>
import api from '../fetch/api'
<script>
  export default {
    data () {
      return {
        chartData: {},
        yearData: {},
        
      }
    },
    methods : {
        getStudentSourceData () {
            api.getStudentSourceData()
                .then(res => {
                    this.chartData = res['chartData']
                    let yearData = res['yearData']
                    console.log(yearData)
                })
        }
    },
    created () {
        this.getStudentSourceData()
    }
  }
</script>