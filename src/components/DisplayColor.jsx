import React from "react";

export default function DisplayColor({ selectColor }) {
  return (
    <div>
      <h2>Your Selected colour is: </h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div
          style={{
            backgroundColor: selectColor,
            height: "100px",
            width: "100px",
          }}
        ></div>
      </div>
    </div>
  );
}
