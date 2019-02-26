<template>
   <div>
      <Row :gutter="20" class="">
        <i-col span="24" style="height:100%;">
          <div style="height:300px;">
            <Card></Card>
          </div>
        </i-col>
      </Row>
     <Row :gutter="20" class="chartPart">
       <Button-group style="padding-left:15px;">
         <i-button >年度</i-button>
         <i-button type="primary">月度</i-button>
       </Button-group>
       <div ref="figureDom" style="height: 310px;"></div>
     </Row>
   </div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/libs/tools'
import Card from '@/components/cards/card'
export default {
  name: 'mainModule',
  components: {
    Card
  },
  data () {
    return {
      dom: null
    }
  },
  methods: {
    resize () {
      this.dom.resize();
    }
  },
  mounted () {
    const option = {
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'直接访问',
          type:'bar',
          barWidth: '60%',
          data:[10, 52, 200, 334, 390, 330, 220]
        }
      ]
    }

    this.$nextTick(() => {
      this.dom = echarts.init(this.$refs.figureDom)
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>

<style scoped>
.chartPart{
  border:1px solid #f6e4cd;
  margin:5px!important;
  padding-top:20px;
}
</style>
