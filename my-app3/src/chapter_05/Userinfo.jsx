import React from "react";
import Avatar from "./Avatar";

const Userinfo = ({author}) => {
  return (
  <div className="user-info">
      <Avatar author={author} />
      <div className="user-info-name">{author.name}</div>
    </div>
    );
}
export default Avatar