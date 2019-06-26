<template lang="html">
  <form id="guestForm" v-on:submit ="handleSubmit">

    <label for="name">Name: </label>
    <input type="text" name="name" v-model="name" required>

    <label for="email">email: </label>
    <input type="text" name="email" v-model="email" required>

    <label for="checkin_status">Checked In Status: </label>
    <input type="radio" name="checkin_status" value="true" v-model="checkin_status">Yes
    <input type="radio" name="checkin_status" value="false" v-model="checkin_status">No

    <input type="submit" name="Save">


  </form>

</template>


<script>
import BookingService from '../services/BookingService.js';
import { eventBus } from '../main';


export default {
  name: "guest-form",
  data() {
    return{
      name: "",
      email: "",
      checkin_status: null
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        checkin_status: this.checkin_status
      };

      BookingService.postGuest(payload)
      .then(guest => {
        eventBus.$emit('guest-added', guest)
      })

    }
  }


}
</script>

<style lang="css" scoped>
</style>
