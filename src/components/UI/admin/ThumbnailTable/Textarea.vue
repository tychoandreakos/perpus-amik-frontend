<template lang="pug">
    div.input-card
        div.input-wrapper
            textarea.area(@input="$emit('input', $event.target.value)" placeholder="Your insert address")
</template>

<script>
export default {
  name: 'TextAreaMembership',
};
</script>
