import { extend, ValidationObserver, ValidationProvider } from "vee-validate"
import Vue from "vue"

const nameValidate = (name) => {
  const regex =
    /^([a-z,A-Z,á,é,í,ó,ú,â,ê,ô,ã,õ,ç,Á,É,Í,Ó,Ú,Â,Ê,Ô,Ã,Õ,Ç,ü,ñ,Ü,Ñ," "]+)$/
  const validateByRegex = !regex.test(String(name).toLowerCase())
  return validateByRegex
}

const emailValidate = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const validateByRegex = !!email && !regex.test(String(email).toLowerCase())

  return validateByRegex
}

export const required = {
  validate(value) {
    return {
      required: true,
      valid: !["", null, undefined].includes(value),
    }
  },
  message: "Este campo é obrigatório",
  computesRequired: true,
}

export const email = {
  validate(value) {
    return !emailValidate(value)
  },
  message: "O Email deve ter uma formatação válida",
}

export const name = {
  validate(value) {
    return !nameValidate(value)
  },
  message: "O Nome deve ser válido",
}

extend("email", email)
extend("required", required)
extend("name", name)
Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)
