<template>
  <div class="rating-box">
    <div class="rating" v-if="average<2">
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <span>{{average}}</span>
    </div>
    <div class="rating" v-else-if="average>=2 && average<4">
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <span>{{average}}</span>
    </div>
    <div class="rating" v-else-if="average>=4 && average<6">
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <span>{{average}}</span>
    </div>
    <div class="rating" v-else-if="average>=6 && average<8">
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-gray.png" />
      <img src="../assets/images/star-gray.png" />
      <span>{{average}}</span>
    </div>
    <div class="rating" v-else-if="average>=8 && average<10">
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-gray.png" />
      <span>{{average}}</span>
    </div>
    <div class="rating" v-else>
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <img src="../assets/images/star-yellow.png" />
      <span>{{average}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['average']
}

</script>
<style scoped>
.rating>img {
  width: 10px;
}

</style>
