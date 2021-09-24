import React, { useContext } from 'react'
import RankingContext from '../ranking/context/RankingContext'
import Tablero from './components/Tablero';
import styles from './css/tablero.module.css';
const Tableros = () => {
    const {rankingState} = useContext(RankingContext)
    return (
        <section className={styles.layout_ranking}>
            <section className={styles.ranking_section_tablero}>
                <Tablero data={rankingState.ad}/>
            </section>
            <section className={styles.ranking_section_tablero}>
                <Tablero data={rankingState.cs}/>
            </section>
            <section className={styles.ranking_section_tablero}>
                <Tablero data={rankingState.ia}/>
            </section>
        </section>
    )
}

export default Tableros
