<template>
  <div id="app">
    <div class="appLogoContainer"><img class="appLogo" v-bind:src="appLogoUrl"></div>

      <connectbuttons />
      <sidebar />

    <transition name="router-anim" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/sidebar";
import connectbuttons from "./components/connection/connectbuttons";

export default {
  name: "adwaytoolbox",
  data: () => ({
    view: "v-a",
    appLogoUrl: "static/imgs/appLogo2.svg"
  }),
  components: {
    Sidebar,
    connectbuttons
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>

<style scoped>
/*
* — logo —
*/

.appLogoContainer {
  position: fixed;
  height: 120px;
  left: 2em;
  top: 2em;
}
.appLogo {
  width: 120px;
  height: auto;
}
/*
* — transitions —
*/
.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-30px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
