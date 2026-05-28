import type { Config } from 'jest'
import nextJest from 'next/jest.js'
import '@testing-library/jest-dom'

const createJestConfig = nextJest({
  // ระบุตำแหน่งโปรเจกต์ Next.js ของคุณ
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)