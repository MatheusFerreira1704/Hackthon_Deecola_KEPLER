<template>
  <div class="app-to-bar">
    <v-app-bar scroll-target="brown lighten-1" color="light-green lighten-4">
      <template> </template>
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
      <v-app-bar-title class="text-center">🌱 ONG Ohana 🌍</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <!--Forme encontrada para baixar a imagem de inicio.-->

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="brown lighten-2">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home-assistant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/tiposColeta">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-recycle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tipos de Coleta</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/pontosColeta">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pontos de Coleta</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/formulario">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Seja um volutário!</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppToBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.app-to-bar a {
  text-decoration: none;
  color: white;
}
</style>
