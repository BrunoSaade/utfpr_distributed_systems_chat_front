import Vue from "vue"

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

const requireComponent = require.context(
  "@/partials",
  true,
  /[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach((filename) => {
  const componentConfig = requireComponent(filename)
  const componentName = filename
    .split("/")
    .pop()
    .replace(/\.\w+$/, "")
    .capitalize()
    Vue.component(componentName, componentConfig.default || componentConfig)
})
