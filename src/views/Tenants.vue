<template>
    <div class="Tenants">
        <button @click="$router.push({name: 'AddTenant' })">Add New Tenant</button>
        <table border="1" v-if="users && roles">
            <tr>
                <th></th>
                <th>Email</th>
                <th>Active</th>
                <th></th>
            </tr>
            <tr v-for="t in tenant" :key="t.id">
                <td>{{t.tenant_user_first_name + " " + t.tenant_user_last_name}}</td>
                <td>{{t.tenant_user_email}}</td>
                <td>{{getRoleNameById(u.roleId)}}</td>
                <td>
                    <button class="btn btn-primary" @click="editTenant(u.id)">Edit</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import {getAllTenants, getAllRoles} from "@/api"

export default {
    data(){
        return {
            tenant: [],
            roles:[]
        }
    },
    mounted(){
        debugger;
        getAlltenant().then(tenant => this.tenant = tenant);
        getAllRoles().then(roles => this.roles = roles);
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