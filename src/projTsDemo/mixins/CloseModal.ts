import { Component, Vue } from 'vue-property-decorator'

function closeEach(c: any): any {
  // Popup/Datetime/LightBox
  if (c.close) return c.close()
  // LightBox
  if (c.box) return c.box.close()
  //
  return false
}

function getShowStatus(c: any): any {
  const ct = c.$options._componentTag
  if (ct === 'yd-popup') return c.show
  if (ct === 'yd-lightbox') return c.box ? !!c.box.$el.parentNode : false
  if (ct === 'yd-datetime') return c.picker ? c.picker.show : false
  return false
}

@Component
export default class CloseModal extends Vue {
  beforeRouteLeave(to, from, next) {
    // 在该页面里 保持使用以下组件时 没有父级组件（一直到根节点，父级没有组件标签）
    const componets: string[] = [
      'yd-popup',
      'yd-datetime',
      'yd-search',
      'yd-lightbox'
    ]
    // search all popups
    const children = this.$children[0] && (this.$children[0].$options as any)._componentTag === 'yd-layout' ? this.$children[0].$children : this.$children
    const popups = children.filter(c => componets.includes((c.$options as any)._componentTag))
    // find how many popups are opening
    const openingPopups = popups.reduce((a, b) => a + (getShowStatus(b) ? 1 : 0), 0)

    if (openingPopups) {
      popups.forEach(closeEach)
      next(false)
      return
    }

    const dialogs: string[] = [
      '.yd-alert',
      '.yd-confirm',
      '.yd-toast',
      '.yd-notify',
      '.yd-loading'
    ]

    const openingDialogs = dialogs.reduce(
      (a, b) => a + document.querySelectorAll(b).length, 0
    )
    if (openingDialogs) {
      next(false)
      return
    }

    next()
  }
}
