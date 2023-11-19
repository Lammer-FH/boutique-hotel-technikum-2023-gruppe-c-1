// store/booking.js
import { defineStore } from 'pinia';

export const useBookingStore = defineStore({
  id: 'bookingStore',
  state: () => ({
    bookingData: {
      roomId: null,
      fromDate: null,
      toDate: null,
    },
  }),
  actions: {
    setBookingData(data) {
      this.bookingData = data;
    },
  },
});