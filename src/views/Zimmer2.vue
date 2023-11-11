<template>
    <div>
                <!-- Überschrift -->
                <div class="zimmer-header">
            <h2>Unsere Zimmer</h2>
        </div>
        <!-- Zimmerliste -->
        <b-container fluid>
            <b-row>
                <b-col sm="12" class="d-flex justify-content-center">
                    <div class="room-list">
                        <div v-for="room in rooms" :key="room.id" class="room">
                            <h3 class="room-title">{{ room.name }}</h3>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div class="navigation-back-to-zimmer">
            <router-link to="/zimmer" class="btn btn-custom">Vorige Seite</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Zimmer',
    data() {
        return {
            rooms: [
                {
                    id: 1,
                    name: 'Platz für weitere Zimmer',
                },
            ]
                };
    }
};
</script>

<style scoped>
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

.navigation-back-to-zimmer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.btn-custom {
    background-color: #f5f5f5; /* Leichtes Grau */
    color: #333; /* Dunkle Schriftfarbe */
    border: 1px solid #ccc;
}

/* Optional: Hover-Effekt für den Button */
.btn-custom:hover {
    background-color: #eaeaea; /* Etwas dunkleres Grau beim Hover */
}

</style>

