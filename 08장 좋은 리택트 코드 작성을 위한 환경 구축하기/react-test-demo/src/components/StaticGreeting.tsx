import React from 'react';

interface StaticGreetingProps {
  name: string;
  greeting?: string;
}

const StaticGreeting = React.memo(({ name, greeting = '안녕하세요' }: StaticGreetingProps) => {
  return (
    <div className="static-greeting">
      <h2>{greeting}, {name}님!</h2>
      <p>이것은 메모이제이션된 정적 컴포넌트입니다.</p>
    </div>
  );
});

StaticGreeting.displayName = 'StaticGreeting';

export default StaticGreeting; 