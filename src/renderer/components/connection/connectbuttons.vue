<template>
<div id="connexion" :class="$style.connexion">
 <div id="wrapperButton" :class="$style.wrapper" >
    <div id="mainButton" :class="[$style.button,$style.mainButton]" v-on:click ="appear" >
      <i class="material-icons" :class="[$style.icon , $style.icon2x]">account_circle</i>
    </div>
    <ul id="subButtons" :class="$style.subButtons">
    <li id="loginButton" :class="[$style.button,$style.loginButton, $style.subButton]" v-on:click="setLoginActive">
      <i class="material-icons" :class="[$style.icon , $style.icon2x]">account_circle</i>
    </li>
    <li id="registerButton" :class="[$style.button,$style.registerButton, $style.subButton]">
      <img :class="[$style.icon , $style.icon2x, $style.iconSvg]" v-bind:src="registerImgUrl">
    </li>
    <li id="logoutButton" :class="[$style.button,$style.logoutButton, $style.subButton]" v-on:click="disconnect">
      <!--<i class="material-icons" :class="[$style.icon , $style.icon2x,$style.hoverButton]">block</i>-->
      <img :class="[$style.icon , $style.icon2x, $style.iconSvg, $style.logoutButton]" v-bind:src="logoutImgUrl">
    </li>
    </ul>  
  </div>
  <div id="blurring" :class="$style.blurring"></div>
  <login id="login" :class="$style.logincard"></login>
</div>
</template>

<script>
import { tweenMax } from "gsap";
import login from "./login";
export default {
  name: "connectbuttons",
  components: { login },
  mounted() {
    let subButtons = document.getElementById("subButtons");
    subButtons.style.height = 0;
  },
  data: () => ({
    open: false,
    logoutImgUrl: "static/imgs/logout.svg",
    registerImgUrl: "static/imgs/register.svg"
  }),
  methods: {
    appear: function() {
      let tl = new TimelineMax();
      let subButtons = document.getElementById("subButtons");
      if (this.open == false) {
        tl
          .to(subButtons, 0.1, { height: 200 })
          .staggerTo(
            [
              document.getElementById("loginButton"),
              document.getElementById("registerButton"),
              document.getElementById("logoutButton")
            ],
            0.3,
            { opacity: 1, scale: 1, top: 0 },
            0.1
          );
      } else {
        tl
          .staggerTo(
            [
              document.getElementById("logoutButton"),
              document.getElementById("registerButton"),
              document.getElementById("loginButton")
            ],
            0.3,
            { opacity: 0, scale: 0.5, top: 0 },
            0.1
          )
          .to(subButtons, 0.3, { height: 0 });
      }
      this.open = !this.open;
    },
    disapper: function() {
      let tl = new TimelineMax();
      let subButtons = document.getElementById("subButtons");
    },
    setLoginActive: function() {
      this.$store.dispatch("toggleLoginPage");
    },
    disconnect: function() {
      console.log("disconnect");
    }
  },
  computed: {
    loginPage() {
      return this.$store.state.connexion.loginPage;
    },
    isloged() {
      return this.$store.state.connexion.loginPage;
    }
  },
  watch: {
    loginPage: function(loginPage) {
      let tl = new TimelineMax();
      let blur = document.getElementById("blurring");
      let loginCard = document.getElementById("login");

      if (loginPage == true) {
        blur.style.display = "block";
        loginCard.style.display = "block";
        tl.to(blur, 1, { opacity: 0.5 });
        tl.to(loginCard, 1, { opacity: 1 }, "-=0.5");
      } else {
        tl.to(loginCard, 1, { opacity: 0 });
        tl.to(blur, 1, { opacity: 0 }, "-=0.5");
        blur.style.display = "none";
        loginCard.style.display = "none";
      }
    },
    isloged: function(isloged) {}
  }
};
</script>

<style module>
.connexion {
  position: fixed;
  z-index: 1000;
  right: 2em;
  top: 0.5em;
  width: 200px;
  height: 200px;
}
.iconSvg {
  width: auto;
  height: 38px;
}
.icon {
  position: relative;
  text-align: center;
  vertical-align: middle;
  font-size: 50px;
}
.wrapper {
  z-index: 1000;
  position: fixed;
  right: 4rem;
  top: 1rem;
  height: 200px;
  width: 50px;
  margin: 0;
  padding: 0;
}
.button {
  text-decoration: none;
  list-style: none;
}

.mainButton {
  position: relative;
  text-align: center;
  vertical-align: middle;
  color: #2541b2;
  cursor: pointer;
}
.subButtons li {
  margin-bottom: 5px;
  opacity: 0;
}

.subButtons {
  position: relative;
  text-align: center;
  vertical-align: middle;
  padding-left: 0;
  margin: 0;
  border-radius: 0% 0% 30px 30px;
  overflow: hidden;
  height: 0;
}

.loginButton {
  color: forestgreen;
}
.registerButton {
  color: #63326e;
}
.logoutButton {
  color: darkred;
}
.subButton {
  padding: 0;
  padding-top: -30px;
  margin: 0;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  transition: all 300ms linear;
}

.subButton:hover {
  font-size: 50px * 120%;
}

.blurring {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
  filter: blur(30px);
  background-color: black;
  opacity: 0;
}

.logincard {
  display: none;
  z-index: 5000;
  position: fixed;
  top: 50vh;
  height: 300px;
  transform: translateY(-50%);
  left: 50vw;
  transform: translateX(-50%);
  opacity: 0;
}
</style>
