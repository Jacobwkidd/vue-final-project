<template>
    <div v-if="user">
        <form @submit.prevent="onSubmit">
            <div>
                <label class="form-label">First Name:</label>
                <div class="validation">{{errors.firstName}}</div>
                <input v-model="user.firstName" class="form-control" placeholder="John"/>
            </div>
            <div>
                <label class="form-label">Last Name:</label>
                <div class="validation">{{errors.lastName}}</div>
                <input v-model="user.lastName"  class="form-control" placeholder="Doe"/>
            </div>
            <div>
                <label class="form-label" >Email:</label>
                <div class="validation">{{errors.email}}</div>
                <input v-model="user.email" type="email" class="form-control" placeholder="email@example.com" />
            </div>
            <div>
                <label class="form-label">Password:</label>
                <div class="validation">{{errors.password}}</div>
                <input type="password" v-model="user.password" class="form-control" placeholder="Password"/>
            </div>
            <div >
                <label class="form-label">Role:</label>
                <select v-if="roles.length > 0" v-model="user.roleId" class="form-select">
                	<option v-for="r in roles" :key="r.id" :value="r.id">{{r.name}}</option>
                </select>
            </div>
            <div>
                <label class="form-check-label">Active:</label>
                <input type="checkbox" v-model="user.active">
            </div>
            <div class="buttons">
                <input type="submit" id="btnSubmit" name="submit button" class="btn btn-primary mb-4 px-4 me-2">
                <input type="button" @click="$router.push({name:'UserList'})" value="Cancel" class="btn btn-secondary mb-4 px-4 me-2">
            </div>
        </form>
    </div>
</template>

<script>
import {getUserById, getAllRoles, updateUser, insertUser} from "@/api"

export default {
    props:["userId"],
    data(){
        return{
            user:null,
            roles:[],
            errors: {}
        }
    },
    mounted(){
         if(this.$route.name != "AddUser" && isNaN(this.userId)){
            this.$router.push({name:"NotFound"});
        }
        getAllRoles().then(roles => this.roles = roles);

        if(this.userId > 0){
            getUserById(this.userId)
                .then(user => this.user = user)
                .catch(err => this.$router.push({name:"NotFound"}));
        }
        else{
            // if the userId prop was not passed in, then we are creating a new empty user
            this.user = {id:0, firstName:"", lastName:"", email:"", password:"", roleId:1, active: true};
        }

       
    },
    methods:{
        onSubmit() {
            if(this.isValid()){
                if(this.userId > 0){
                    updateUser(this.user).then(resp => this.$router.push({name: 'UserList'}));
                }else{
                    insertUser(this.user).then(resp => this.$router.push({name: 'UserList'}));
                }
            }
        },
        isValid(){
            // if(!this.user.firstName || !this.user.lastName || !this.user.email || !this.user.password){
            //     return false;
            // }
            // return true;
            this.errors = {};
            let valid = true;
            if(this.user.firstName == ""){
                this.errors.firstName = "Please enter your first name";
                valid = false;
            }
            if(this.user.lastName == ""){
                this.errors.lastName = "Please enter your last name";
                valid = false;
            }
            if(this.user.email == ""){
                this.errors.email = "Please enter your email";
                valid = false;
            }
            else if(!this.validateEmailAddress(this.user.email)){
                this.errors.email = "the email is not valid";
                valid = false;
            }
            if(this.user.password == ""){
                this.errors.password = "Please enter your password";
                valid = false;
            }

            return valid;
        },
        // validates an email address (returns true it is valid, false if it is not)
		validateEmailAddress(email){
		    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
		    return regExp.test(email);
		}
    }
}
</script>

<style scoped>
label{ display: block; }
.validation{color: red; font-weight: bold;}
</style>