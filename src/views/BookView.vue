<template>
  <div class="page">
    <nav-main></nav-main>
    <div class="content">
      <scroller type="book" title="前端书籍 | JavaScript" :items="jsList"></scroller>
      <scroller type="book" title="后端书籍 | Python" :items="pList"></scroller>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import NavMain from '@/components/NavMain'
import Scroller from '@/components/Scroller'
export default {
  components: { NavMain, Scroller },
  data() {
    return {
      jsList: [],
      pList: []
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios.get('/api/v2/book/search?tag=javascript', {
          params: {
            count: 8
          }
        })
        .then(res => {
          this.jsList = res.data.books;
        })

      axios.get('/api/v2/book/search?tag=python', {
          params: {
            count: 8
          }
        })
        .then(res => {
          this.pList = res.data.books;
        })
    }
  }
}

</script>
<style scoped>


</style>
