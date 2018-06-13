<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex d-flex xs12>
                    <v-carousel height="800px">
                        <v-carousel-item
                                v-for="ad in ads"
                                :key="ad.id"
                                :src="ad.imageSrc"
                        >
                            <v-btn outline class="btncarousel"
                                   :to="'/ad/'+ad.id"></v-btn>
                        </v-carousel-item>

                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex d-flex
                        xs12
                        sm6
                        md4
                v-for="ad in ads"
                :key="ad.id">
                    <v-card>
                        <v-card-media :src="ad.imageSrc" height="200px">
                        </v-card-media>
                        <v-card-title primary-title class="flex-parent">
                            <div class="flex-child long-and-truncated-with-child-corrected">
                                <h3 class="headline mb-0">{{ad.title}}</h3>
                                <div class="long-and-truncated-with-child-corrected">{{ad.description}}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat :to="'/ad/'+ad.id">Детальніше</v-btn>
                            <v-btn raised class="primary">Купити</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: 'Home',
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
    .btncarousel {
        position: absolute;
        left: 0;
        top: 0;
        border-style: none !important;
        border-color: rgba(0, 0, 0, .5) !important;
        height: 90%;
        width: 100%;
        /*color: rgba(0, 0, 0, 0);*/
        /*background-color: rgba(0, 0, 0, 0);*/
        margin: 0px;
    }

    .long-and-truncated-with-child-corrected {
        flex: 1;
        min-width: 0; /* or some value */
    }

    .long-and-truncated-with-child-corrected h3, .long-and-truncated-with-child-corrected div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .long-and-truncated-with-child-corrected div {
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .flex-parent {
        display: flex;
        align-items: center;
        padding: 10px;
        margin: 30px 0;
    }

    h3 {
        font-size: 1rem;
        font-weight: normal;
    }
</style>
