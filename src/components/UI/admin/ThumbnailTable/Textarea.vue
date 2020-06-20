<template lang="pug">
    div.input-card
        div.input-wrapper
            textarea.area(@input="$emit('input', $event.target.value)" :value="value" placeholder="Your insert address")
</template>

<script>
export default {
  name: 'TextAreaMembership',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
