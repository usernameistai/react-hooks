import { useReducer, useEffect } from 'react';

function UseLocalStorageReducer(key, defaultVal, reducer) { 
  const [state, dispatch] = useReducer(reducer, defaultVal, () => { 
  // pass in a function (3rd entry) to establish the initial state, whatever is returned
  // from here will what be initially in state
    let val;
    // next bit takes the key to see if anything is in local storage already
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state)); 
  }, [key, state]); // was [key, state]

  return [state, dispatch];
} 
export default UseLocalStorageReducer;