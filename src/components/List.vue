<template>
  <div class="list">
    <div>{{tip}}</div>
    <a href="" class="weui-media-box weui-media-box_appmsg"  v-for="item in listData">
      <div class="weui-media-box__hd">
      </div>
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title">{{item.title}}</h4>
        <p class="weui-media-box__desc">{{item.genres}}</p>
        <p class="weui-media-box__time">{{item.subtype}}</p>
      </div>
    </a>
  </div>
</template>

<script>
  import { bus } from '../bus.js'
  export default {
    name: 'list',
    data () {
      return {
        list: [{
          imgs: './assets/images/logo.png',
          title: 'Jack',
          desc: 'Jack',
          time: 'Jack'
        }, {
          imgs: './assets/images/logo.png',
          title: 'Jack',
          desc: 'Jack',
          time: 'Jack'
        }],
        listData: [],
        tip: '0'
      }
    },
    created () {
      bus.$on('tip', (text) => {
        this.tip = text
        this.getLists(text)
      })
    },
    methods: {
      getLists: function (id) {
        this.$http.post('/api/channel/' + id, {}).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>
