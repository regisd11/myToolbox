<template>
<div id="wrapper">
    <div id = "main" class="main">
      <div :class="$style.title"> <h1> Mes expériences </h1></div>
    </div> 
    <div id = "newEXP" :class="$style.newEXP">
        <router-link :to="{name: 'newEXP'}" :class="$style.linkButton" > <i class="material-icons" :class="[$style.icon,$style.icon2x]" @click="handleToggle">add_circle</i></router-link>
    </div>
    <div id = "revert" :class="[$style.newEXP, $style.revert]">
        <router-link :to="{name: 'browseEXP'}" :class="$style.linkButton"> <i class="material-icons" :class="[$style.icon,$style.icon2x]" @click="handleToggle">reply</i></router-link>
    </div>
    <div id = "editEXP" :class="[$style.newEXP,$style.editEXP]">
        <router-link :to="{name: 'editEXP'}" :class="$style.linkButton"> <i class="material-icons" :class="[$style.icon,$style.icon2x]" @click="handleToggle">edit</i></router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "myEXP",
  /*mounted() {
    this.$store.dispatch("populateExpStoreAct", this.$db.exps);
  },*/
  mounted() {
    this.$store.dispatch("populateExpStoreAct");
  },
  computed: {
    editExpPage() {
      return this.$store.state.EXP.editExpPage;
    },
    newExpPage() {
      return this.$store.state.EXP.newExpPage;
    }
  },
  methods: {
    handleToggle: function() {
      this.$store.dispatch("toggleNewExpPage");
    },
    populate: function() {
      this.$store.dispatch("populateExpStoreAct");
    }
  },
  watch: {
    newExpPage: function(newExpPage, editExpPage) {
      if (newExpPage == true) {
        document.getElementById("newEXP").style.display = "none";
        document.getElementById("revert").style.display = "block";
      } else if (editExpPage == true) {
        document.getElementById("newEXP").style.display = "block";
        document.getElementById("revert").style.display = "none";
      } else {
        document.getElementById("newEXP").style.display = "block";
        document.getElementById("revert").style.display = "none";
      }
    }
  }
};
</script>

<style module>
.newEXP {
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
.editEXP {
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


