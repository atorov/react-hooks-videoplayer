import React from 'react'
import PropTypes from 'prop-types'

import Style from './Style'

const NightMode = props => (
    <Style>
        <span>Night mode: </span>
        <label className="switch">
            <input
                type="checkbox"
                checked={props.nightMode}
                onChange={props.handleChangeMode}
            />
            <span className="slider round" />
        </label>
    </Style>
)

NightMode.propTypes = {
    nightMode: PropTypes.bool.isRequired,

    handleChangeMode: PropTypes.func.isRequired,
}

export default NightMode
