<template>
    <div class="row mt-4" :data-id="index">
        <div class="col-12 col-sm-4 col-md-2">

            <div class="image">
                Картинка
            </div>
        </div>
        <div class="col-12 col-sm-8 col-md-7">
            <!--<div class="row">-->
            <dl class="row">
                <dt class="col-4 text-left">Назва </dt>
                <dd class="col-1 text-center">:</dd>
                <dd class="col-7 text-left ">{{ name }}</dd>

                <dt class="col-4 text-left">Довжина </dt>
                <dd class="col-1 text-center">:</dd>
                <dd class="col-7 text-left ">{{ length }}</dd>

                <dt class="col-4 text-left">Опис </dt>
                <dd class="col-1 text-center">:</dd>
                <dd class="col-7 text-left ">{{ detail }}</dd>
            </dl>
        </div>
        <div class="col-12 col-sm-12 col-md-3">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12">
                    <button
                            type="button"
                            class="btn btn-success col-sm-12 col-md-8"
                            @click="setOrder"
                    >Set order
                    </button>
                </div>
                <div class="col-3 col-sm-3 order-first col-md-8">
                    <div class="p-1 rounded text-white bg-primary text-sm-right">
                        {{ countProp }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Element',
        props: {
            name: {
                type: String,
                default: 'Dafault element'
            },
            count: {
                type: Number, default: 0
            },
            index: Number,
            length: Number,
            detail: String,

        },
        data() {
            return {}
        },
        methods: {
            setOrder() {
                return this.$emit('ordered', [this.countProp, this.index])
//        return this.count
            }
        },
        computed: {
            countProp: function () {
                return this.count
            }
        }
        /*    get() {
              return this.count
            },
            set(val) {
              this.$emit('ordered', val)
            }
          }
        }*/
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .image {
        height: 100px;
        width: 100px;
        border: 1px solid;
        text-align: center;
    }
</style>
