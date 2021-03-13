<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Pontos de Coleta
    </h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>
              CEP
            </th>
            <th colspan="1">
              Rua
            </th>
            <th colspan="1">
              Local
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="ponto of pontoColeta"
            :key="ponto.id"
            @click="pegarLinha(ponto.categorias)"
          >
            <td class="pl-0 pr-2">
              {{ ponto.cep }}
            </td>
            <td class="pl-0 pr-2">{{ ponto.endereco }}</td>
            <td class="pl-0 pr-2">{{ ponto.nome }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Reciclado no local
        </v-card-title>
        <v-card-text> {{ categoria }} </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>

  <!--Dialog da Categoria-->
</template>

<script>
export default {
  name: "tiposColeta",
  data() {
    return {
      pontoColeta: [],
      linhaSelect: null,
      dialog: false,
      categoria: [],
    };
  },

  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.pontoColeta = json;
      });
  },
  methods: {
    pegarLinha(td) {
      this.linhaSelect = td;
      this.categoria = td;
      this.dialog = true;
      console.log(td);
    },
  },
};
</script>
<style scoped>
td {
  padding: 0;
}
</style>
