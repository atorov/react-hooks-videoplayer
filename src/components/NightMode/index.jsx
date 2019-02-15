import React from 'react'

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

export default NightMode
