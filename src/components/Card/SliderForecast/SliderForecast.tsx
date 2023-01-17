import React, { useState, useEffect, useRef } from 'react';
import SliderItem from './SliderItem';
import { StyledSliderWrapper, StyledSlider } from './SliderStyles';

type SliderProps = {
  children?: any;
  zoomFactor: number;
  slideMargin: number;
  maxVisibleSlides: number;
  pageTransition: number;
};

const numberOfSlides = (maxVisibleSlides: number, windowWidth: number) => {
  if (windowWidth > 1200) return maxVisibleSlides;
  if (windowWidth > 745) return 4;
  if (windowWidth > 515) return 3;
  if (windowWidth > 380) return 2;
  return 1;
};

const SliderForecast: React.FC<SliderProps> = ({
  children,
  zoomFactor,
  slideMargin,
  maxVisibleSlides,
  pageTransition,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [transformValue, setTransformValue] = useState<string>(`-${zoomFactor / 2}%`);
  const [scrollSize, setScrollSize] = useState<number>(0);

  const [scrolling, setScrolling] = useState<number>(0);

  const sliderRef = useRef<HTMLElement>(null);

  const visibleSlides = numberOfSlides(maxVisibleSlides, scrollSize);
  const totalPages: number = Math.ceil(children.length / visibleSlides) - 1;

  useEffect(() => {
    //@ts-ignore
    const resizeObserver = new ResizeObserver((entries) => {
      setScrollSize(entries[0].contentRect.width);
    });
    //@ts-ignore
    resizeObserver.observe(sliderRef.current);
  }, [sliderRef]);

  // Position slider on resize
  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      if (currentPage > totalPages) setCurrentPage(totalPages);
      sliderRef.current.style.transform = `translate3D(-${currentPage * scrollSize}px, 0, 0)`;
    }
  }, [sliderRef, currentPage, scrollSize, totalPages]);


  const disableHoverEffect = () => {
    if (sliderRef.current) sliderRef.current.style.pointerEvents = 'none';
    setTimeout(() => {
      if (sliderRef.current) sliderRef.current.style.pointerEvents = 'all';
    }, pageTransition);
  };

  const handleSlideMove = (forward: boolean | null) => {
    if (forward === null) return;

    disableHoverEffect();

    if (currentPage <= 0 && !forward) return;
    if (currentPage >= totalPages && forward) return;

    setCurrentPage(currentPage + (forward ? 1 : -1));

    if (sliderRef.current)
      sliderRef.current.style.transform = `translate3D(-${(currentPage + (forward ? 1 : -1)) * scrollSize}px, 0, 0)`;
  };

  const handleMouseOver = (id: number) => {
    if (id % visibleSlides === 1) setTransformValue('0%'); // left
    if (id % visibleSlides === 0) setTransformValue(`-${zoomFactor}%`); // right
  };

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`);
  };

  const assignSlideClass = (index: number, visibleSlides: number) => {
    const classes = ['right', 'left'];
    return classes[index % visibleSlides] || '';
  };

  const mouseDownHandler = (event: MouseEvent | TouchEvent) => {
    if ('clientX' in event) {
      setScrolling(event.clientX);
    } else if ('touches' in event) {
      setScrolling(event.touches[0].clientX);
    }
  };

  const mouseUpHandler = (event: MouseEvent | TouchEvent) => {
    let step = 0;

    if ('clientX' in event) {
      step = event.clientX - scrolling;
    } else if ('touches' in event) {
      step = event.changedTouches[0].clientX - scrolling;
    }

    let dir: boolean | null;

    if (step > 0) {
      dir = false;
    } else if (step === 0) {
      dir = null;
    } else {
      dir = true;
    }

    handleSlideMove(dir);
  };

  return (
    <StyledSliderWrapper
      zoomFactor={zoomFactor}
      visibleSlides={visibleSlides}
      slideMargin={slideMargin}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onTouchStart={mouseDownHandler}
      onTouchEnd={mouseUpHandler}
    >
      <StyledSlider
        visibleSlides={visibleSlides}
        transformValue={transformValue}
        zoomFactor={zoomFactor}
        slideMargin={slideMargin}
        pageTransition={pageTransition}
        ref={sliderRef}
      >
        {children.map((child: any, i: any) => (
          <SliderItem
            key={i}
            slideMargin={slideMargin}
            visibleSlides={visibleSlides}
            zoomFactor={zoomFactor}
            slideClass={assignSlideClass(i + 1, visibleSlides)}
            id={i + 1}
            callback={handleMouseOver}
            callbackOut={handleMouseOut}
            onMouseDown={mouseDownHandler}
          >
            {child}
          </SliderItem>
        ))}
      </StyledSlider>
      {currentPage > 0 && slideMargin !== 10 && (
        <div className="button-wrapper back">
          <button className="button back" onClick={() => handleSlideMove(false)}>
            &#8249;
          </button>
        </div>
      )}
      {currentPage !== totalPages && slideMargin !== 10 && (
        <div className="button-wrapper forward">
          <button className="button forward" onClick={() => handleSlideMove(true)}>
            &#8250;
          </button>
        </div>
      )}
    </StyledSliderWrapper>
  );
};

export default SliderForecast;
