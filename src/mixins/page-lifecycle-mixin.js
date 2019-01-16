let startTime
let endTime
let transactionId = '00000000000'
let userid
export default {
  onLaunch () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} onLaunch`)
    }
  },
  onLoad () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} onLoad`)
    }
  },
  onReady () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} onReady`)
    }
  },
  onShow () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} onShow`)
    }
  },
  onHide () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} onHide`)
    }
  },
  onUnload () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} onUnload`)
    }
  },
  beforeCreate () {
    console.log('[page-lifecycle-mixin] beforeCreate')
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} beforeCreate`)
    }
  },
  created () {
    console.log('[page-lifecycle-mixin] created')
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} created`)
    }
  },
  beforeMount () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} beforeMount`)
    }
  },
  mounted () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} mounted`)
    }
  },
  beforeDestroy () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} beforeDestroy`)
    }
  },
  destroyed () {
    if (this.$mp && this.$mp.page) {
      console.debug(`[page-lifecycle-mixin] ${this.$mp.page.route} destroyed`)
    }
  },
}
