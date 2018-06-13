<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h2 class="text-xs-center">Опис оголошення № {{ id }}</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex d-flex xs10 offset-xs1>
        <v-card class="mb-3">
          <v-card-media
            :src="imageSrc"
            height="400px"
          ></v-card-media>
          <v-flex d-flex xs12>
            <v-card-text>
              <h2>{{ title }}</h2>
              <p>{{ description }}</p>
            </v-card-text>
          </v-flex>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" flat>Редагувати</v-btn>
            <v-btn color="info">Купити</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Ad',
    data () {
      return {
        id: this.$route.params.id,
        title: 'Продам скалярию',
        description: 'Опис оголошення: Продам скалярию ',
        promo: false,
        imageSrc: 'http://posejdon.kiev.ua/wp-content/uploads/2015/02/tcarstvo-zhivotnykh-19.jpg'
      }
    }
  }
</script>

<style scope>

</style>
