<template>
  <h1 class="mb-5">index.vue</h1>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useMainStore } from '../stores/main'
export default {
  name: "Index",
  components: {
  },
  data() {
    return {
      test:'hello world'
    };
  },
  computed:{
      ...mapState(useMainStore, ['count'])
  },
  async created(){
    console.log(import.meta.env.VITE_SOME_KEY)
    console.log(import.meta.env)
    console.log(this.tes?.length)
    console.log(this.count)
    console.log(this.increment())
    console.log(this.count)
    console.log(this.decrement())
    console.log(this.count)
  },
  methods: {
    ...mapActions(useMainStore,
    {
      increment: 'increment',
      decrement: 'decrement'
    })
  }
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
