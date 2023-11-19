<template>
  <h1>Buchen Sie jetzt Ihr Zimmer</h1>
  <br />

  <form @submit.prevent="submitBooking" class="needs-validation" novalidate>
    <div class="mb-3">
      <label for="firstName" class="form-label">Vorname</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        v-model="firstName"
        required
      />
    </div>
    <div class="mb-3">
      <label for="lastName" class="form-label">Nachname</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        v-model="lastName"
        required
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">E-Mail</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="email"
        required
      />
    </div>
    <div class="mb-3">
      <label for="emailConfirm" class="form-label">E-Mail bestätigen</label>
      <input
        type="email"
        class="form-control"
        id="emailConfirm"
        v-model="emailConfirm"
        required
      />
    </div>
    <div class="mb-3">
      <label for="birthday" class="form-label">Geburtstag</label>
      <input
        type="date"
        class="form-control"
        id="birthday"
        v-model="birthday"
        required
      />
    </div>
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="breakfast"
        v-model="breakfast"
      />
      <label class="form-check-label" for="breakfast">Frühstück</label>
    </div>

    <b-button @click="submitBooking()">Zimmer buchen</b-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      emailConfirm: "",
      breakfast: false,
      roomId: "1",
      fromDate: "",
      toDate: "",
    };
  },
  methods: {
    async submitBooking() {
      if (this.email !== this.emailConfirm) {
        alert("Die E-Mails stimmen nicht überein.");
        return;
      }

      try {
        await axios.post(
          "https://boutique-hotel.helmuth-lammer.at/api/v1/room/${roomId}/from/${fromDate}/to/${toDate}`",
          {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            breakfast: this.breakfast,
          }
        );
        alert("Buchung erfolgreich!");
      } catch (error) {
        alert(
          "Es gab einen Fehler bei der Buchung. Bitte überprüfen Sie Ihre Eingaben."
        );
      }
    },
  },
};
</script>
