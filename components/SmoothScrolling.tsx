import { ReactLenis } from "@studio-freight/react-lenis";


type Props = {
  children: JSX.Element
}

export default function SmoothScrolling({ children }:Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.4, // Smoothness factor
        duration: 1.3, // Scroll duration in seconds
        //smoothTouch: true, // Enable smooth scrolling on touch devices
        
      }}
    >
      {children}
    </ReactLenis>
  );
}