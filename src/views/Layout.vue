<template >
    <AppTopNav />

    <Header />
    <div class="main">
        <router-view />
    </div>

    <Footer/>
</template>
<script>
import AppTopNav from '@/components/AppTopNav.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        AppTopNav,
        Header,
        Footer
    }
    
}
</script>
<style lang="less">
    
</style>