import React from 'react' 
import classes from "./catagory.module.css"
function CtagoryCard({data}) {
  return (
    <div className={classes.catagory}>
          <a href=''>
              <span>
          <h2>{data.title}</h2>
              </span>
              <img src={data.imgLink} alt="" />
              <p>Shop now</p>
      </a>
    </div>
  )
}

export default CtagoryCard
