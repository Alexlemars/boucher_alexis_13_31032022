

const SET_MESSAGE = 'SET_MESSAGE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';


const initialState = {};

export default function message(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return {
                 message: payload,
             };

        case CLEAR_MESSAGE:
            return { message: '' };

        default:
            return state;
    }
}
