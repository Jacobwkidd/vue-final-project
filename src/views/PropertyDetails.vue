<template>
  <div>
    <form @submit.prevent="onSubmit">
        <div>
            <label>Tenant Name</label>
            <!-- /<div class="validation">{{errors.tenantName}}</div> -->
            <!-- <input  v-model="property.tenatName" /> -->
        </div>
        <div>
            <label>Address</label>
        </div>
        <div>

        </div>
        <!-- <div>
            <input type="submit" id="btnSubmit" name="submit button">
            <input type="button" @click="$router.push({name:'propertyList'})" value="Cancel">
        </div> -->
    </form>
  </div>
</template>

<script>
import {getPropertyById, updateProperty, insertProperty} from "@/api"
export default {
    // props:["id"],
    // data(){
    //     return{
    //         property: null,
    //         errors: {}
    //     }
    // },
    // mounted(){
    //      if(this.$route.name != "AddProperty" && isNaN(this.propertyId)){
    //         this.$router.push({name:"NotFound"})
    //     }

    //     if(this.propertyId > 0){
    //         getPropertyById(this.propertyId)
    //             .then(property => this.property = property)
    //             .catch(err => this.$router.push({name:"NotFound"}));
    //     }
    //     else{
    //         // if the propertyId prop was not passed in, then we are creating a new empty property
    //         this.property = {id:0, tenantName:"", address: "", city: "", zipCode: "", rent: ""};
    //     }
    // },
    // methods:{
    //     onSubmit() {
    //         if(this.isValid()){
    //             if(this.Id > 0){
    //                 updateProperty(this.property).then(resp => this.$router.push({name: 'propertyList'}));
    //             }else{
    //                 insertProperty(this.property).then(resp => this.$router.push({name: 'propertyList'}));
    //             }
    //         }
    //     }
    //     isValid(){
    //         this.errors = {};
    //         let valid = true;
    //         if(this.user.firstName == ""){
    //             this.errors.firstName = "Please enter your first name";
    //             valid = false;
    //         }
    //         if(this.user.lastName == ""){
    //             this.errors.lastName = "Please enter your last name";
    //             valid = false;
    //         }
    //         if(this.user.email == ""){
    //             this.errors.email = "Please enter your email";
    //             valid = false;
    //         }
    //         else if(!this.validateEmailAddress(this.user.email)){
    //             this.errors.email = "the email is not valid";
    //             valid = false;
    //         }
    //         if(this.user.password == ""){
    //             this.errors.password = "Please enter your password";
    //             valid = false;
    //         }

    //         return valid;
    //     },
    //     // validates an email address (returns true it is valid, false if it is not)
	// 	validateEmailAddress(email){
	// 	    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
	// 	    return regExp.test(email);
	// 	}
    //}
}
</script>

<style>

</style>