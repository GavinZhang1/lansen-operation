<template>
	<div>
		<Row>
      <Form ref="filterFormRef" :model="filterFormModel" :label-width="80">
				<FormItem label="产品名称" style="width:15%">
					<Input v-model="filterFormModel.productName" placeholder="Enter something..."></Input>
				</FormItem>
				<FormItem label="用途类型" style="width:15%">
					<Select v-model="filterFormModel.usage">
						<Option value="0">全部</Option>
						<Option value="1">订货方式</Option>
					</Select>
				</FormItem>
				<FormItem  style="width:15%">
					<Button  type="primary">查询</Button>
				</FormItem>
			</Form>
		</Row>
		<Row>
			<div class="table_action" @click="$router.push({name:'product_type_edit'})">
				<Button  type="primary">添加</Button>
			</div>
			<div class="table_action" @click="$router.push({name:'product_type_edit'})">
				<Button  type="primary">导出</Button>
			</div>
		</Row>
		<Row>
			<Table width="100%" :columns="tableColumn" :data="tableData"></Table>
		</Row>
		<Row style="margin-top:20px;">
			<Page  show-elevator show-sizer
             :page-size.sync="tableConfig.pageSize"
             :current.sync="tableConfig.current"
             :total.sync="tableConfig.total"
             @on-change="reRender"
             @on-page-size-change="reRender"/>
			</Row>	</div>
</template>
<script>
 export default {
	data() {
		return {
			formCustom:{},
			filterFormModel:{},
      tableConfig:{
			  total:100,
        current:1,
        pageSize:10
      },
			tableData:[{
          "product_mame":"阿道夫",
          "usage":"加分",
          "update_time":"2019年2月22日18:11:22",
        }],
			tableColumn:[
				{
					title:"产品名称",
					key:"product_mame"
				},
				{
					title:"用途类型",
					key:"usage"
				},
				{
					title:"更新日期",
					key:"update_time"
				},
				{
					title:"操作",
					key:"action",
					render: (h, params) => {
						var that = this;
						return h('div', [
							h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										margin: '5px',
									},
																		on: {
										click: () => {
											that.$router.push({
												name:'product_type_edit',
												params:{
													id:params
												}
											})
										}
									},
							},"修改"),
							h('Button', {
									props: {
										type: 'error',
										size: 'small'
									},
									style: {
										margin: '5px',
									},
									on: {
										click: () => {
											that.$Modal.confirm({
												title:'提示',
												content:'确定要删除这条数据吗?',
												onOk:null,
												onCancel:that.$Modal.remove(),
											})
										},
										},
							},"删除"),
						]);
					}
				}
			]
		}
	},
   methods:{
     reRender:function(page){
	    console.log('total = ',this.tableConfig.total);
	    console.log('current = ',this.tableConfig.current);
	    console.log('pageSize = ',this.tableConfig.pageSize);
    }
   }
}
</script>
<style scoped>
	form>div{
		display:inline-block;
		float:left;
	}
	.table_action{
		margin:10px 0;display:inline-block;margin-right:20px;
	}
</style>
