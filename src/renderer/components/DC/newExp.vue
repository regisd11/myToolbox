<template>
<div id="editExpWrapper">
    <div id = "main" class="main">
      <div class="title" id="subTitle"> <h1>  Editer une nouvelle experience  </h1></div>
      <div class="content" id = "content">
        <div class="experienceEdit">
        <div class="experienceInfo" id ="experienceInfo">
          <p class="experienceName" id="pProject">
            <label for="experienceName">Nom de l'expérience : </label>
            <textarea type="text" name="experienceName" id="experienceName"  v-model="exp.experienceName"></textarea>
          </p>
          <p class="client" id="pClient">
            <label for="client">Client : </label>
            <textarea type="text" name="client" id="client"  v-model="exp.client"> </textarea>
          </p>
          <p class="experienceTitle" id="pProject">
            <label for="experienceTitle">Titre de l'expérience : </label>
            <textarea type="text" name="experienceTitle" id="experienceTitle"  v-model="exp.experienceTitle"></textarea>
          </p>
          <p class="experienceBegin" id="pExperienceBegin">
            <label for="experienceBegin">Début de la mision : </label>
            <input type="date" name="experienceBegin" id="experienceBegin"  v-model="exp.experienceBegin">
          </p>
          <p class="experienceEnd" id="pExperienceEnd">
            <label for="experienceEnd">Fin de la mission : </label>
            <input type="date" name="experienceEnd" id="experienceEnd"  v-model="exp.experienceEnd">
          </p>
          <p class="context" id="pContext">
            <label for="context">Contexte de la mission :</label>
            <textarea type="text" name="context" id="context" placeholder="Le contexte de ma mission"  v-model="exp.context"></textarea>
          </p>
        </div >

        <div id = "experiencesContent" class="experiencesContent">
          <div id="addSubject" @click="addSubject" class="subjectButton"><i class="material-icons icon ">add_circle</i><span>Sujet</span></div>
          <div id="subjects" class="subjects">
            <div id="subject" class="subject" v-for="(subject, index) in exp.subjects" :key="subject.id">
              <div id="deleteSubject" class="deleteEl" @click="deleteSubject(subject)">X</div>
              <div class="subjectName">
                <label for="subjectText">Sujet : </label>
                <textarea type="text" name="sujet" id="subjectText" v-model="exp.subjects[index].subject"> </textarea>
              </div>
              <div class="subjectContent">
                <div @click="addTask(subject)" id="addTast" class="addTast"><i class="material-icons icon icon2x">add_circle</i>Tache</div>
                <div id="tasks" class="tasks">
                  <div id="task" class="task" v-for="(task, index) in subject.tasks" :key="task.id">
                    <div id="deleteTask" class="deleteEl" @click="deleteTask(subject,task)">X</div>
                    <div class="taskName">
                      <label for="task">Tache : </label>
                      <textarea type="text" name="sujet" id="taskText"  v-model="subject.tasks[index].task"> </textarea>
                    </div>
                    <div @click="addSubTask(task)" id="addSubTask" class="addSubTask"><i class="material-icons icon icon2x">add_circle</i>Sous-tache</div>
                    <div id="subTasks" class="subTasks">
                      <div class="subTask"  v-for="(subTask,index) in task.subTasks" :key="subTask.id" >
                        <div id="deleteSubTask" class="deleteEl" @click="deleteSubTask(task, subTask)">X</div>
                        <div class="subTaskName">
                          <label for="subTask">Sous-tache : </label>
                          <textarea type="text" name="subTask" id="subTaskText" v-model="task.subTasks[index].subTask"> </textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>            
        </div> 
        </div>
        <div class="experienceRender" id="experienceRender">
          <div id = "mainRender" class="mainRender">
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
      </div>
      <div id = "sideButons" class="sideButtons">
      <div id="submit" class="submit" @click="submit(exp)">
           <i class="material-icons icon icon2x">save</i>
        </div>
      <div id="vizualise" class="vizualise" @click="submit">
           <i class="material-icons icon icon2x">visibility</i>
        </div>
      </div>  
    </div>   
    </div>

