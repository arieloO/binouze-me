// Get all Yeasts array

// const [allYeasts, setAllYeasts] = useState([]);

// const getAllYeast = useRef(() => {});

// getAllYeast.current = () => {
//   const getYeasts = beers.reduce((all, beer) => {
//     console.log(
//       "all ",
//       all,
//       " includes ",
//       beer.ingredients.yeast,
//       " : ",
//       all.includes(beer.ingredients.yeast)
//     );
//     return all.includes(beer.ingredients.yeast)
//       ? all
//       : [...all, beer.ingredients.yeast];
//   }, [...allYeasts] || []);
//   // console.log("get yeasts :", getYeasts);
//   setAllYeasts([...getYeasts]);
// };

// useEffect(() => {
//   // had to get the fuction out of useEffect to comply with linter alert, to useRef getAllYeast.current
//   getAllYeast.current();
// }, [beers]);

// console.log("all yeasts :", allYeasts);
