import React from 'react'

import NightMode from '../NightMode'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../PlaylistItems'

import Style from './Style'

const Playlist = props => (
    <Style>
        <NightMode />
        <PlaylistHeader />
        <PlaylistItems />
    </Style>
)

export default Playlist
