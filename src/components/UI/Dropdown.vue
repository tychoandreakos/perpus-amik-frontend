<template>
  <section id="dropdown">
    <div @click="panelHandler = !panelHandler" class="dropdown">
      <h3>{{ info.title }}</h3>
      <div class="arrow">
        <div class="icon">
          x
        </div>
      </div>
    </div>
    <div
      :style="panelHandler ? 'height: 125px' : 'height: 0'"
      class="panel-dropdown"
    >
      <div class="panel-text">
        {{ info.description }}
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Dropdown",
  data() {
    return {
      panelHandler: false
    };
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
#dropdown {
  display: block;
}

#dropdown .dropdown {
  border: 1.5px solid #ccc;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2);
  font-family: "Quicksand", sans-serif;
  font-weight: 400 !important;
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}

#dropdown .dropdown h3 {
  font-size: 1.1rem;
  padding: 0.8rem;
}

#dropdown .dropdown .arrow {
  background: #ccc;
  padding: 0 1.5rem;
  display: flex;
}

#dropdown .dropdown .arrow .icon {
  align-self: center;
}

#dropdown .panel-dropdown {
  background: #fff;
  width: 100%;
  border-left: 1.5px solid #ccc;
  border-right: 1.5px solid #ccc;
  border-bottom: 1.5px solid #ccc;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2);
  transition: height 0.2s ease-in;
  overflow: hidden;
  z-index: 2;
  max-height: 150px;
  position: relative;
  margin-top: -18px;
}

#dropdown .panel-dropdown .panel-text {
  padding: 0.8rem;
}
</style>
