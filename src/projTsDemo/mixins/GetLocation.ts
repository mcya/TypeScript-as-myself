import { Component, Vue } from 'vue-property-decorator'

declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    position: {
      latitude: string
      longitude: string
    },
    GetLocation(): void
  }
}

@Component
export default class GetLocation extends Vue {
  position = {
    latitude: '',
    longitude: ''
  }

  async chaceLocation() { // 缓存经纬度
    const _this = this
    const BMap = window.BMap || {}
    const geolocation = new BMap.Geolocation()

    return new Promise(function (resolve, reject) {
      const geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() === BMAP_STATUS_SUCCESS) {
          _this.position.latitude = r.point.lat
          _this.position.longitude = r.point.lng
          // 缓存定位城市 用于推荐
          sessionStorage.setItem('pointCity', r.address.city)
          resolve({ longitude: r.point.lng, latitude: r.point.lat })
        } else {
          _this.$dialog.toast({ mes: '定位失败' })
          console.log('failed' + this.getStatus())
          // reject()
        }
      }, { enableHighAccuracy: true })
    })
  }

  async GetLocation() {
    const data = sessionStorage.getItem('position') ? JSON.parse(sessionStorage.getItem('position')) : ''
    if (data) {
      this.position = data
      this.position.latitude = data.latitude
      this.position.longitude = data.longitude
    } else {
      await this.chaceLocation()
      sessionStorage.setItem('position', JSON.stringify(this.position))
    }
  }
}
