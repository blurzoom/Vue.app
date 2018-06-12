<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text-xs-center">Замовлення</h1>

        <v-list-tile
          v-for="ad in ads"
          :key="ad.id"
          avatar>
          <v-list-tile-action>
            <v-checkbox v-model="video"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>

            <v-list-tile-title>{{ ad.title }}</v-list-tile-title>
            <v-list-tile-sub-title> {{ ad.description }} </v-list-tile-sub-title>

          </v-list-tile-content>

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
        ads: [
          {
            title: 'Продам скалярию',
            description: 'Опис оголошення: Продам скалярию ',
            promo: false,
            imageSrc: 'http://posejdon.kiev.ua/wp-content/uploads/2015/02/tcarstvo-zhivotnykh-19.jpg',
            id: 'fish_1'
          },
          {
            title: 'Продам шотладських котів',
            description: 'Опис оголошення: Продам шотладських котів',
            promo: true,
            imageSrc: 'http://www.animalsale.com.ua/uploads/1500x1500/5ade42e18b04d.jpg',
            id: 'cat_1'
          },
          {
            title: 'Продам Сибирские Хаски цуценят',
            description: 'Опис оголошення: Продам Сибирские Хаски цуценят',
            promo: true,
            imageSrc: 'http://doghusky.ru/wp-content/uploads/2012/02/Siberian-Husky-Puppy-Photo_002.jpg',
            id: 'dog_1'
          }
        ]
      }
    }
  }
</script>

<style scope>

</style>
