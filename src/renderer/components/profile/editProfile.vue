<template>
<div id="wrapper">
  
</div>
</template>

<script>
export default {
  name: "editProfile",
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

