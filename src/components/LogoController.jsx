import FlareComponent from "flare-react";

class LogoController extends FlareComponent.Controller {
  constructor() {
    super();
    this._LogoTime = 0;
    this._Mount = null;
    this._RotateDelay = null;
    this._Rotate = null;
  }

  initialize(artboard) {
    this._Mount = artboard.getAnimation("mount_logo");
    this._RotateDelay = artboard.getAnimation("rotate_logo_13s");
    this._Rotate = artboard.getAnimation("rotate_logo_10s");
  }

  advance(artboard, elapsed) {
    // advance the Logo time
    this._LogoTime += elapsed;
    const {
      _Mount: mount,
      _Rotate: rotate,
      _LogoTime: logoTime,
    } = this;
    // Play the mount logo animation first
    if (logoTime < mount.duration) mount.apply(logoTime, artboard, 1.0);
    // When the mount logo animation is finished, play the rotate logo animation
    else
      rotate.apply(
        (logoTime - mount.duration) % rotate.duration,
        artboard,
        1.0
      );

    // keep rendering
    return true;
  }
}

export default LogoController;

/**
 * References:
 * https://medium.com/rive/building-a-responsive-house-with-flare-flutter-31af823ba805
 * https://github.com/2d-inc/Flare-React
 * https://stackoverflow.com/questions/59737493/how-to-implement-a-class-controller-option-in-flare-react-package
 */
