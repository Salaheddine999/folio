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
        <svg fill="#D7FE52" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#D7FE52" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m16.484 11.976 6.151-5.344v10.627zm-7.926.905 2.16 1.875c.339.288.781.462 1.264.462h.017-.001.014c.484 0 .926-.175 1.269-.465l-.003.002 2.16-1.875 6.566 5.639h-20.009zm-6.572-7.516h20.03l-9.621 8.356c-.104.082-.236.132-.38.132-.005 0-.009 0-.014 0h.001c-.004 0-.009 0-.014 0-.144 0-.277-.05-.381-.133l.001.001zm-.621 1.266 6.15 5.344-6.15 5.28zm21.6-2.441c-.24-.12-.522-.19-.821-.19h-20.285c-.3.001-.584.071-.835.197l.011-.005c-.618.309-1.035.937-1.035 1.663v.004 12.168c.001 1.026.833 1.857 1.858 1.858h20.283c1.026-.001 1.857-.833 1.858-1.858v-12.168c0-.001 0-.002 0-.004 0-.727-.419-1.357-1.029-1.66l-.011-.005z"></path></g></svg>
        </span>}
        {isViewHovered && !isCopyHovered && <span className="view-text">
        <svg width="40px" height="40px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#D7FE52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9"></path> </g></svg>
        </span>}

      </div>
    </div>
  );
};

export default CustomCursor;
