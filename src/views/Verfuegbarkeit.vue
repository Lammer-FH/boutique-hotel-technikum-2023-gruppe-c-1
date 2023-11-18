<script>
  import axios from 'axios';
  import Vue from 'vue';
  export default {
    name: "Verfuegbarkeit",
    data(){
      return {
        alleZimmer: [],
        verfuegbar: [],
        vonDatum: "",
        bisDatum: "",
        personenAnzahl: null,
      };
    },
    getZimmerId() {
      axios.get("https://boutique-hotel.helmuth-lammer.at/api/v1/rooms")
      .then((response) => {
        let data = response.data;
        data.array.forEach((einZimmer) => {
          this.alleZimmer.push(einZimmer);
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .then(()=>{
        this.verfuegbarkeitsPruefung();
      })
    },
    verfuegbarkeitsPruefung(){
      this.einZimmer = [];
      this.alleZimmer.forEach((einZimmer) => {
        axios.get("https://boutique-hotel.helmuth-lammer.at/api/vi/room/" + verfuegbar.id + "/from/" + this.vonDatum + "/to/" + this.bisDatum)
        .then((response) => {
          let data = response.data;
          if(data.einZimmer == true){
            if(einZimmer.beds >= this.personenAnzahl){
              this.verfuegbar.push(einZimmer)
            }
          }
        })
        .catch((error)=>{
          console.error(error);
        })
      })
    },
  
  }
</script>

<template>
  
</template>

<style>
  
</style>