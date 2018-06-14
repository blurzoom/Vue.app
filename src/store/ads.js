export default {
  state: {
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
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = (Math.random(1 + 2) * 100000).toFixed(0)
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo // ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
