import React from 'react'

import PlaylistItem from '../PlaylistItem'

import Style from './Style'

const PlaylistItems = props => (
    <Style>
        {/* TODO: */}
        {(props.videos || []).map(video => (
            <PlaylistItem
                key={video.id}
                video={video}
                active={video.id === (props.active && props.active.id)}
                played={video.played}
            />
        ))}


    </Style>
)

export default PlaylistItems
