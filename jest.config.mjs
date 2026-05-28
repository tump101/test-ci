import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // เอาบรรทัด setupFilesAfterEnv ออกไปเลยครับ
}

export default createJestConfig(config)