import React from 'react';
import './MealList.css';

export default function MealList () {

  const getData=()=>{
    fetch('recipe.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
  

        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
 getData()
  return(
    <div className='mealList'>
      <div className='recipe'><p></p></div>
    </div>
  )
}
























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
