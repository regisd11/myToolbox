<template>
<div id="editDCWrapper">
  <div id = "main" class="main">
    <div class="title" id="subTitle"> 
      <h1 v-if="edit">  Modifier mon dossier de compétence </h1>
      <h1 v-else>Editer un nouveau dossier de compétence</h1>
    </div>
    <div class="content" id = "content">
      <div class="DCEdit">
          <div class="FirstPageInfo box">
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <div class="title is-parent">
                  <div class="tile is-child">
                    <div class="field"  id = "expYearsBox">
                      <span id="consultantName">{{profile.consultantName}}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tile is-parent">
                <div class="tile is-child">
                  <div class="field"  id = "expYearsBox">
                    <label class="label" for="expYears">Année d'experiences : </label>
                    <div class="control">
                      <div class="select" >
                        <select name="expYears" id="expYears" v-model="dc.expYears">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="tile is-ancestor">
              
              <div id="photo" class="tile is parent is-2">
                <div class="tile is-child">
                  <div class="photo"><img v-bind:src='photo'></div>
                </div>
              </div>


              <div class="tile is-parent is-6">
                <div class="tile is-child">
                  <div class="field" id="myPitch">
                    <label for="myPitch"> Presentation : </label>
                    <div class="control">
                      <textarea class="textarea" type="text" name="myPitch" id="myPitch" rows="6" v-model="dc.myPitch"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tile is-parent">
                <div class="tile is-child">
                  <div class="field" id="JobBox">
                    <label for="Job">Position : </label>
                    <div class="control">
                      <input type="text" name="Job" id="Job" class="input" v-model="dc.job">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <div class="tile is-child box">
                <div id="trainings" class="bottomBox">
                  <div class="level"> <span class="level-left">Formations</span><span id="addTraining" @click="addTraining" class="button level-right"><i class="material-icons icon ">add_circle</i></span></div>
                  <div id="trainingsList" v-for="(training,index) in dc.trainings" :key="training.id">
                      <div class="TrainingName control">
                        <div class="level">
                          <input class="input" type="text" name="training" id="trainingText" v-model="dc.trainings[index].training">
                          <a id="deleteTraining" class="delete" @click="deleteTraining(training)"></a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile is-child box">
                <div id="expertises" class="bottomBox"> 
                  <div class="level"><span class="level-left">Expertises</span><span id="addExpertises" @click="addExpertise" class="button level-right"><i class="material-icons icon ">add_circle</i></span></div>
                  <div id="expertisesList" v-for="(expertise,index) in dc.expertises" :key="expertise.id">
                      <div class="ExpertiseName control">
                        <div class="level">
                          <input class="input" type="text" name="expertise" id="expertiseText" v-model="dc.expertises[index].expertise">
                          <a id="deleteTraining" class="delete" @click="deleteExpertise(expertise)"></a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile is-child box">
                <div id="sectors" class="bottomBox">
                  <div class="level"><span class="level-left">Secteurs d'activité</span><span id="addSectors" @click="addSector" class="button level-right"><i class="material-icons icon ">add_circle</i></span></div>
                  <div id="sectorsList" v-for="(sector,index) in dc.sectors" :key="sector.id">
                      <div class="SectorName control">
                        <div class="level">
                          <input class="input" type="text" name="sector" id="sectorText" v-model="dc.sectors[index].sector">
                          <a id="deleteTraining" class="delete" @click="deleteSector(sector)"></a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div class="tile is-parent">
              <div class="tile is-child box">
                <div id="clients" class="bottomBox">
                  <div class="level"><span class="level-left">Principaux clients</span><span id="addClients" @click="addClient" class="button level-right"><i class="material-icons icon ">add_circle</i></span></div>
                  <div id="expandClients" class="expand" @click="expand"><i class="material-icons">expand_more</i></div>
                  <div id="clientsList" v-for="(client,index) in dc.clients" :key="client.id">
                      <div class="clientName control">
                        <div class="level">
                          <input class="input" type="text" name="client" id="clientText" v-model="dc.clients[index].client">
                          <a id="deleteTraining" class="delete" @click="deleteClient(client)"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div class="box">
          <div class="container is-fluid expSelect">
          <span id="experiencesAdded" class="experiencesAdded"> Expériences ratachées au dossier de compétences : </span>
          <span class="control expSelectControl"> 
            <select id="expSelected">
              <option  v-for="exp in expList" :value="exp.experienceName" :key="exp.experienceName" >{{exp.experienceName}}</option>
            </select> 
          </span>
          <span id = "addButton" class="button addButton" @click="add_exp">ajouter</span>
          </div>
          <div id="expselected">
            <div class="notification" v-for="exp in dc.expSelectedForDC" :key="exp.experienceName">
              <span> {{exp.experienceName}} </span>
              <span class="delete" @click="deleteExperience(exp)"></span>
            </div>
          </div>
          </div>
          <button class="button" @click="submit(dc)">Enregister</button>
      </div>
    </div>
</div>

</template>


