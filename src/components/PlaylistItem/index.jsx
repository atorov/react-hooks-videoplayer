import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Style from './Style'

const PlaylistItem = props => (
    <Style active={props.active} played={props.played} >
        <div className="video-player__video-nr">
            {props.video.num}
        </div>

        <div className="video-player__video-name">
            <Link to={{
                pathname: `/${props.video.id}`,
                autoplay: true,
            }}>
                {props.video.title}
            </Link>
        </div>

        <div className="video-player__video-time">
            {props.video.duration}
        </div>
    </Style>
)

PlaylistItem.propTypes = {
    active: PropTypes.bool.isRequired,
    video: PropTypes.object.isRequired,

    played: PropTypes.bool,
}

export default PlaylistItem
