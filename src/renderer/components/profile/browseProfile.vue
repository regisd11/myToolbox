<template>
<div id="wrapper">
  <div :class="$style.appLogoContainer"><img :class="$style.appLogo" v-bind:src="appLogoUrl"></div>
    <div :class="[$style.grid, $style.main]">
        <div :class="$style.title"> <h1> <em> Mon profil </em> </h1></div>
        <div :class="$style.photo"><a href="https://placeholder.com" prevent><img src="http://via.placeholder.com/114x150"></a></div>
        <div :class="$style.content">
            <label for="name"> Nom : </label><div :class="$style.consultantName" id="name">{{consultantName}}</div>
            <label for="grade"> Grade : </label><div :class="$style.consultantPosition" id="grade">{{consultantPosition}}</div>
            <label for="name"> Communauté : </label><div :class="$style.consultantCommunity" id="community">{{consultantCommunity}}</div>
            <label for="languages"> Langues : </label><ul :class="$style.consultantLanguages" id="languages">
                <li v-for="language in consultantLanguages " :key="language.language" :class="$style.language">
                {{ language.language }},  {{ language.level }} {{ language.eval }},{{ language.grade }}
                </li></ul>
        </div>

    </div> 
    
</div>
</template>


<script>
export default {
  name: "browseProfile",
  data: () => ({
    appLogoUrl: "static/imgs/appLogo2.svg",
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

<style module>
.wrapper {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/*
* — wrapper grid—
*/
.main {
  z-index: 2;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: grid;
  position: relative;
  grid-template-columns: 150px 150px 1fr;
  grid-template-rows: 110px 250px auto;
  grid-template-areas:
    "header header header"
    "sidebar title title"
    "sidebar photo content";
  grid-gap: 10px;
}

/*
* — App logo —
*/

.appLogoContainer {
  position: fixed;
  height: 120px;
  left: 2em;
  top: 2em;
}
.appLogo {
  width: 120px;
  height: auto;
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
/*
* — photo —
*/

.photo {
  grid-area: photo;
}
/*
* — informations —
*/
.content {
  grid-area: content;
  width: 100%;
}

.name {
  justify-content: flex-start;
  vertical-align: middle;
  width: 100%;
}

.consultantLanguages {
  list-style: none;
}

.lang {
}

.lang {
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

.title h1 em::before,
.title h1 em::after {
  content: "";
  display: inline-block;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  opacity: 0.2;
  margin: 0 0.6em;
  font-size: 0.5em;
}
</style>

