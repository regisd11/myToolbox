<template>
<div id="browseExpWrapper">
    <div id = "main" class="main">
        <div class="title" id="subTitle"> <h1> </h1></div>
        <div id="content" class="content" >
                <div v-for="exp in expList" :key="exp.id" class="experienceBlock"> 
                  <router-link class="links" :to="{name: 'renderExp', params:{id:exp._id}}">
                  <i class="material-icons icon icon2x" >style</i> 
                  <div> 
                    <ul>
                      <li>Client: {{exp.client}}</li>
                      <li>Nom: {{exp.experienceName}}</li>
                      <li>date de la dernière modification : {{exp.updatedAt}}</li>
                    </ul>  
                    </div>
                  </router-link> 
                </div>
        </div>
        <div id="render" class="render">
            <div id = "renderTitle" class="renderTitle">Aperçu de l'experience selectionnée</div>
            <div class="renderBox">
              <transition name="fadeLeftSlide">
                <router-view :key="$route.fullPath"></router-view>
              </transition>
            </div>
        </div>
    </div> 
</div>
</template>


<script>
export default {
  name: "browseExp",
  data: () => ({
    selectedId: ""
  }),
  mounted() {
    this.$store.dispatch("populateExpStoreAct");
  },
  computed: {
    expList() {
      return this.$store.state.EXPData.expList;
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
}
.content {
  position: relative;
  margin-top: 150px;
  width: 90%;
  margin-bottom: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.experienceBlock {
  display: flex;
  align-content: center;
  width: auto;
  padding: 5px;
  margin-left: 15px;
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.4);
}
.links {
  text-decoration: none;
  color: #000;
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

.render {
  position: relative;
  width: 90%;
}

.renderBox {
  background-color: grey;
}
.renderTitle {
  margin-bottom: 30px;
}
.fadeLeftSlide-enter-active {
  transition: all 0.3s ease;
}
.fadeLeftSlide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fadeLeftSlide-enter, .fadeLeftSlide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
