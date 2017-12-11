<template>
  <div class="nav-box">
    <h1 class="logo-box fl">
      <a href="javascript:;" class="logo-link">
        <img src="../assets/images/logo.png" width="46" />
      </a>
    </h1>
    <div class="search-box fr">
      <img src="../assets/images/search.png" width="24.5" />
    </div>
    <ul class="nav-list clearfix fr">
      <li class="nav-item fl">
        <a href="javascript:;" class="nav-item-name movie">电影</a>
      </li>
      <li class="nav-item fl">
        <a href="javascript:;" class="nav-item-name book">图书</a>
      </li>
      <li class="nav-item fl">
        <a href="javascript:;" class="nav-item-name broadcast">广播</a>
      </li>
      <li class="nav-item fl">
        <a href="javascript:;" class="nav-item-name group">小组</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {

    }
  }
}

</script>
<style scoped>
@media screen and (max-width: 650px) {
  .nav-box {
    width: 100%;
  }
}

@media screen and (min-width: 650px) {
  .nav-box {
    width: 650px;
  }
}

.nav-box {
  background-color: #fff;
  position: fixed;
  top: 0;
  height: 47px;
  padding: 0 18px;
  border-bottom: solid 1px #eee;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}


.logo-box {
  margin-top: 5px;
}

.search-box {
  margin-top: 15px;
}

.nav-list {
  line-height: 47px;
}

.nav-item {
  font-size: 15px;
  margin-right: 19px;
}

.movie {
  color: #2384E8;
}

.book {
  color: #9F7860;
}

.broadcast {
  color: #E4A813;
}

.group {
  color: #2AB8CC;
}

</style>