</template>


<script>
export default {
  name: "editExp",
  data: () => ({
    exp: {
      experienceName: "le nom de mon experience",
      client: "le nom de mon client",
      experienceTitle: "le titre de mon experience",
      experienceBegin: null,
      experienceEnd: null,
      context: "le contexte de ma mission",
      subjects: [
        {
          subject: "sujet",
          tasks: [
            {
              task: "tache",
              subTasks: [
                {
                  subTask: "sous-tache"
                }
              ]
            }
          ]
        }
      ]
    }
  }),
  methods: {
    checkForm: function(e) {
      e.preventDefault();
    },
    addSubject: function() {
      this.exp.subjects.push({
        subject: null,
        tasks: [
          {
            task: null,
            subTasks: [
              {
                subTask: null
              }
            ]
          }
        ]
      });
    },
    deleteSubject: function(subject) {
      this.exp.subjects.splice(this.exp.subjects.indexOf(subject), 1);
    },
    addTask: function(subject) {
      subject.tasks.push({
        task: null,
        subTasks: [
          {
            subTask: null
          }
        ]
      });
    },
    deleteTask: function(subject, task) {
      subject.tasks.splice(subject.tasks.indexOf(task), 1);
    },
    addSubTask: function(task) {
      task.subTasks.push({
        subTask: null
      });
    },
    deleteSubTask: function(task, subTask) {
      task.subTasks.splice(task.subTasks.indexOf(subTask), 1);
    },
    submit: function(myExp) {
      console.log(myExp);
      this.$store.dispatch("storeExp", myExp).then(
        () => {
          console.log("Le formulaire a été validé");
        },
        err => {
          console.log("Le formulaire n'a pas été validé");
          console.error(err);
        }
      );
    }
  },
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
.main {
  z-index: 2;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: grid;
  position: relative;
  grid-template-columns: 90px repeat(1, [column] auto);
  grid-template-rows: repeat(3, [row] auto);
  grid-gap: 30px;
}

/*
* — Page title —
*/

.title {
  text-transform: uppercase;
  grid-row-start: 1;
  grid-column-start: 2;
  grid-column-end: -1;
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
  position: relative;
  width: 92%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 16px 16px 32px 16px rgba(0, 0, 0, 0.4);
  margin-bottom: 50px;
  grid-column: 2 / -1;
  grid-row: 2 / -1;
}
.icon {
  position: relative;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  font-size: 40px;
  transition: font-size 300ms linear;
  cursor: pointer;
}

.sideButtons {
  position: fixed;
  right: 4em;
  top: 50vh;
  height: 100px;
}

.experienceInfo .client textarea {
  position: relative;
  text-align: start;
  width: 300px;
}
.experienceInfo .experienceName textarea {
  position: relative;
  text-align: start;
  width: 300px;
}

.experienceInfo {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
.experienceInfo .context textarea {
  position: relative;
  text-align: start;
  width: 500px;
  height: 100px;
}
.experienceInfo p label {
  position: relative;
  display: inline-block;
  justify-content: flex-start;
  vertical-align: top;
  width: 100px;
}

.experiencesContent {
  display: flex;
  flex-flow: column nowrap;
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

.subjects {
  grid-row-start: 4;
  grid-column-start: 2;
  grid-column-end: -1;
  display: inline-block;
  margin-left: 20px;
  width: 700px;
}

.subject {
  position: relative;
  border: 2px dotted #000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: block;
  padding: 15px;
  margin-bottom: 15px;
}

.subjectName {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: block;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.subjectName label {
  position: relative;
  display: inline-block;
  justify-content: flex-start;
  vertical-align: top;
}
.subjectName textarea {
  position: relative;
  width: 50%;
}

.subjectContent {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: block;
  padding: 15px;
}

/*
* — subjectButton —
*/

.subjectButton {
  display: inline-block;
  height: 32px;
  width: 100px;
}

.subjectButton i {
  padding: 0;
  margin-top: 1px;
  margin-bottom: 1px;
  height: 30px;
  width: 30px;
  font-size: 30px;
}

.subjectButton span {
  margin: auto;
  padding: 0;
  height: 15px;
  width: auto;
  font-size: 15px;
  margin-right: 2px;
  margin-left: 2px;
}

.subjectButton {
  background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3d94f6', endColorstr='#1e62d0',GradientType=0);
  background-color: #3d94f6;
  border-radius: 6px;
  border: 1px solid #337fed;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1570cd;
}

.subjectButton:hover {
  background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0', endColorstr='#3d94f6',GradientType=0);
  background-color: #1e62d0;
}
.subjectButton:active {
  position: relative;
  top: 1px;
}

/*
* — addTastButton —
*/

.addTast {
  display: inline-block;
  height: 32px;
}

.addTast i {
  padding: 0;
  margin-top: 1px;
  margin-bottom: 1px;
  height: 30px;
  width: 30px;
  font-size: 30px;
}

.addTast span {
  margin: auto;
  padding: 0;
  height: 15px;
  width: auto;
  font-size: 15px;
  margin-right: 2px;
  margin-left: 2px;
}

.addTast {
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

.addTast:hover {
  background: linear-gradient(to bottom, #ffffff 5%, #c2cbda 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0', endColorstr='#3d94f6',GradientType=0);
  background-color: #c2cbda;
}
.addTast:active {
  position: relative;
  top: 1px;
}

/*
* — addSubTaskButton —
*/
.addSubTask {
  display: block;
  height: 32px;
}

.addSubTask i {
  display: inline-block;
  margin: 5px;
  padding: 0;
  margin-top: 1px;
  margin-bottom: 1px;
  height: 30px;
  width: 30px;
  font-size: 30px;
}

.addSubTask span {
  display: inline-block;
  margin: auto;
  padding: 0;
  height: 15px;
  width: auto;
  font-size: 15px;
  margin-right: 2px;
  margin-left: 2px;
}

.addSubTask {
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

.addSubTask:hover {
  background: linear-gradient(to bottom, #ffffff 5%, #c2cbda 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0', endColorstr='#3d94f6',GradientType=0);
  background-color: #c2cbda;
}
.addSubTask:active {
  position: relative;
  top: 1px;
}

.subjectName:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.subject:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.tasks {
  position: relative;
  display: block;
  margin-top: 5px;
}
.task {
  margin-top: 15px;
  padding-top: 5px;
  border-top: 1px solid #535151;
  position: relative;
  display: block;
  background-color: rgba(232, 234, 236, 0.4);
}
.taskName {
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.taskName label {
  position: relative;
  display: inline-block;
  justify-content: flex-start;
  vertical-align: top;
}

.taskName textarea {
  text-align: start;
  width: 50%;
  max-width: 50%;
}

.subTasks {
  margin-top: 5px;
  padding-top: 5px;
  position: relative;
  display: block;
}
.subTask {
  margin-top: 5px;
  padding-top: 5px;
  border-top: 1px dotted #535151;
  position: relative;
  display: block;
}

.subTaskName {
  margin-top: 5px;
  margin-left: 40px;
  margin-bottom: 5px;
}
.subTaskName label {
  position: relative;
  display: inline-block;
  justify-content: flex-start;
  vertical-align: top;
}
.subTaskName textarea {
  text-align: start;
  width: 50%;
  max-width: 50%;
}

/*
----- Render ------
*/

.experienceRender {
  position: relative;
  background-color: gray;
  height: inherit;
  width: 50%;
}

.mainRender {
  position: fixed;
  top: 20em;
  right: 20em;
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
  height: 547;
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