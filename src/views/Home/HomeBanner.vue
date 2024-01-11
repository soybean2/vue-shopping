<template>
  <div>
    <!--全局组件 -->
    <AppBanner :list='list'/>
  </div>
</template>

<script>
import AppBanner from '@/components/library/AppBanner.vue'
import {ref} from 'vue'
import {banner} from '@/utils/banner.js'
export default {
    setup(props) {
        const list=ref(banner)
        console.log(list)
        return {list}
    },
    components:{
        AppBanner
    }
};
</script>

<style lang="less" scoped>
</style>