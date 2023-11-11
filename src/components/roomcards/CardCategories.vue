<template>
        <b-container fluid>
            <b-row>
                <b-col sm="12" class="d-flex justify-content-center">
                    <div class="room-list">
                        <div v-for="room in roomtypes" :key="room.id" class="room">
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

<script>
export default{
    name: 'CardCategorie', 
    props: {
        roomtypes: Array
    }
}
</script>