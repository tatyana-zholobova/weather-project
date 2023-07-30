<template>
  <button type="button" @click="increment" :class="styles.button">{{count}}</button>
</template>

<script lang="ts">
import styles from './Counter.module.scss';
import { defineComponent } from "vue";
export default defineComponent ({
  name: "Counter",
  data () {
    return {
      styles,
      count: 0
    }
  },
  methods: {
    increment () {
      this.count += 1
    }
  }
})
</script>
