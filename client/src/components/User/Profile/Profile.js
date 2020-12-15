import React from "react";

export default function Profile(props) {
  return (
    <div>
      <h1>Welcome {JSON.stringify(props.user)}!</h1>
    </div>
  );
}
