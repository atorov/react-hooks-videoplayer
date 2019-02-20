import React from 'react'
import PropTypes from 'prop-types'

import PlaylistItem from '../PlaylistItem'

import Style from './Style'

const PlaylistItems = props => (
    <Style>
        {(props.videos || []).map(video => (
            <PlaylistItem
                key={video.id}
                video={video}
                active={video.id === props.active.id}
                played={video.played}
            />
        ))}


    </Style>
)

PlaylistItems.propTypes = {
    active: PropTypes.object.isRequired,
    videos: PropTypes.array.isRequired,
}

export default PlaylistItems
