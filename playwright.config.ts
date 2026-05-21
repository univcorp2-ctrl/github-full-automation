import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  use: { baseURL: process.env.WORKER_BASE_URL || 'http://127.0.0.1:8787', trace: 'on-first-retry', screenshot: 'only-on-failure' },
  reporter: process.env.CI ? [['html'], ['github']] : [['list'], ['html']]
});
