<script>
import axios from "axios";

export default {
  name: "Zimmer-2",
  data() {
    return {
      rooms: [],
    };
  },
  computed: {
    displayedRooms() {
      return this.rooms.slice(6, 10);
    }
  },
  methods: {
    hasExtra(room, extraName) {
      return room.extras.some(
        (extra) =>
          Object.keys(extra)[0] === extraName && Object.values(extra)[0] === 1
      );
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://boutique-hotel.helmuth-lammer.at/api/v1/rooms"
      );
      console.log(response.data);
      this.rooms = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<template>
  <div class="container sm-8" align-self="stretch" name="intoduction">
    <div class="container mt-5 about-text" v-for="room in displayedRooms" :key="room.id">
        <img :src="`/images/Boutique-Hotel-Rooms-${room.id}.jpg`" alt="Zimmerbild" class="room-image" />
      <h1>{{ room.roomsName }}</h1>
      <p>Zimmernummer: {{ room.roomsNumber }}</p>
      <p>Betten: {{ room.beds }}</p>
      <p>Preis pro Nacht: {{ room.pricePerNight }}</p>
      <div v-if="room.extras">
        <p v-if="hasExtra(room, 'bathroom')">
          <i class="fas fa-bath"></i> Badezimmer vorhanden
        </p>
        <p v-if="hasExtra(room, 'minibar')">
          <i class="fas fa-wine-glass"></i> Minibar vorhanden
        </p>
        <p v-if="hasExtra(room, 'television')">
          <i class="fas fa-tv"></i> Fernseher vorhanden
        </p>
        <p v-if="hasExtra(room, 'aircondition')">
          <i class="fas fa-wind"></i> Klimaanlage vorhanden
        </p>
      </div>
    </div>
    
    <b-button to="/zimmer-2">Mehr Zimmer</b-button>
    <b-button to="/verfuegbarkeit" blue>Jetzt Buchen!</b-button>

  </div>
</template>

<style scoped>
img {
  width: 50%;
  height: 50%;
}
</style>