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
                <v-row class="justify-center mt-5">
                    <v-col cols="3">

                    
                    <v-img
                        src="/public/lc1.jpeg"
                        max-height="200"
                        max-width="200"
                        class="rounded-circle ml-n5 mb-5"
                        aspect-ratio="1/1"
                        cover
                        >
                        
                    </v-img>
                    <v-img
                        src="/img/star.png"
                        width="200"
                        class="ml-n6"
                        >
                        
                    </v-img>
                        
                        
                    </v-col>
                    <v-col cols="9">
                        <p class="text-black my-2 text-h3">
                        Agulhas Mágicas
                        </p>
                        <p class="text-black my-2 text-h5">
                        Acessórios
                        </p>
                        <p>•Olá, seja bem-vindo(a) a Agulhas Mágicas! 😁</p>
                        <p>•As melhores peças de crochê, com os melhores preços, você encontra aqui!</p>
                        <p>•Contato: 00 0000-0000</p>
                        <p>•Picos-PI</p>

                        <p class="font-weight-bold my-3">Artista: @perfilArtista </p>
                    </v-col>
                    
                </v-row>
                <v-row class="justify-center mb-10">
                    <v-card class="bg-cor_card_login rounded-xl" height="150" width="700"> 
                    <v-card-title class="text-center text-cor_fundo">
                        Sobre mim
                    </v-card-title>
                    <v-card  class="bg-cor_card_login text-h3 elevation-0" text="Artista apaixonado(a) por artesanato, transformando materiais simples em obras de arte. Busco inspiração constante, explorando técnicas e materiais para criar peças únicas e cheias de significado, transmitindo emoções e contando histórias através do meu trabalho."></v-card>
                </v-card>
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
                        <v-btn class="my-2 mx-n2" height="300" width="300">

                        
                        <v-card class="rounded-sm ">
                            <v-img 
                            :src="card.src"
                            class="align-center "
                           
                            height="300"
                            width="300"
                            
                            cover
                            >
                            <v-card-title class=" text-center text-cor_fundo text-h5 mt-5 " v-text="card.title"></v-card-title>
                            </v-img>

                
                        </v-card>
                    </v-btn>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
            </v-container>

        </v-main>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: '', src:"p1.jpeg", flex: 4},
        { title: '', src:"p2.jpeg", flex: 4 },
        { title: '', src:"p3.jpeg", flex: 4 },
        { title: '', src:"p4.jpeg", flex: 4 },
        { title: '', src:"p5.jpeg", flex: 4},
        { title: '', src:"p6.jpeg", flex: 4 },
        { title: '', src:"p7.jpeg", flex: 4 },
        { title: '', src:"p8.jpeg", flex: 4 },
        { title: '', src:"p9.jpeg", flex: 4 },
        
      ],
    }),
  }
</script>
