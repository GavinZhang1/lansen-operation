<template>
   <div>
     <span>{{tabValue}}</span>
     <span>{{formCustom.select}}</span>
     <span>{{formCustom.startDate}}</span>
     <span>{{formCustom.endDate}}</span>
     <Tabs type="card" v-model="tabValue">
       <TabPane  :label="item.contents" :name="item.name" v-for="item in tabList"></TabPane>
     </Tabs>
     <Row>
       <Form ref="formCustom" :model="formCustom" :label-width="80">
         <FormItem label="流程类型" style="width:20%">
           <Select v-model="formCustom.select">
             <Option value="beijing">New York</Option>
             <Option value="shanghai">London</Option>
             <Option value="shenzhen">Sydney</Option>
           </Select>
         </FormItem>
         <FormItem label="完成时间" style="width:30%">
           <DatePicker type="date" placeholder="Select date" v-model="formCustom.startDate"></DatePicker>
           <DatePicker type="date" placeholder="Select date" v-model="formCustom.endDate"></DatePicker>
         </FormItem>
         <FormItem style="width:20%">
           <Button  type="primary">查询</Button>
         </FormItem>
       </Form>
     </Row>
     <Row>
       <Table width="100%" border :columns="tableColumn" :data="tableData"></Table>
     </Row>
     <Row style="margin-top:20px;">
         <Page :total="40" show-elevator show-sizer />
     </Row>
		</div>
</template>

<script>

export default {
  name: 'vueTpl.vue',
  comments:[

  ],
  data (){
    return {
      formCustom:{

      },
      tabValue:11,
      tabList:[
           {
               label:"1",
               name:"1",
               contents:"代办任务"
           },
           {
             label:"2",
             name:"2",
             contents:"生产"
           },
           {
             label:"3",
             name:"3",
             contents:"提交财务申请发货"
           },
           {
             label:"4",
             name:"4",
             contents:"代发货"
           },
           {
             label:"5",
             name:"5",
             contents:"已办任务"
           },
         ],
      tableColumn:[
        {
          title: '部门',
          key: 'department',
          // fixed: 'left'
        },
        {
          title: '销售',
          key: 'salesman',

        },
        {
          title: '客户',
          key: 'customer',

        },
        {
          title: '标题',
          key: 'title',
        },
        {
          title: '订单号',
          key: 'orderNo',
        },
        {
          title: '订单状态',
          key: 'orderStatus',
        },
        {
          title: '结款状态',
          key: 'isPay',
        },
        {
          title: '当前环节',
          key: 'current',
        },
        {
          title: '流程版本',
          key: 'flowEdition',
        },
        {
          title: '创建时间',
          key: 'createTime',
        },
        {
          title: '操作',
          key: 'edition',
          // fixed:'right',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '删除')
            ]);
          }
        },
      ],
      tableData:[
        {
          department:"西安运营中心",
          salesman:"王者荣耀",
          customer:"赵云",
          title:"赵云皮肤",
          orderNo:"9527",
          orderStatus:"代发货",
          isPay:"是的",
          current:"物流跟踪",
          flowEdition:"2.3.4",
          createTime:"2019年2月22日",
        },
        {
          department:"西安运营中心",
          salesman:"王者荣耀",
          customer:"赵云",
          title:"赵云皮肤",
          orderNo:"9527",
          orderStatus:"代发货",
          isPay:"是的",
          current:"物流跟踪",
          flowEdition:"2.3.4",
          createTime:"2019年2月22日",
        },
        {
          department:"西安运营中心",
          salesman:"王者荣耀",
          customer:"赵云",
          title:"赵云皮肤",
          orderNo:"9527",
          orderStatus:"代发货",
          isPay:"是的",
          current:"物流跟踪",
          flowEdition:"2.3.4",
          createTime:"2019年2月22日",
        },
        {
          department:"西安运营中心",
          salesman:"王者荣耀",
          customer:"赵云",
          title:"赵云皮肤",
          orderNo:"9527",
          orderStatus:"代发货",
          isPay:"是的",
          current:"物流跟踪",
          flowEdition:"2.3.4",
          createTime:"2019年2月22日",
        }
      ]
    }
  }
}
</script>

<style scoped>
form>div{
  display:inline-block;
  float:left;
}
</style>
