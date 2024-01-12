import { defineStore } from 'pinia';
import axios from "axios";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useBookingApiStore = defineStore("bookingApi",{
  state: () => ({
      bookingId: 0,
      room: null,
      fromDate: null,
      toDate: null,
      isValid: false,
  }),
  
  actions: {
      postBooking(bookingData) {
	      let data = {
	        firstname: bookingData.firstname,
	        lastName: bookingData.lastName,
	        email: bookingData.emailAdress,
	        birthdate: bookigData.birthday,
          breakfast: bookigData.breakfast,
	      };
	      return axios.post(
	        apiUrl + 
	        "room/" + bookingData.selectRoomId +
	        "/from" + bookingData.fromDate +
	        "/to" + bookingData.toDate,
	        data
	      ).then((response) => {
	        this.$state.isValid = true;
	        this.$dtate.bookingId = response.data.id;
	      }).catch((error) => {
	        this.$state.isValid = false;
	        this.$state.bookingId = 0;
          this.error = "An error has been detected";
          console.log(error);
	      });
      },      
  },
});