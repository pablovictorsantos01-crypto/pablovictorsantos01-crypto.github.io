import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Se o repositório NÃO se chamar "seu-usuario.github.io" (ou seja, se for
  // um "project page" tipo seu-usuario.github.io/nome-do-repo), troque o
  // base abaixo para '/nome-do-repo/'. Para um "user page" (recomendado),
  // deixe como '/'.
  base: '/',
})
