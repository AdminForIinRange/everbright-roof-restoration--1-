'use client';

import React, { useEffect, useRef, useState } from 'react';

type DragScrollProps = {
  className?: string;
  children: React.ReactNode;
  loop?: boolean;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
};

const DragScroll: React.FC<DragScrollProps> = ({
  className,
  children,
  loop = false,
  autoScroll = false,
  autoScrollSpeed = 0.7,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const activePointerIdRef = useRef<number | null>(null);
  const isMouseDragRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isTouchingRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const getLoopWidth = () => {
    const container = containerRef.current;
    const track = container?.firstElementChild as HTMLElement | null;
    if (!container || !track) {
      return 0;
    }
    return track.scrollWidth / 2;
  };

  const normalizeLoopPosition = () => {
    if (!loop || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const loopWidth = getLoopWidth();
    if (!loopWidth) {
      return;
    }

    if (container.scrollLeft >= loopWidth) {
      container.scrollLeft -= loopWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += loopWidth;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (loop) {
      const loopWidth = getLoopWidth();
      if (loopWidth > 0 && container.scrollLeft === 0) {
        container.scrollLeft = 1;
      }
    }

    const handleScroll = () => {
      normalizeLoopPosition();
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    if (autoScroll) {
      const animate = () => {
        const shouldPause = isDragging || isHoveringRef.current || isTouchingRef.current;
        if (!shouldPause && containerRef.current) {
          containerRef.current.scrollLeft += autoScrollSpeed;
          normalizeLoopPosition();
        }
        rafRef.current = requestAnimationFrame(animate);
      };
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = null;
    };
  }, [autoScroll, autoScrollSpeed, isDragging, loop]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return;
    }

    if (event.pointerType !== 'mouse') {
      isTouchingRef.current = true;
      return;
    }

    setIsDragging(true);
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
    isTouchingRef.current = false;
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`${className ?? ''}${isDragging ? ' is-dragging' : ''}`}
      onDragStart={(event) => event.preventDefault()}
      onMouseEnter={() => {
        isHoveringRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveringRef.current = false;
      }}
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
