<template>
  <!-- <h1>Hello Property</h1> -->
    <!-- {{GStore.currentUser}} -->
    <!-- {{properties}} -->
    <div>
        <button @click="$router.push({name: 'addProperty'})" type="button" class="btn btn-primary mb-4">Add New Property</button>
        <table class="table table-responsive">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Tenant Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">Zip Code</th>
                    <th scope="col">Rent</th>
                    <!-- <th scope="col">Paid Rent</th> -->
                    <th scope="col">Edit</th>
                    <!-- <th scope="col">Add Rent Paid</th> -->
                </tr>
            </thead>
          
            <tbody class="thread-light">
                <tr v-for="p in properties" :key="p.id">
                    <td scope="row">{{p.tenantName}}</td>
                    <td>{{p.address}}</td>
                    <td>{{p.city}}</td>
                    <td>{{p.zipcode}}</td>
                    <td>{{p.rent}}</td>
                    <!-- <td>{{p.paidRent}}</td> -->
                    <td>
                    <button class="btn btn-primary" @click="editUser(p.id)">Edit</button>
                    </td>
                    <!-- <td>
                    <button class="btn btn-primary" @click="paidRent(p.id)">Add Rent Payment</button>
                    </td> -->
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import {getPropertiesByLandlordId} from "@/api"

export default {
    inject: ["GStore"],
    data(){
        return{
            properties: []
        }
    },
     mounted(){
        //debugger;
        // getAllLandlord().then(landlord => this.landlord = landlord);
        getPropertiesByLandlordId(this.GStore.currentUser.id).then(properties => this.properties = properties);
    },
    methods:{
         getRoleNameById(id){
          const role = this.roles.find(r => r.id == id);
          return role?.name;
          // Note the nullish operator - I noticed that this method gets called even before the roles have been fetched!
        },
        editUser(id){
            // console.log("TODO: edit user " + id);
            this.$router.push({name: 'PropertyDetails', params: {userId:id}}); // pass through the route
        },
        // paidRent(id){
        //     this.$router.push({name: 'PropertyPaidRent'});
        // }
    }
}
</script>

<style>

</style>