import styles from "../styles/Skills.module.css"
import Head from "next/head"
import listHardSkills from "../components/listHardSkills"
import FormHardSkills from "../components/FormHardSkills"
import Link from "next/link"

function createSkillls(hardSkill){
    return(
        <FormHardSkills 
        name={hardSkill.name}
        description={hardSkill.description}
        />
    )
}


export default function Skills(){
    return(
        <>
        <Head><title>Skills</title></Head>
        <div className={styles.title}>
        <h1>Skills</h1>
        </div>
        <div className={styles.skills_subtitle}>
        <h2>Hard Skills</h2>
        </div>
        <div className={styles.listHardSkills}>{listHardSkills.map(createSkillls)}</div>
       <div className={styles.skills_subtitle}>
         <h2>Soft Skills</h2>
         </div>

        <div className={styles.listSoftSkills}>
         <ul>
         <li>Capacidade de Organização e Planeamento</li>
         <li>Recolha e Gestão de Dados</li>
         <li>Atenção aos Detalhes</li>
         <li>Confidencialidade</li>
         <li>Confiança</li>
         </ul>
         </div>
          <div>
   
</div>
        </>
    )
}