<template>
    <v-app class="bg-cor_fundo">
      <v-container fluid fill-height class="d-flex justify-center align-center h-100">
        <v-card class="d-flex align-center justify-center" height="25vw" width="50vw">
          <v-row no-gutters class="w-100 h-100">
            <v-col cols="6" class="d-flex align-center justify-center">
              <v-img class="" src="/public/escutura.jpeg" height="470" cover />
            </v-col>
            <v-col cols="6" class="d-flex align-center justify-center">
              <v-card class="justify-center" height="100%" width="100%">
                <v-card-text class=" text-h6 font-weight-light  flex align-end">
                  Nome da Loja de Estaua
                </v-card-text>
                <v-card-text class=" text-h6 font-weight-light  flex align-end">
                  Estatua
                </v-card-text>
                <v-card-text class=" text-h7 font-weight-light  flex align-end">
                    Descrição: 	Lorem ipsum volutpat vitae ligula inceptos non lorem, nibh pulvinar etiam lacus tempus in feugiat urna, 
                    lectus commodo pulvinar torquent donec leo. lectus pharetra id etiam vel placerat congue .
                </v-card-text>
                <p class="ma-5 font-weight-medium">Valor: R$9,99</p>
                <v-btn class="lixo-btn" icon="" color="cor_fundo">
                  <v-img src="/public/lixo.png" cover width="50" />
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-app>
  </template>
  
  <style scoped>
  .v-card {
    position: relative;
  }
  
  .lixo-btn {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
  </style>
  