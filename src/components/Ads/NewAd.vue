<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Нове оголошення</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="title"
            :rules="[v => !!v || 'Заголовок оголошення обовязково!']"
            label="Заголовок"
            required
          ></v-text-field>
          <v-text-field
            v-model="description"
            :rules="[v => !!v || 'Опис оголошення обовязково!']"
            label="Опис оголошення"
            multi-line
            required
          ></v-text-field>
          <v-layout row class="mb-3">
            <v-flex xs12>
              <v-btn
                color="warning"
                class="white--text"
              >
                Upload
                <v-icon right dark>cloud_upload</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-3">
            <v-flex xs12>
              <slot
                height="150px"
              >
                <img
                  src=""
                  height="150px"></img>
              </slot>

            </v-flex>
          </v-layout>
          <v-layout row>
            <v-switch
              label="Додати оголошення в ТОП?"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-layout>
          <v-layout row>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :disabled="!valid"
              @click="createAd"
            >
              Створити оголошення
            </v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'NewAd',
    data () {
      return {
        valid: false,
        title: '',
        description: '',
        promo: false,
        imageSrc: '',
        id: ''
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: this.imageSrc,
            id: (Math.random(1 + 2) * 100000).toFixed(0)
          }
          console.log(ad)
          this.clear()
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scope>

</style>
