import React from 'react';

const CowItem = (props) => {
  return (
    <div onClick={event => props.nameClick(event)}>
      {props.name}
    </div>
  )
}

export default CowItem;