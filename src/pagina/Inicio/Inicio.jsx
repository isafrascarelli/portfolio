import PostCard from '../../componentes/PostCard/PostCard';
import posts from './../../json/posts.json';
import styles from './Inicio.module.css';

const Inicio = () => {
    return (
        <main>
            <ul className={styles.post}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))}
                
            </ul>
        </main>
    )
}

export default Inicio;