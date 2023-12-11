<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>We are trying to provide a service to landlord and tenant to make things simpler. How we 
      are providing this service is making a website so tenant can look for apartments and landlords can make post their apartments for rent. When searching for an apartment is difficult, come for us to help because we provide a system that helps landlord and tenant 
    get connected! We will add a search engine on this website so you can look for an apartment in United States of America. Daily updates with availabilities for apartments
    and updates for pricing.
      </p>
      <img :src="imageURL" alt="Old fashion map">
    <h1>Our Mission</h1>
    <p><i class="bi bi-search"></i>Our mission is to simplify property ownership and rental experiences by providing professional, transparent, 
      and reliable property management services. We understand that managing rental properties can be a complex task, and that's where we come in. 
      Our dedicated team is committed to ensuring that property owners can enjoy the benefits of their investments without the stress of day-to-day management.  </p>

    <h1>Coming Soon</h1>
      <p>Soon we will provide a moving company to help you </p>
  </div>
</template>
<script>
import exampleImage from "@/assets/map.jpg"; 
export default{
  data(){
    return{
      imageURL: "exampleImage"
    }
  }
}
</script>