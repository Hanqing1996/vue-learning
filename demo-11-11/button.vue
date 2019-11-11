<template>
    <button><slot></slot></button>
</template>
<script>
    export default {
        name:"Button",
        data(){
            return {
                message:'hihi'
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>