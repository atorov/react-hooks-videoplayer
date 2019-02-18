import React from 'react'

import ReactPlayer from 'react-player'

import Style from './Style'
import StyleWrapper from './StyleWrapper'

const Video = props => (
    <Style>
        <StyleWrapper>
            {/* TODO: */}
            <ReactPlayer
                playing={props.autoplay}
                url={props.active && props.active.video}
                controls
                width="100%"
                height="100%"
                style={{
                    position: 'absolute',
                    top: 0,
                }}
                onProgress={props.handleProgress}
                onEnded={props.handleEnd}
            />
        </StyleWrapper>
    </Style>
)

export default Video
