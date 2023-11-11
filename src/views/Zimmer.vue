<template>
    <div>
                <!-- Überschrift -->
                <div class="zimmer-header">
            <h2>Unsere Zimmer</h2>
        </div>
        <!-- Zimmerliste -->
        <DataBaseConnection></DataBaseConnection>
    </div>
    <div class="navigation-to-zimmer2">
        <router-link to="/zimmer2" class="btn btn-custom">Nächste Seite</router-link>
    </div>
</template>

<script>
import DataBaseConnection from '../components/database/DataBaseConnection.vue';
export default {
    name: 'Zimmer',
    data() {
        return {
            rooms: [
                {
                    id: 1,
                    name: 'Standard Zimmer',
                    description: 'Raumgröße: 20m², Queen-Size-Bett, Dusche, Wifi',
                    imagePath: 'src/assets/Boutique-Hotel-Rooms-1.jpg'
                },
                {
                    id: 2,
                    name: 'Deluxe Zimmer',
                    description: 'Raumgröße: 25m², King-Size-Bett, Dusche, Wifi, Minibar',
                    imagePath: 'src/assets/Boutique-Hotel-Rooms-2.jpeg'
                },
                {
                    id: 3,
                    name: 'Doppelzimmer',
                    description: 'Raumgröße: 25m², Doppelbett, Badewanne, Wifi, Minibar',
                    imagePath: 'src/assets/Boutique-Hotel-Rooms-4.jpeg'
                },
                {
                    id: 4,
                    name: 'Suite',
                    description: 'Raumgröße: 45m², Extra großes Bett, Dusche und Badewanne, Klimaanlage, Wifi, Kochnische, Minibar',
                    imagePath: 'src/assets/Boutique-Hotel-Rooms-3.jpeg'
                },

                {
                    id: 5,
                    name: 'Einzelzimmer',
                    description: 'Raumgröße: 20m², Einzelbett, Dusche, Wifi, Minibar',
                    imagePath: 'src/assets/Boutique-Hotel-Rooms-5.jpeg'
                }
            ]
                };
    },
    components: { DataBaseConnection }
};
</script>

<style scoped>
.room-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.room {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    padding: 15px;
    text-align: center;
    width: 50%; /* Breitenanpassung */
}

.room-title {
    margin-bottom: 10px;
}

.room-description {
    margin-bottom: 10px;
}

.room-image {
    width: 200px;
    height: 150px;
    margin-bottom: auto;
}

.book-button {
    margin-top: 10px;
}

/* Stil für die Überschrift */
.zimmer-header {
    display: flex;
    justify-content: center; /* Zentriert den Inhalt horizontal */
    margin-top: 20px;
    margin-bottom: 10px;
}

.zimmer-header h2 {
    width: 49%;
    color: #333; /* Dunkle Schriftfarbe */
    font-weight: bold;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    padding: 15px;
    text-align: center; /* Zentriert den Text innerhalb des h2-Elements */
}

.navigation-to-zimmer2 {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.btn-custom {
    background-color: #f5f5f5; /* Leichtes Grau */
    color: #333; /* Dunkle Schriftfarbe für Kontrast */
    border: 1px solid #ccc;
}

/* Ändern Sie das Hover-Verhalten des Buttons */
.btn-custom:hover {
    background-color: #eaeaea; /* Etwas dunkleres Grau beim Hover */
}

</style>