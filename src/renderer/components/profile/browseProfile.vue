<template>
<div id="wrapper">
    <div class="main">
      <div class="cardbox">
        <div class="photo"><img v-bind:src='photo'></div>
        <div class="content">
            <div class="element"><div class="consultantName data" id="name"> {{profile.consultantName}}</div></div>
            <div class="element"><div class="consultantPosition data" id="grade"> {{profile.consultantPosition}}</div></div>
            <div class="element"><label for="name"> Communauté : </label><div class="consultantCommunity data" id="community"> {{profile.consultantCommunity}}</div></div>
            <div class="element">Langues :</div>
            <table >
              <thead>
              <tr>
                <th>Langue</th>
                <th>Niveau</th>
                <th>Examen</th>
                <th>Note</th>
              </tr>
              </thead>
              <tr v-for="language in profile.consultantLanguages" :key="language.language">
                <td>{{ language.language }}</td>
                <td>{{ language.level }}</td>
                <td>{{ language.eval }}</td>
                <td>{{ language.grade }}</td>
              </tr>
            </table>
        </div>
      </div> 
    </div>
</div>
</template>


<script>
export default {
  name: "browseProfile",

  computed: {
    photo() {
      return this.$store.state.photoLoader.photo;
    },
    profile() {
      return this.$store.state.ProfileData.profile;
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

td:first-child,
th:first-child {
  text-align: left;
}

td:nth-last-child(2),
th:nth-last-child(2) {
  text-align: right;
}

td + td:not(:nth-last-child(2)) {
  text-align: center;
}
</style>