<script>
export default {
  name: "editDC",
  data: () => ({
    notificationClass: null,
    dc: {},
    edit: false,
    years: false,
    animation: {
      enter: {
        opacity: [1, 0],
        translateX: [0, -300],
        scale: [1, 0.2]
      },
      leave: {
        opacity: 0,
        height: 0
      }
    }
  }),
  created() {
    let id = this.$route.params.id;
    if (id) {
      this.dc = this.$store.getters.dc(id);
      this.edit = true;
    } else {
      this.dc = {
        job: null,
        myPitch: null,
        expYears: null,
        trainings: [],
        expertises: [],
        sectors: [],
        clients: [],
        expSelectedForDC: []
      };
    }
  },
  mounted() {
    this.$store.dispatch("populateExpStoreAct");
  },
  computed: {
    expList() {
      return this.$store.state.EXPData.expList;
    },
    profile() {
      return this.$store.state.ProfileData.profile;
    },
    photo() {
      return this.$store.state.photoLoader.photo;
    }
  },
  methods: {
    addTraining: function() {
      this.dc.trainings.push({
        training: null
      });
    },
    deleteTraining: function(training) {
      this.dc.trainings.splice(this.dc.trainings.indexOf(training), 1);
    },
    addExpertise: function() {
      this.dc.expertises.push({
        expertise: null
      });
    },
    deleteExpertise: function(expertise) {
      this.dc.expertises.splice(this.dc.expertises.indexOf(expertise), 1);
    },
    addSector: function() {
      this.dc.sectors.push({
        sector: null
      });
    },
    deleteSector: function(sector) {
      this.dc.sectors.splice(this.dc.sectors.indexOf(sector), 1);
    },
    addClient: function() {
      this.dc.clients.push({
        client: null
      });
    },
    deleteClient: function(client) {
      this.dc.clients.splice(this.dc.clients.indexOf(client), 1);
    },
    expand: function(event) {
      if (event.target.parentNode.parentNode.id == "subject") {
        let e = event.target.parentNode.parentNode.getElementsByClassName(
          "tasks"
        )[0];
        if (e.classList.contains("expanded") != true) {
          event.target.innerHTML = "expand_less";
          e.style.height = "auto";
          e.classList.toggle("expanded");
          let htmlCollectionArray = e.getElementsByClassName("task");
          [].forEach.call(htmlCollectionArray, function(el, i) {
            el.style.display = "block";
          });
        } else {
          event.target.innerHTML = "expand_more";
          e.style.height = 0;
          e.classList.toggle("expanded");
          let htmlCollectionArray = e.getElementsByClassName("task");
          [].forEach.call(htmlCollectionArray, function(el, i) {
            el.style.display = "none";
          });
        }
      } else {
        let e = event.target.parentNode.parentNode.getElementsByClassName(
          "subTasks"
        )[0];
        if (e.classList.contains("expanded") != true) {
          event.target.innerHTML = "expand_less";
          e.style.height = "auto";
          e.classList.toggle("expanded");
          let htmlCollectionArray = e.getElementsByClassName("subTask");
          [].forEach.call(htmlCollectionArray, function(el, i) {
            el.style.display = "block";
          });
        } else {
          event.target.innerHTML = "expand_more";
          e.style.height = 0;
          e.classList.toggle("expanded");
          let htmlCollectionArray = e.getElementsByClassName("subTask");
          [].forEach.call(htmlCollectionArray, function(el, i) {
            el.style.display = "none";
          });
        }
      }
    },
    add_exp: function() {
      var e = document.getElementById("expSelected");
      var expSelected = e.options[e.selectedIndex].value;
      console.log(expSelected);
      for (let index = 0; index < this.expList.length; index++) {
        const element = this.expList[index].experienceName;
        if (element == expSelected) {
          this.dc.expSelectedForDC.push(this.expList[index]);
        }
      }
    },
    deleteExperience: function(exp) {
      this.dc.expSelectedForDC.splice(this.dc.expSelectedForDC.indexOf(exp), 1);
    },
    submit: function(myDc) {
      this.$store.dispatch("storeDc", myDc).then(
        () => {
          console.log("Le formulaire a été validé");
          this.notificationClass = "vue-notification success";
          this.$notify({
            group: "foo",
            title: `Success!`,
            text: "Le dossier de compétence a été enregistré !",
            type: "",
            duration: 3000
          });
        },
        err => {
          console.log("Le formulaire n'a pas été validé");
          console.error(err);
          this.notificationClass = "vue-notification error";
          this.$notify({
            group: "foo",
            title: `Erreur !`,
            text:
              "Un problème est survenu, merci de contacter votre administrateur",
            type: "",
            duration: 3000
          });
        }
      );
    }
  },
  watch: {
    years: function() {
      if (this.dc.expYears > 1) {
        this.years = true;
      } else {
        this.years = false;
      }
    }
  }
};
</script>

<style scoped>
@import "~bulma/css/bulma.css";
.main {
  z-index: 2;
  height: 100%;
  width: 100%;
  margin-left: 120px;
  padding: 0;
  text-decoration: none;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
}

/*
* — Page title —
*/

.title {
  text-transform: uppercase;
  color: #2c2c2c;
  justify-self: left;
}

.title h1 {
  font-family: "Cardo", serif;
  font-size: 1.5em;
  font-weight: normal;
  font-style: italic;
  letter-spacing: 0.1em;
  line-height: 2.2em;
}

/*
* — Contenu —
*/
.content {
  width: 90%;
}
.deleteEl {
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  right: 10px;
  top: 10px;
  transition: all 0.1s linear;
  cursor: pointer;
}
.deleteEl:hover {
  font-weight: bold;
}
.expand {
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  right: 25px;
  top: 10px;
  transition: all 0.1s linear;
  cursor: pointer;
}

.expSelect {
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
}

.expSelectControl {
  margin-left: 3rem;
}

.addButton {
  margin-left: 3rem;
}

#photo {
  margin-left: 2rem;
}
</style>

