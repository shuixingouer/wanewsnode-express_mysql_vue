<template>
  <div class="home">
    <channel-menu></channel-menu>
    <list></list>
  </div>
</template>

<script>
import list from './List'
import channelMenu from './ChannelMenu'
export default {
  name: 'home',
  components: {
    channelMenu,
    list
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
