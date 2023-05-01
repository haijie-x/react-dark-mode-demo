# react-dark-mode-demo

Dark mode demo built with react + vite + tailwind

# Usage Example

In your tailwind.config.js:

```js
import plugin from 'tailwindcss/plugin'
import { themeColors, themePlugin } from 'tailwindcss-dark-mode-plugin'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors: themeColors
  },
  plugins: [plugin(themePlugin)]
}
```

# Feature

1. `theme-switch-button` components depends on `useTheme` hooks which is based
   on `CSR` render
2. Dark mode is out of the box as long as you use tailwindcss built-in colors.
   You don't need to write class like `dark:bg-black`.

# Recommendation

1. If you want to use ssr rendering, like nextjs. You can dynamic import to skip
   ssr render,like following:

```js
const ThemeSwitchButton = dynamic(() => import('./theme-switch-button'), {
  ssr: false
})
```

2. You can configure css styles to whole document like, let it more out of the
   box

```css
@layer base {
  body {
    @apply text-neutral-700;
  }
}
```
