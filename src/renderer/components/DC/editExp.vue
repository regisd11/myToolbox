<template>
<div id="editExpWrapper">
    <div id = "main" class="main">
      <div class="title" id="subTitle"> <h1>  Modifier mon experience  </h1></div>
      <div class="content" id = "content">
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
          <div id="addSubject" @click="addSubject" class="subjectButton"><i class="material-icons icon ">add_circle</i> <span> Ajouter un sujet </span></div>
          <div id="subjects" class="subjects">
            <div id="subject" class="subject" v-for="(subject, index) in exp.subjects" :key="subject.id">
              <div id="deleteSubject" class="deleteEl" @click="deleteSubject(subject)">X</div>
              <div class="subjectName">
                <label for="subjectText">Sujet : </label>
                <textarea type="text" name="sujet" id="subjectText" v-model="exp.subjects[index].subject"> </textarea>
              </div>
              <div class="subjectContent">
                <div @click="addTask(subject)" id="addTast" class="addTast"><i class="material-icons icon icon2x">add_circle</i>Ajouter une tache</div>
                <div id="tasks" class="tasks">
                  <div id="task" class="task" v-for="(task, index) in subject.tasks" :key="task.id">
                    <div id="deleteTask" class="deleteEl" @click="deleteTask(subject,task)">X</div>
                    <div class="taskName">
                      <label for="task">Tache : </label>
                      <textarea type="text" name="sujet" id="taskText"  v-model="subject.tasks[index].task"> </textarea>
                    </div>
                    <div @click="addSubTask(task)" id="addSubTask" class="addSubTask"><i class="material-icons icon icon2x">add_circle</i>Ajouter une sous-tache</div>
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
    exp: {}
  }),
  created() {
    let id = this.$route.params.id;

    if (id) {
      this.exp = this.$store.getters.exp(id);
    }
  },
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
  grid-template-columns: repeat(2, [column] auto);
  grid-template-rows: repeat(3, [row] auto);
  grid-gap: 30px;
}

/*
* — Page title —
*/

.title {
  text-transform: uppercase;
  grid-row-start: 2;
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
  grid-row-start: 3;
  grid-column: 2 / -1;
  position: relative;
  width: 90%;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: auto [last-line];
  grid-gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 16px 16px 32px 16px rgba(0, 0, 0, 0.4);
  margin-bottom: 50px;
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
  width: 500px;
}
.experienceInfo .experienceName textarea {
  position: relative;
  text-align: start;
  width: 500px;
}

.experienceInfo {
  grid-row-start: 3;
  grid-column-start: 2;
  grid-column-end: -1;
  display: block;
}
.experienceInfo .context textarea {
  position: relative;
  text-align: start;
  width: 500px;
  height: 200px;
}
.experienceInfo p label {
  position: relative;
  display: inline-block;
  justify-content: flex-start;
  vertical-align: top;
  width: 200px;
}

.experiencesContent {
  grid-row-start: 4;
  grid-column-start: 2;
  grid-column-end: -1;
  display: flex;
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
  width: 1000px;
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
  width: 90%;
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
  width: 70%;
  max-width: 70%;
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
  width: 70%;
  max-width: 70%;
}
</style>