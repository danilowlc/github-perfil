import { useEffect, useState } from "react"
import styles from './RepoList.module.css'

const RepoList = ({ nameUser }) => {

    const [repos, setRepos] = useState([])
    const [error, setError] = useState(true)

    useEffect(() => {
        fetch(`https://api.github.com/users/${nameUser}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setRepos(resJson)
            })
            .catch(e => {
                setError(false)
            })
    }, [nameUser])

    return (
        <>
            {!error ? (
                <>
                    <div>
                        <h2>Page not foud</h2>
                    </div>
                </>
            ) : (
                <div className="container">
                    <ul className={styles.list}>
                        {repos.map(repositorio => (
                            <li className={styles.listItem} key={repositorio.id} >
                                <div className={styles.itemName}>
                                    <b>Repositorio:</b>
                                    {repositorio.name}
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Liguagem:</b>
                                    {repositorio.language}
                                </div>
                                <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                            </li>
                        ))}
                    </ul>
                </div>

            )}
        </>
    )
}

export default RepoList