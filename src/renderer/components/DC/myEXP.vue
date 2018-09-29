<template>
<div id="wrapper">
    <div id = "main" class="main">
      <div class="title"> <h1> Mes expériences </h1></div>
    </div> 
    <div v-if="editExpPage" id = "revert" class="newEXP revert">
        <router-link :to="{name: 'browseEXP'}" class="linkButton"> <i class="material-icons icon icon2x" @click="handleToggle">reply</i></router-link>
    </div>
    <div v-else id = "newEXP" class="newEXP">
        <router-link :to="{name: 'editEXP', params:{id:0}}" class="linkButton" > <i class="material-icons icon icon2x" @click="handleToggle">add_circle</i></router-link>
    </div>
  
    <div class="page">
    <transition name="router-anim">
      <router-view></router-view>
    </transition>
    </div>
</div>
</template>

<script>
export default {
  name: "myEXP",
  computed: {
    editExpPage() {
      return this.$store.state.EXP.editExpPage;
    }
  },
  methods: {
    handleToggle: function() {
      this.$store.dispatch("toggleEditExpPage");
    }
  }
};
</script>

<style scoped>
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
  display: block;
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


