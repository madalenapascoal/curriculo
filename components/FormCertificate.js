import styles from "../styles/FormCertificate.module.css"

export default function FormCertificate(props) {
  return (
    <div className={styles.formcertificate}>
    <div>
     <h1>{props.name}</h1>
     <h2>{props.entity}</h2>
     <hr></hr>
     <h3>{props.date}</h3>
   </div>
   </div>
  )
}