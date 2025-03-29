import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className=' px-4 md:px-[128px]'>{children}</div>
  );
}