import styles from './Perfil.module.css'

const Perfil = ({ nameUser }) => {


    // const usuario = {
    //     nome: 'Danilo Cunha',
    //     avatar: 'https://avatars.githubusercontent.com/u/15248447?v=4'
    // }

    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nameUser}.png`} />
            <h1 className={styles.name}>{nameUser}</h1>
        </header>
    )
}

export default Perfil