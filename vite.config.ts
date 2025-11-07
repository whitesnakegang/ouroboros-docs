import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, existsSync } from 'fs'

// package.json에서 homepage 값 읽기
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'))
const homepage = packageJson.homepage || ''

// .env 파일 존재 여부 확인 (개발환경 여부 판단)
const hasEnvFile = existsSync('.env') || existsSync('.env.local') || existsSync('.env.development')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // .env 파일이 없으면 배포환경으로 간주하고 homepage 사용
    'import.meta.env.VITE_HOMEPAGE': JSON.stringify(homepage),
    'import.meta.env.VITE_HAS_ENV_FILE': JSON.stringify(hasEnvFile),
  },
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
