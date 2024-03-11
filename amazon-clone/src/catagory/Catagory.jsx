import React from 'react'
import { CatagoryInfos } from "./CatagoryInfo"
import CatagoryCard from "./CatagoryCard"
import classes from "./catagory.module.css"
function Catagory() {
    return (
        <section className={classes.catagory_container}>
            {
                CatagoryInfos.map((infos) => (
                    <CatagoryCard data={infos} />
                ))  
            }
      </section>
  )
}

export default Catagory
