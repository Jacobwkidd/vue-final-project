<template>
    <div class="Tenants">
        <button @click="$router.push({name: 'AddTenant' })" class="btn btn-primary">Add New Tenant</button>
        <table border="1" v-if="Tenant && roles">
            <tr>
                <th>Tenant</th>
                <th>Email</th>
                <th>Active</th>
                <th>Role</th>
                <th></th>
            </tr>
            <div class="form-row">
                <tr v-for="t in tenant" :key="t.id">
                    <td>{{t.tenant_user_first_name + " " + t.tenant_user_last_name}}</td>
                    <td>{{t.tenant_user_email}}</td>
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
import { getAllLandlord } from '../api';

export default {
    data(){
        return {
            tenant: null,
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