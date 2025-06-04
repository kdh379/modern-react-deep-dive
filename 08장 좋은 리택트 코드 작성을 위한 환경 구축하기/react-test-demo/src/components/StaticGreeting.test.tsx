import { render, screen } from '@testing-library/react';
import StaticGreeting from './StaticGreeting';

describe('StaticGreeting 컴포넌트', () => {
  it('기본 인사말과 이름을 올바르게 렌더링합니다', () => {
    render(<StaticGreeting name="홍길동" />);
    
    expect(screen.getByText('안녕하세요, 홍길동님!')).toBeInTheDocument();
    expect(screen.getByText('이것은 메모이제이션된 정적 컴포넌트입니다.')).toBeInTheDocument();
  });

  it('사용자 지정 인사말을 올바르게 렌더링합니다', () => {
    render(<StaticGreeting name="홍길동" greeting="좋은 아침입니다" />);
    
    expect(screen.getByText('좋은 아침입니다, 홍길동님!')).toBeInTheDocument();
  });

  it('메모이제이션이 제대로 동작하는지 확인합니다', () => {
    const { rerender } = render(<StaticGreeting name="홍길동" />);
    const firstRender = screen.getByText('안녕하세요, 홍길동님!');

    // 동일한 props로 리렌더링
    rerender(<StaticGreeting name="홍길동" />);
    const secondRender = screen.getByText('안녕하세요, 홍길동님!');

    // 동일한 엘리먼트 참조를 유지해야 함
    expect(firstRender).toBe(secondRender);
  });
}); 