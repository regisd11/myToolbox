<template>
<div id="wrapper">
  <div class="main">
      <div class="cardbox">
        <div><img class="photo" v-bind:src='photo' @click="updatePhoto()"></div>
        <div class="content">
          <p class="consultantName" id="pConsultantName">
              <label for="consultantName">Mon prénom et nom </label>
              <textarea type="text" name="consultantName" id="consultantName"  v-model="profile.consultantName"></textarea>
          </p>
          <p class="consultantPosition" id="pConsultantPosition">
              <label for="consultantPosition">Mon grade :</label>
              <ul>
                <li v-for="position in positionsChoices" :key="position.grade">
                <input name="consultantPosition" type="radio" :value="position.grade" v-model="profile.consultantPosition"> {{position.grade}} 
                </li>
              </ul>
          </p>
          <p class="consultantCommunity" id="pConsultantCommunity">
              <label for="consultantCommunity">Ma communauté</label>
              <ul>
                <li v-for="item in communityChoice" :key="item.community">
                <input name="consultantCommunity" type="radio" :value="item.community" v-model="profile.consultantCommunity"> {{item.community}} 
                </li>
              </ul>
          </p>
            <table >
              <thead>
              <tr>
                <th></th>
                <th>Langue</th>
                <th>Niveau</th>
                <th>Examen</th>
                <th>Note</th>
              </tr>
              </thead>
              <tr v-for="(language,index) in profile.consultantLanguages" :key="language.language" class="actualLanguage" :id="index">
                <td><button type="submit" @click="deleteLanguage">Supprimer</button></td>
                <td class="language">{{ language.language }}</td>
                <td>{{ language.level }}</td>
                <td>{{ language.eval }}</td>
                <td>{{ language.grade }}</td>
              </tr>
              <tr>
                <td><button type="submit" @click="addLanguage">Ajouter</button></td>
                <td>
                  <select name="languageDropDown" class="languageDropDown" id="languageDropDown">
                    <option v-for="item in langagesChoice" :key="item.fr" :value="item.fr">{{item.fr}}</option>
                  </select>
                </td>
                <td>
                  <select name="levelDropDown" class="levelDropDown" id="levelDropDown">
                    <option v-for="item in levelChoices" :key="item.level" :value="item.level">{{item.level}}</option>
                  </select>
                </td>
                <td>
                  <select name="examDropDown" class="examDropDown" id="examDropDown">
                    <option v-for="item in examenChoices" :key="item.examen" :value="item.examen">{{item.examen}}</option>
                  </select>
                </td>
                <td>
                  <textarea type="text" name="languageGrade" class="languageGrade" id="languageGrade"></textarea>
                </td>
              </tr>
            </table>
        </div>
      </div> 
    </div>
    <div id="cropperDiv" class="cropperDiv">
      <cropper></cropper>
    </div>
    <div id = "sideButons" class="sideButtons">
      <div id="submit" class="submit" @click="submit()">
        <i class="material-icons icon icon2x">save</i>
      </div>
    </div>  
</div>
</template>

