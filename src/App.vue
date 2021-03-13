<template>
  <v-app>
    <v-main>
      <AppTopBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from "./components/shared/AppTopBar";

export default {
  name: "App",
  components: {
    AppTopBar,
  },
};
</script>
