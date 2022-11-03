import styles from "../styles/FormHardSkills.module.css"

export default function FormHardSkills(props){
    return(
       <>
       <div className={styles.formHardSkillls}>
       <h2>{props.name}</h2>
       <h3>{props.description}</h3>
       </div>
       </> 
    )
}