import {DAT_GHE, HUY_GHE} from '../Types/DatVeTypes'

export const datGheAction = (ghe) => {
    return {
        type: DAT_GHE,
        ghe
    }
}

export const huyGheAction = (ghe) => {
    return {
        type: HUY_GHE,
        ghe
    }
}