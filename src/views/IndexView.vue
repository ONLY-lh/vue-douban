<template>
  <div class="page">
    <nav-main></nav-main>
    <div>
      <ul class="quicknav-list clearfix">
        <li class="quicknav-item fl">
          <a href="javascript:;">影院热映</a>
        </li>
        <li class="quicknav-item fl">
          <a href="javascript:;">日韩新碟榜</a>
        </li>
        <li class="quicknav-item fl">
          <a href="javascript:;">豆瓣时间</a>
        </li>
        <li class="quicknav-item fl">
          <a href="javascript:;">使用豆瓣App</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import NavMain from '@/components/NavMain'
import { fetch_get } from '@/config/api'
export default {
  name: 'Index',
  components: { NavMain },
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>
<style scoped>
.quicknav-list {
  margin-top: 20px;
}

.quicknav-item {
  width: 50%;
  padding: 3px;
  font-size: 15px;
  box-sizing: border-box;
  text-align: center;
}

.quicknav-item>a {
  background-color: #f6f6f6;
  padding: 12px 0;
  display: block;
  color: #494949;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

</style>
