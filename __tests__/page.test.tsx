import { render, screen } from '@testing-library/react'
import Page from '../app/page' 

describe('Next.js Home Page', () => {
  it('ตรวจสอบว่าหน้าแรกแสดงผลเนื้อหาสำเร็จหรือไม่', () => {
    render(<Page />)
    
    // ตรวจสอบว่าในหน้าเว็บมีเนื้อหาที่ปกติ Next.js มักจะสร้างมาให้ตอนเริ่มต้นไหม (เช่น คำว่า Docs หรือ Automation text)
    const element = screen.getByText(/Docs/i)
    expect(element).toBeInTheDocument()
  })
})