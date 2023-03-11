import React, { useEffect,useState } from 'react'
import styles from "./main.module.css"
import HoverImage from "./main.js"
import tswira from "../../public/images/noteed.png"
import Image from 'next/image'
export default function index() {

  const [isHovering, setIsHovering] = useState(false);

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }

  return (
    <div>
      <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Hover over this text to see an image!
      </p>
      {isHovering && (
        <Image
          src={tswira}
          alt="My Image"
          height={100}
          width={100}
          className={styles.hoverImage} // Apply CSS module class
        />
      )}
    </div>
  )
}
