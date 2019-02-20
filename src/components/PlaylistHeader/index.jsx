import React from 'react'
import PropTypes from 'prop-types'

import Style from './Style'
import StyleJourney from './StyleJourney'

const PlaylistHeader = props => (
    <Style>
        <p>{props.active.title}</p>
        <StyleJourney>
            {props.active.num} / {props.total}
        </StyleJourney>
    </Style>
)

PlaylistHeader.propTypes = {
    active: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
}

export default PlaylistHeader
