import axios from "axios";
import { defineStore } from "pinia";

const apiUrl = "https://boutique-hotel.helmuth-lammer.at/api/v1/";

export const useLoginHandlerApiStore = defineStore('loginHandlerApi', {
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
        setLoginInformation(key, value){
            if(key in this.loginHandlerApi) {
                this.loginHandlerApi[key] = value;
            }else{
                throw new Error('An Error has been detected');
            }
        },
        async userLogin(email, password){
            await axios.post(apiUrl + 'login', {
                clientId: email,
                secret: password,
            }).then((response) => {
                const token = response.data;
                this.setToken(token);
                this.displayUserInfo();
            }).catch((error) => {
                this.error = "An error has been detected";
                console.log(error);
            })
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
        userLogout(){
            this.setToken('');
        }
    },
});