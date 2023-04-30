import React from "react";

export const Small = React.memo(({ value }) => {

  console.log('I re-rendered');

  return (
    <small>{value}</small>
  )
})