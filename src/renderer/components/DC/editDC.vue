<template>
<div id="editDCWrapper">
    <div id = "main">
        <h1>Editer un nouveau dossier</h1>
    </div> 
</div>

</template>


<script>
export default {
  name: "editDC"
};
</script>

<style module>
.backToBrowse {
  z-index: 500;
  position: fixed;
  bottom: 3em;
  right: 4em;
  height: 50px;
  width: 50px;
}
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
</style>

