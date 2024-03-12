import React from 'react'
import { CategoryInfos } from "./CategoryInfo"
import CategoryCard from "./CategoryCard"
import classes from "./category.module.css"
function Category(infos) {
    return (
        <section key={infos.id} className={classes.catagory_container}>
            {
                CategoryInfos.map((infos) => (
                    
                    <CategoryCard data={infos} />
                ))  
            }
      </section>
  )
}

export default Category
