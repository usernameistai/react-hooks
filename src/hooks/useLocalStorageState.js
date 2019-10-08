import { useState, useEffect } from 'react';

function UseLocalStorageState(key, defaultVal) { // key - "todos" etc.
// if nothing in localstorage under this key, use defaultValue
  // make piece of state, based off of value in localstorage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    }
    catch (e) {
      val = defaultVal; // whatever user passes in when using this hook
    } // all the above is just initialising useState
    return val;
  }); //======= above means initialise to to some piece of localstorage
  // use useffect to update localstorage whenever state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state)); // key can be "todos", language preference, dark mode
  }, [key, state]); // only setting when state of key ("todos") changes was [state] but am being complained to
  // ========= whenever it changes make sure you update localstorage
  return [state, setState];
} // ===== return that piece of state and a function to set that piece of state
export default UseLocalStorageState;