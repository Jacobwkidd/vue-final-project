<template>
  <div v-if="property">
    <form @submit.prevent="onSubmit">
        <div>
            <label class="form-label">Tenant Name</label>
            <div class="validation">{{errors.tenantName}}</div>
            <input  v-model="property.tenantName" class="form-control mb-2" placeholder="Name" />
        </div>
        <div>
            <label>Address</label>
            <div class="validation">{{errors.address}}</div>
            <input  v-model="property.address" class="form-control mb-2" placeholder="Address" />

        </div>
        <div>
            <label>City</label>
            <div class="validation">{{errors.city}}</div>
            <input  v-model="property.city" class="form-control mb-2" placeholder="Miami" />

        </div>
        <div>
            <label>Zip Code</label>
            <div class="validation">{{errors.zipCode}}</div>
            <input  v-model="property.zipCode" class="form-control mb-2" placeholder="Zip Code" />

        </div>
        <div>
            <label>Rent</label>
            <div class="validation">{{errors.rent}}</div>
            <input  v-model="property.rent" class="form-control mb-2" placeholder="$500" />

        </div>
        <div>
            <label>State</label>
            <div class="validation">{{errors.state}}</div>
            <input v-model="property.state" class="form-control mb-2" placeholder="WI" >
        </div>
        <div>
            <label class="form-check-label">Paid Rent</label>
            <div class="validation">{{errors.paidRent}}</div>
            <input type="checkbox" v-model="property.paidRent">
        </div>
        <div>
            <input type="submit" id="btnSubmit" name="submit button" class="btn btn-primary mb-4 px-4 me-2">
            <input type="button" class="btn btn-secondary mb-4 px-4" @click="$router.push({name:'Properties'})" value="Cancel">
        </div>
    </form>
  </div>
</template>

<script>
import {getPropertyById, updateProperty, insertProperty} from "@/api"
export default {
    
    inject: ['GStore'],
    props: ["propertyId"],
    data(){
        return{
            property: [],
            errors: {}
        }
    },
    mounted(){

        // if (this.$route.params.propertyId !== undefined) {
        //     // Convert propertyId to a number
        //     this.propertyId = parseInt(this.$route.params.propertyId, 10);
        // }

        if (this.propertyId == undefined) {
            console.log(this.$router);
        }
         if(this.$route.name != "addProperty" && isNaN(this.propertyId)){
            this.$router.push({name:"NotFound"});
        }

        if(this.propertyId > 0){
            console.log(this.propertyId);
            getPropertyById(this.propertyId)
                .then(property => this.property = property)
                .catch(err => this.$router.push({name:"NotFound"}));
        }
        else{
            // if the propertyId prop was not passed in, then we are creating a new empty property
            this.property = {   
                                id: 0, 
                                tenantName:"",
                                address: "",
                                city: "",
                                zipCode: 0, 
                                rent: 0,
                                state: "",
                                landlordId: this.GStore.currentUser?.id,
                                paidRent: true
            };
        }
    },
    methods:{   
        // logMessage(){
        //     console.log(this.property);
        // },
        
        onSubmit() {
            if(this.isValid()){
                if(this.propertyId > 0){
                    console.log(this.property);
                    updateProperty(this.property).then(resp => this.$router.push({name: 'Properties'}));
                }else{
                    insertProperty(this.property).then(resp => this.$router.push({name: 'Properties'}));
                }
            }
            else{
                console.log(this.propertyId);
            }
        },
        isValid(){
            this.errors = {};
            let valid = true;
            if(this.property.tenantName == ""){
                this.errors.tenantName = "Please enter your tenant's name";
                valid = false;
            }
            if(this.property.address == ""){
                this.errors.address = "Please enter your tenant's address";
                valid = false;
            }
            if(this.property.city == ""){
                this.errors.city = "Please enter your tenant's city";
                valid = false;
            }
            if(this.property.zipCode.length < 5){
                this.errors.zipCode = "zip code is not the length of 5";
                valid = false;
            }
            else if(isNaN(this.property.zipCode)){
                this.errors.zipCode = "zip code must have numbers";
                valid = false;
            }
            else if(this.property.zipCode <= 0){
                this.errors.zipCode = "Please enter your tenant's zip code more than 0";
                valid = false;
            }
            if(this.property.rent.length > 20){
                this.errors.rent = "Please enter your tenant's rent less than 20 numbers";
                valid = false;
            }
            else if(this.property.rent <= 0){
                this.errors.rent = "Please enter your tenant's rent more than $0";
                valid = false;
            }
            else if(isNaN(this.property.rent)){
                this.errors.rent = "rent must be numbers";
                valid = false;
            }
            if(this.property.state.length < 2){
                this.errors.state = "State must be 2 characters";
                valid = false;
            }

            return valid;
        },
    }
}
</script>

<style>

</style>