import styles from '../styles/Certificates.module.css'
import FormCertificate from "../components/FormCertificate"
import list from "../components/listCertificate"
import Head from"next/head"
import Link from "next/link"
function createCertificate(certificate){
  return(
    <FormCertificate
    name={certificate.name}
    entity={certificate.entity}
    date={certificate.date}
    />
  )
}


export default function Certificates() {
  return (
    <>
     <Head><title>Certificados</title></Head>
    <div className={styles.title}>
    <h1>Certificados</h1>
   </div>
   <div className={styles.certificate_list}>
   {list.map(createCertificate)}

   </div>
      
   </>
  )
}
