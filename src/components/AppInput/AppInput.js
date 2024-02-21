import React from 'react';

import "./AppInput.css";

const AppInput = ({label, type = "text", name, value, handleChange, onBlur, onFocus, inputType, rows, placeholder}) => {
 
    if (inputType === "textarea"){
       return (<>
       <label className='input-label'>{label}</label>
       <textarea  name={name} value={value} onChange={handleChange} onBlur={onBlur} onFocus={onFocus} className='app-input' rows={rows} placeholder={placeholder}/>
    </>)}
       
  return (
    <>
       <label className='input-label'>{label}</label>
       <input type={type} name={name} value={value} onChange={handleChange} onBlur={onBlur} onFocus={onFocus} className='app-input' placeholder={placeholder}/>
    </>
  )
}

export default AppInput