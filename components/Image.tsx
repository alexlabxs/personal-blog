'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function CustomImage({ src, alt, width, height, className }: ImageProps) {
  const [isExternal, setIsExternal] = useState(() => {
    try {
      return src?.startsWith('http://') || src?.startsWith('https://') || false;
    } catch {
      return false;
    }
  });

  // 对于外部图片，使用 fill 属性
  if (isExternal && !width && !height) {
    return (
      <div className={`my-6 ${className || ''}`}>
        <div className="relative w-full aspect-video">
          <Image
            src={src || ''}
            alt={alt || ''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        {alt && (
          <p className="text-center text-sm text-gray-500 mt-2">{alt}</p>
        )}
      </div>
    );
  }

  return (
    <div className={`my-6 ${className || ''}`}>
      <Image
        src={src || ''}
        alt={alt || ''}
        width={typeof width === 'string' ? parseInt(width) : width || 800}
        height={typeof height === 'string' ? parseInt(height) : height || 400}
        className="rounded-lg shadow-lg"
      />
      {alt && (
        <p className="text-center text-sm text-gray-500 mt-2">{alt}</p>
      )}
    </div>
  );
}