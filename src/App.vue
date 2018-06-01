<template>
    <div id="app">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
              integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
              crossorigin="anonymous">
        <h1 class="text-center"
            :class="[
                          currentTab === 'Fishs' ? 'Fishs' : '',
                          currentTab === 'Cats' ? 'Cats' : '',
                          currentTab === 'Dogs' ? 'Dogs' : ''
                          ]">{{ header }}</h1>
        <div class="container">
            <button
                    v-for="tab in tabs"
                    v-bind:key="tab"
                    v-bind:class="['tab-button', { active: currentTab === tab }]"
                    v-on:click="currentTab = tab"
            >{{ tab }}
            </button>

            <div v-for="(elem, index) in elements">
                <Element
                        :count="elem.count"
                        :index="index"
                        :name="elem.name"
                        :length="elem.length"
                        :detail="elem.detail"
                        :class="[
                          currentTab === 'Fishs' ? 'Fishs' : '',
                          currentTab === 'Cats' ? 'Cats' : '',
                          currentTab === 'Dogs' ? 'Dogs' : ''
                          ]"
                        @ordered="setCountOrder($event)"
                ></Element>
            </div>
        </div>
    </div>
</template>

<script>
    import Element from './components/element.vue'

    export default {
        name: 'App',

        data() {
            return {
                particleHeader: 'Риби',
                fishs: {
                    name: 'Риби',
                    elem:
                        [{
                            name: 'Fish1',
                            length: 10,
                            detail: 'detal1',
                            count: 0
                        },
                            {
                                name: 'Fish2',
                                length: 20,
                                detail: 'detal2',
                                count: 0
                            },
                            {
                                name: 'Fish3',
                                length: 30,
                                detail: 'detal3',
                                count: 0
                            }
                        ]
                },
                dogs: {
                    name: 'Собаки',
                    elem: [
                        {
                            name: 'dog1',
                            length: 10,
                            detail: 'detal1',
                            count: 0
                        },
                        {
                            name: 'dog2',
                            length: 20,
                            detail: 'detal2',
                            count: 0
                        },
                        {
                            name: 'dog3',
                            length: 30,
                            detail: 'detal3',
                            count: 0
                        }]
                },
                cats: {
                    name: 'Коти',
                    elem: [
                        {
                            length: 10,
                            detail: 'detal1',
                            count: 0
                        },
                        {
                            name: 'cat2',
                            length: 20,
                            detail: 'detal2',
                            count: 0
                        },
                        /*          {
                                    name: 'cat3',
                                    length: 30,
                                    detail: 'detal3'
                                  }*/
                    ]
                },

                currentTab:
                    'Fishs',
                tabs:
                    ['Fishs', 'Dogs', 'Cats']
            }
        }
        ,
        computed:
            {
                elements: function () {
                    let e = this.currentTab.toLowerCase();
                    return this[e].elem
                }
                ,
                header: function () {
                    let e = this.currentTab.toLowerCase();
                    return this[e].name
                }
            }
        ,
        methods: {
            setCountOrder: function (e) {
//        console.log(this[this.currentTab.toLowerCase()].elem);
                this[this.currentTab.toLowerCase()].elem[e[1]].count = e[0] + 1;
            }
        },
        components: {
            Element
        }
    }
</script>

<style>
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*text-align: center;*/
        /*color: #2c3e50;*/
        margin-top: 60px;
    }

    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: 10px;
        margin-right: 4px;
    }

    .tab-button:hover {
        background: #e0e0e0;
    }

    .tab-button.active {
        background: #e0e0e0;
    }

    .Fishs {
        color: blue;
    }

    .Dogs {
        color: saddlebrown;
    }

    .Cats {
        color: black;
    }
</style>
