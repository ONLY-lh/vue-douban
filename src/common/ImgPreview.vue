<template>
  <div class="bg" v-show="show">
    <img class="image" :src="url" />
    <div class="bottom">
      <button class="clockwise" @click="rotate_clockwise">顺时针</button>
      <button class="anticlockwise" @click="rotate_anticlockwise">逆时针</button>
      <button class="close" @click="image_hide">关闭</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImgPreview',
  props: ['url', 'show', 'angle_p'],
  data() {
    return {
      angle: 0
    }
  },
  mounted() {
    var image = document.querySelector('.image');
    this.set_center(image);
    this.drag(image);
    this.zoom_targetPoint(image);
  },
  methods: {
    // 让图片水平垂直居中
    set_center(obj) {
      obj.onload = function() {
        var original_w = this.width,
          original_h = this.height,
          bottom_h = document.querySelector('.bottom').offsetHeight;
        this.style.position = 'absolute';
        this.style.left = '50%';
        this.style.top = '50%';
        this.style.marginLeft = -original_w / 2 + 'px';
        this.style.marginTop = -(original_h + bottom_h) / 2 + 'px';
      }
    },
    // 图片拖拽
    drag(obj) {
      obj.onmousedown = function(e) {
        var e = e || event,
          disX = e.clientX - this.offsetLeft,
          disY = e.clientY - this.offsetTop;
        document.onmousemove = function(e) {
          var e = e || event;
          obj.style.left = e.clientX - disX + 'px';
          obj.style.top = e.clientY - disY + 'px';
          obj.style.marginLeft = 0;
          obj.style.marginTop = 0;
        }
        document.onmouseup = function(e) {
          var e = e || event;
          document.onmousemove = document.onmousedown = null;
        }
        return false;
      }
    },
    // 图片缩放（中心点）
    zoom_centralPoint(obj) {
      var _event = this.getBrowserType() === 'FF' ? 'DOMMouseScroll' : 'mousewheel',
        isFF = this.getBrowserType() === 'FF' ? true : false;
      obj.addEventListener(_event, function(e) {
        var e = e || window.event,
          centralPoint_x = this.offsetLeft + this.width / 2,
          centralPoint_y = this.offsetTop + this.height / 2;
        if (!isFF && e.wheelDelta > 0 || isFF && e.detail < 0) { //向上滚
          this.style.width = this.width * 1.1 + 'px';
        } else { //向下滚
          this.style.width = this.width / 1.1 + 'px';
        }
        this.style.left = centralPoint_x - this.width / 2 + 'px';
        this.style.top = centralPoint_y - this.height / 2 + 'px';
        this.style.marginLeft = 0;
        this.style.marginTop = 0;
      });
    },
    // 图片缩放（目标点）
    zoom_targetPoint(obj) {
      var _event = this.getBrowserType() === 'FF' ? 'DOMMouseScroll' : 'mousewheel',
        isFF = this.getBrowserType() === 'FF' ? true : false;
      obj.addEventListener(_event, function(e) {
        var e = e || window.event,
          client_x = e.clientX,
          client_y = e.clientY,
          targetPoint_x = client_x - this.offsetLeft,
          targetPoint_y = client_y - this.offsetTop,
          targetPointRatio_x = targetPoint_x / this.width,
          targetPointRatio_y = targetPoint_y / this.height;
        if (!isFF && e.wheelDelta > 0 || isFF && e.detail < 0) { //向上滚放大
          this.style.width = this.width * 1.1 + 'px';
        } else { //向下滚缩小
          this.style.width = this.width / 1.1 + 'px';
        }
        this.style.left = client_x - (targetPointRatio_x * this.width) + 'px';
        this.style.top = client_y - (targetPointRatio_y * this.height) + 'px';
        this.style.marginLeft = 0;
        this.style.marginTop = 0;
      });
    },
    // 图片顺时针旋转
    rotate_clockwise() {
      this.angle += 90;
      this.$emit('letAngleIncrease');
      document.querySelector('.image').style.transform = 'rotate(' + this.angle + 'deg)';
    },
    // 图片逆时针旋转
    rotate_anticlockwise() {
      this.angle -= 90;
      this.$emit('letAngleDecrease');
      document.querySelector('.image').style.transform = 'rotate(' + this.angle + 'deg)';
    },
    // 判断浏览器类型
    getBrowserType() {
      var userAgent = window.navigator.userAgent;
      if (userAgent.indexOf('Opera') > -1) {
        return 'Opera';
      }
      if (userAgent.indexOf('Firefox') > -1) {
        return 'FF';
      }
      if (userAgent.indexOf('Chrome') > -1) {
        return 'Chrome';
      }
      if (userAgent.indexOf('Safari') > -1) {
        return 'Safari';
      }
      if (userAgent.indexOf('MSIE') > -1) {
        return 'IE';
      }
    },
    // 关闭图片预览
    image_hide() {
      this.angle = 0;
      this.$emit('letImageHide', '关闭大图');
    }
  }
}

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.bg {
  width: 100%;
  height: 100%;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
}

.bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: rgba(255, 255, 255, .2);
  text-align: center;
  padding: 15px 0;
}

.clockwise,
.anticlockwise,
.close {
  display: inline-block;
  padding: 5px;
  cursor: pointer;
}

</style>
