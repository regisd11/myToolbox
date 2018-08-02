<template>
<div id="editExpWrapper">
    <div id = "main" :class="$style.main">
      <div :class="$style.title"> <h1> <em> Editer une nouvelle experience </em> </h1></div>
      <div :class="$style.sidebar"></div>
      <div :class="$style.content">
        <div>
          <p :class="$style.client">
            <label for="client">Client : </label>
            <input type="text" name="client" id="client" v-model="client">
          </p>
          <p :class="$style.project">
            <label for="project">Nom du projet : </label>
            <input type="text" name="project" id="project" v-model="project">
          </p>
          <p :class="$style.experienceBegin">
            <label for="experienceBegin">Début de la mision : </label>
            <input type="date" name="experienceBegin" id="experienceBegin" v-model="experienceBegin">
          </p>
          <p :class="$style.experienceEnd">
            <label for="experienceEnd">Fin de la mision : </label>
            <input type="date" name="experienceEnd" id="experienceEnd" v-model="experienceEnd">
          </p>
          <p :class="$style.context">
            <label for="context">Contexte de la mission :</label>
            <input type="text" name="context" id="context" placeholder="Le contexte de ma mission" v-model="context">
          </p>
        </div>

        <div id = "experiencesContent">
          <button id="addSubject" @click="addSubject" :class="$style.subjectButton">Ajouter un sujet</button>

          <div id="subjects" :class="$style.subjects" v-for="subject in subjects" :key="subject.id">

            <label for="subject">Sujet : </label>
            <input type="text" name="sujet" id="subject">
            <button @click="addTask(subject)" id="addTast">Ajouter une tache</button>

            <div id="tasks" :class="$style.tasks" v-for="task in subject.tasks" :key="task.id">
              <label for="task">Tache : </label>
              <input type="text" name="sujet" id="task">
              <button @click="addSubTask(task)" id="addSubTask">Ajouter une sous-tache</button>

              <div :class="$style.subTasks"  v-for="subTask in task.subTasks" :key="subTask.id" >
                <label for="subTask">Sous-tache : </label>
                <input type="text" name="subTask" id="subTask">
              </div>
            </div>
          </div>            
        </div>
          <p :class="$style.submit">
            <input type="submit" value="Submit" @click="submit">  
          </p>

      </div>
    </div> 
</div>
</template>


<script>
export default {
  name: "editExp",
  data: () => ({
    client: null,
    project: null,
    experienceBegin: null,
    experienceEnd: null,
    context: null,
    subjects: [
      {
        subject: "",
        tasks: [
          {
            task: "",
            subTasks: [
              {
                subTask: ""
              }
            ]
          }
        ]
      }
    ]
  }),
  methods: {
    checkForm: function(e) {
      e.preventDefault();
    },
    addSubject: function() {
      this.subjects.push({
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
    addSubTask: function(task) {
      task.subTasks.push({
        subTask: null
      });
    },
    submit: function(e) {
      console.log("Le formulaire a été validé");
    }
  }
};
</script>

<style module>
.main {
  z-index: 2;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: grid;
  position: relative;
  grid-template-columns: 150px 150px 1fr 1fr 1fr 1fr;
  grid-template-rows: 110px 250px auto;
  grid-template-areas:
    "header header header header header header"
    "sidebar title title title title title"
    "sidebar content content content content content";
  grid-gap: 10px;
}

/*
* — Page title —
*/

.title {
  text-transform: uppercase;
  grid-area: title;
  color: #2c2c2c;
  justify-self: center;
}

.title h1 {
  font-family: "Cardo", serif;
  font-size: 1.5em;
  font-weight: normal;
  font-style: italic;
  letter-spacing: 0.1em;
  line-height: 2.2em;
}

.title h1 em {
  font-family: "EB Garamond", serif;
  font-size: 3.5em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  font-style: normal;
  padding-top: 0.1em;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
}

/*
* — Contenu —
*/

.content {
  grid-area: content;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: auto;
  grid-template-areas: "button contentSecond contentSecond contentSecond";
  grid-gap: 10px;
}

.client,
.project,
.experienceBegin,
.experienceEnd,
.context,
.subjects,
.submit {
  display: block;
}

.subjectButton {
  grid-area: button;
}

.subjects {
  grid-area: contentSecond;
}
</style>

