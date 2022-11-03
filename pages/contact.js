
import styles from '../styles/Contactos.module.css'
import Head from "next/head"
import Link from "next/link"

export default function Contactos() {
  return (
    <div className={styles.title}>
    <Head><title>Contactos</title></Head>
<div>
   <h1>Contactos</h1>
   </div>
   <div className={styles.div}>
   <div className={styles.divs}>
   <a href="https://www.linkedin.com/in/madalena-pascoal-3b58821b7/" target="blank">Linkedin</a>
   </div>
   <div className={styles.divs}>
   <a href="https://github.com/madalenapascoal" target="blank">GitHub</a>
  </div>
  </div>
   <div>

</div>
  
   </div>

  )
}
