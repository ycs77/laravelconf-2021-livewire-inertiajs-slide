<template>
  <a :href="url" target="_blank">
    <fa-solid-external-link-alt class="abs-tr w-6 h-6 mx-14 my-10" />
  </a>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '',
    },
    livewire: {
      type: Boolean,
      default: false,
    },
    inertia: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const endpoint =
      props.livewire ? import.meta.env.VITE_LIVEWIRE_URL :
      props.inertia ? import.meta.env.VITE_INERTIA_URL :
      ''

    const url = endpoint + props.path

    return { url }
  },
}
</script>
