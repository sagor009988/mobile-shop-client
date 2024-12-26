export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'] // Move libraries to separate chunk
        }
      }
    }
  }
}
