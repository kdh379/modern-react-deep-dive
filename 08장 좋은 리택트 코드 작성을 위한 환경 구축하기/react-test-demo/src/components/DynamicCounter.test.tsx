import { render, screen, fireEvent } from '@testing-library/react';
import DynamicCounter from './DynamicCounter';

describe('DynamicCounter 컴포넌트', () => {
  it('기본값으로 렌더링됩니다', () => {
    render(<DynamicCounter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('0');
  });

  it('초기값을 props로 받아 렌더링됩니다', () => {
    render(<DynamicCounter initialCount={10} />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('10');
  });

  it('증가 버튼 클릭 시 카운트가 증가합니다', () => {
    render(<DynamicCounter initialCount={0} step={2} />);
    
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    
    expect(screen.getByTestId('count-value')).toHaveTextContent('2');
  });

  it('감소 버튼 클릭 시 카운트가 감소합니다', () => {
    render(<DynamicCounter initialCount={5} step={1} />);
    
    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    
    expect(screen.getByTestId('count-value')).toHaveTextContent('4');
  });

  it('초기화 버튼 클릭 시 초기값으로 돌아갑니다', () => {
    render(<DynamicCounter initialCount={10} />);
    
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    
    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(resetButton);
    
    expect(screen.getByTestId('count-value')).toHaveTextContent('10');
  });

  it('onCountChange 콜백이 호출됩니다', () => {
    const handleCountChange = jest.fn();
    render(
      <DynamicCounter 
        initialCount={0} 
        step={1} 
        onCountChange={handleCountChange} 
      />
    );
    
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    
    expect(handleCountChange).toHaveBeenCalledWith(1);
  });

  it('여러 번의 상태 변경을 올바르게 처리합니다', () => {
    render(<DynamicCounter initialCount={0} step={2} />);
    
    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');
    
    // 증가 2번
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('4');
    
    // 감소 1번
    fireEvent.click(decrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('2');
  });
}); 