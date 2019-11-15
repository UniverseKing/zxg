<template>
    <div>
      商品列表{{categoryId}}
    </div>
</template>
           
<script>
export default{
    data(){
        return {
            categoryId:this.$route.query.categoryId
        }
    }
}
</script>
<style scoped>
            
</style>