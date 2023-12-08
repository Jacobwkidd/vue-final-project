<template>
  <!-- 
    <nav>
    <span v-if="GStore.currentUser">
      <b>Hello {{GStore.currentUser.firstName}} &nbsp;</b>
    </span>
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name: 'UserList'}" v-if="GStore.currentUser?.roleId == 2">
      Users
    </router-link> 
    <router-link v-if="!GStore.currentUser" :to="{name: 'Login'}">Login</router-link>
    <a v-else @click="logout" href="#">Log Out</a>
  </nav> 
  -->
  <div class="container-fluid bg-dark" id="top">
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark text-light">
      <div class="container-lg">
        <!-- navbar brand / title -->
        <!-- 
          <span class="fw-bold">
          <a href="#top" class="text-light text-decoration-none">
            
            INT WEB DEV - Bootstrap Assignment
          </a>
        </span> 
        -->
        <!-- <i class="bi bi-bootstrap" style="font-size: 1.4rem;"></i> -->
        <i class="bi bi-bank" style="font-size: 1.4rem;"></i>
        <span v-if="GStore.currentUser">
          <b>Hello {{GStore.currentUser.firstName}} &nbsp;</b>
        </span>

        <!-- toggle button for mobile nav -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- navbar links -->
        <div class="collapse navbar-collapse justify-content-start align-center bg-dark text-light" id="main-nav" >
          <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'home'}" data-bs-target="#main-nav" data-bs-toggle="collapse">
                  Home
                </router-link> 
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">
                    About
                </router-link>
            </li>
            <li class="nav-item" v-if="GStore.currentUser?.roleId == 3">
              <router-link class="nav-link" :to="{name: 'UserList'}">
                Users
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="!GStore.currentUser" :to="{name: 'Login'}">
                Login
              </router-link>
              <a v-else @click="logout" class="nav-link" href="#">Log Out</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="!GStore.currentUser?.roleId == 2" :to="{name: 'UsersDetails'}">
                Users Details
              </router-link>
            </li>  
            <li class="nav-item">
              <router-link class="nav-link" v-if="!GStore.currentUser?.roleId == 2" :to="{name: 'Tenant Details'}">
                Tenant Details
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="GStore.currentUser?.roleId == 2" :to="{name: 'Tenant List'}">
                Tenant List
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="GStore.currentUser?.roleId == 3" :to="{name: 'Properties'}">
                Property List
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>



<script>
import {logout as apiLogout} from '../api.js'
    export default {
      inject: ['GStore'],
      methods:{
      logout(evt){
        evt.preventDefault();
        this.GStore.currentUser = null;
        sessionStorage.removeItem("currentUser");
        apiLogout();
        this.$router.push({name:"Login"});
      }
      }
    }
</script>

<style>

</style>