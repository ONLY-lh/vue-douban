<template>
  <div class="movie-scroller-box">
    <header class="title-box clearfix">
      <h2 class="title-text fl">{{title}}</h2>
      <a href="javascript:;" class="title-more fr">更多</a>
    </header>
    <div class="movie-box">
      <ul class="movie-list">
        <li class="movie-item" v-for="item in items">
          <img :src="item.images.small" :alt="item.alt" height="150" />
          <p class="movie-item-title">{{item.title}}</p>
          <rating :average="item.rating.average"></rating>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Rating from './Rating'
export default {
  name: 'MovieScroller',
  props: ['title', 'items'],
  components: { Rating },
  data() {
    return {

    }
  }
}

</script>
<style scoped>
.movie-scroller-box {
  margin-top: 5px;
}

.title-box {
  height: 50px;
  line-height: 50px;
}

.title-text {
  line-height: 50px;
}

.movie-list {
  overflow-x: auto;
  white-space: nowrap;
}

.movie-item {
  display: inline-block;
  margin-right: 8px;
  text-align: center;
}

.movie-item-title {
  font-size: 16px;
  margin-top: 5px;
}

</style>
