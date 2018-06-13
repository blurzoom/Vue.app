<template>
  <v-container>
    <v-layout row>
      <v-flex xs12
              sm6
              offset-sm3>
        <h1 class="mb-3">Мої оголошення</h1>


        <v-card
          v-for="ad in ads"
          :key="ad.id" class="elevation-10 mb-5"
        >
          <v-layout row>
            <v-flex d-flex xs4>
              <v-card-media :src="ad.imageSrc" height="150px">
              </v-card-media>
            </v-flex>
            <v-flex d-flex xs8>
              <v-card-text>
                <h2 class="primary-text">{{ ad.title }}</h2>
                <p> {{ ad.description }}</p>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="info" :to="'/ad/'+ad.id">Детальніше</v-btn>
                </v-card-actions>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'AdList',
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
          }]
      }
    }
  }
</script>

<style scope>

</style>
