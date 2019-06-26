<template>
  <div class="">
    <h1>Hotel Stew</h1>
    <div class="">
      <guest-form></guest-form>
     <guest-grid :guests="guests"></guest-grid>
    </div>
  </div>
</template>

<script>

import grid from './components/grid';
import form from './components/form';
import { eventBus } from './main';


export default {
  name: 'app',
  data() {
    return {
      guests: []
    }
  },
  components: {
    'guest-grid': grid,
    'guest-form': form
  },
  mounted(){
    fetch('http://localhost:3000/api/guests/')
    .then(res => res.json())
    .then(guests => this.guests = guests)

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    })

    eventBus.$on('guest-delete', (id) => {
      const index = this.guests.indexOf(guest => guest.id === id)
      this.guests.splice(index, 1)
    })
  }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
