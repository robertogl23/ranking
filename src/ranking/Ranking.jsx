import { Container } from '@mui/material'
import Tablero from '../tablero/Tablero'
import RankingProvider from './context/RankingProvider'
import styles from './css/ranking.module.css'

const Ranking = () => {
    return (
        <RankingProvider>
            <Container>
                <div className={styles.layout_ranking}>
                    <section className={styles.ranking_section_tablero}>
                        <Tablero/>
                    </section>
                    <section className={styles.ranking_section_tablero}>
                        <Tablero/>
                    </section>
                    <section className={styles.ranking_section_tablero}>
                        <Tablero/>
                    </section>
                </div>
            </Container>
        </RankingProvider>
    )
}

export default Ranking
