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

    useEffect(
        () => {
            const videoId = props.match.params.activeVideo
            if (videoId) {
                const newActiveVideoIndex = state.videos.findIndex(video => video.id === videoId)
                if (newActiveVideoIndex > -1) {
                    setState({
                        ...state,
                        activeVideo: state.videos[newActiveVideoIndex],
                        autoplay: props.location.autoplay,
                    })
                }
                else {
                    props.history.push('/not-found')
                }
            }
            else {
                props.history.push({
                    pathname: `/${state.activeVideo.id}`,
                    autoplay: false,
                })
            }
        },
        [props.match.params.activeVideo],
    )

    function handleChangeMode() {
        setState({
            ...state,
            nightMode: !state.nightMode,
        })
    }

    function handleProgress(event) {
        if (event.playedSeconds > 5 /* && event.playedSeconds < 6 */) {
            console.log('::: nightMode:', state.nightMode)
            const videos = state.videos.map(video => video.id === state.activeVideo.id ? { ...video, played: true } : video)
            setState({ ...state, videos })
        }
    }

    function handleEnd() {
        const videoId = props.match.params.activeVideo
        const currentVideoIndex = state.videos.findIndex(video => video.id === videoId)
        if (currentVideoIndex > -1) {
            const nextVideoIndex = currentVideoIndex !== state.videos.length - 1 ? currentVideoIndex + 1 : 0
            props.history.push({
                pathname: state.videos[nextVideoIndex].id,
                autoplay: true,
            })
        }
    }

    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
                <Style state={state}>
                    <Video
                        // state={'' + state.nightMode} // TODO:
                        // state={JSON.stringify(state)} // TODO:
                        state={state} // TODO:
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        handleEnd={handleEnd}
                        handleProgress={handleProgress}
                    />
                    <Playlist
                        active={state.activeVideo}
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
