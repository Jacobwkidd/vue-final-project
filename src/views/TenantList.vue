<template>
    <div class="Tenants" v-if="GStore.currentUser?.roleId == 2">
        <button @click="$router.push({name: 'AddTenant' })" class="btn btn-primary">Add New Tenant</button>
        <table border="1" class="table table-dark">
            <tr>
                <th scope="col">Tenant</th>
                <th scope="col">Email</th>
                <th scope="col">Active</th>
                <th scope="col">Role</th>
                <th scope="col"></th>
            </tr>
            <div >
                <tr v-for="t in tenant" :key="t.id">
                    <td scope="row">{{t.firstName + " " + t.lastName}}</td>
                    <td>{{t.email}}</td>
                    <td>{{getRoleNameById(u.roleId)}}</td>
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
import {getAllTenant, getAllRoles} from "@/api"
import { getAllLandlord } from '@/api';

export default {
    inject: ["GStore"],
    data(){
        return {
            tenant: [],
            landlord: [],
            roles:[]
        }
    },
    mounted(){
        //debugger;
        getAllLandlord().then(landlord => this.landlord = landlord);
        getAllTenant().then(tenant => this.tenant = tenant);
    },
    methods:{
        getRoleNameById(id){
          const role = this.roles.find(r => r.id == id);
          return role?.name;
          // Note the nullish operator - I noticed that this method gets called even before the roles have been fetched!
        },
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