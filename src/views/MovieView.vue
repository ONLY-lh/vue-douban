<template>
  <div class="page">
    <nav-main></nav-main>
    <div class="content">
      <scroller type="movie" title="影院热映" :items="hotList"></scroller>
      <scroller type="movie" title="即将上映" :items="soonList"></scroller>
      <scroller type="movie" title="Top250" :items="topList"></scroller>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import NavMain from '@/components/NavMain'
import Rating from '@/components/Rating'
import Scroller from '@/components/Scroller'
export default {
  components: { NavMain, Scroller, Rating },
  data() {
    return {
      hotList: [],
      soonList: [],
      topList: []
    }
  },
  created() {
    axios.get('/api/v2/movie/in_theaters', { //影院热映
        params: {
          count: 8
        }
      })
      .then(res => {
        this.hotList = res.data.subjects;
      })
    axios.get('/api/v2/movie/coming_soon', { //即将上映
        params: {
          count: 8
        }
      })
      .then(res => {
        this.soonList = res.data.subjects;
      })
    axios.get('/api/v2/movie/top250', { //Top250
        params: {
          count: 8
        }
      })
      .then(res => {
        this.topList = res.data.subjects;
      })
  },
  methods: {

  }
}

</script>
<style scoped>


</style>
