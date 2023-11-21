

<template>
    <div>
      <h3>
        <span v-if="$route.name == 'UserList'">Users</span>
        <span v-else-if="$route.name == 'UserDetails'">User Details</span>
        <span v-else-if="$route.name == 'AddUser'">Add User</span>
      </h3>
      <router-link v-if="$route.name == 'UserList'" :to="{ name: 'AddUser' }">Add New User</router-link>
      <router-link v-else :to="{ name: 'UserList' }">Back to Users</router-link>
      <router-view></router-view>
    </div>
</template>