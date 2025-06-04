import React, { useState, useCallback } from 'react';

interface DynamicCounterProps {
  initialCount?: number;
  step?: number;
  onCountChange?: (newCount: number) => void;
}

const DynamicCounter: React.FC<DynamicCounterProps> = ({
  initialCount = 0,
  step = 1,
  onCountChange
}) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = useCallback(() => {
    setCount((prev) => {
      const newCount = prev + step;
      onCountChange?.(newCount);
      return newCount;
    });
  }, [step, onCountChange]);

  const handleDecrement = useCallback(() => {
    setCount((prev) => {
      const newCount = prev - step;
      onCountChange?.(newCount);
      return newCount;
    });
  }, [step, onCountChange]);

  const handleReset = useCallback(() => {
    setCount(initialCount);
    onCountChange?.(initialCount);
  }, [initialCount, onCountChange]);

  return (
    <div className="dynamic-counter">
      <h2>현재 카운트: <span data-testid="count-value">{count}</span></h2>
      <div className="controls">
        <button onClick={handleDecrement} data-testid="decrement-button">
          {step}만큼 감소
        </button>
        <button onClick={handleReset} data-testid="reset-button">
          초기화
        </button>
        <button onClick={handleIncrement} data-testid="increment-button">
          {step}만큼 증가
        </button>
      </div>
    </div>
  );
};

export default DynamicCounter; 