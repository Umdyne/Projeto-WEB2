<template>
    <v-app>
        <v-app-bar color="cor_barra">
            <v-row class="justify-space-between">
                <v-col cols="1">
                    <v-img
                        src="/img/mini_logo.png"
                        :width="70"
                    >
                    
                    </v-img>
                </v-col>
                <v-col cols="4" >
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="O que você esta buscando?"
                        single-line
                        hide-details
                        @click:append="executeSearch"
                        class="white--text"
                    ></v-text-field>
                </v-col>
                <v-col cols="1">
                    <v-img
                        src="/img/perfil.png"
                        :width="70"
                    >
                    
                    </v-img>
                </v-col>
            </v-row>
        </v-app-bar>
        <v-main class="bg-cor_fundo">
            <v-container class="justify-center  h-100">
                <v-btn class="bg-transparent elevation-0">
                    Voltar
                </v-btn>
                <v-row class="justify-center ">
                    <v-col cols="6">

                    
                    <v-img
                        src="/img/img-1.png"
                        height="250"
                        width="500"
                        class="rounded-xl ml-n5 mb-5 align-end text-center"
                        
                        cover
                        >
                        <p class="text-cor_fundo my-2  text-h4">
                        CROCHÊ
                        </p>
                        </v-img>

                        
                
                    </v-col>
                </v-row>
                

                <v-card
                    class="mx-auto bg-transparent elevation-0 "
                    max-width="1000"
                >
                    <v-container fluid>
                    <v-row dense>
                        <v-col
                        v-for="card in cards"
                        :key="card.title"
                        :cols="card.flex"
                        >
                        <v-btn class="rounded-circle bg-transparent elevation-0" height="180" width="150">

                        
                        <v-card class="bg-transparent elevation-0"  >
                            <v-img 
                            :src="card.src"
                            class="align-center  rounded-circle"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="150px"
                            width="150px"
                            
                            cover
                            >
                            
                            </v-img>
                            <v-card-title class=" text-center text-black text-body-2  "  v-text="card.title"></v-card-title>
                
                        </v-card>
                    </v-btn>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                <v-divider
                    :thickness="3"
                    class="border-opacity-50 mt-15 mb-8"
                    color="black"
                    ></v-divider>
                
            </v-container>

        </v-main>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Agulhas Magicas', src:"lc1.jpeg", flex: 2},
        { title: 'Linha e Ponto', src:"lc2.jpeg", flex: 2 },
        { title: 'Laços do Coração', src:"lc3.jpeg", flex: 2 },
        { title: 'Ponto Magico', src:"lc4.jpeg", flex: 2 },
        { title: 'Arte e Linha', src:"lc5.jpeg", flex: 2},
        { title: 'Ponto a Ponto', src:"lc6.jpeg", flex: 2 },
        
        
      ],
    }),
  }
</script>
