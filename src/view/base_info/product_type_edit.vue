<template>
    <div>
      编辑产品类型页面
      {{$route.params.id}}
      {{$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: "product_type_edit",
        data(){
            return {

            }
        },
        mounted (){
          console.log("asdfdsf = ",this.$router)
          console.log("asdfdsf = ",this.$route)
        }
    }
</script>
<style scoped>

</style>
