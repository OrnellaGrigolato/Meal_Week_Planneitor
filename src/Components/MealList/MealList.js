import React from 'react';
import './MealList.css';

export default function MealList () {





    // let url="https://api.spoonacular.com/recipes/random?number=1&limitLicense=false&apiKey=76c8bb02243d420bb385fe34a3b6873e"

    
//     const fetchData = async () => {
//         try {
//         const res = await fetch(url)
//         const data = await res.json()
//         console.log(data)
        
//         } 
//         catch (error) { 
//             console.log(error)
//         }}

// fetchData()
const json = require('./recipe.json')
fetch(json).then(res => res.json()).then(data => console.log(data))

// fetch("recipe.json")
// .then(res => res.json())
// .then(data => console.log(data))
  return(
    <div className='mealList'>
      gsds
    </div>
  )
}
