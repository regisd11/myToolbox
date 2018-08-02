<template>
<div :class="$style.wraperLoginForm">
  <form action="" id="form">
    <div :class="$style.cancel" v-on:click="setLoginActive"><i class="material-icons">clear </i></div>
    <div :class="$style.admin">
      <div :class="$style.rota">
        <h1>ADWAY</h1>
        <input id="username" type="text" name="name" value="" placeholder="email" /><br />
        <input id="password" type="password" name="pass" value="" placeholder="Password" />
      </div>
    </div>
    <div :class="$style.cms">
      <div :class="$style.roti">
        <h1>TOOLBOX</h1>
        <button id="valid" type="button" name="valid">Valid</button><br />
      </div>
    </div>
  </form>
</div><!-- /container -->
</template>
<script>
export default {
  name: "login",
  computed: {
    loginPage() {
      return this.$store.state.connexion.loginPage;
    },
    isloged() {
      return this.$store.state.connexion.loginPage;
    }
  },
  methods: {
    setLoginActive: function() {
      this.$store.dispatch("toggleLoginPage");
    }
  }
};
</script>

<style module>
.wraperLoginForm {
  background-color: #333333;
  width: 400px;
  box-shadow: 10px 5px 10px #000;
}
.cancel {
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
}
.cancel i {
  font-size: 50px;
  color: #a4a4a4;
}
.cancel i:hover {
  color: #fff;
}

.wraperLoginForm button,
.wraperLoginForm form,
.wraperLoginForm fieldset,
.wraperLoginForm input,
.wraperLoginForm textarea {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  background: transparent;
  vertical-align: baseline;
  font-size: 100%;
}
.wraperLoginForm h1,
.wraperLoginForm h2,
.wraperLoginForm h3,
.wraperLoginForm h4,
.wraperLoginForm h5,
.wraperLoginForm h6 {
  font-weight: normal;
}
.wraperLoginForm ol,
.wraperLoginForm ul {
  list-style: none;
}

.wraperLoginForm a {
  color: rgb(43, 32, 192);
  text-decoration: none;
}
.wraperLoginForm p {
  display: block;
  width: 300px;
  margin-left: -180px;
  margin-top: -5px;
}
.wraperLoginForm p a {
  color: #a4a4a4;
  font-size: 10px;
  text-decoration: none;
}
.wraperLoginForm p a:hover {
  color: rgb(43, 32, 192);
  border-bottom: 1px solid gray;
}
.wraperLoginForm #warp {
  position: relative;
  margin: 50px auto 0;
  width: 400px;
  text-align: center;
  color: white;
}
.wraperLoginForm form {
  display: block;
  width: 400px;
  height: 300px;
}
.wraperLoginForm h1 {
  color: #b6b6b6;
  font-weight: bolder;
  font-size: 60px;
}
.wraperLoginForm .admin {
  height: 280px;
  float: left;
  width: 200px;
  border-right: 1px solid #333333;
  text-align: left;
  left: 0;
  top: 0;
  transition: all 200ms ease-in 100ms;
}
.wraperLoginForm .cms {
  height: 250px;
  top: 70px;
  left: -62px;
  float: right;
  width: 150px;
  text-align: right;
  transition: all 200ms ease-in 100ms;
}
.wraperLoginForm .admin,
.wraperLoginForm .cms {
  position: relative;
  display: block;
  overflow: hidden;
  transform: rotate(25deg);
}
.wraperLoginForm .cms h1 {
  margin-left: 0px;
  color: #838385;
}
.wraperLoginForm .rota h1 {
  margin-left: -20px;
}
.wraperLoginForm .roti,
.wraperLoginForm .rota {
  position: relative;
  display: block;
  transform: rotate(-25deg);
}
.wraperLoginForm .rota {
  margin-top: 80px;
  margin-left: 35px;
}
.wraperLoginForm .roti {
  margin-top: 80px;
  margin-right: 55px;
}
.wraperLoginForm input,
.wraperLoginForm button {
  margin: 4px;
  padding: 8px 6px;
  width: 350px;
  background: white;
  color: black;
  font-size: 10px;
  transition: all 1s ease-out;
}
.wraperLoginForm button {
  margin-left: -230px;
  background: #000;
  color: white;
  text-align: right;
  cursor: pointer;
  transition: all 1s ease-out;
}
.wraperLoginForm button:hover {
  background: rgb(43, 32, 192);
  transition: all 0.3s ease-in;
}
.wraperLoginForm input:hover {
  box-shadow: inset 0 0 5px rgb(43, 32, 192);
}
.wraperLoginForm nput:focus {
  background: gray;
  color: white;
}
.wraperLoginForm .up {
  top: 100px;
  left: -60px;
}
.wraperLoginForm .down {
  top: -100px;
  left: 60px;
}
</style>
