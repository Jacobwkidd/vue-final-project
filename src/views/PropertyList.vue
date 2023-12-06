<template>
  <h1>Hello Property</h1>
    {{GStore.currentUser}}
    {{properties}}

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
}
</script>

<style>

</style>