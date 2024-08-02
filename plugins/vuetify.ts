import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// Defina seu tema personalizado
const customTheme = {
  dark: false,
  colors: {
    background: '#f5f5f5',
    surface: '#ffffff',
    primary: '#6200ea',
    secondary: '#03dac6',
    accent: '#82b1ff',
    error: '#b00020',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#fb8c00',
    cor_barra: '#7B7163', 
    cor_fundo: '#DCC7A9', 
    cor_mini_menu: '#7B7163',
    cor_card_login: '#463F33',
    cor_marron_escuro: '#241D13',
    
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme,
      },
    },
    icons: {
      defaultSet: 'mdi',
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
