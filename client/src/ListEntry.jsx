import React from 'react';

export default function ListEntry(props) {
  console.log(props)
  return (
    <div>
      {props.ListItem.firstName} {props.ListItem.lastName}
    </div>
  )
}