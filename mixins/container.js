export default {
  props: {
    maxWidth: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      regexExpressionResponsive: /(\w{2,}):(\d{1,}\w{1,})/g,
      regexExpression: /^\d+\w+|[^\w+:\d+]\d+\w+/g,
    }
  },
  computed: {
    defaultMaxWidth() {
      return this.maxWidth?.match(this.regexExpression)?.[0] || "none"
    },
    maxWidths() {
      let stylesExpression = `--max-width:${this.defaultMaxWidth};`
      const matches = this.maxWidth.matchAll(this.regexExpressionResponsive)
      for (const match of matches) {
        stylesExpression += `--${match[1]}-max-width:${match[2]};`
      }
      return stylesExpression
    },
  },
}
