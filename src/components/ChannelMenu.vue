<template>
  <div class="channel-menu">
    <div class="weui-panel">
    <div class="weui-navbar" style="position:static">
    <div class="weui-navbar__item" v-for="(item,$index) in channel" :class="{'weui-bar__item_on': $index === isActive}" @click="cutOff($index)">
      {{item.channel_name}}
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import { bus } from '../bus.js'
export default {
  name: 'channelmenu',
  data () {
    return {
      isActive: 0,
      channel: []
    }
  },
  created () {
    this.getLists()
  },
  methods: {
    cutOff: function (index) {
      this.isActive = index
      bus.$emit('tip', index)
    },
    getLists: function () {
      this.$http.post('/api/channel/list', {}).then((response) => {
        this.channel = response.body
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page, body{
  background:#fff;
}
.weui-panel{
  overflow:auto;
}
.weui-navbar{
  background:#ebebeb;
}
.weui-navbar__item{
  padding:13px 10px 13px;
  font-size:16px;
  white-space:nowrap;
  background:#ebebeb;
  cursor:pointer;
}
.weui-navbar__item:after{
  border-right:none;
}
.weui-navbar__item.weui-bar__item_on{
  color:rgb(244, 67, 54);
}
</style>
