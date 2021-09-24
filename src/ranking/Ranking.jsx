import { Container } from '@mui/material'
import Filters from '../filters/Filters'
import Tableros from '../tablero/Tableros'
import RankingProvider from './context/RankingProvider'

const Ranking = () =>  (
    <RankingProvider>
        <Container>
            <Filters/>
            <Tableros/>
        </Container>
    </RankingProvider>
)

export default Ranking
