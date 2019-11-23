import { useState } from 'react';

function useToggle(initialVal = false) {
  // all useState, "reserve a piece of state"
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default useToggle;

/**Original
 * 
 * import { useState } from 'react';

function useToggle(initialVal = false) {
  // all useState, "reserve a piece of state"
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default useToggle;

 */