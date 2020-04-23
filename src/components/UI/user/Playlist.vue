<template lang="pug">
  div#playlist
    div.playlist(@click="playlistState = !playlistState")
        Icon(icon="list" :style="stylePlaylist")
    PlaylistDrop(:drop="drop" v-show="playlistState")
</template>

<script>
import Icon from "vue-themify-icons";
import PlaylistDrop from "./PlaylistDrop";

export default {
  name: "Playlist",
  computed: {
    stylePlaylist() {
      return {
        color: this.playlistState ? "#613ff4" : "",
      };
    },
  },
  props: {
    drop: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      playlistState: false,
    };
  },
  components: {
    Icon,
    PlaylistDrop,
  },
};
</script>

<style lang="scss" scoped>
#playlist {
  float: right;
  position: relative;

  i {
    text-decoration: none;
    color: inherit;
    font-size: 1.1rem;
    transition: 0.4s color ease;

    &:hover {
      color: #222;
    }
  }
}
</style>
