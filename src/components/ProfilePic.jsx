import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import Identicon from "react-identicons";
import "./css/profile-pic.css";

var ProfilePic = (props) => {
  // Check if the link is an http/https, if not then display identicon
  const [error, setError] = useState(false);

  if (error || props.dpLink === null || props.dpLink[0] !== "h") {
    return <Identicon className="faceimage" size="128" string={props.uname} />;
  } else
    return (
      <Image
        className="faceimage"
        size={props.size != null ? props.size : "small"}
        avatar
        src={props.dpLink}
        onError={() => setError(true)}
      />
    );
};

export default ProfilePic;
