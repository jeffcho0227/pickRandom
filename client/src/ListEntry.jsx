import React from 'react';

export default function ListEntry(props) {
  console.log(props.ListItem._id)
  return (
    <div onClick={() => {props.handleClickAndDelete(props.ListItem._id)}}>
      {props.ListItem.firstName} {props.ListItem.lastName} {props.ListItem._id}
    </div>
  )
}