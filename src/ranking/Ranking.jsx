import { Container } from '@mui/material'
import Tablero from '../tablero/Tablero'
import RankingProvider from './context/RankingProvider'
import styles from './css/ranking.module.css'

const Ranking = () =>  (
    <RankingProvider>
        <Container>
            <div className={styles.layout_ranking}>
                <section className={styles.ranking_section_tablero}>
                    <Tablero type={"análisis de datos"}/>
                </section>
                <section className={styles.ranking_section_tablero}>
                    <Tablero type={"ciberseguridad"}/>
                </section>
                <section className={styles.ranking_section_tablero}>
                    <Tablero type={"ia"}/>
                </section>
            </div>
        </Container>
    </RankingProvider>
)

export default Ranking
