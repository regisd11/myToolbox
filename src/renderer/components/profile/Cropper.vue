<template>
    <div class="cropper">
       <croppa v-model="myCroppa"
        :width="146"
        :height="176"
        :placeholder="'Cliquer ou déposer une photo'"
        :placeholder-font-size="24"
        :placeholder-color="'default'"
        :accept="'image/*'"
        :show-remove-button="true"
        ></croppa>
        <div class="buttons">
           <button @click="saveImage">Enregistrer</button>
           <button @click="cancel">Annuler</button>
        </div>
    </div>
</template>

<script>
import path from "path";
import { resolve } from "url";
import { remote } from "electron";
import fs from "fs";

export default {
  data: () => ({
    myCroppa: {},
    urlImg: null
  }),
  methods: {
    saveImage() {
      let base64Data = this.myCroppa.generateDataUrl();
      if (!base64Data) {
        alert("no image");
        return;
      }
      let base64Image = base64Data.split(";base64,").pop();
      fs.writeFileSync(
        path.join(remote.app.getPath("userData"), "/photo.png"),
        base64Image,
        { encoding: "base64" }
      );
      this.$store.dispatch("getPhoto");
      this.$store.dispatch("toggleImage");
    },
    cancel() {
      this.$store.dispatch("toggleImage");
    }
  }
};
</script>

<style scoped>
.cropper {
  display: flex;
  flex-flow: column nowrap;
}
</style>
