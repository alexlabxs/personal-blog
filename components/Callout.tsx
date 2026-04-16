'use client';

interface CalloutProps {
  children?: React.ReactNode;
  type?: 'info' | 'warning' | 'error' | 'success';
}

export function Callout({ children, type = 'info' }: CalloutProps) {
  const colors = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800',
  };

  const icons = {
    info: '💡',
    warning: '⚠️',
    error: '❌',
    success: '✅',
  };

  return (
    <div className={`border-l-4 p-4 my-4 rounded ${colors[type]}`}>
      <div className="flex items-start">
        <span className="mr-2 text-lg">{icons[type]}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}