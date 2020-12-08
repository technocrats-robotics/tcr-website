import React from 'react'
import { Image, Transition } from 'semantic-ui-react'

import "./LoadingScreen.css"

function LoadingScreen() {
    return (
        <div className="ui active dimmer">
            <Transition visible={true} animation='scale' duration={500}>
                    <Image size='large' src='http://www.technocratsrobotics.in/images/technocrats.png' />
            </Transition>
        </div>
    )
}

export default LoadingScreen
