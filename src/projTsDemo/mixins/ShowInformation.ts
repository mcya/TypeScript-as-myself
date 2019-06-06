import { Component, Vue } from 'vue-property-decorator'
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    informationVisible: boolean,
    showNum: number,
    notRecommend(type: number): void
  }
}
@Component
export default class ShowInformation extends Vue {
  informationVisible: boolean = false
  showNum: number = 4
  notRecommend(type: number): void {
    this.showNum = type
    this.informationVisible = true
  }
}
