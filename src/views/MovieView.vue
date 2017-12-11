<template>
  <div class="page">
    <nav-main></nav-main>
    <div class="content">
      <movie-scroller title="影院热映" :items="hotList"></movie-scroller>
      <movie-scroller title="即将上映" :items="soonList"></movie-scroller>
      <movie-scroller title="Top250" :items="topList"></movie-scroller>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import NavMain from '@/components/NavMain'
import Rating from '@/components/Rating'
import MovieScroller from '@/components/MovieScroller'
export default {
  name: 'Movie',
  components: { NavMain, MovieScroller, Rating },
  data() {
    return {
      hotList: [],
      soonList: [],
      topList: []
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
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

    }
  }
}

</script>
<style scoped>


</style>
