'use client';

import React, { useRef, useState } from 'react';

type DragScrollProps = {
  className?: string;
  children: React.ReactNode;
};

const DragScroll: React.FC<DragScrollProps> = ({ className, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const activePointerIdRef = useRef<number | null>(null);
  const isMouseDragRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return;
    }

    setIsDragging(true);

    if (event.pointerType !== 'mouse') {
      return;
    }

    event.preventDefault();
    isMouseDragRef.current = true;
    activePointerIdRef.current = event.pointerId;
    startXRef.current = event.clientX;
    scrollLeftRef.current = containerRef.current.scrollLeft;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !isMouseDragRef.current || !containerRef.current) {
      return;
    }

    event.preventDefault();
    const deltaX = event.clientX - startXRef.current;
    containerRef.current.scrollLeft = scrollLeftRef.current - deltaX;
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (
      activePointerIdRef.current === event.pointerId &&
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    activePointerIdRef.current = null;
    isMouseDragRef.current = false;
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`${className ?? ''}${isDragging ? ' is-dragging' : ''}`}
      onDragStart={(event) => event.preventDefault()}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onPointerLeave={handlePointerEnd}
    >
      {children}
    </div>
  );
};

export default DragScroll;
