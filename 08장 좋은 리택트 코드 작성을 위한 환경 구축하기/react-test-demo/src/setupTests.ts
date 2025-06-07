import '@testing-library/jest-dom'

// Vite의 import.meta.env 모킹
if (typeof globalThis.import === 'undefined') {
  // @ts-ignore
  globalThis.import = { meta: { env: { NODE_ENV: process.env.NODE_ENV || 'development' } } };
}

// 또는 window 객체에 직접 할당
Object.defineProperty(window, 'import', {
  value: { meta: { env: { NODE_ENV: process.env.NODE_ENV || 'development' } } },
  writable: true
});