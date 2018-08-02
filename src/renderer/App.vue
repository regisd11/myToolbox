<template>
  <div id="app">
    <div :class="$style.appLogoContainer"><img :class="$style.appLogo" v-bind:src="appLogoUrl"></div>
    <transition name="component-fade" mode="out-in">
      <connectbuttons />
    </transition>
    <transition name="component-fade" mode="out-in">
      <sidebar />
    </transition>
    <transition name="component-fade" mode="out-in">
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

<style module>
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
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active avant la 2.1.8 */ {
  opacity: 0;
}
</style>
