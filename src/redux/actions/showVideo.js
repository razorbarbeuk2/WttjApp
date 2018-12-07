import { SHOW_VIDEO, HIDE_VIDEO } from '../actionType'

const showVideo = (title, subtitle, url) => ({
    type: SHOW_VIDEO,
    title,
    subtitle,
    url
})

const hideVIdeo = () => ({
    type: HIDE_VIDEO,
})

export {
    showVideo,
    hideVIdeo
}

