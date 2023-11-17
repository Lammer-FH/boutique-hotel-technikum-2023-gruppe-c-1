<script>
  import axios from 'axios'
  import { vModelDynamic } from 'vue';
  export default{
    name: 'Verfuegbarkeit',
    data() {
      return{
        availableRooms: [],
      };
    },
    methods: {
      
    },
    async mounted(){
      try{
        const response= await axios.get("https://boutique-hotel.helmuth-lammer.at/api/v1/rooms{roomId}/{from-date}/to/{to-date}");

      }catch (error){
        console.error(error);

      }
    }
  }
</script>

<template>
  <div>
      <b-container fluid>
        <b-row>
          <b-col class="date-to-date" sm="6">
            <div class="container sm-8">
                <p align-self="center">Wählen Sie ihr Ankunfstdatum:</p>
                <b-form-input align-self="center" v-model="Von" type="date" name="von-datum"></b-form-input>
            </div>
            <div class="container sm-8">
                <p align-self="center">Wählen Sie ihren Aufenthaltszeitraum:</p>
                <b-form-input align-self="center" v-model="Bis" type="date" name="bis-datum"></b-form-input>
            </div>
          </b-col>
          <b-col class="user-data" sm="6">
            <div class="container sm-8">
              <ul>
                <li>
                  <p name="first_name">First Name:</p>
                  <b-form-input type="text" align-self="center" v-model="first_name" name="first_name"></b-form-input>
                </li>

                <li>
                  <p name="last_name">Last Name:</p>
                  <b-form-input type="text" align-self="center" v-model="last_name" name="last_name"></b-form-input>
                </li>
                <li>
                  <p name="email">E-Mail:</p>
                  <b-form-input align-self="center" v-model="email" name="email"></b-form-input>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<style scoped>
  .date-to-date {
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: 16px;
  }

  .user-data {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    font-size: 16px;
  }
</style>