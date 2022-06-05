import React from 'react';
import CowItem from './CowItem.js';

const CowList = (props) => {
  return (
    <div>
      <h3>List of Cows</h3>
      <div>{props.cowList.map(cow =>
        <CowItem key={cow.id} name={cow.name} description={cow.description} nameClick={props.nameClick}/>
        )}
      </div>
    </div>
  )
}

export default CowList;