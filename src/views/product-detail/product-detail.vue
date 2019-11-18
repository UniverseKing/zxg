<template>
<div>
    商品详情{{id}}
</div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style scoped>

</style>
