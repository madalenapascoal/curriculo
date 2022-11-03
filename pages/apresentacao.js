import styles from '../styles/Apresentacao.module.css'
import Head from "next/head"
import Link from "next/link"

export default function Apresentacao() {
  return (
    <div className={styles.title}>
    <Head><title>Apresentação</title></Head>
   <h1>Apresentação</h1>
   <p>Considero-me uma pessoa  dinâmica e interessada em novos desafios e perspetivas de realização profissional. Possuo várias aptidões na área da informática. Tenho especial interesse em Desenvolvimento web. Um dos meus objetivos profissionais é aumentar os meus conhecimentos a nível de criação de Páginas Web, tanto a nível de Back-end como Front-end.</p>
   <div>
   <h2>Experiência</h2>
   <p>out.2004 - set. 2022</p>
   <h3>Escriturária</h3>
   <h5>Função: Assessora Departamento Comercial e Planeamento</h5>
   <h4>PEEIE, Lda. - Chaves - Portugal</h4>
   </div>
   <div>
   <h2>Educação</h2>
   <p>set.2018 - jul. 2020</p>
   <h3>Técnico Superior Profissional em Informática</h3>
   <h4>Instituto Politécnico de Bragança</h4>
   <h4>Escola Superior de Comunicação, Administração e Turismo de Mirandela</h4>
   </div>
   <div>
   <h2>Línguas</h2>
   <h3>Português</h3>
   <p>Língua Nativa</p>
   <h3>Inglês</h3>
   <p>Maior facilidade na leitura e escrita e maior dificuldade na oralidade</p>
   </div>
  

   </div>
  )
}