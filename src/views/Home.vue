<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
      recusandae est perspiciatis voluptates mollitia inventore tenetur nam
      molestias aspernatur possimus debitis odit. Explicabo deleniti sint enim
      illum veniam nihil distinctio!
    </p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
