import React, { useContext, useEffect, useState } from 'react';
import { CursorContext } from './CursorManager';
import cn from 'classnames';

function lerp(start: number, end: number, amt: number) {
  return (1 - amt) * start + amt * end;
}
const CustomCursor = ({ speed = 0.1 }) => {
    // Add state for hovering over h1
  const [isCopyHovered, setIsCopyHovered] = useState(false);
  const [isViewHovered, setIsViewHovered] = useState(false);
  const { projectTitle } = useContext(CursorContext);
  const mainCursor = React.useRef<HTMLDivElement>(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  });

  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    function setMousePosition(event: MouseEvent) {
      if (positionRef.current && mainCursor.current) {
        if (!visible) setVisibility(true);

        const { clientX, clientY } = event;

        const mouseX = clientX;
        const mouseY = clientY;
        positionRef.current.mouseX = mouseX - mainCursor.current.clientWidth / 2;
        positionRef.current.mouseY = mouseY - mainCursor.current.clientHeight / 2;
      }
    }
    document.addEventListener('mousemove', setMousePosition);

    return () => {
      document.removeEventListener('mousemove', setMousePosition);
    };
  }, []);

  useEffect(() => {
    function checkHoverOnElements(event: MouseEvent) {
      const copyBtn = document.querySelector('#copy_btn');
      const viewBtns = document.querySelectorAll('.view_btn');
      
      const isCopyHovered = checkHover(copyBtn, event);
      const isViewHovered = Array.from(viewBtns).some((btn) => checkHover(btn, event));
    
      setIsCopyHovered(isCopyHovered);
      setIsViewHovered(isViewHovered);
    }

    function checkHover(element: Element | null, event: MouseEvent): boolean {
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      );
    }

    document.addEventListener('mousemove', checkHoverOnElements);

    return () => {
      document.removeEventListener('mousemove', checkHoverOnElements);
    };
  }, []);


  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = lerp(0, mouseX, 0.2);
        positionRef.current.destinationY = lerp(0, mouseY, 0.2);
      } else {
        positionRef.current.distanceX = lerp(destinationX, mouseX, 0.2);
        positionRef.current.distanceY = lerp(destinationY, mouseY, 0.2);
        if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX = distanceX;
          positionRef.current.destinationY = distanceY;
        }
      }
      if (mainCursor && mainCursor.current)
        mainCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, [speed]);

  return (
<div className="cursor-wrapper">
      <div
        className={cn('secondary-cursor', {
          'as-visible': visible,
          copyhover: isCopyHovered,
          viewhover: isViewHovered,
        })}
        ref={mainCursor}
      >
        {isCopyHovered && !isViewHovered && <span className="copy-text">✉️</span>}
        {isViewHovered && !isCopyHovered && <span className="view-text">View</span>}
      </div>
    </div>
  );
};

export default CustomCursor;
