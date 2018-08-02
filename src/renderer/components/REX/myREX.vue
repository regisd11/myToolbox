<template>
<div id="wrapper">
    <div id = "main">
        <h1>Mes retours d'expérience</h1>
    </div> 
    <div id = "editREX" :class="$style.editREX">
        <router-link :to="{name: 'editREX'}" :class="$style.linkButton" > <i class="material-icons" :class="[$style.icon,$style.icon2x]" @click="handleToggle">add_circle</i></router-link>
    </div>
    <div id = "revert" :class="[$style.editREX, $style.revert]">
        <router-link :to="{name: 'browseREX'}" :class="$style.linkButton"> <i class="material-icons" :class="[$style.icon,$style.icon2x]" @click="handleToggle">reply</i></router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "myRex",
  computed: {
    editRexPage() {
      return this.$store.state.REX.editRexPage;
    }
  },
  methods: {
    handleToggle: function() {
      this.$store.dispatch("toggleEditRexPage");
    }
  },
  watch: {
    editRexPage: function(editRexPage) {
      if (editRexPage == true) {
        document.getElementById("editREX").style.display = "none";
        document.getElementById("revert").style.display = "block";
      } else {
        document.getElementById("editREX").style.display = "block";
        document.getElementById("revert").style.display = "none";
      }
    }
  }
};
</script>

<style module>
.editREX {
  z-index: 500;
  position: fixed;
  bottom: 3em;
  right: 4em;
  height: 50px;
  width: 50px;
  display: block;
}
.revert {
  display: none;
}
.linkButton {
  position: relative;
  height: 50px;
  width: 50px;
  text-decoration: none;
}
.icon2x {
  font-size: 2em;
}
.icon {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 50px;
  color: red;
  transition: font-size 300ms linear;
}
.icon:hover {
  font-size: 60px;
}
</style>

