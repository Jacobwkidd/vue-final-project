<template>
    <div v-if="tenant" class="login w-50 p-3 d-flex justify-content-center">
        <form @submit.prevent="onSubmit" class="px-4 py-3">
            <div>
                <label class="form-label">First Name:</label>
                <div class="validation">{{errors.firstName}}</div>
                <input v-model="tenant.firstName" class="form-control" placeholder="John"/>
            </div>
            <div>
                <label class="form-label">Last Name:</label>
                <div class="validation">{{errors.lastName}}</div>
                <input v-model="tenant.lastName" type="password" class="form-control" placeholder="Password"/>
            </div>
            <div>
                <label class="form-label">Email:</label>
                <div class="validation">{{errors.email}}</div>
                <input v-model="tenant.email" />
            </div>
            <div>
                <label class="form-label">Password:</label>
                <div class="validation">{{errors.password}}</div>
                <input type="password" v-model="tenant.password" />
            </div>
            <div>
                <label class="form-check-label">Active:</label>
                <input type="checkbox" v-model="tenant.active">
            </div>
            <div>
                <input type="submit" id="btnSubmit" name="submit button" class="btn btn-primary mb-4 px-4 me-2">
                <input type="button" @click="$router.push({name:'Tenant List'})" value="Cancel" class="btn btn-secondary mb-4 px-4 me-2">
            </div>
        </form>
    </div>
</template>

<script>
import {getTenantById, getAllRoles, updateTenant, insertTenant} from "@/api"

export default {
    props:["tenantId"],
    data(){
        return{
            tenant: null,
            landlord: null,
            errors: {}
        }
    },
    mounted(){
         if(this.$route.name != "AddTenant" && isNaN(this.tenantId)){
            this.$router.push({name:"NotFound"})
        }
        getAllRoles().then(roles => this.roles = roles);

        if(this.tenantId > 0){
            getTenantById(this.tenantId)
                .then(tenant => this.tenant = tenant)
                .catch(err => this.$router.push({name:"NotFound"}));
        }
        else{
            // if the tenantId prop was not passed in, then we are creating a new empty tenant
            this.tenant = {id:0, firstName:"", lastName:"", email:"", password:"", roleId: 1, active: true};
        }

       
    },
    methods:{
        onSubmit() {
            if(this.isValid()){
                if(this.tenantId > 0){
                    updateTenant(this.Tenant).then(resp => this.$router.push({name: 'Tenant List'}));
                }else{
                    insertTenant(this.Tenant).then(resp => this.$router.push({name: 'Tenant List'}));
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
            if(this.tenant.firstName == ""){
                this.errors.firstName = "Please enter your first name";
                valid = false;
            }
            if(this.tenant.lastName == ""){
                this.errors.lastName = "Please enter your last name";
                valid = false;
            }
            if(this.tenant.email == ""){
                this.errors.email = "Please enter your email";
                valid = false;
            }
            else if(!this.validateEmailAddress(this.tenant.email)){
                this.errors.email = "the email is not valid";
                valid = false;
            }
            if(this.tenant.password == ""){
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