<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1>Опис оголошення № {{ id }}</h1>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    name: 'Ad',
    data () {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>

<style scope>

</style>