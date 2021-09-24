import React from 'react'
import SearchByName from './components/SearchByName'
import styles from './css/filters.module.css'
const Filters = () => (
    <div className={`f center f-start ${styles.section_filters}`}>
        <SearchByName/>
    </div>
)


export default Filters
