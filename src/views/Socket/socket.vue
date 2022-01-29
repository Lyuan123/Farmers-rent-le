<template>
  <div id="app">
    <choose-user ></choose-user>
  </div>
</template>

<script>
import ChooseUser from './components/chooseUser.vue'
export default {
  name: 'App',
  components: {
    ChooseUser,
  }
}
</script>

<style >
*{
  margin:0;
  padding:0;
}

</style>
