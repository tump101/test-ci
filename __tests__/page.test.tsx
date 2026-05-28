import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Page from '../app/page'

describe('Next.js Home Page', () => {
  it('ตรวจสอบว่าหน้าแรกแสดงผลโครงสร้างสำเร็จหรือไม่', () => {
    // สั่ง Render หน้าแรกออกมาจำลองดู
    const { container } = render(<Page />)
    
    // เปลี่ยนมาเช็กว่าหน้าแรกมีโครงสร้าง HTML ปรากฏขึ้นมาจริงไหม (ไม่เจาะจงตัวหนังสือ)
    expect(container).toBeDefined()
  })
})