<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text-xs-center">Список замовлень</h1>

        <v-list-tile
          v-for="order in orders"
          :key="order.id"
          avatar>
          <v-list-tile-action>
            <v-checkbox
              color="primary"
              :input-value="order.done"
              @change="markDone(order)"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>

            <v-list-tile-title>{{ order.name }}</v-list-tile-title>
            <v-list-tile-sub-title> {{ order.phone }} </v-list-tile-sub-title>

          </v-list-tile-content>
          <v-btn
            flat
            class="primary"
            :to="'/ad/'+order.adId">Open Ad</v-btn>

        </v-list-tile>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Orders',
    data () {
      return {
        orders: [
          {
            id: 'o123',
            name: 'Vova',
            phone: '38(066)-123-45-67',
            adId: 'fish_1',
            done: false
          }
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = !order.done
      }
    }
  }
</script>

<style scope>

</style>
