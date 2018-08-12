<template>
    <nav class=" sidebar">
      <div class="sidebar_inside">
          <router-link class="link" :to="{name: 'home'}"> <ul class="ulwrapper"><li class="links">  <i class="material-icons icon icon2x">home</i><span class="navtext"> Page d'acceuil</span> </li> </ul> </router-link>
          <router-link class="link" :to="{name: 'browseProfile'}"> <ul class="ulwrapper"><li class="links"> <i class="material-icons icon icon2x" >perm_identity</i> <span class="navtext">Mon profil</span> </li> </ul> </router-link>
            <ul class="ulAccordeonWrapper" @click="expandAccordeonDossier" id="menuDossier"> 
              <li class="AccordeonTitle"> <i class="material-icons icon icon2x">subject</i> <span class="navtext">Mes dossiers</span> </li>
              <li  class="accordeonEl"><router-link class="link" :to="{name: 'browseDC' }"> <ul class="ulwrapper"><li class="links"> <i class="material-icons icon icon2x">folder_open</i> <span class="navtext">Mes dossiers de compétences</span> </li> </ul> </router-link> </li>
              <li  class= 'accordeonEl'><router-link class="link" :to="{name: 'browseEXP' }"> <ul class="ulwrapper"><li class="links"> <i class="material-icons icon icon2x">style</i> <span class="navtext">Mes experiences</span> </li> </ul> </router-link></li>         
            </ul>
                      <ul class="ulAccordeonWrapper" @click="expandAccordeonRex" id="menuRex"> 
              <li class="AccordeonTitle"> <i class="material-icons icon icon2x">subject</i> <span class="navtext">Mes REX</span> </li>
              <li class="accordeonEl"><router-link class="link" :to="{name: 'browseREX' }"> <ul class="ulwrapper"><li class="links"> <i class="material-icons icon icon2x">assignment</i> <span class="navtext">Mes Retours d'experiences</span> </li> </ul> </router-link> </li>
              <li class= 'accordeonEl'><router-link class="link" :to="{name: 'manageREX' }"> <ul class="ulwrapper"><li class="links"> <i class="material-icons icon icon2x">more</i> <span class="navtext">Tableau de bord</span> </li> </ul> </router-link></li>         
            </ul>
          <router-link class="link" :to="{name: 'documentation' }"><ul class="ulwrapper"><li class="links">  <i class="material-icons icon icon2x">info</i> <span class="navtext">Documentation</span> </li> </ul> </router-link>
      </div>
    </nav>
</template>

<script>
export default {
  name: "sidebar",
  data: () => ({
    DossierMenuExpanded: false,
    RexMenuExpanded: false
  }),
  methods: {
    expandAccordeonDossier: function() {
      let toExpand = document
        .getElementById("menuDossier")
        .getElementsByClassName("accordeonEl");
      for (var i = 0; i < toExpand.length; i++) {
        if (this.DossierMenuExpanded == false) {
          toExpand[i].style.maxHeight = "100px";
        } else {
          toExpand[i].style.maxHeight = 0;
        }
      }
      this.DossierMenuExpanded = !this.DossierMenuExpanded;
    },
    expandAccordeonRex: function() {
      let toExpand = document
        .getElementById("menuRex")
        .getElementsByClassName("accordeonEl");
      for (var i = 0; i < toExpand.length; i++) {
        if (this.RexMenuExpanded == false) {
          toExpand[i].style.maxHeight = "100px";
        } else {
          toExpand[i].style.maxHeight = 0;
        }
      }
      this.RexMenuExpanded = !this.RexMenuExpanded;
    }
  }
};
</script>


<style scoped>
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
  font-size: 20px;
}

.sidebar {
  z-index: 1000;
  position: fixed;
  top: 20vh;
  left: 0;
  width: 60px;
  height: 60vh;
  max-width: 90vw;
  background-color: #212121;
  border-radius: 0px 30px 30px 0px;
  overflow: hidden;
  transition: width 0.3s linear;
}
.sidebar .sidebar_inside {
  position: relative;
  margin-top: 50px;
}

.sidebar:hover {
  width: 350px;
}
.AccordeonTitle {
  background-color: inherit;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: block;
  width: 350px;
  margin: 0;
}
.accordeonEl {
  margin: 0;
  margin-left: 15px;
  padding: 0;
  display: block;
  max-height: 0px;
  width: 350px;
  transition: max-height 300ms linear;
}
.links {
  background-color: inherit;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: block;
  width: 300px;
}

.link {
  position: relative;
  display: block;
  color: #fff;
  font-family: arial;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.3s linear;
  width: 100%;
  border-bottom: 1px solid #e4dede;
}

.navtext {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  font-size: 20px;
  font-family: arial;
}
.link:hover,
.link:focus {
  text-decoration: none;
}

.ulwrapper {
  margin: 15px 0;
}
.ulAccordeonWrapper {
  position: relative;
  display: block;
  width: 350px;
  margin: 0;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 1px solid #e4dede;
}

.ulAccordeonWrapper,
.ulwrapper,
.links {
  position: relative;
  outline: 0;
  margin: 0;
  padding: 0;
}

.ulAccordeonWrapper:hover .AccordeonTitle,
.link:hover,
.link:focus,
.links:hover,
.links:focus,
.icon:hover,
.icon:focus,
.ulwrapper:hover,
.ulwrapper:focus {
  background-color: #5fa2db;
}
</style>