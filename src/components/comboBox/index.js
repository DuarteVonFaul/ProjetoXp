import React, { useState } from 'react';
import './style.css'

const ComboBox = ({ id,name, items, titulo, onChange, value, className='comboBox' }) => {


  return (
    <div>
      <select className={className} id={id} name={name} value={value} onChange={onChange}>
        <option value="">{titulo}.</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;