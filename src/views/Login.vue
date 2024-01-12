<script>
    import { useLoginHandlerApiStore } from '../stores/loginHandlerApiStore';
    import { useAccountCreationApiStore } from '../stores/accountCreationApiStore';
    export default
    {
        name: 'Login',
        data(){
            return {
                loginHandlerApi: useLoginHandlerApiStore(),
                accountCreationApi: useAccountCreationApiStore(),
                loginData: {
                    email: "", 
                    password: ""
                },
            }
        },
        methods: {
            login(){
                this.loginHandlerApi.userLogin(this.loginData);
            },
               
        },
    }
</script>

<template>
    <b-container fluid>
        <b-col>
            <h3>Ich habe bereits einen Account:</h3>
  <form @submit.prevent="login()" class="form-control">
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
    <b-button @click="login()">Einloggen</b-button>
  </form>
</b-col>
<b-col>
    <h3>Neuen Account anlegen?</h3>
    
    <router-link to ="/registrierung">
        <b-button>Jetzt Registrieren!</b-button>
    </router-link>   
    </b-col>
</b-container>
</template>