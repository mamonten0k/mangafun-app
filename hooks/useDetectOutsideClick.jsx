import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  
  useEffect(() => { 
    const pageClickEvent = (evt) => {
      if (el.current !== null && !el.current.contains(evt.target)) {
        setIsActive(!isActive);

        if(el.current.nodenama === "INPUT")  el.current.value = '';

        evt.target.blur();
      }
    };

    if (isActive) {
      window.addEventListener('mousedown', pageClickEvent);
    }

    return () => {
      window.removeEventListener('mousedown', pageClickEvent);
    }
  }, [isActive, el]);

  return [isActive, setIsActive];
}