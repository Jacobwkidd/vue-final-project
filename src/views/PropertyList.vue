<template>
  <!-- <h1>Hello Property</h1> -->
    <!-- {{GStore.currentUser}} -->
    <!-- {{properties}} -->
    
    <div class="properties">
        
        <button @click="$router.push({name: 'addProperty'})" type="button" class="btn btn-primary mb-4"><i class="bi bi-house"></i> Add New Property</button>
        
        <table class="table table-responsive">
            
            <thead class="table-dark">
                <tr>
                    <th scope="col">Tenant Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">Zip Code</th>
                    <th scope="col">Rent</th>
                    <th scope="col">State</th>
                    <!-- <th scope="col">Paid Rent</th> -->
                    <th scope="col">Rent Paid</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
          
            <tbody class="thread-light">
                <tr v-for="p in properties" :key="p.id">
                    <td scope="row">{{p.tenantName}}</td>
                    <td>{{p.address}}</td>
                    <td>{{p.city}}</td>
                    <td>{{p.zipCode}}</td>
                    <td>{{p.rent}}</td>
                    <td>{{p.state}}</td>
                    <td>{{p.paidRent}}</td>
                    <td>
                        <button class="btn btn-primary" @click="editProperty(p.id)">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import {getPropertiesByLandlordId, } from "@/api"
// getAllProperties

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
        // getAllProperties().then(property => this.property = property);
        getPropertiesByLandlordId(this.GStore.currentUser.id).then(properties => this.properties = properties);
        
    },
    methods:{
        editProperty(id){
            console.log("TODO: edit user " + id);
            this.$router.push({name: 'PropertyDetails', params: {propertyId:id}}); // pass through the route
            // console.log("After router push");
        },
        // paidRent(id){
        //     this.$router.push({name: 'PropertyPaidRent'});
        // }
    }
}
</script>

<style>

</style>