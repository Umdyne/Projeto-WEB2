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
            <v-container >
                <p class="text-cor_barra text-center text-h5">
                EXPLORE
                </p>
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
                        <v-card class="rounded-xl">
                            <v-img
                            :src="card.src"
                            class="align-end "
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                            cover
                            >
                            <v-card-title class=" text-center text-cor_fundo text-h5" v-text="card.title"></v-card-title>
                            </v-img>

                
                        </v-card>
                        </v-col>
                    </v-row>
                        <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn
                            v-bind="activatorProps"
                            color="surface-variant"
                            text="Open Dialog"
                            variant="flat"
                            ></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card title="Dialog">
                                o
                            </v-card>
                        </template>
                        </v-dialog>
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
        { title: 'CROCHÊ', src:"img-1.png", flex: 4 },
        { title: 'CERÂMICA', src:"img-2.png", flex: 4 },
        { title: 'BISCUIT', src:"img-3.png", flex: 4 },
        { title: 'BIJUTERIAS', src:"img-4.png", flex: 4 },
        { title: 'BORDADOS', src:"img-5.png", flex: 4 },
        { title: 'PINTURAS', src:"img-6.png", flex: 4 },
        { title: 'RECICLAGEM', src:"img-7.png", flex: 4 },
        { title: 'ARGILA', src:"img-8.png", flex: 4 },
        { title: 'GESSO', src:"img-9.png", flex: 4 },
      ],
    }),
  }
</script>
