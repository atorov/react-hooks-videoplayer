import React from 'react'
import { Link } from 'react-router-dom'

import Style from './Style'

const PlaylistItem = props => (
    <Style active={props.active} played={props.played} >
        {/* TODO: */}
        <div className="video-player__video-nr">
            {props.video && props.video.num}
        </div>

        <div className="video-player__video-name">
            <Link to={{
                pathname: `/${props.video.id}`,
                autoplay: true,
            }}>
                {props.video && props.video.title}
            </Link>
        </div>

        <div className="video-player__video-time">
            {props.video && props.video.duration}
        </div>
    </Style>
)

export default PlaylistItem
