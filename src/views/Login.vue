<template>
    <div class="login w-50 p-3 d-flex justify-content-center" > 
        <form @submit.prevent="onSubmit" class="px-4 py-3">
            
            <div class="input-group mb-4">
                <div class="input-group-prepend form-outline mb-4 ">
                    <label class="form-label">Email:</label>
                    <input v-model="email" class="form-control" placeholder="Example@example.com" />
                </div>
            </div>
            <div class="form-group mb-4">
                <label for="inputPassword2" class="sr-only form-label">Password:</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password"/>
            </div>
            <!-- <div>
                <input type="submit" id="btnSubmit" name="submit button" class="">
            </div> -->
            <!-- <div class="form-check mb-4">
                <input type="checkbox" class="form-check-input" id="dropdownCheck">
                <label class="form-check-label" for="dropdownCheck">
                     Remember me
                </label>
            </div> -->


            <div class="input-group ">
                <div class="input-group-prepend col text-center">
                    <!-- <button class="btn btn-outline-secondary" type="button">Button</button> -->
                    <input type="submit" value="Login" id="btnSubmit" name="submitButton" class="btn btn-primary mb-2 " placeholder="" aria-label="" aria-describedby="basic-addon1">
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
                        alert(this.email);
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
                console.log(this.email);
                console.log(this.password);
                return false;
            }
            return true;
        }
    }
}
</script>

<style scoped>
    label{ display: block; }
    .login{border: 1px solid black}
</style>