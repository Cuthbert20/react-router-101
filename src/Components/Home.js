import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import sorting from '../utls/sorting'
//just destructering updateHouseInfo instead of always using props.updateHouseInfo
const Home = ({updateHouseInfo,history}) => {
    return(
        <div>
            <h2>Hoggy Hoggy Hogwarts</h2>
            <nav>
                <Link to='/about'>About</Link>
            </nav>
            <button onClick={() => sorting.randomHouse(updateHouseInfo,history.push)}> Click to be sorted </button>
        </div>
    )
}

export default withRouter(Home)