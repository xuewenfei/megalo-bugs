<template>
  <div>
    <div>
      <ul class="container log-list">
        {{msg}}
      </ul>
    </div>
    <a :href="link"  class="counter">bug-694?{{params}}</a>
  </div>
</template>

<script>
import PageLifecycleMixin from '@/mixins/page-lifecycle-mixin'
export default {
  mixins: [PageLifecycleMixin],
  data () {
    return {
      params: 0,
      msg: 'asd',
      logs: []
    }
  },
  computed: {
    link() {
      return `/pages/bug-694/index?params=${this.params}`
    }
  },
  beforeCreate () {
    console.log('bug-694 beforeCreate')
  },
  created () {
    console.log('bug-694 created')
  },
  beforeMount () {
    console.log('bug-694 beforeMount data', this.data)
  },
  mounted () {
    console.log('bug-694 mounted data', this.data)
  },
  onLoad (options) {
    console.log('pages/bug-694 onLoad options', options)
    console.log('pages/bug-694 onLoad $options.data()', this.$options.data())
    console.log('pages/bug-694 onLoad data', this.$data)
    console.log('pages/bug-694 onLoad params', this.params)
    let params = options.params
    this.params = params + 1
    this.logs = []
  },

  onShow () {
    console.log('pages/bug-694 onShow $options.data()', this.$options.data())
    console.log('pages/bug-694 onShow data', this.$data)
    console.log('pages/bug-694 onShow params', this.params)
  }

}
</script>
