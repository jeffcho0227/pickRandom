import React from 'react';
import ListEntry from './ListEntry.jsx';

export default function ListView(props) {
    // console.log(props);
  return (
    <div>
        <h3>List</h3>
      {props.itemList.map((ListItem, index) => {
          return (
              <ListEntry ListItem={ListItem} key={index} handleClickAndDelete={props.handleClickAndDelete}/>
          )
      })}
    </div>
  )
}