<template>
    <div class="Tenants" v-if="GStore.currentUser?.roleId == 3">
        <button @click="$router.push({name: 'AddTenant' })" class="btn btn-primary">Add New Tenant</button>
        <table border="1" class="table table-dark">
            <tr>
                <th scope="col">Tenant</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col"></th>
            </tr>
            <div >
                <tr v-for="t in tenant" :key="t.id">
                    <td scope="row">{{t.firstName + " " + t.lastName}}</td>
                    <td>{{t.email}}</td>
                    <td>{{u.active ? "yes" : "no"}}</td>
                    <td>
                        <button class="btn btn-primary" @click="editTenant(t.id)">Edit</button>
                    </td>
                </tr>
            </div>
        </table>
    </div>
</template>

<script>
import {getAllTenant} from "@/api"
// import { getAllLandlord } from '@/api';

export default {
    inject: ["GStore"],
    data(){
        return {
            tenant: [],
            landlord: []
        }
    },
    mounted(){
        //debugger;
        // getAllLandlord().then(landlord => this.landlord = landlord);
        getAllTenant().then(tenant => this.tenant = tenant);
    },
    methods:{
        editTenant(id){
            // console.log("TODO: edit Tenant " + id);
            this.$router.push({name: 'TenantDetails', params: {TenantId:id}}); // pass through the route
        }
    }
}
</script>

<style scoped>
  /*Put CSS styles here*/
</style>