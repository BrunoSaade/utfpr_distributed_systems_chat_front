export default {
  data() {
    return {
      screens: {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
        "2xl": false,
      },
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener("resize", this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize)
  },
  methods: {
    onResize() {
      const screens = {
        xs: 360,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        "2xl": 1400,
      }
      for (const screen in screens) {
        this.screens[screen] = window.innerWidth > screens[screen]
      }
    },
  },
}
