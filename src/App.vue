<template>
  <div id="app">
    <router-view />
    <div class="flex-x-center flex-y-center">
      <div class="neu box">
        Aa
      </div>
      <button class="neu button ml-5">
        Bb
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.flex-x-center{
  display: flex;
  justify-content: center;
}
.flex-y-center{
  display: flex;
  align-items: center;
}
.ml-5{
  margin-left: 10px;
}
.neu.box{
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 30px;
  font-weight: 700;
  border-radius: 4px;
}
.neu{
  background: rgb(236,235,242);
  box-shadow:  2px 2px 5px 2px rgba(0,0,0,0.1), -2px -2px 6px 2px rgba(255,255,255,1);
  text-align: center;
  background-image: -webkit-linear-gradient(left, rgb(24,92,238), #33D2E3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3 ease-in-out;
  -moz-user-select:none;
  -webkit-user-select:none;
}
.neu:hover{
  box-shadow:  1px 1px 3px 1px rgba(0,0,0,0.1), -1px -1px 3px 1px rgba(255,255,255,1);
}
.neu:active{
  box-shadow: inset 1px 1px 3px 1px rgba(0,0,0,0.1),inset -1px -1px 3px 1px rgba(255,255,255,1);
}
.neu.button{
  width: 100px;
  height: 40px;
  border-radius: 40px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
}

</style>
