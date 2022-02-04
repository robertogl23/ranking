import React, { useContext, useEffect } from 'react';
import RankingContext from '../ranking/context/RankingContext';
import getResultados from '../ranking/services/getResultados';
import Tablero from './components/Tablero';
import styles from './css/tablero.module.css';
const Tableros = () => {
  const { rankingState, dispatch } = useContext(RankingContext);
  useEffect(() => {
    const getData = async () => {
      const resultados = await getResultados();
      dispatch({
        type: 'SET_RESULTADOS',
        payload: resultados.data,
      });
    };
    getData();
  }, [dispatch]);
  return (
    <section className={styles.layout_ranking}>
      <section className={styles.ranking_section_tablero}>
        <Tablero title={'Video Juegos'} data={rankingState.ad} />
      </section>
      <section className={styles.ranking_section_tablero}>
        <Tablero title={'Ciberseguridad'} data={rankingState.cs} />
      </section>
      <section className={styles.ranking_section_tablero}>
        <Tablero title={'Inteligencia Artificial'} data={rankingState.ia} />
      </section>
    </section>
  );
};

export default Tableros;
