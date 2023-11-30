<template>
    <div class="login"> 
        <form @submit.prevent="onSubmit">
            <div class="input-group mb-6">
                <div class="input-group-prepend">
                    <label>Email:</label>
                    <input v-model="email" lass="form-control" placeholder="Example@example.com" />
                </div>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Password:</label>
                <input type="password" v-model="password" placeholder="Password"/>
            </div>
            <!-- <div>
                <input type="submit" id="btnSubmit" name="submit button" class="">
            </div> -->
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <!-- <button class="btn btn-outline-secondary" type="button">Button</button> -->
                    <input type="submit" id="btnSubmit" name="submitButton" class="btn btn-primary mb-2" placeholder="" aria-label="" aria-describedby="basic-addon1">
                </div>
                    
            </div>
        </form>
    </div>  <!-- bootstrap this form -->
</template>

<script>
import {login} from '../api.js'
export default {// GStore = Global Store
    inject: ['GStore'], // adding an option of this object and this is an array
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        onSubmit(){
            if(this.validate()){
                login(this.email, this.password).then(user => {
                    if(user){
                        this.GStore.currentUser = user;
                        sessionStorage.setItem("currentUser", JSON.stringify(user));
                        this.$router.push({name: "home"}); // relocating to the page when you login.. to home
                    }else{
                        alert("LOGIN FAILED!");
                    }
                })
            }
        },
        validate(){
            if(!this.email || !this.password){
                alert("Invalid Input");
                return false;
            }
            return true;
        }
    }
}
</script>

<style scoped>
    label{ display: block; }
</style>