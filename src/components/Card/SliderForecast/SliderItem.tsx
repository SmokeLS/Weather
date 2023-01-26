import React from 'react';
// Styles
import { StyledSliderItem } from './SliderItemStyles';

type SliderItemProps = {
  slideClass: string;
  zoomFactor: number;
  id: number;
  callback: (id: number) => void;
  callbackOut: () => void;
  slideMargin: number;
  onMouseDown: (event: any) => void;
  visibleSlides: number;
  children: React.ReactNode;
};

const SliderItem: React.FC<SliderItemProps> = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  slideClass,
  id,
  callback,
  callbackOut,
  onMouseDown,
  children
}) => (
  <StyledSliderItem
    zoomFactor={zoomFactor}
    slideMargin={slideMargin}
    visibleSlides={visibleSlides}
    className={slideClass}
    onMouseOver={() => callback(id)}
    onMouseOut={callbackOut}
    onMouseDown={onMouseDown}
  >
      {children}
  </StyledSliderItem>
);

export default SliderItem;