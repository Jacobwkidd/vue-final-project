<template>
    <div class="Tenants" v-if="GStore.currentUser?.roleId == 3">
        <button @click="$router.push({name: 'addTenant' })" class="btn btn-primary mb-4"><i class="bi bi-person"></i> Add New Tenant</button>
        <table class="table table-responsive">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Tenant</th>
                    <th scope="col">Email</th>
                    <th scope="col">Active</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody class="thread-light">    
                    <tr v-for="t in tenant" :key="t.id">
                        <td scope="row">{{t.firstName + " " + t.lastName}}</td>
                        <td>{{t.email}}</td>
                        <td>{{t.active ? "yes" : "no"}}</td>
                        <td>
                            <button class="btn btn-primary" @click="editTenant(t.id)">Edit</button>
                        </td>
                    </tr>
            </tbody>
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
            tenant: []
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
            this.$router.push({name: 'Tenant Details', params: {tenantId:id}}); // pass through the route
        }
    }
}
</script>

<style scoped>
  /*Put CSS styles here*/
</style>