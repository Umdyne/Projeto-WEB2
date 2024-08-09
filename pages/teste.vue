<template>
    <v-card class="mx-auto" max-width="500">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="pessoa in pessoas" :key="pessoa.nome" cols="12">
            <v-card>
              <v-card-title class="text-white">{{ pessoa.nome }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
  
  <script>
  import axios from 'axios';
  import { api } from '../services/api'; // Caminho ajustado para importar a URL da API
  
  export default {
    data: () => ({
      pessoas: [], // Inicializando com uma array vazia
    }),
    mounted() {
      this.fetchPessoas();
    },
    methods: {
      async fetchPessoas() {
        try {
          const response = await axios.get(baseURL);
          this.pessoas = response.data;
        } catch (error) {
          console.error('Erro ao buscar pessoas:', error);
        }
      }
    }
  }
  </script>
  