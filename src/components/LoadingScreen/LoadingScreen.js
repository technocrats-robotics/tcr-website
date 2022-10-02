import React from "react";
import { Image, Transition } from "semantic-ui-react";

function LoadingScreen() {
  return (
    <div className="ui active dimmer">
      <Transition visible={true} animation="scale" duration={500}>
        <Image size="large" src={process.env.PUBLIC_URL + "/TCRBanner.png"} />
      </Transition>
    </div>
  );
}

export default LoadingScreen;
