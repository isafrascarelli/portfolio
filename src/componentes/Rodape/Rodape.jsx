import styles from "./Rodape.module.css"
import marcaRegistrada from '../../assets/marca_registrada.svg'

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
          <img src={marcaRegistrada} alt="símbolo de marca registrada" />
            Desenvolvido pelos alunos do 3° ano do curso de DEV do SESI/SENAI
        </footer>
    )
}

export default Rodape