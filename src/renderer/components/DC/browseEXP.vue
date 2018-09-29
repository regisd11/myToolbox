<template>
<div id="browseExpWrapper">
    <div id = "main" class="main">
        <div class="title" id="subTitle"> <h1> </h1></div>
        <div id="content" class="content" >
          <div class="experienceBox">
            <div v-for="exp in expList" :key="exp.id" class="experienceBlock"> 
              <div id="ExpInfo" class="expInfo">
                <i class="material-icons icon icon2x" >style</i> 
                <div> 
                  <ul>
                    <li>Client: {{exp.client}}</li>
                    <li class = "experienceName">Nom: {{exp.experienceName}}</li>
                    <li>date de la dernière modification : {{exp.updatedAt}}</li>
                  </ul>  
                </div>
                <div id="expandCardBox" class="expandCardBox" @click="expand"><i class="material-icons">expand_more</i></div>
              </div>
              <div class="cardActionButtons">
                <router-link :to="{name: 'editEXP', params:{id:exp._id}}" class="linkButton button edit" v-on:click="handleToggle">Editer</router-link>
                <router-link :to="{name: 'renderExp', params:{id:exp._id}}" class="linkButton button visualise">visualiser </router-link>
                <a class="linkButton button delete" @click="deleteExp(exp.experienceName, exp._id)">Supprimer</a>
              </div>  
            </div>
          </div>
        </div>
        <div id="render" class="render">
            <div id = "renderTitle" class="renderTitle">Aperçu de l'experience selectionnée</div>
            <div class="renderBox">
              <transition name="ExpCard">
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
  },
  methods: {
    handleToggle: function() {
      this.$store.dispatch("toggleEditExpPage");
    },
    expand: function(event) {
      let e = event.target.parentNode.parentNode.parentNode;
      if (e.classList.contains("expanded") != true) {
        e.getElementsByClassName("Icon").fontSize = "60px";
        let htmlCollectionArray = e.getElementsByTagName("li");
        [].forEach.call(htmlCollectionArray, function(el, i) {
          el.style.display = "list-item";
        });
        htmlCollectionArray = e.getElementsByClassName("cardActionButtons");
        [].forEach.call(htmlCollectionArray, function(el, i) {
          el.style.display = "flex";
        });
        e.classList.toggle("expanded");
      } else {
        e.classList.toggle("expanded");
        e.getElementsByClassName("Icon").fontSize = "40px";
        let htmlCollectionArray = e.getElementsByTagName("li");
        [].forEach.call(htmlCollectionArray, function(el, i) {
          el.style.display = "none";
        });
        htmlCollectionArray = e.getElementsByClassName("cardActionButtons");
        [].forEach.call(htmlCollectionArray, function(el, i) {
          el.style.display = "none";
        });
        htmlCollectionArray = e.getElementsByClassName("experienceName");
        [].forEach.call(htmlCollectionArray, function(el, i) {
          el.style.display = "list-item";
        });
      }
    },
    deleteExp: function(experienceName, expId) {
      var answer = confirm(
        "Supprimer l'experience" + ' "' + experienceName + '" ' + "data?"
      );
      if (answer) {
        this.$store.dispatch("removeExp", expId);
        this.$store.dispatch("populateExpStoreAct");
      }
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
  float: left;
  margin-top: 150px;
  width: 50%;
  margin-bottom: 50px;
}

.experienceBox {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  max-height: 600px;
  width: 80%;
  overflow: auto;
}

.experienceBlock {
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  width: 500px;
  padding: 5px;
  margin-bottom: 20px;
  margin-left: 15px;
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.4);
}
.expInfo {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.expandCardBox {
  transition: all 0.1s linear;
  cursor: pointer;
}

.cardActionButtons {
  display: none;
  flex-flow: row nowrap;
  justify-content: flex-end;
}

.links {
  text-decoration: none;
  color: #000;
}

.icon2x {
  font-size: 2em;
}
.expInfo .icon {
  display: table-cell;
  position: relative;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 40px;
  transition: all 0.7s;
}
.expInfo li {
  display: none;
  list-style: none;
}
.expInfo .experienceName {
  display: list-item;
}

.linkButton {
  position: relative;
  height: 50px;
  width: 50px;
  text-decoration: none;
}
.cardActionButtons .button:before {
  top: 0;
  left: -200%;
  transition: all 0.7s;
}

.cardActionButtons .button:hover:before {
  top: -30px;
  left: -30px;
}

.cardActionButtons .button {
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid crimson;
  transition: color 0.5s;
  color: crimson;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Helvetica;
  font-size: 15px;
  text-align: center;
}

.cardActionButtons .button:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: crimson;
  height: 150px;
  width: 200px;
  border-radius: 50%;
}

.cardActionButtons .button:hover {
  color: #fff;
}

.delete {
  cursor: pointer;
}

.render {
  position: relative;
  float: right;
  width: 50%;
}

.renderBox {
  position: relative;
  background-color: grey;
  width: 90%;
}
.renderTitle {
  margin-bottom: 30px;
}

.ExpCard-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}

.ExpCard-leave-active {
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
