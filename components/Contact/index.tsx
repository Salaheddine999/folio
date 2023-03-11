import React, { useState } from 'react'
import styles from './Contact.module.scss'

export default function Contact() {
  const [copiedLink, setCopiedLink] = useState(false)

  const onCopy = ()=>{
    navigator.clipboard.writeText("abdelwahid.salaheddine@gmail.com")
    setCopiedLink(true)
    setTimeout(()=>{setCopiedLink(false)},1500)
  }
  
  return (
    <div className={styles.container}>
        <div className={styles.loop_holder}>
          <div className={styles.loop_holder__text}>GET IN TOUCH . GET IN TOUCH . GET IN TOUCH .</div>
          <div className={styles.loop_holder__text}>GET IN TOUCH . GET IN TOUCH . GET IN TOUCH .</div>
          <div className={styles.loop_holder__text}>GET IN TOUCH . GET IN TOUCH . GET IN TOUCH .</div>
        </div>
        {!copiedLink ? (
          <button className={styles.copy_email} onClick={onCopy}>COPY EMAIL</button>
        ):(
          <button className={styles.copy_email}>EMAIL COPIED!</button>
        )}
    </div>
  )
}
