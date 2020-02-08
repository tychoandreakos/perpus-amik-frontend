<template>
  <section id="dropdown-user">
    <div @click="dropdownHandler" v-if="dropdown" class="backdrop"></div>
    <div @click="dropdownHandler" class="dropdown-elem">
      <div class="title">
        <span
          >Filter by :
          <p>{{ listSelected }}</p>
          <p></p
        ></span>
      </div>
      <div
        :style="dropdown ? { height: '160px' } : { height: '0' }"
        class="dropdown-list"
      >
        <ul>
          <li
            @click="listHandler(listFilter)"
            v-for="(listFilter, i) in list"
            :key="i"
          >
            {{ listFilter }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DropdownUser",
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    listHandler(list) {
      this.listSelected = list;
      this.$emit("listValue", list);
    },
    dropdownHandler() {
      this.dropdown = !this.dropdown;
      this.$emit("open", this.dropdown);
    }
  },
  data() {
    return {
      dropdown: false,
      listSelected: this.list[0]
    };
  }
};
</script>
<style scoped>
#dropdown-user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  z-index: 5;
  position: relative;
  width: 100%;
  align-items: center;
}

#dropdown-user .dropdown-elem {
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  z-index: 5;
}

#dropdown-user .dropdown-elem span,
p {
  display: inline-block;
}

#dropdown-user .dropdown-elem p {
  color: #613ff4;
}

#dropdown-user .dropdown-elem .dropdown-list {
  transition: height 0.2s ease;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  width: 100%;
  overflow: hidden;
  margin-top: 1.95rem;
}

#dropdown-user .dropdown-elem .dropdown-list ul {
  list-style: none;
  border: 1px solid #613ff4;
  border-top: none;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
}

#dropdown-user .dropdown-elem .dropdown-list ul li {
  padding: 0.4rem 0.9rem;
  transition: background 0.4s ease;
}

#dropdown-user .dropdown-elem .dropdown-list ul li:hover {
  background: #613ff4;
  color: #fff;
}

#dropdown-user .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 1;
}
</style>
