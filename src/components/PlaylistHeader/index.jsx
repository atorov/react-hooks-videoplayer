import React from 'react'

import Style from './Style'
import StyleJourney from './StyleJourney'

const PlaylistItem = props => (
    <Style>
        {/* TODO: */}
        <p>{props.active && props.active.title}</p>
        <StyleJourney>
            {props.active && props.active.num} / {props.total}
        </StyleJourney>
    </Style>
)

export default PlaylistItem
