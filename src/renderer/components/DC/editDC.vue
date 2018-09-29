<template>
<div id="editDCWrapper">
  <div id = "main" class="main">
    <div class="title" id="subTitle"> 
      <h1 v-if="edit">  Modifier mon dossier de compétence </h1>
      <h1 v-else>Editer un nouveau dossier de compétence</h1>
    </div>
    <div class="content" id = "content">
      <div class="DCEdit">
          <div class="FirstPageInfo">
            <div id="PitchBox">
              <label for="pitch">Presentation : </label>
              <textarea type="text" name="pitch" id="pitch"  v-model="dc.pitch"></textarea>
            </div>
            <div id="JobBox">
              <label for="Job">Position : </label>
              <textarea type="text" name="Job" id="Job"  v-model="dc.Job"></textarea>
            </div>
            <div id = "expYearsBox">
              <label for="expYears">Année d'experiences : </label>
              <textarea type="text" name="expYears" id="expYears"  v-model="dc.expYears"></textarea>
            </div>
            <div id="trainings" class="bottomBox"> Formations :
              <div id="addTraining" @click="addTraining" class="button"><i class="material-icons icon ">add_circle</i> <span>Formation</span></div>
              <div id="expandTrainings" class="expand" @click="expand"><i class="material-icons">expand_more</i></div>
              <div id="trainingsList" v-for="(training,index) in this.dc.trainings" :key="training.id">
                <div id="deleteTraining" class="deleteEl" @click="deleteTraining(training)">X</div>
                <div class="TrainingName">
                  <label for="training">Formation : </label>
                  <textarea type="text" name="training" id="trainingText" v-model="dc.trainings[index].training"> </textarea>
                </div>
              </div>
            </div>
            <div id="expertises" class="bottomBox"> Expertises :
              <div id="addExpertises" @click="addExpertise" class="button"><i class="material-icons icon ">add_circle</i> <span>Expertise</span></div>
              <div id="expandExpertises" class="expand" @click="expand"><i class="material-icons">expand_more</i></div>
              <div id="expertisesList" v-for="(expertise,index) in this.dc.expertises" :key="expertise.id">
                <div id="deleteExpertise" class="deleteEl" @click="deleteExpertise(expertise)">X</div>
                <div class="expertiseName">
                  <label for="expertise">expertise : </label>
                  <textarea type="text" name="expertise" id="expertiseText" v-model="dc.expertises[index].expertise"> </textarea>
                </div>
              </div>
            </div>
            <div id="sectors" class="bottomBox"> Secteurs d'activités : 
              <div id="addSectors" @click="addSector" class="button"><i class="material-icons icon ">add_circle</i> <span>Secteur</span></div>
              <div id="expandSectors" class="expand" @click="expand"><i class="material-icons">expand_more</i></div>
              <div id="sectorsList" v-for="(sector,index) in this.dc.sectors" :key="sector.id">
                <div id="deleteExpertise" class="deleteEl" @click="deleteSector(sector)">X</div>
                <div class="sectorName">
                  <label for="sector">secteur d'activité : </label>
                  <textarea type="text" name="sector" id="sectorText" v-model="dc.sectors[index].sector"> </textarea>
                </div>
              </div>
            </div>
            <div id="clients" class="bottomBox"> Principaux clients :
              <div id="addClients" @click="addClient" class="button"><i class="material-icons icon ">add_circle</i> <span>Client</span></div>
              <div id="expandClients" class="expand" @click="expand"><i class="material-icons">expand_more</i></div>
              <div id="clientsList" v-for="(client,index) in this.dc.clients" :key="client.id">
                <div id="deleteclient" class="deleteEl" @click="deleteClient(client)">X</div>
                <div class="clientName">
                  <label for="client">client : </label>
                  <textarea type="text" name="client" id="clientText" v-model="dc.clients[index].client"> </textarea>
                </div>
              </div>
            </div>
            <div class="experiencesAdded"> Expériences ratachées au dossier de compétences :
              
            </div>
          </div>
      </div>
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
        pitch: null,
        expYears: null,
        trainings: [],
        Expertises: [],
        Sectors: [],
        Clients: [],
        explist: []
      };
    }
  },
  computed: {
    expList() {
      return this.$store.state.EXPData.expList;
    },
    profile() {
      return this.$store.state.ProfileData.profile;
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
    }
  }
};
</script>

<style scoped>
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
}

.bottomBox {
  position: relative;
  width: 100%;
  height: 38px;
  line-height: 38px;
  background-color: #3443c5;
  color: #fff;
  font-weight: bold;
  padding-left: 10px;
  border-bottom: 2px solid #000;
}

/*
Buttons
*/
.button {
  margin-left: 20px;
  display: inline-block;
  height: 30px;
  line-height: 30px;
}

.button i {
  padding: 0;
  margin-bottom: 1px;
  height: 30px;
  width: 30px;
  font-size: 30px;
}

.button span {
  margin: auto;
  padding: 0;
  height: 15px;
  width: auto;
  font-size: 15px;
  margin-right: 2px;
  margin-left: 2px;
}

.button {
  background: linear-gradient(to bottom, #ffffff 5%, #c2cbda 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3d94f6', endColorstr='#1e62d0',GradientType=0);
  background-color: #c2cbda;
  border-radius: 6px;
  border: 1px solid #c2cbda;
  display: inline-block;
  cursor: pointer;
  color: #000;
  font-family: Arial;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px 0px #c2cbda;
}

.button:hover {
  background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0', endColorstr='#3d94f6',GradientType=0);
  background-color: #1e62d0;
}
.button:active {
  position: relative;
  top: 1px;
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
</style>

