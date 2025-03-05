<template>

</template>

<script>
export default {
  name: "Page",
  data(){
    return{

    }
  },
  props:['content'],
  mounted() {
    console.log(this.content)

  }
}
</script>

<style scoped>


</style>