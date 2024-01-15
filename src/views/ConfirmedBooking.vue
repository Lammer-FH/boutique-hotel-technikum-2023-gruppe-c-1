<script>
    import Booking from "../views/Booking.vue";

    export default {
        name: "ConfirmedBooking",
        components: {Booking},
        props: [],
        data(){
            return {
                bookingConfirmationData: "",
            };
        },
        created() {
            Booking.on('booking-data', this.handleBookingData);
        },
        computed: {
            handleBookingData(bookingData){
                const bookingConfirmed = {
                firstName : bookingData.firstName,
                lastName : bookingData.lastName,
                emailAdress : bookingData.emailAdress,
                birthday : bookingData.birthday,
                fromDate : bookingData.fromDate,
                toDate : bookingData.toDate,
                selectRoomId : bookingData.selectRoomId,
                numberOfGuests : bookingData.numberOfGuests,
                breakfast : bookingData.breakfast,
                };
                this.addBookingConfirmationData(bookingConfirmed);
            },
            addBookingConfirmationData(bookingConfirmed){
                this.bookingConfirmationData = bookingConfirmed;
                return this.bookingConfirmationData;
            }
        },
    }
</script>


<template>
    <b-container fluid>
        <b-col>
            <div class="container sm-8" align-self="stretch" name="booking-data">
                <div class="container sm-5 about text">
                    <b-col class="form-control">
                        <h2 align-self="center">Vielen Dank für Ihre Buchung!</h2>
                        <h4 align-self="center">Hier sehen Sie ihre Buchungsdaten:</h4>
                    </b-col>
                    <b-col class="form-control">
                    <b-list-group v-model="bookingConfirmationData">
                        <b-row name="room-data">
                            <b-list-gorup-item>
                            <p>Reservierungs-Nummer: {{  }}</p>
                        </b-list-gorup-item>
                        <b-list-gorup-item>
                            <p>Zimmernummer: {{  }}</p>
                        </b-list-gorup-item>
                        <b-list-gorup-item>
                            <p>Zimmername: {{  }}</p>
                        </b-list-gorup-item>
                        <b-list-gorup-item>
                            <p>Preis: {{  }}</p>
                        </b-list-gorup-item>
                        <b-list-gorup-item>
                            <p>Zimmer-Details: {{  }}</p>
                            <Zimmer-Details>

                            </Zimmer-Details>
                        </b-list-gorup-item>
                        </b-row>
                        <b-row name="personal-data">
                        <b-list-gorup-item>
                            <p>Vorname: {{  }}</p>
                        </b-list-gorup-item>
                        <b-list-gorup-item>
                            <p>Nachname: {{  }}</p>
                        </b-list-gorup-item>
                        <b-list-gorup-item>
                            <p>Email-Adresse: {{  }}</p>
                        </b-list-gorup-item>
                        <b-list-gorup-item>
                            <p>Personen: {{  }}</p>
                        </b-list-gorup-item>
                        <b-list-gorup-item>
                            <p>Frühstück: {{  }}</p>
                        </b-list-gorup-item>
                    </b-row>

                    </b-list-group>
                </b-col>
                </div>
            </div>
        </b-col>
    </b-container>
</template>