<script>
import axios from 'axios';
export default {
name: 'DatabaseConnection',
data () {
    return {
        databaseContent: [],
     };
}, 
mounted () {
this.fetchData();
},
methods: {
fetchData () {
    const baseURL = "https://boutiquehotel.helmuthlammer.at";
    const endpoint = '/api/v1/rooms';
    const instance = axios.create({
  baseURL: baseURL,
});
instance.get(endpoint)
  .then(response => {
    // Hier kannst du mit der Antwort arbeiten
    this.databaseContent = response.data;
  })
  .catch(error => {
    // Hier kannst du Fehler handhaben
    console.error("Verkakt", error);
  });
}
}
}
</script>

<template>
        <b-container fluid>
            <b-row>
                <b-col sm="12" class="d-flex justify-content-center">
                    <div class="room-list">
                        <div v-for="room in databaseContent" :key="room.id" class="room">
                            <h3 class="room-title">{{ room.name }}</h3>
                            <p class="room-description">{{ room.description }}</p>
                            <img :src="room.imagePath" class="room-image img-fluid" alt="Zimmerbild">
                            <div class="book-button">
                                <b-button to="/room-details" blue>Buchen</b-button>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
</template>