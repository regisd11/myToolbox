<template>
<div id="browseExpWrapper" class="wrapper">
   <div id = "main" class="main">
        <div id = "titleCard" class="titleCard">
          <div id = "clientName_missionLength" class="clientName_missionLength">
            {{exp.client}} - {{experienceLength}} 
          </div>
          <div id = "MissionTitle" class="MissionTitle">{{exp.experienceTitle}}</div>
        </div>
        <div id = "expContent" class="expContent">
          <div id ="missionContext" class = "missionContext">
           <div class="contextLabel">Context :</div><p class="contentText">{{exp.context}}</p> 
          </div>
          <div id = "missionSubjects" class = "missionSubjects" v-for="(subject,index) in exp.subjects" :key="subject.id">
              <div id="subjectTitle" class="subjectTitle">{{exp.subjects[index].subject}}</div>
              <ul id ="tasks" class="tasks" v-for="(task,index) in subject.tasks" :key="task.id">
                <li><span class="puce">&#x2023;</span> {{subject.tasks[index].task}}
                  <ul id="substasks" class="substasks" v-for="(subTask,index) in task.subTasks" :key="subTask.id">
                    <li id="subtask" class="subtask"><span class="puce">&#x2023;</span> {{task.subTasks[index].subTask}}</li>
                  </ul>
                </li>
              </ul>
          </div>
        </div>
    </div> 
   
</div>
</template>


<script>
export default {
  name: "renderExp",
  created() {
    let id = this.$route.params.id;

    if (id) {
      this.exp = this.$store.getters.exp(id);
    }
  },
  data: () => ({
    exp: {}
  }),
  computed: {
    experienceLength: function dateDiff() {
      var diff = {}; // Initialisation du retour
      var date1 = new Date(this.exp.experienceBegin);
      var date2 = new Date(this.exp.experienceEnd);
      var tmp = date2 - date1;

      tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
      diff.sec = tmp % 60; // Extraction du nombre de secondes

      tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
      diff.min = tmp % 60; // Extraction du nombre de minutes

      tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
      diff.hour = tmp % 24; // Extraction du nombre d'heures

      tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
      diff.day = tmp % 24; // Extraction du nombre de jours

      tmp = Math.floor((tmp - diff.day) / 30); // Nombre de mois restants
      diff.month = tmp % 30; // Extraction du nombre de mois

      tmp = tmp / 12; // Nombre de jours restants
      diff.year = tmp % 12; // Extraction du nombre d'années

      var total = "";
      var year = Math.floor(diff.year);
      var month = Math.round((diff.year - Math.floor(diff.year)) * 12);
      if (diff.year > 0 && diff.year < 1) {
        var year = Math.floor(diff.year);
        var month = Math.round((diff.year - Math.floor(diff.year)) * 12);
        total = month + " mois";
      } else if (diff.year == 1) {
        var year = Math.floor(diff.year);
        var month = Math.round((diff.year - Math.floor(diff.year)) * 12);
        total = year + " an";
      } else if (diff.year > 1 && diff.year < 1.5) {
        var year = Math.floor(diff.year);
        var month = Math.round((diff.year - Math.floor(diff.year)) * 12);
        total = year + " an " + month + " mois";
      } else if (diff.year > 1.5 && diff.year < 2) {
        var year = Math.floor(diff.year);
        var month = Math.round((diff.year - Math.floor(diff.year)) * 12);
        total = year + " an " + month + " mois";
      } else if (diff.year == 1.5) {
        total = diff.month + " mois";
      } else if (diff.year > 1.5 && diff.year < 2) {
        var year = Math.floor(diff.year);
        var month = Math.round((diff.year - Math.floor(diff.year)) * 12);
        total = year + " an " + month + " mois";
      } else if (diff.year > 2) {
        var year = Math.floor(diff.year);
        var month = Math.round((diff.year - Math.floor(diff.year)) * 12);
        total = year + " ans " + month + " mois";
      } else if (diff.year == 2) {
        var year = Math.floor(diff.year);
        var month = Math.round((diff.year - Math.floor(diff.year)) * 12);
        total = year + " ans ";
      } else {
        total = "0 mois";
      }
      return total;
    }
  }
};
</script>


<style scoped>
.wrapper {
  background-color: grey;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.main {
  margin-top: 10px;
  position: relative;
  width: 457px;
  height: 600px;
}
.titleCard {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 53px;
  width: 100%;
  background-color: #d2d958;
  border: 1px solid #000;
  margin-bottom: 5px;
  font-weight: bolder;
}
.clientName_missionLength {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
}

.MissionTitle {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}

.expContent {
  background-color: #fff;
  border: 1px solid #000;
  font-size: 12.5px;
  display: block;
  padding-bottom: 15px;
}

.expContent * {
  margin: 0;
}
.missionContext {
  margin-top: 12px;
}
.missionContext .contextLabel {
  float: left;
  font-weight: bold;
}
.missionContext .contentText {
  font-style: italic;
}
.missionSubjects {
  margin-top: 15px;
}
.subjectTitle {
  font-weight: bold;
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
  padding-left: 20px;
}
.puce {
  font-size: 18px;
  color: #d2d958;
}
</style>
