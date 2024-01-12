<script>
    import { useLoginHandlerApiStore } from '../stores/loginHandlerApiStore';
    import { useAccountCreationApiStore } from '../stores/accountCreationApiStore';
    export default
    {
        name: 'Registrierung',
        data(){
            return {
                accountCreationApi: useAccountCreationApiStore(),
                tos: false,
                dataPrivacyAggree: false,
                userData: {
                    firstname: "",
                    lastname: "",
                    username: "",
                    email: "",
                    password: "",
                },

            }
        },
        methods: {
            register(){
                if (this.tos == true && this.dataPrivacyAggree == true){
                    this.loginHandlerApi.registerUser(this.userData);
                }
            }   
        },
    }
</script>

<template>
    <b-container><b-col>
    <h3>Neuen Account anlegen?</h3>
    <form @submit.prevent="login()" class="form-control">
        <div class="mb-3">
      <label for="firstname" class="form-label">Vorname</label>
      <input
        type="text"
        class="form-control"
        id="firstname"
        v-model="firstname"
        required
      />
    </div>
        <div class="mb-3">
      <label for="lastname" class="form-label">Nachname</label>
      <input
        type="text"
        class="form-control"
        id="lastname"
        v-model="lastname"
        required
      />
    </div>
    <div class="mb-3">
      <label for="username" class="form-label">User-Name</label>
      <input
        type="text"
        class="form-control"
        id="username"
        v-model="username"
        required
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email-Adresse</label>
      <input
        type="text"
        class="form-control"
        id="email"
        v-model="email"
        required
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Passwort</label>
      <input
        type="text"
        class="form-control"
        id="password"
        v-model="password"
        required
      />
    </div> 
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="terms-of-service"
        v-model="tos"
        required
      />
      <label class="form-check-label" for="terms-of-service">AGB</label>
    </div>
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="data-privacy-aggreement"
        v-model="dataPrivacyAggree"
        required
      />
      <label class="form-check-label" for="data-privacy-aggreement">Datenschutzrichtlinien</label>
    </div>   
    <b-button @click="registerUser()">Regstrieren</b-button>
  </form>
</b-col>
</b-container>
</template>