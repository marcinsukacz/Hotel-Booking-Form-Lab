<template lang="html">
  <div id="guestGrid">
  <div v-for="guest in guests" class="">
    <p>{{guest.name}}</p>
    <p>{{guest.email}}</p>
    <!-- <p>{{guest.checkin_status}}</p> -->
    <button type="button" name="delete" v-on:click="deleteGuest(guest._id)">Delete Guest</button>
    <br>
  </div>
</div>

</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService'

export default {
  name: "guest-grid",
  props: ["guests"],

methods: {
  deleteGuest(id) {
    BookingService.deleteGuest(id)
    .then(res => eventBus.$emit('guest-delete', id))
  }
}
}
</script>

<style lang="css" scoped>
</style>
