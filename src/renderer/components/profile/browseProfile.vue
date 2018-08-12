<template>
<div id="wrapper">
    <div class="main">
        <div class="cardbox">
        <div class="photo"><a href="https://placeholder.com" prevent><img src="http://via.placeholder.com/300x480"></a></div>
        <div class="content">
            <div class="element"><div class="consultantName data" id="name"> {{consultantName}}</div></div>
            <div class="element"><div class="consultantPosition data" id="grade"> {{consultantPosition}}</div></div>
            <div class="element"><label for="name"> Communauté : </label><div class="consultantCommunity data" id="community"> {{consultantCommunity}}</div></div>
            <div class="element"><label for="languages"> Langues : </label><ul class="consultantLanguages data" id="languages">
                <li v-for="language in consultantLanguages " :key="language.language" class="language">
                {{ language.language }},  {{ language.level }} {{ language.eval }},{{ language.grade }}
                </li></ul>
              </div>
            <div class="element"></div>
        </div>

    </div> 
    </div>
</div>
</template>


<script>
export default {
  name: "browseProfile",
  data: () => ({
    consultantName: "Régis Dupin",
    consultantPosition: "Consultant Senior 1",
    positionsChoices: {
      grade: "Consultant",
      grade: "Consultant senior 1",
      grade: "Consultant senior 2",
      grade: "Program manager",
      grade: "Senior manager"
    },
    consultantLanguages: [
      { language: "Français", level: "Maternelle", eval: "", grade: "" },
      { language: "Anglais", level: "Courant", eval: "TOEIC", grade: "990" },
      { language: "Allemand", level: "Professionel", eval: "", grade: "" }
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
    consultantCommunity: "ADI",
    communityChoice: {
      community: "ADI",
      community: "MGT",
      community: "MKT",
      community: "RFR"
    }
  })
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
</style>

