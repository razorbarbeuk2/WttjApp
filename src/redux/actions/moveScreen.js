import { MOVE_LEFT, MOVE_RIGHT, INIT_POS } from '../actionType'

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

export {
    initPos,
    moveLeft,
    moveRight
}