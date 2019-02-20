import React from 'react'
import PropTypes from 'prop-types'

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
        <PlaylistHeader
            active={props.active}
            total={props.videos.length}
        />
        <PlaylistItems
            active={props.active}
            videos={props.videos}
        />
    </Style>
)

Playlist.propTypes = {
    active: PropTypes.object.isRequired,
    nightMode: PropTypes.bool.isRequired,
    videos: PropTypes.array.isRequired,

    handleChangeMode: PropTypes.func.isRequired
}

export default Playlist
