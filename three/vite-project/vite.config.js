import createVuePlugin from '@vitejs/plugin-vue2'
export default {
  plugins: [createVuePlugin()],
  server:{
    open: true,
  },
    resolve: {
        alias: {
        '@': '/src',
        },
    },
}