<script>
import cropper from "./Cropper.vue";
import path from "path";
import { resolve } from "url";
import { remote } from "electron";
import fs from "fs";
export default {
  name: "editProfile",
  components: { cropper },
  data: () => ({
    positionsChoices: [
      { grade: "Consultant" },
      { grade: "Consultant senior 1" },
      { grade: "Consultant senior 2" },
      { grade: "Program manager" },
      { grade: "Senior manager" }
    ],
    langagesChoice: [
      { fr: "Français", en: "French" },
      { fr: "Anglais", en: "English" },
      { fr: "Allemand", en: "German" },
      { fr: "Espagnol", en: "Spanish" },
      { fr: "Italien", en: "Italian" },
      { fr: "Russe", en: "Russian" },
      { fr: "Polonais", en: "Polish" },
      { fr: "Chinois (Mandarin)", en: "Chinese (Mandarin)" },
      { fr: "Chinois (Cantonais)", en: "Chinese (Cantonese)" },
      { fr: "Portugais", en: "Portugese" }
    ],
    levelChoices: [
      { level: "langue maternelle" },
      { level: "courant" },
      { level: "intermediaire" },
      { level: "debutant" }
    ],
    examenChoices: [{ examen: "" }, { examen: "TOEIC" }],
    communityChoice: [
      { community: "ADI" },
      { community: "MGT" },
      { community: "MKT" },
      { community: "RFR" }
    ]
  }),
  computed: {
    image() {
      return this.$store.state.lightbox.image;
    },
    photo() {
      return this.$store.state.photoLoader.photo;
    },
    profile() {
      return this.$store.state.ProfileData.profile;
    }
  },
  methods: {
    deleteLanguage: function(event) {
      let line = event.target.parentNode.parentNode;
      let languageIndex = line.rowIndex - 1;
      let arrayJS = this.consultantLanguages[languageIndex];
      this.profile.consultantLanguages.splice(languageIndex, 1);
      line.parentNode.removeChild(line);
    },
    addLanguage: function(event) {
      let line = event.target.parentNode.parentNode;
      let table = event.target.parentNode.parentNode.parentNode;
      let language = document.getElementById("languageDropDown").value;
      let level = document.getElementById("levelDropDown").value;
      let exam = document.getElementById("examDropDown").value;
      let grade = document.getElementById("languageGrade").value;
      let newLanguage = {
        language: language,
        level: level,
        eval: exam,
        grade: grade
      };
      this.profile.consultantLanguages.push(newLanguage);
      let row = table.insertRow(table.rows.length - 1);
      let cellButton = row.insertCell(0);
      let cellLanguage = row.insertCell(1);
      let cellLevel = row.insertCell(2);
      let cellExam = row.insertCell(3);
      let cellGrade = row.insertCell(4);
      cellLanguage.innerHtml = language;
      cellLevel.innerHtml = level;
      cellExam.innerHtml = exam;
      cellGrade.innerHtml = grade;
    },
    updatePhoto: function() {
      this.$store.dispatch("toggleImage");
    },
    submit: function() {
      let myProfile = JSON.stringify(this.profile);
      fs.writeFileSync(
        path.join(remote.app.getPath("userData"), "/profile.json"),
        myProfile,
        { encoding: "utf8" }
      );
      this.$store.dispatch("getProfile");
    }
  },
  watch: {
    image: function(image) {
      if (image) {
        document.getElementById("cropperDiv").style.display = "flex";
      } else {
        document.getElementById("cropperDiv").style.display = "none";
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  height: inherit;
  width: 100%;
}
/*
* — wrapper grid—
*/
.main {
  z-index: 2;
  height: 100%;
  width: 90%;
  margin-left: 200px;
  padding: 0;
  text-decoration: none;
  position: relative;
}

.cardbox {
  position: relative;
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 15px;
  display: flex;
  flex-flow: row nowrap;
  width: 70%;
}

.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  position: relative;
  margin-left: 50px;
  margin-right: 50px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.4);
  width: 90%;
  padding: 50px;
}

.element {
  display: flex;
  flex-flow: row nowrap;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.data {
  margin-left: 5px;
}

ul {
  list-style: none;
}

table {
  border-collapse: collapse;
}

thead {
  font-size: 0.8rem;
  text-transform: uppercase;
  background: #c0c0c0;
}

tr {
  border-top: 1px solid #e6e6e6;
}

td {
  font-weight: 100;
}

th,
td {
  padding: 0.75rem 1rem;
}

td:second-child,
th:second-child {
  text-align: left;
}

td:nth-last-child(2),
th:nth-last-child(2) {
  text-align: right;
}

td + td:not(:nth-last-child(2)) {
  text-align: center;
}

.cropperDiv {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5000;
  display: none;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}
.photo {
  cursor: pointer;
}
</style>

