import { Component, Vue } from 'vue-property-decorator'
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    city: {
      id: string
      name: string
    },
    setCity(): void
  }
}
@Component
export default class SetCityLocation extends Vue {
  city: {
    id: string,
    name: string
  } = {
    id: '974E46A7A5934456B78871E6D6503417',
    name: '广州市'
  }

  created() {
    this.setCity()
  }

  setCity() {
    const city = localStorage.getItem('city')
    if (!city) {
      localStorage.setItem('city', JSON.stringify(this.city))
    } else {
      this.city = JSON.parse(city)
    }
  }
}
