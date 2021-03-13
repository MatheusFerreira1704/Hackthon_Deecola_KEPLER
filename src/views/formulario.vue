<template>
<v-container>
    <h3 class="text-center">Inscreva-se caso queira se juntar a nossa causa!</h3>   

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nome"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="telefone"
      :rules="telefoneRules"
      label="Telefone"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="Enviado com sucesso!"
      class="mr-4"
      @click="validate"
    >
      Enviar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpar Formulário
    </v-btn>

  </v-form>
</v-container>
</template>

<script>
  export default {
      name:'formulario',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Necessário digitar seu nome',
        v => (v && v.length <= 10) || 'Nome com no mínimo 10 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Necessário digitar um e-mail',
        v => /.+@.+\..+/.test(v) || 'Precisa inserir um e-mail válido',
      ],
      
      telefone: '',
      telefoneRules: [
        v => !!v || 'Necessário digitar um telefone de contato',
        v => (v && v.length <= 11) || 'Preciso digitar DDD e número',
      ],
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>

</style>