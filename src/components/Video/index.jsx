import React from 'react'
import PropTypes from 'prop-types'

import ReactPlayer from 'react-player'

import Style from './Style'
import StyleWrapper from './StyleWrapper'

const Video = props => (
    <Style>
        <StyleWrapper>
            <ReactPlayer
                playing={props.autoplay}
                url={props.active.video}
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

Video.propTypes = {
    active: PropTypes.object.isRequired,

    handleEnd: PropTypes.func.isRequired,
    handleProgress: PropTypes.func.isRequired,

    autoplay: PropTypes.bool,
}

export default Video
