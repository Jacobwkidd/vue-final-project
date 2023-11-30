<template>
    <div class="user-list">
        <button @click="$router.push({name: 'AddUser' })">Add New User</button>
        <table border="1" v-if="users && roles">
            <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Active</th>
                <th></th>
            </tr>
            <tr v-for="u in users" :key="u.id">
                <td>{{u.firstName + " " + u.lastName}}</td>
                <td>{{u.email}}</td>
                <td>{{getRoleNameById(u.roleId)}}</td>
                <td>{{u.active ? "yes" : "no"}}</td>
                <td>
                    <button class="btn btn-primary" @click="editUser(u.id)">Edit</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import {getAllUsers, getAllRoles} from "@/api"

export default {
    data(){
        return {
            users: null,
            roles: null
        }
    },
    mounted(){
        debugger;
        getAllUsers().then(users => this.users = users);
        getAllRoles().then(roles => this.roles = roles);
    },
    methods:{
        getRoleNameById(id){
          const role = this.roles.find(r => r.id == id);
          return role?.name;
          // Note the nullish operator - I noticed that this method gets called even before the roles have been fetched!
        },
        editUser(id){
            // console.log("TODO: edit user " + id);
            this.$router.push({name: 'UserDetails', params: {userId:id}}); // pass through the route
        }
    }
}
</script>

<style scoped>
  /*Put CSS styles here*/
</style>