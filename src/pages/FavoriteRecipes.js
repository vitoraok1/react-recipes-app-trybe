// import React from 'react';
// import Header from '../components/Header';

// function FavoriteRecipes() {
//   const [isShared, setIsShared] = useState(false);
//   const { favoriteRecipes, setFavoriteRecipes,
//     favoriteRecipesFilter, setFavoriteRecipesFilter } = useContext(context);

//   useEffect(() => {
//     const favoriteRecipesData = JSON.parse(localStorage
//       .getItem('favoriteRecipes'));
//     if (favoriteRecipesData) {
//       setFavoriteRecipes(favoriteRecipesData);
//       setFavoriteRecipesFilter(favoriteRecipesData);
//     }
//   }, []);

//   const doneDrinks = () => {
//     const drinks = doneRecipes.filter((recipes) => recipes.type === 'drink');
//     setDoneRecipesFilter(drinks);
//     console.log('Drinks');
//   };

//   const doneMeals = () => {
//     const meals = doneRecipes.filter((recipes) => recipes.type === 'meal');
//     setDoneRecipesFilter(meals);
//     console.log('Meals');
//   };

//   const doneAll = () => {
//     setDoneRecipesFilter(doneRecipes);
//     console.log('ALL');
//   };

//   const handleShare = (recipes) => {
//     clipboardCopy(`http://localhost:3000/${recipes.type}s/${recipes.id}`);
//     setIsShared(true);
//   };
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }

// export default FavoriteRecipes;


// import React, { useEffect, useContext, useState } from 'react';
// import clipboardCopy from 'clipboard-copy';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import context from '../context/Context';
// import shareIcon from '../images/shareIcon.svg';

// function DoneRecipes() {
//   const [isShared, setIsShared] = useState(false);
//   const { doneRecipes, setDoneRecipes,
//     doneRecipesFilter, setDoneRecipesFilter } = useContext(context);

//   useEffect(() => {
//     const doneRecipesData = JSON.parse(localStorage
//       .getItem('doneRecipes'));
//     if (doneRecipesData) {
//       setDoneRecipes(doneRecipesData);
//       setDoneRecipesFilter(doneRecipesData);
//     }
//   }, []);

 
//   return (
//     <div>
//       <Header />
//       <button
//         data-testid="filter-by-all-btn"
//         onClick={ doneAll }
//       >
//         All
//       </button>
//       <button
//         data-testid="filter-by-meal-btn"
//         onClick={ doneMeals }
//       >
//         Meals
//       </button>
//       <button
//         data-testid="filter-by-drink-btn"
//         onClick={ doneDrinks }
//       >
//         Drinks
//       </button>
//       {doneRecipesFilter.map((recipes, index) => (
//         <div key={ index }>
//           <Link
//             to={ `/${recipes.type}s/${recipes.id}` }
//             data-testid={ `${index}-horizontal-name` }
//           >
//             Nome:
//             {' '}
//             {recipes.name}
//           </Link>
//           <Link to={ `/${recipes.type}s/${recipes.id}` }>
//             <img
//               data-testid={ `${index}-horizontal-image` }
//               alt="Imagem"
//               src={ recipes.image }
//             />
//           </Link>
//           <h4 data-testid={ `${index}-horizontal-top-text` }>
//             {recipes.type === 'meal'
//               ? `${recipes.nationality} - ${recipes.category}`
//               : recipes.alcoholicOrNot }

//           </h4>
//           <button
//             type="button"
//             onClick={ () => handleShare(recipes) }
//           >
//             <img
//               data-testid={ `${index}-horizontal-share-btn` }
//               src={ shareIcon }
//               alt="share icon"
//             />
//           </button>
//           { isShared ? <span>Link copied!</span> : null}
//           <h4 data-testid={ `${index}-horizontal-done-date` }>
//             Concluída em:
//             {' '}
//             {recipes.doneDate}
//           </h4>
//           {recipes.tags.map((tag, index2) => (
//             <p key={ index2 } data-testid={ `${index}-${tag}-horizontal-tag` }>
//               {tag}
//             </p>))}
//         </div>
//       ))}
//       <Footer />
//     </div>
//   );
// }

// export default DoneRecipes;