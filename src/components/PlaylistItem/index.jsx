import React from 'react'

import Style from './Style'

const PlaylistItem = props => (
    <Style active={props.active} played={props.played} >
        {/* TODO: */}
        <div className="video-player__video-nr">
            {props.video && props.video.num}
        </div>
        <div className="video-player__video-name">
            {props.video && props.video.title}
        </div>
        <div className="video-player__video-time">
            {props.video && props.video.duration}
        </div>
    </Style>
)

export default PlaylistItem
