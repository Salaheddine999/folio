import React, { useState } from 'react'
import styles from './Contact.module.scss'
import { RoughNotation } from "react-rough-notation";

export default function Contact() {
  const [copiedLink, setCopiedLink] = useState(false)

  const onCopy = ()=>{
    navigator.clipboard.writeText("abw.salaheddine@gmail.com")
    setCopiedLink(true)
    setTimeout(()=>{setCopiedLink(false)},1500)
  }
  
  return (
    <>
      
      <div className={styles.container}>
          <h2>
          <RoughNotation
              type="highlight"
              color="#D7FE52"
              multiline
              show
              animationDelay={3800}
              padding={[ 2, 14, 2, 14 ]}
              strokeWidth={4}
            >
            Always up for meeting awesome new people!
            </RoughNotation>
          </h2>
          <div className={styles.animation_container}>
            <div className={styles.loop_holder}>
              <div className={styles.loop_holder__text}>Contact me<span className={styles.spaner}>•</span>Contact me<span className={styles.spaner}>•</span>Contact me<span className={styles.spaner}>•</span></div>
              <div className={styles.loop_holder__text}>Contact me<span className={styles.spaner}>•</span>Contact me<span className={styles.spaner}>•</span>Contact me<span className={styles.spaner}>•</span></div>
              <div className={styles.loop_holder__text}>Contact me<span className={styles.spaner}>•</span>Contact me<span className={styles.spaner}>•</span>Contact me<span className={styles.spaner}>•</span></div>
            </div>
            {!copiedLink ? (
              <button className={styles.copy_email} onClick={onCopy}>CLICK TO COPY EMAIL</button>
            ):(
              <button className={styles.copy_email}>EMAIL COPIED!</button>
            )}
          </div>

      </div>
    </>
  )
}
