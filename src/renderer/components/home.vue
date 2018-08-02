<template>
  <div :class="$style.wrapper">
    <div :class="[$style.grid, $style.main]">
        <div :class="$style.logo" ><img :class="$style.logo" v-bind:src="AdwayImageUrl"></div>
        <div :class="$style.welcome">Bienvenue</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    AdwayImageUrl: "static/imgs/Adway.jpg",
    appLogoUrl: "static/imgs/appLogo2.svg"
  }),
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>



<style module>
.wrapper {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main {
  z-index: 2;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: Arial;
  text-transform: uppercase;
  text-decoration: none;
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
.appLogoContainer {
  grid-row-start: 1;
  justify-self: flex-start;
  height: 70px;
  width: 100%;
  padding: 20px;
  align-items: center;
}
.appLogo {
  font-size: 70px;
  height: 70px;
  width: 70px;
}
.appLogoText {
  font-size: 30px;
  font-family: Arial;
  width: auto;
  height: 70px;
  margin-left: 30px;
  line-height: 70px;
  align-items: center;
}

.logo {
  grid-row-start: 2;
  justify-self: center;
  align-self: center;
  height: 370px;
  width: 370px;
  border-radius: 50%;
}
.welcome {
  font-size: 2em;
  font-weight: 700;
  justify-self: center;
  align-self: center;
  color: #000;
}

div > span {
  position: static;
  display: inline-block;
  width: 200px;
  height: 200px;
}

.modules {
  justify-self: center;
  align-self: center;
}
.REX {
  cursor: pointer;
  border: 2px solid;
  padding: 40px;
  margin: 20px;
  z-index: 1;
  color: #ff3300;
  border-color: #ff3300;
  transition: 300ms ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 24px;
  position: absolute;
  overflow: hidden;
}

.REX:before {
  content: "";
  position: absolute;
  top: 0;
  background: #ff3300;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: 300ms ease-in-out;
  z-index: -1;
}
.REX:hover:before {
  left: 0;
  z-index: -1;
}
.REX:hover {
  color: #fff;
  font: bold;
}

.DC {
  cursor: pointer;
  border: 2px solid;
  padding: 40px;
  margin: 20px;
  z-index: 1;
  color: #66ff33;
  border-color: #66ff33;
  transition: 300ms ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 24px;
  position: absolute;
  overflow: hidden;
}

.DC:before {
  content: "";
  position: absolute;
  top: 0;
  background: #66ff33;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: 300ms ease-in-out;
  z-index: -1;
}
.DC:hover:before {
  left: 0;
  z-index: -1;
}
.DC:hover {
  color: #fff;
  font: bold;
}

.geoloc {
  cursor: pointer;
  border: 2px solid;
  padding: 40px;
  margin: 20px;
  z-index: 0;
  color: #ddd604;
  border-color: #ddd604;
  transition: 300ms ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 24px;
  position: absolute;
  overflow: hidden;
}

.geoloc:before {
  content: "";
  position: absolute;
  top: 0;
  background: #ddd604;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: 300ms ease-in-out;
  z-index: -1;
}
.geoloc:hover:before {
  left: 0;
  z-index: -1;
}
.geoloc:hover {
  color: #fff;
  font: bold;
}
</style>