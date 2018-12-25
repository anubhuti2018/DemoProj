import { cities } from '../cities.json';

const initialState = {
    cities: Object.keys(cities).map((key) => {
        return cities[key]
    }),
    position:null
  };
  
  const CityReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'FAVORITE_CHANGED':
        return { ...state, cities:action.payload};
      
      case 'DISTANCE':
      console.log('test '+action.payload);
        return { ...state, position:action.payload};
      default:
        return state;
    }
  };
  
  export default CityReducer;