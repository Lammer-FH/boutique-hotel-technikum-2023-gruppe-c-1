import axios from "axios";
import { defineStore } from "pinia";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useAccountCreationApiStore = defineStore("accountCreationApi", {
    state: () => ({
        token: '', 
        loginHandlerApi: {
            firstname: null,
            lastname: null,
            email: null,
            birthdate: null,
        }, 
    }),
    getters:{
        isLoggedIn: state => !!state.token,
    },
    actions: {
        setToken(token){
            this.token = token;
        },
        async registerUser(firstname, lastname, email, username, password){
            if(!this.isLoggedIn){
                await axios.post(apiUrl + 'register', {
                    firstname,
                    lastname,
                    email,
                    username,
                    password
                }).then((response) => {
                    const token = response.data;
                    this.setToken(token);
                    this.displayUserInfo();
                }).catch((error) => {
                    this.error = "An error has been detected";
          	        console.log(error);
                })
            }else{
                throw new Error('An Error has been detected');
            }
        },
        async displayUserInfo(){
            await axios.get(apiUrl + 'user', {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    Accept: 'application/json',
                }
            }).then((response) => {
                this.loginHandlerApi = response.data;
            }).catch((error) => {
                this.error = "An error has been detected";
                console.log(error);
            })
        },
    },
});