import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'
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

const saveState = _.throttle(
    (state) => {
        try {
            const serialized = JSON.stringify(state)
            window.localStorage.setItem(state.playlistId, serialized)
            console.log('::: State has been saved to the local storage')
        } catch (reason) {
            console.error('::: Save state in the local storage failed with reason:', reason)
        }
    },
    5000,
    { 'leading': false },
)

const VideoPlayer = props => {
    const videos = JSON.parse(document.querySelector('[name="videos"]').value)

    let savedState = {}
    try {
        const serialized = window.localStorage.getItem(videos.playlistId)
        if (serialized) {
            savedState = JSON.parse(serialized)
        }
    } catch (reason) {
        console.error('::: Load state from the local storage failed with reason:', reason)
    }

    const [state, setState] = useState({
        ...{
            videos: videos.playlist,
            playlistId: videos.playlistId,
            activeVideo: videos.playlist[0],
            autoplay: false,
            nightMode: true,
        },
        ...savedState,
    })

    useEffect(() => saveState(state), [state])

    useEffect(
        () => {
            const videoId = props.match.params.activeVideo
            if (videoId) {
                const newActiveVideoIndex = state.videos.findIndex(video => video.id === videoId)
                if (newActiveVideoIndex > -1) {
                    setState(prevState => ({
                        ...prevState,
                        activeVideo: prevState.videos[newActiveVideoIndex],
                        autoplay: props.location.autoplay,
                    }))
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
        setState(prevState => ({
            ...prevState,
            nightMode: !prevState.nightMode,
        }))
    }

    function handleProgress(event) {
        if (event.playedSeconds > 4 && event.playedSeconds < 5) {
            const videos = state.videos.map(video => video.id === state.activeVideo.id ? { ...video, played: true } : video)
            setState(prevState => ({ ...prevState, videos }))
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

VideoPlayer.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
}

export default VideoPlayer
