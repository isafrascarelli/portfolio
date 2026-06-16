import styles from "./Banner.module.css"
import minhaFoto from '../../assets/isaxuxu.jpeg'
import circuloColorido from '../../assets/circulo_colorido.png'

const Banner = () =>{
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Oi querida</h1>

                <p>Boas vindas ao meu espaço pessoal! Eu sou a Isabele, aluna do curso de desenvolvimento de sistemas do SENAI - unidade de Jaú, Aqui compartilho vários aprendizados, espero que odeiem tudo, beijão!</p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} />
                <img className={styles.minhaFoto} src={minhaFoto} alt="foto minha né bbs" />
            </div>

        </div>
    )
}

export default Banner