import React from 'react'

import NightMode from '../NightMode'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../PlaylistItems'

import Style from './Style'

const Playlist = props => (
    <Style>
        <NightMode
            nightMode={props.nightMode}
            handleChangeMode={props.handleChangeMode}
        />
        {/* TODO: */}
        <PlaylistHeader
            active={props.active}
            total={props.videos && props.videos.length}
        />
        <PlaylistItems
            active={props.active}
            videos={props.videos}
        />
    </Style>
)

export default Playlist
