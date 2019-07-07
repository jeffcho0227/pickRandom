import React from 'react';
import ListEntry from './ListEntry.jsx';
import Style from './Style/List.scss';

export default function ListView(props) {
  return (
    <div>
      <h3 className={Style.list_title}>List</h3>
        <div className={Style.list_container}>
            <div className={Style.list_items}>
              {props.itemList.map((ListItem, index) => {
                  return (
                      <ListEntry ListItem={ListItem} key={index} handleClickAndDelete={props.handleClickAndDelete}/>
                  )
              })}
            </div>
        </div>
    </div>
  )
}