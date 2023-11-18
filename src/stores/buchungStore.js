import {defineStore} from 'pinia';
import axios from 'axios';

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useBuchungStore = defineStore('buchung', {
    state: () => ({
        buchungsID: 0,
        buchungsBest: false
    }),
    
    actions: {
        postApi(buchungsDaten) {
            let data = {
                "firstname": buchungsDaten.firstName,
                "lastname": buchungsDaten.lastName,
                "email": buchungsDaten.emailAdress,
                "birthdate": buchungsDaten.birthday,
            }
            axios
                .post(apiUrl + "room/"
                    + buchungsDaten.selectedRoomId + "/from/"
                    + buchungsDaten.dateFrom + "/to/"
                    + buchungsDaten.dateTo, data)
                .then((response) => {
                    this.$state.buchungsBest = true
                    this.$state.buchungsID = response.data.id
                })
                .catch((error) => {
                    console.error(error)
                    this.$state.buchungsBest = false
                    this.$state.buchungsID = 0;
                });
        }
    }
});