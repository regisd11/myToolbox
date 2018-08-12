<template>
<div id="wrapper" class="wrapper">
    <div id = "main">
        <div class="title"> <h1> Mes dossiers de compétences </h1></div>
    </div> 
    <div id = "editDC" class="editDC">
        <router-link :to="{name: 'editDC'}" class="linkButton" > <i class="material-icons icon icon2x"  @click="handleToggle">add_circle</i></router-link>
    </div>
    <div id = "revert" class="editDC revert">
        <router-link :to="{name: 'browseDC'}" class="linkButton"> <i class="material-icons icon icon2x"  @click="handleToggle">reply</i></router-link>
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

<style scoped>
.wrapper {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  height: inherit;
  width: 100%;
}
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

.title {
  margin-left: 200px;
  text-transform: uppercase;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-column-end: -1;
  color: #2c2c2c;
  justify-self: center;
}

.title h1 {
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  font-size: 2.5em;
  font-weight: bold;
  line-height: 2.5em;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
}
</style>

