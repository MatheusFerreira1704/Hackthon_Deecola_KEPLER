import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import tiposColeta from "../views/tiposColeta.vue";
import pontosColeta from "../views/pontosColeta.vue";
import Formulario from "../views/formulario.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/tiposColeta",
    name: "tiposColeta",
    component: tiposColeta,
  },
  {
    path: "/pontosColeta",
    name: "pontosColeta",
    component: pontosColeta,
  },

  {
    path: "/formulario",
    name: "formulario",
    component: Formulario,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
