<template>
  <div class="kindBox">
    <h2 class="kindTitle">{{title}}</h2>
    <ul class="kindList">
      <li class="kindItem" v-for="item in list">
        <div class="imageBox">
          <img class="image" :src="item.image" />
        </div>
        <div class="textBox">
          <p class="title">{{item.title}}</p>
          <p class="time">{{item.time_str}}</p>
          <p class="address">{{item.address}}</p>
          <p class="wisher">{{item.wisher_count}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['title', 'list']
}

</script>
<style scoped lang="scss">
.kindBox {}

.kindTitle {
  padding-left: 15px;
}

.kindItem {
  overflow: hidden;
  margin-bottom: 15px;
}

.imageBox {
  width: 40%;
  float: left;
  padding: 0 10px 0 15px;
  box-sizing: border-box;
  .image{
    width: 100%;
  }
}

.textBox {
  width: 60%;
  float: right;
  p{
    margin-bottom: 10px;
    padding-right: 15px;
    box-sizing: border-box;
  }
}

</style>
