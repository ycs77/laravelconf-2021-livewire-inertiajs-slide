import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  theme: {
    extend: {
      colors: {
        livewire: '#fb70a9',
        inertia: '#9553e9',
      },
    },
  },
}))
