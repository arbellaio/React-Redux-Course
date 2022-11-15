import React, {useEffect, useRef, useState} from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() =>{

    const onBodyClick = (event) => {
      // checks if element that was clicked on is inside target
      // if yes than we return early
      if(ref.current.contains(event.target)){
        return;
      }
      console.log("Clicked")
      setOpen(false)
    }

    document.body.addEventListener('click', onBodyClick, {
      capture : true,
    })

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture : true,
      })
    }
  },[])
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
            console.log("Item Clicked")
            onSelectedChange(option)}}
      >
        {option.label}
      </div>
    );
  });

  //ref.current give reference to div where it is used from virtual dom
  console.log(ref.current)
  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            console.log("Dropdown Clicked")
            setOpen(!open)}

        }
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
