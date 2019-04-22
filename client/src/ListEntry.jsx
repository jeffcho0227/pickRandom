import React from 'react';

export default function ListEntry(props) {
  return (
    <div onClick={() => {props.handleClickAndDelete(props.ListItem._id)}}>
      {props.ListItem.firstName} {props.ListItem.lastName}
    </div>
  )
}