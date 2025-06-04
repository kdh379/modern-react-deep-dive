/// <reference types="@testing-library/jest-dom" />
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App 컴포넌트', () => {
  it('로고 이미지들이 올바르게 렌더링되어야 한다', () => {
    render(<App />)
    
    const viteLogo = screen.getByAltText('Vite logo')
    const reactLogo = screen.getByAltText('React logo')
    
    expect(viteLogo).toBeInTheDocument()
    expect(reactLogo).toBeInTheDocument()
  })

  it('제목이 올바르게 렌더링되어야 한다', () => {
    render(<App />)
    
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('카운트 버튼이 클릭되면 카운트가 증가해야 한다', () => {
    render(<App />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('count is 0')
    
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')
    
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 2')
  })

  it('HMR 관련 텍스트가 올바르게 표시되어야 한다', () => {
    render(<App />)
    
    expect(screen.getByText(/Edit/i)).toBeInTheDocument()
    expect(screen.getByText(/src\/App\.tsx/i)).toBeInTheDocument()
  })

  it('문서 링크 관련 텍스트가 올바르게 표시되어야 한다', () => {
    render(<App />)
    
    expect(screen.getByText('Click on the Vite and React logos to learn more')).toBeInTheDocument()
  })
}) 