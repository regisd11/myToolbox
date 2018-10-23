<template>
<div id="BorwseDCWrapper">
    <div id = "main box">
      <div class="content" id = "content">
        <div class="tile is-ancestor">
          <div class="tile is-parent" v-for="dc in dcList" :key="dc.index">
            <div class="box">
              <div class="tile is-parent">
                <div class="tile is-child"></div>
                <div class="tile is-parent is-vertical">
                  <div class="tile is-child" id="DCname"></div>
                  <div class="tile is-child" id="date">{{dc.createdAt}}</div>
                  <div class="tile is-child" id="exp">
                    <ul v-for="exp in dc.expSelectedForDC" :key="exp.index">
                      <li>{{exp.experienceName}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    
</div>
</template>

<script>
export default {
  name: "browseDC",
  mounted() {
    this.$store.dispatch("populateDcStoreAct");
  },
  computed: {
    dcList() {
      return this.$store.state.DCData.DCsList;
    }
  }
};
</script>

<style scoped>
@import "~bulma/css/bulma.css";

.linkButton {
  position: relative;
  height: 50px;
  width: 50px;
  text-decoration: none;
}
.icon2x {
  font-size: 2em;
}
.icon {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 50px;
  color: red;
  transition: font-size 300ms linear;
}
.icon:hover {
  font-size: 60px;
}

.main {
  z-index: 2;
  height: 100%;
  width: 90%;
  margin-left: 200px;
  padding: 0;
  text-decoration: none;
  position: relative;
}
.content {
  position: relative;
  float: left;
  margin-top: 150px;
  width: 50%;
  margin-bottom: 50px;
}
</style>

