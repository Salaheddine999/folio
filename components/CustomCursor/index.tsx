import React, { useContext, useEffect, useState } from 'react';
import { CursorContext } from './CursorManager';
import cn from 'classnames';

function lerp(start: number, end: number, amt: number) {
  return (1 - amt) * start + amt * end;
}
const CustomCursor = ({ speed = 0.1 }) => {
    // Add state for hovering over h1
  const [isCopyHovered, setIsCopyHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
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
      const menuBtn = document.querySelectorAll('.menu_btn')
      
      const isMenuHovered = Array.from(menuBtn).some((btn) => checkHover(btn, event));
      const isCopyHovered = checkHover(copyBtn, event);
      const isViewHovered = Array.from(viewBtns).some((btn) => checkHover(btn, event));
    
      setIsCopyHovered(isCopyHovered);
      setIsViewHovered(isViewHovered);
      setIsMenuHovered(isMenuHovered);
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
          menuhover: isMenuHovered,
        })}
        ref={mainCursor}
      >
        {isCopyHovered && !isViewHovered && <span className="copy-text">
        <svg width="44px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#D7FE52"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.5 5.5L10.5858 12.5858C11.3668 13.3668 12.6332 13.3668 13.4142 12.5858L20.5 5.5M4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19Z" stroke="#D7FE52" stroke-width="0.92" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </span>}
        {isViewHovered && !isCopyHovered && <span className="view-text">
        <svg width="35px" height="35px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#D7FE52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9"></path> </g></svg>
        </span>}

      </div>
    </div>
  );
};

export default CustomCursor;
