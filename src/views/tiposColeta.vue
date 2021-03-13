<template>
  
  <v-card >
     <v-container
      v-for="type in types"
      :key="type"
      class="green accent-1"
      fluid
    >
    <!--<div class="tipo-titulo">
      <h2 class="text-h5 text-center">O que podemos descartar?</h2>
    </div>

      <v-subheader>{{ type }}</v-subheader> -->
      <v-row>
        <v-spacer></v-spacer>
        <v-col class="tipo-imagem"
          v-for="card in cards"
          :key="card"
          cols="12"
          sm="4"
          md="4"
        >
          <v-card height="50%">
            <v-img 
              :src="`https://a-static.mlcdn.com.br/618x463/lixeira-com-tampa-vai-e-vem-coleta-seletiva-papel-11-litros-azul-so-lixeiras/shop-noroeste/2504/4e047dd9051175766d53c20927e7bf6e.jpg?image=`"
             height="300px"
            >
              <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
            </v-img>
          
            <v-card-actions class="white justify-center">
              <template v-slot:activator="{ on, attrs }">    
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                >
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          O que descartar?
        </v-btn>
        <br>
      </template>

      <v-card>
        <v-card-title class="green">
          Papel / Papelão
        </v-card-title>

        <v-card-text>
         Embalagens de papel, papel utilizado em impressoras e copiadoras, revistas, jornais, papéis diversos.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    
<!-- Proxima foto -->
      <br>
      <v-row>
        <v-spacer></v-spacer>
        <v-col class="tipo-imagem"
          v-for="card in cards"
          :key="card"
          cols="12"
          sm="4"
          md="4"
        >
          <v-card>
            <v-img 
              :src="`http://www.alternativadescartaveis.com.br/mops-de-limpeza/imagens/quanto-custa-lixeira-coleta-seletiva-plastico.jpg?image=`"
             height="300px"
            >
              <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
            </v-img>
          
            <v-card-actions class="white justify-center">
              <template v-slot:activator="{ on, attrs }">    
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                >
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          O que descartar?
        </v-btn>
        <br>
      </template>

      <v-card>
        <v-card-title class="green">
          Plástico
        </v-card-title>

        <v-card-text>
         Copos vazio, embalagens diversas, sacolas plásticas, pedaços de acrílico, garrafas de refrigerante tipe PET, potes vazios, baldes.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

<!-- Proxima foto -->
<br>
<v-row>
        <v-spacer></v-spacer>
        <v-col class="tipo-imagem"
          v-for="card in cards"
          :key="card"
          cols="12"
          sm="4"
          md="4"
        >
          <v-card>
            <v-img 
              :src="`https://acttion.com.br/wp-content/uploads/2020/01/lixeira-basculante-60L-amalelo-metal.png?image=`"
             height="300px"
            >
              <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
            </v-img>
          
            <v-card-actions class="white justify-center">
              <template v-slot:activator="{ on, attrs }">    
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                >
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          O que descartar?
        </v-btn>
        <br>
      </template>

      <v-card>
        <v-card-title class="green">
          Metal
        </v-card-title>

        <v-card-text>
          Metais em geral, latas de refrigerante, clips, parafusos, pregos, tampas metálicas de garrafas, fios elétricos.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

<!-- Proxima foto -->
<br>
<v-row>
        <v-spacer></v-spacer>
        <v-col class="tipo-imagem"
          v-for="card in cards"
          :key="card"
          cols="12"
          sm="4"
          md="4"
        >
          <v-card>
            <v-img 
              :src="`https://imagens.vivadecora.com.br/epFUvZT4mrR4RvvMLk5Af9KoWPM=/fit-in/662x662/https%3A%2F%2Fimages.madeiramadeira.com.br%2Fproduct%2Fimages%2F63684814-lixeira-com-tampa-vai-e-vem-coleta-seletiva-vidro-11-litros-verde-so-lixeirassku2506-760-1-800x533.jpg?image=`"
             height="300px"
            >
              <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
            </v-img>
          
            <v-card-actions class="white justify-center">
              <template v-slot:activator="{ on, attrs }">    
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                >
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          O que descartar?
        </v-btn>
        <br>
      </template>

      <v-card>
        <v-card-title class="green">
          Vidros
        </v-card-title>

        <v-card-text>
          Vidrarias em geral, garrafas, lâmpadas, embalagens diversas.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>  
<!-- Proxima foto -->

<br>
<v-row>
        <v-spacer></v-spacer>
        <v-col class="tipo-imagem"
          v-for="card in cards"
          :key="card"
          cols="12"
          sm="4"
          md="4"
        >
          <v-card>
            <v-img 
              :src="`https://images.madeiramadeira.com.br/product/images/79789511-lixeira-com-tampa-vai-e-vem-coleta-seletiva-organico-11-litros-marrom-so-lixeirassku2516-760-1-800x533.jpg?image=`"
             height="300px"
            >
              <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
            </v-img>
          
            <v-card-actions class="white justify-center">
              <template v-slot:activator="{ on, attrs }">    
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                >
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          O que descartar?
        </v-btn>
        <br>
      </template>

      <v-card>
        <v-card-title class="green">
          Lixo Orgânico/Comum
        </v-card-title>

        <v-card-text>
          Palitos de churrasco, copos plásticos com resíduos líquidos (café, refrigerante, suco, etc), 
          cascas de frutas e legumes, restos de alimentos, resíduos de varrição, folhagens, guardanapos e 
          materiais com sobras de alimentos, sobras de carvão.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>  
<!-- Proxima foto -->

    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      types: [''],
      cards: [''],
      
    }),

    methods: {
      data() {
                return {
                  dialog: false,
                }
      },
    },
  }
</script>

<style scoped>
.tipo-imagem {
    border-radius: 50px;
}
</style>