import React, { useState, useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import Playlist from '../Playlist'
import Video from '../Video'

import Style from './Style'

const theme = {
    bgcolor: '#353535',
    bgColorItem: '#414141',
    bgcolorItemActive: '#405c63',
    bgcolorPlayed: '#526d4e',
    border: 'none',
    borderPlayed: 'none',
    color: '#fff',
}

const themeLight = {
    bgcolor: '#fff',
    bgColorItem: '#fff',
    bgcolorItemActive: '#80a7b1',
    bgcolorPlayed: '#7d9979',
    border: '1px solid #353535',
    borderPlayed: 'none',
    color: '#353535',
}

const VideoPlayer = props => {
    // TODO:
    const videos = JSON.parse(document.querySelector('[name="videos"]').value)

    const [state, setState] = useState({
        videos: videos.playlist,
        playlistId: videos.playlistId,
        activeVideo: videos.playlist[0],
        autoplay: false,
        nightMode: true,
    })

    function handleChangeMode() { }
    function handleProgress() { }
    function handleEnd() { }

    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
                <Style>
                    <Video
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        handleEnd={handleEnd}
                        handleProgress={handleProgress}
                    />
                    <Playlist
                        active={state.active}
                        videos={state.videos}
                        nightMode={state.nightMode}
                        handleChangeMode={handleChangeMode}
                    />
                </Style>
            ) : null}
        </ThemeProvider>
    )
}

export default VideoPlayer
