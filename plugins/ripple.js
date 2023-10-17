import Vue from 'vue'

const HSL2RGB = (h, s, l) => {
  s /= 100
  l /= 100
  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [255 * f(0), 255 * f(8), 255 * f(4)]
}

const RGB2HSL = (r, g, b) => {
  r /= 255
  g /= 255
  b /= 255
  const l = Math.max(r, g, b)
  const s = l - Math.min(r, g, b)
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2,
  ]
}

const rippleDirective = {
  update(el, binding) {
    const ripple = el
    ripple.classList.add('ripple')
  },
  bind(el, binding) {
    // generate styles for ripple
    let rippleStyle = document.querySelector('#rippleStyle')
    if (!rippleStyle) {
      rippleStyle = document.createElement('style')
      rippleStyle.type = 'text/css'
      rippleStyle.setAttribute('id', 'rippleStyle')
      document.head.appendChild(rippleStyle)
      rippleStyle.textContent = `


      .ripple{
        position: relative;
        overflow: hidden;
      }

      .ripple span.rippleChild {
        position: absolute;
        border-radius: 50%;
        background-color: var(--background-color);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
        animation: ripple 1s;
        opacity: 0;
      }

      @keyframes ripple {
        from {
          opacity: 1;
          transform: scale(0);
        }
        to {
          opacity: 0;
          transform: scale(10);
        }
      }
      `
    }
    const ripple = el
    ripple.classList.add('ripple')
    ripple.addEventListener('click', (evt) => {
      const btn = evt.currentTarget
      const btnColor = window
        .getComputedStyle(btn, null)
        .getPropertyValue('background-color')

      const regexColor =
        /^rgba?\((?<red>\d+),(?<green>\d+),(?<blue>\d+),?(\d+)?\)$/gi
      const match = regexColor.exec(btnColor.replace(/ /gi, ''))
      let rippleColor = 'rgba(0,0,0,0.1)'
      if (match) {
        const { red, green, blue } = match.groups
        let R = parseInt(red)
        let G = parseInt(green)
        let B = parseInt(blue)
        let [h, s, l] = RGB2HSL(R, G, B)

        // Verificação de contraste e alteração de cor
        if (R * 0.299 + G * 0.587 + B * 0.114 > 186) {
          ;[R, G, B] = HSL2RGB(h, s, l - 26)
        } else {
          ;[R, G, B] = HSL2RGB(h, s, l + 26)
        }
        rippleColor = `rgba(${R},${G},${B},0.20)`
      }

      const bounds = btn.getBoundingClientRect()
      const x = evt.pageX - bounds.left - scrollX
      const y = evt.pageY - bounds.top - scrollY
      const span = document.createElement('span')
      span.style.setProperty('--background-color', rippleColor)
      span.style.left = `${x}px`
      span.style.top = `${y}px`
      span.classList.add('rippleChild')
      btn.appendChild(span)
      ripple.addEventListener('animationend', (event) => {
        const spans = ripple.querySelectorAll('span.rippleChild')
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.remove()
          }, 250 * (index + 1))
        })
      })
    })
  },
}

Vue.directive('ripple', rippleDirective)

export default rippleDirective
