import styles from '../styles/Home.module.css'
import Head from "next/head"
import Link from "next/link"


export default function Home() {

    return(
 <div className={styles.title}>
    <Head><title>Curriculum Vitae</title></Head>
<div>
   <h1>Curriculum Vitae</h1>
   </div>
   <div className={styles.div}>
   <div className={styles.divs}>
   <Link href="/apresentacao"><a>Apresentação</a></Link>
   </div>
   <div className={styles.divs}>
   <Link href="/certificates"><a>Certificados</a></Link>
   </div>
   <div className={styles.divs}>
   <Link href="/skills"><a>Skills</a></Link>
   </div>
   <div className={styles.divs}>
   <Link href="/contact"><a>Contactos</a></Link>
   </div>
   </div>
   </div>
    )

}