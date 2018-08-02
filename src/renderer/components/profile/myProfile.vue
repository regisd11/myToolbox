<template>
<div id="wrapper">
    <div id = "editProfile" :class="$style.editProfile">
        <router-link :to="{name: 'editProfile'}" :class="$style.linkButton" > <i class="material-icons" :class="[$style.icon,$style.icon2x]" @click="handleToggle">add_circle</i></router-link>
    </div>
    <div id = "revert" :class="[$style.editProfile, $style.revert]">
        <router-link :to="{name: 'browseProfile'}" :class="$style.linkButton"> <i class="material-icons" :class="[$style.icon,$style.icon2x]" @click="handleToggle">reply</i></router-link>
    </div>
    <transition name="transition-page" mode="out-in"><router-view></router-view></transition>
</div>
</template>

<script>
export default {
  name: "myProfile",
  computed: {
    editProfile() {
      return this.$store.state.Profile.editProfilePage;
    }
  },
  methods: {
    handleToggle: function() {
      this.$store.dispatch("toggleEditProfilePage");
    }
  },
  watch: {
    editProfile: function(editProfile) {
      if (editProfile == true) {
        document.getElementById("editProfile").style.display = "none";
        document.getElementById("revert").style.display = "block";
      } else {
        document.getElementById("editProfile").style.display = "block";
        document.getElementById("revert").style.display = "none";
      }
    }
  }
};
</script>

<style module>
.editProfile {
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


