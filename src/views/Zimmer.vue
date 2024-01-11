<script>
import axios from "axios";
import { useBookingStore } from "../stores/bookingStore";
import { useRoomApiStore } from "../stores/roomApiStore";

export default {
  name: "Zimmer",
  data() {
    return {
      rooms: [],
      availableRooms: [],
      fromDate: "",
      toDate: "",
      validDate: true,
      roomApi: useRoomApiStore(),
      error: false,
      currentPage: 1,
      itemsPerPage: 5,
      };
  },
  created(){
    this.getRooms();
    let today = new Date();
    this.fromDate = this.dateToString(today);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    this.toDate = this.dateToString(tomorrow);
  },
  watch: {
    fromDate(newDateFromString) {
      if(Date.parse(newDateFromString) > Date.parse(this.toDate)) {
        this.validDate = false;
      }else{
        this.validDate = true;
      };
    },
    
    toDate(newDateFromString) {
      if(Date.parse(newDateFromString) > Date.parse(this.fromDate)) {
        this.validDate = false;
      }else{
        this.validDate = true;
      };
    },
  },

  computed: {
    minDateFrom(){
      const today = new Date();
      return this.dateToString(today);
    },
    minDateTo(){
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1 );
      return this.dateToString(tomorrow);
    },
    displayedRooms() {
      let start = (this.currentPage - 1) * this.itemsPerPage;
      let end = start + this.itemsPerPage;
      return this.rooms.slice(start, end);
    },
  },

  methods: {
    getRooms() {
      this.roomApi.getRooms().then(() => {
        this.rooms = this.roomApi.rooms;
      });
    },
    dateToString(date){
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    checkAvailability() {
		  this.availableRooms = [],
		  this.rooms.forEach((room) => {
			this.checkRoomAvailability(room);
		  })
	  },
    checkRoomAvailability(room){
      this.roomApi.checkAvailability(room.id, this.fromDate, this.toDate).then(() => {
        if(this.roomApi.checkAvailabilityErrorCode != 200){
          this.error = true;
        }else{
          if(this.roomApi.isRoomAvailable){
            this.availableRooms.push(room);
          }
        };
        console.log("Verfügbarkeit abgefragt");
      })
      setTimeout(() => {},500);
    },
    sendDataToBookingView(){
      const data = {
        fromDate:this.fromDate,
        toDate: this.toDate,
			  availableRooms: this.room,
			  validDate: this.validDate,
      };
      this.$emit(data);
    },
    async continueToBookingRoom(room) {
      this.roomApi.fetchRoomDetails().then(() => {
        this.sendDataToBookingView(room);
      })
    },
    hasExtra(room, extraName) {
      return room.extras.some(
        (extra) =>
          Object.keys(extra)[0] === extraName && Object.values(extra)[0] === 1
      );
    },
  }
}
</script>

<template>
  <b-container fluid>
    <b-col>
        <b-form-group>
          <label for="fromDate" class="form-label">Von:</label>
          <b-form-input type="date" v-model="fromDate" id="fromDate" :min="minDateFrom"></b-form-input>
        </b-form-group>

        <b-form-group>
          <label for="toDate" class="form-label">Bis:</label>
          <b-form-input type="date" v-model="toDate" id="toDate" :min="minDateTo"></b-form-input>
        </b-form-group>

        <b-button @click="checkAvailability(rooms)" variant="primary">
          Verfügbarkeit Prüfen
        </b-button>
      </b-col>
    <b-col>
      <div class="container sm-8" align-self="stretch" name="intoduction">
        <div
        class="container mt-5 about-text"
        v-for="room in availableRooms"
        :key="room.id"
        >
        <b-row>
          <img
          :src="`/images/Boutique-Hotel-Rooms-${room.id}.jpg`"
          alt="Zimmerbild"
          class="room-image"
          />
          <h1>{{ room.roomsName }}</h1>
          <p>Zimmernummer: {{ room.roomsNumber }}</p>
          <p>Betten: {{ room.beds }}</p>
          <p>Preis pro Nacht: {{ room.pricePerNight }} €</p>
          <p>Extras:</p>
          <div v-if="room.extras">
            <p v-if="hasExtra(room, 'bathroom')">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-droplet"
              viewBox="0 0 16 16"
              >
                <path
                fill-rule="evenodd"
                d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                />
                <path
                fill-rule="evenodd"
                d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
                />
              </svg>
              <i class="fas fa-bath"></i> Badezimmer vorhanden
            </p>
            <p v-if="hasExtra(room, 'minibar')">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cup-straw"
              viewBox="0 0 16 16"
              >
                <path
                d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"
                />
              </svg>
              <i class="fas fa-wine-glass"></i> Minibar vorhanden
            </p>
            <p v-if="hasExtra(room, 'television')">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-tv"
              viewBox="0 0 16 16"
              >
                <path
                d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"
                />
              </svg>
              <i class="fas fa-tv"></i> Fernseher vorhanden
            </p>
            <p v-if="hasExtra(room, 'livingroom')">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house-heart"
              viewBox="0 0 16 16"
              >
                <path
                d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z"
                />
                <path
                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"
                />
              </svg>
              <i class="fas fa-livingroom"></i> Wohnzimmer vorhanden
            </p>
            <p v-if="hasExtra(room, 'aircondition')">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-snow"
              viewBox="0 0 16 16"
              >
                <path
                d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"
                />
              </svg>
              <i class="fas fa-wind"></i> Klimaanlage vorhanden
            </p>
            <p v-if="hasExtra(room, 'wifi')">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-wifi"
              viewBox="0 0 16 16"
              >
                <path
                d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"
                />
                <path
                d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"
                />
              </svg>
              <i class="fas fa-wind"></i> WIFI vorhanden
            </p>
            <p v-if="hasExtra(room, 'breakfast')">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-egg-fried"
              viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"
                />
              </svg>
              <i class="fas fa-wind"></i> Frühstück inkludiert
            </p>
            <p v-if="hasExtra(room, 'handicapped accessible')">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-wheelchair"
              viewBox="0 0 16 16"
              >
                <path
                d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.732 4.732 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.732 4.732 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79l1.903-2.854ZM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65l1.077 1.078Z"
                />
              </svg>
              <i class="fas fa-wind"></i> Barrierefrei
            </p>
          </div>
        </b-row>
        <b-row>
          <router-link to="/booking">
            <b-button v-model="continueToBookingRoom">
              Zimmer buchen
            </b-button>
          </router-link>
        </b-row>
        </div>
      </div>
    </b-col>
  </b-container>
</template>

<style scoped>
img {
  width: 50%;
  height: 50%;
}
</style>
