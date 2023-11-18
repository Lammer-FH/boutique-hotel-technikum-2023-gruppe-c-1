<script>
import axios from "axios";

export default {
  name: "Zimmer",
  data() {
    return {
      rooms: [],
      displayedRoomCount: 5,
      error: null,
      fromDate: '',
      toDate: '',
      availabilityMessage: '',
    };
  },
  computed: {
    displayedRooms() {
      return this.rooms.slice(0, this.displayedRoomCount);
    },
    allRoomsDisplayed() {
      return this.displayedRoomCount >= this.rooms.length;
    },
  },
  methods: {
    hasExtra(room, extraName) {
      return room.extras.some(
        (extra) =>
          Object.keys(extra)[0] === extraName && Object.values(extra)[0] === 1
      );
    },
    loadMoreRooms() {
      this.displayedRoomCount += 5;
    },
    async checkAvailability(roomId) {
      if (!this.fromDate || !this.toDate) {
        this.availabilityMessage = 'Bitte wählen Sie einen gültigen Zeitraum.';
        return;
      }

      try {
        const response = await axios.get(`https://boutique-hotel.helmuth-lammer.at/api/v1/room/${roomId}/from/${this.fromDate}/to/${this.toDate}`);
        if (response.data.state === 200) {
          this.availabilityMessage = 'Das Zimmer ist in diesem Zeitraum verfügbar.';
        } else {
          this.availabilityMessage = 'Das Zimmer ist in diesem Zeitraum nicht verfügbar.';
        }
      } catch (error) {
        this.error = 'Fehler beim Überprüfen der Verfügbarkeit.';
      }
    }
  },
  async mounted() {
    try {
      const response = await axios.get("https://boutique-hotel.helmuth-lammer.at/api/v1/rooms");
      this.rooms = response.data;
    } catch (error) {
      this.error = error.message;
    }
  },
};
</script>
<template>
    <div class="container sm-8" align-self="stretch" name="introduction">
      <div
        class="container mt-5 about-text"
        v-for="room in displayedRooms"
        :key="room.id"
      >
        <img
          :src="`../assets/images/Boutique-Hotel-Rooms-${room.id}.jpg`"
          alt="Zimmerbild"
          class="room-image"
        />
        <h1>{{ room.roomsName }}</h1>
        <p>Zimmernummer: {{ room.roomsNumber }}</p>
        <p>Betten: {{ room.beds }}</p>
        <p>Preis pro Nacht: {{ room.pricePerNight }} €</p>
        <p>Extras:</p>
        <div v-if="room.extras">
          <p v-if="hasExtra(room, 'bathroom')">Badezimmer vorhanden</p>
          <p v-if="hasExtra(room, 'minibar')">Minibar vorhanden</p>
          <!-- Weitere Extras -->
        </div>
        <div class="availability-checker">
          <input v-model="fromDate" type="date" placeholder="Von">
          <input v-model="toDate" type="date" placeholder="Bis">
          <b-button @click="checkAvailability(room.id)">Verfügbarkeit prüfen</b-button>
          <p v-if="availabilityMessage">{{ availabilityMessage }}</p>
        </div>
      </div>
      <b-button v-if="!allRoomsDisplayed" @click="loadMoreRooms">Mehr Zimmer laden</b-button>
      <p v-if="error" class="error-message">Fehler beim Laden der Zimmer: {{ error }}</p>
    </div>
  </template>
  
  
  <style scoped>
  img {
    width: 50%;
    height: 50%;
  }
  
  .error-message {
    color: red;
  }
  
  .availability-checker {
    margin-top: 15px;
  }
  
  .availability-checker input[type="date"] {
    margin-right: 10px;
  }
  </style>
  