<template>
<div id="browseExpWrapper">
    <div id = "main" class="main">
        <div class="title" id="subTitle"> <h1> </h1></div>
        <div id="content" class="content" >
                <div v-for="exp in expList" :key="exp.id" class="experienceBlock"> <i class="material-icons icon icon2x" >style</i> <div> {{exp.experienceTitle}} </div> </div>
        </div>
        <div>
            <div>Aperçu de l'experience selectionnée</div>
            <div id="renderExp" class="renderExp"></div>
        </div>

    </div> 
</div>
</template>


<script>
export default {
  name: "browseExp",
  computed: {
    expList() {
      return this.$store.state.EXPData.expList;
    }
  },
  created() {
    document.addEventListener("focusin", this.focusChanged);
  },
  beforeDestroy() {
    document.removeEventListener("focusin", this.focusChanged);
  },
  methods: {
    focusChanged(event) {
      const el = event.target;
      console.log(event.target);
      // do something with the element.
    }
  }
};
</script>


<style scoped>
.main {
  z-index: 2;
  height: 100%;
  width: 90%;
  margin-left: 200px;
  padding: 0;
  text-decoration: none;
  position: relative;
  grid-gap: 30px;
}
.content {
  position: relative;
  margin-top: 150px;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 16px 16px 32px 16px rgba(0, 0, 0, 0.4);
  margin-bottom: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.experienceBlock {
  align-content: center;
  width: 100px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.4);
}
.experienceBlock:focus {
  border: 1px solid rgba(63, 65, 202, 1);
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
}
</style>
