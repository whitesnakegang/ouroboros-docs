import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/ouroboros': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        // 백엔드 서버가 없을 때도 앱이 동작하도록 에러 무시
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            // 프록시 오류를 콘솔에만 출력하고 앱 실행은 계속
            console.log('프록시 오류 (백엔드 서버가 실행되지 않음):', err.message);
          });
        },
      },
    },
  },
})
