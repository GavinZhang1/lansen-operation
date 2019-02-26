<template>
	<div>
		<Row>
      <Form ref="filterFormRef" :model="filterFormModel" :label-width="80">
				<FormItem label="工艺名称" style="width:15%">
					<Input v-model="filterFormModel.processName" placeholder="Enter something..."></Input>
				</FormItem>
				<FormItem label="工艺类型" style="width:15%">
					<Select v-model="filterFormModel.usage">
						<Option value="0">拼缝</Option>
						<Option value="1">扣型</Option>
					</Select>
				</FormItem>
				<FormItem  style="width:15%">
					<Button  type="primary">查询</Button>
				</FormItem>
			</Form>
		</Row>
		<Row>
			<Table width="100%" :columns="tableColumn" :data="tableData"></Table>
		</Row>
		<Row style="margin-top:20px;">
			<Page :total="40" show-elevator show-sizer />
			</Row>	</div>
</template>
<script>
 export default {
	data() {
		return {
			formCustom:{},
			filterFormModel:{},
			tableData:[{
          "product_mame":"阿道夫",
          "usage":"加分",
          "update_time":"2019年2月22日18:11:22",
        }],
			tableColumn:[
				{
					title:"工艺名称",
					key:"process_name"
				},
				{
					title:"工艺类型",
					key:"usage"
				},
				{
					title:"状态",
					key:"update_time"
				},
				{
					title:"修改日期",
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
												name:'process_manage_edit',
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
