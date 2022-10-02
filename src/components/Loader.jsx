import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import "./Loader.css";

function Loader() {
  const [loading, setLoading] = useState();
  return [
    loading ? (
      <div className="loadScreen">
        <Icon size="massive" color="red" loading name="spinner" />
      </div>
    ) : null,
    () => {
      setLoading(true);
    },
    () => setLoading(false),
  ];
}

export default Loader;
