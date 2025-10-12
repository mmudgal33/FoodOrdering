import React from 'react'
import { foodTypes } from '../../data/data'
import {Link} from 'react-router-dom'
import classes from './foods.module.css'
import { config } from '../../Constants';
import { useSelector } from 'react-redux'
const CLI = config.url;

const Foods = () => {
  const { token } = useSelector((state) => state.auth)
  return (
    <section id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>What we offer</h4>
        <h2 className={classes.title}>Best meals in the city</h2>
        <div className={classes.foods}>

        {token !== null ? 
        foodTypes.map((foodType) => (
              <Link to={`${CLI}/foods/${foodType.name}`} key={foodType.id} className={classes.food}>
                <h4>{foodType.name}</h4>
                <div className={classes.imgContainer}>
                  <img src={foodType.img} alt="" />
                </div>
              </Link>
            )) : <h1 className={classes.noLogin}> Please login to give order! </h1>}

            
        </div>
      </div>
    </section>
  )
}

export default Foods