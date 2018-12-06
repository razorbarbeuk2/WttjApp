import { MOVE_LEFT, MOVE_RIGHT, INIT_POS, IMPOSE_INDEX } from '../actionType'

const initPos = (gridWidth, index, tabPos, scrollPos) => ({
    type: INIT_POS,
    gridWidth,
    index,
    tabPos,
    scrollPos
})

const moveLeft = () => ({
    type: MOVE_LEFT,
})

const moveRight = () => ({
    type: MOVE_RIGHT,
})

const onImpose = (index, scrollPos) => ({
    type: IMPOSE_INDEX,
    index,
    scrollPos
})

export {
    initPos,
    moveLeft,
    moveRight,
    onImpose
}