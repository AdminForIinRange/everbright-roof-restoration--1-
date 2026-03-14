'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

type DragScrollProps = {
  className?: string;
  children: React.ReactNode;
  loop?: boolean;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
  autoScrollResumeDelay?: number;
};

const DragScroll: React.FC<DragScrollProps> = ({
  className,
  children,
  loop = false,
  autoScroll = false,
  autoScrollSpeed = 0.7,
  autoScrollResumeDelay = 1400,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const activePointerIdRef = useRef<number | null>(null);
  const isMouseDragRef = useRef(false);
  const isTouchingRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number | null>(null);
  const preciseScrollLeftRef = useRef(0);
  const autoScrollPausedUntilRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const pauseAutoScroll = useCallback(
    (duration = autoScrollResumeDelay) => {
      autoScrollPausedUntilRef.current =
        (typeof performance === 'undefined' ? Date.now() : performance.now()) + duration;
    },
    [autoScrollResumeDelay],
  );

  const getLoopWidth = useCallback(() => {
    const container = containerRef.current;
    const track = container?.firstElementChild as HTMLElement | null;
    if (!container || !track) {
      return 0;
    }
    return track.scrollWidth / 2;
  }, []);

  const normalizeLoopPosition = useCallback(() => {
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

    preciseScrollLeftRef.current = container.scrollLeft;
  }, [getLoopWidth, loop]);

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

    preciseScrollLeftRef.current = container.scrollLeft;
    lastFrameTimeRef.current = null;

    const handleScroll = () => {
      normalizeLoopPosition();
      preciseScrollLeftRef.current = container.scrollLeft;
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    if (autoScroll) {
      const animate = (timestamp: number) => {
        const lastTimestamp = lastFrameTimeRef.current ?? timestamp;
        const deltaMs = Math.min(timestamp - lastTimestamp, 32);
        lastFrameTimeRef.current = timestamp;
        const shouldPause =
          isDragging || isTouchingRef.current || timestamp < autoScrollPausedUntilRef.current;
        if (!shouldPause && containerRef.current) {
          const pixelsPerSecond = autoScrollSpeed * 60;
          preciseScrollLeftRef.current += (pixelsPerSecond * deltaMs) / 1000;
          containerRef.current.scrollLeft = Math.round(preciseScrollLeftRef.current);
          normalizeLoopPosition();
        } else if (containerRef.current) {
          preciseScrollLeftRef.current = containerRef.current.scrollLeft;
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
      lastFrameTimeRef.current = null;
    };
  }, [
    autoScroll,
    autoScrollSpeed,
    getLoopWidth,
    isDragging,
    loop,
    normalizeLoopPosition,
    pauseAutoScroll,
  ]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return;
    }

    if (event.pointerType !== 'mouse') {
      pauseAutoScroll();
      isTouchingRef.current = true;
      return;
    }

    pauseAutoScroll();
    setIsDragging(true);
    event.preventDefault();
    isMouseDragRef.current = true;
    activePointerIdRef.current = event.pointerId;
    startXRef.current = event.clientX;
    scrollLeftRef.current = containerRef.current.scrollLeft;
    preciseScrollLeftRef.current = containerRef.current.scrollLeft;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !isMouseDragRef.current || !containerRef.current) {
      return;
    }

    pauseAutoScroll();
    event.preventDefault();
    const deltaX = event.clientX - startXRef.current;
    containerRef.current.scrollLeft = scrollLeftRef.current - deltaX;
    preciseScrollLeftRef.current = containerRef.current.scrollLeft;
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
    pauseAutoScroll();
    if (containerRef.current) {
      preciseScrollLeftRef.current = containerRef.current.scrollLeft;
    }
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`${className ?? ''}${isDragging ? ' is-dragging' : ''}`}
      onDragStart={(event) => event.preventDefault()}
      onWheel={() => {
        pauseAutoScroll();
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
