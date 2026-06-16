import PostModelo from "../../componentes/PostModelo/PostModelo"
import fotoCapa from "../../assets/sobre_mim_capa.png"
import minhaFoto from '../../assets/isaxuxu.jpeg'
import styles from './SobreMim.module.css'

const SobreMim = () =>{
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}> Oii, eu sou a Isabele.</h3>

             <img className={styles.fotoSobreMim} src={minhaFoto} alt="" />

            <p className={styles.paragrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quaerat libero, nemo autem eligendi sed aliquam eaque maiores iste impedit dolor sint unde doloremque deleniti voluptates. Rem magni a dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam dicta qui minus quis voluptatibus pariatur corporis quia repellat totam velit, fugit deleniti iure molestiae blanditiis numquam itaque, sed neque.</p>

            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quia necessitatibus veritatis expedita magni nisi, omnis optio beatae illo, officia molestiae laboriosam consectetur. Tempora nobis ratione assumenda at facilis est!</p>

            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat sequi mollitia id eaque odio! Voluptates ab voluptatum, corporis similique, unde tenetur eaque nisi hic possimus asperiores obcaecati neque molestiae fuga. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iste doloremque natus soluta, at dolorem, minima quos corporis assumenda ullam voluptas et fugiat in quaerat. Ea vero nisi vel mollitia.</p>

            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sunt labore impedit, aperiam laborum distinctio quod, ad vitae illo tenetur ipsum eos aut unde eum! Quia aperiam reprehenderit blanditiis.</p>

           
        </PostModelo>
    )
}

export default SobreMim