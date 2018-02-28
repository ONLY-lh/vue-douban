<template>
  <div class="page">
    <nav-main></nav-main>
    <div class="selectCity">
      <span>选择城市：</span>
      <select v-model="cityChecked" @change="cityChange($event)">
        <option v-for="item in cityList" :value="item.id" :key="item.id">{{item.name}}</option>
      </select>
    </div>
    <div class="activityBox">
      <ul class="activityList">
        <li class="activityItem" v-for="item in activityList">
          <img :src="item.image" height="150" />
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <image-text title="音乐" :list="musicList"></image-text>
    <image-text title="戏剧" :list="dramaList"></image-text>
    <image-text title="聚会" :list="partyList"></image-text>
  </div>
</template>
<script>
import axios from 'axios'
import NavMain from '@/components/NavMain'
import ImageText from '@/components/ImageText'
export default {
  components: { NavMain, ImageText },
  data() {
    return {
      cityList: [],
      cityChecked: 118172,
      activityList: [],
      musicList: [],
      dramaList: [],
      partyList: []
    }
  },
  created() {
    axios.get('/api/v2/loc/list', { //城市
        params: {
          count: 10
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.cityList = res.data.locs;
        }
      })
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get('/api/v2/event/list', { //全部
          params: {
            loc: this.cityChecked
          }
        })
        .then(res => {
          console.log(res.headers['x-ratelimit-remaining2'])
          if (res.status === 200) {
            this.activityList = res.data.events;
          }
        })
      axios.get('/api/v2/event/list', { //音乐
          params: {
            loc: this.cityChecked,
            type: 'music',
            count: 3
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.musicList = res.data.events;
          }
        })
      axios.get('/api/v2/event/list', { //戏剧
          params: {
            loc: this.cityChecked,
            type: 'drama',
            count: 3
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.dramaList = res.data.events;
          }
        })
      axios.get('/api/v2/event/list', { //聚会
          params: {
            loc: this.cityChecked,
            type: 'party',
            count: 3
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.partyList = res.data.events;
          }
        })
    },
    cityChange(e) {
      this.cityChecked = e.target.value;
      this.loadData();
    }
  }
}

</script>
<style lang="scss" scoped>
.selectCity{
  margin-top: 10px;
  padding-left: 15px;
}

.activityBox{
  margin-top: 10px;
}

.activityList {
  margin-top: 10px;
  overflow-x: auto;
  white-space: nowrap;
  padding-left: 15px;
}

.activityItem {
  display: inline-block;
  p{
    width: 115px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 30px;
  }
}


</style>
