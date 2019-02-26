<template>
  <div>
    <Row>
      <Form ref="formCustom" :model="formCustom" :label-width="80">
        <FormItem label="项目名称" style="width:15%">
          <Input v-model="formCustom.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="订单编号" style="width:15%">
          <Input v-model="formCustom.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="交货日期" style="width:15%">
          <DatePicker type="date" placeholder="Select date" v-model="formCustom.startDate"></DatePicker>
        </FormItem>
        <FormItem label="部门" style="width:15%">
          <Input v-model="formCustom.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="订单类型" style="width:15%">
          <Select v-model="formCustom.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="订单级别" style="width:15%">
          <Select v-model="formCustom.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="客户付款" style="width:15%">
          <Select v-model="formCustom.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="客户付款" style="width:15%">
          <Select v-model="formCustom.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="订单状态" style="width:15%">
          <Select v-model="formCustom.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="付款方式" style="width:15%">
          <Select v-model="formCustom.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>

        <FormItem style="width:15%">
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
        tableColumn:[
          {
            title: '订单编号',
            key: 'department',
            fixed: 'left'
          },
          {
            title: '项目名称',
            key: 'salesman',
          },
          {
            title: '销售',
            key: 'customer',
          },
          {
            title: '客户',
            key: 'title',
          },
          {
            title: '订单类型',
            key: 'orderNo',
          },
          {
            title: '订单级别',
            key: 'orderStatus',
          },
          {
            title: '要求交货日期',
            key: 'isPay',
          },
          {
            title: '销售总额',
            key: 'current',
          },
          {
            title: '成本金额',
            key: 'flowEdition',
          },
          {
            title: '订单状态',
            key: 'createTime',
          },
          {
            title: '付款方式',
            key: 'createTime',
          },
          {
            title: '客户付款方式',
            key: 'createTime',
          },
          {
            title: '运营中心付款状态',
            key: 'createTime',
          },
          {
            title: '创建时间',
            key: 'createTime',
          },
          {
            title: '操作',
            key: 'edition',
            width:150,
            fixed:'right',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  }
                }, '订单详情'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  }
                }, '操作')
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
