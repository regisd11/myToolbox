<template>
<div id="wrapper">
    <div id = "main">
        <div :class="$style.title"> <h1> <em> Mes dossiers de compétences </em> </h1></div>
    </div> 
    <div id = "editDC" :class="$style.editDC">
        <router-link :to="{name: 'editDC'}" :class="$style.linkButton" > <i class="material-icons" :class="[$style.icon,$style.icon2x]" @click="handleToggle">add_circle</i></router-link>
    </div>
    <div id = "revert" :class="[$style.editDC, $style.revert]">
        <router-link :to="{name: 'browseDC'}" :class="$style.linkButton"> <i class="material-icons" :class="[$style.icon,$style.icon2x]" @click="handleToggle">reply</i></router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "myDC",
  computed: {
    editDcPage() {
      return this.$store.state.DC.editDcPage;
    }
  },
  methods: {
    handleToggle: function() {
      this.$store.dispatch("toggleEditDCPage");
    }
  },
  watch: {
    editDcPage: function(editDcPage) {
      if (editDcPage == true) {
        document.getElementById("editDC").style.display = "block";
        document.getElementById("revert").style.display = "none";
      } else {
        document.getElementById("editDC").style.display = "none";
        document.getElementById("revert").style.display = "block";
      }
    }
  }
};
</script>

<style module>
.editDC {
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
  height: auto;
  text-align: center;
  vertical-align: middle;
  font-size: 50px;
  transition: font-size 300ms linear;
}
.icon:hover {
  font-size: 60px;
}
</style>

