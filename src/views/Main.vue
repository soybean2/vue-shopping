<template>
  <AppTopNav/>
  <Header/>
  <Content :goods="goods"/>
  <Footer/>
</template>

<script>
import AppTopNav from '@/components/AppTopNav.vue'
import AppHeaderNav from '@/components/AppHeaderNav.vue'
import Footer from '@/components/Footer.vue'
import {useRoute} from "vue-router";
import {ref} from "vue";
import Content from "@/components/Content.vue";
import axios from "axios";
import Header from "@/components/Header.vue";
import { watch } from 'vue';
export default {

  components: {
    Header,
    Content,
    AppHeaderNav,
    Footer,
    AppTopNav
  },
  setup() {
    const route = useRoute();
    const keyword = ref(route.query.keyword);
    console.log(keyword.value)

    const goods = ref([]);
    // https://you.163.com/xhr/search/search.json?keyword=${keyword.value}
    axios.get(`/xhr/search/search.json?keyword=${keyword.value}`)
        .then(response => {
          goods.value = response.data.data.directly.searcherResult.result;
        })
        .catch(error => {
          console.error(error);
        });
    watch(() => route.query, (newQuery, oldQuery) => {
      axios.get(`/xhr/search/search.json?keyword=${newQuery.keyword}`)
          .then(response => {
            goods.value = response.data.data.directly.searcherResult.result;
          })
          .catch(error => {
            console.error(error);
          });
    });
    return {keyword,goods};
  }

}
</script>

<style>

</style>