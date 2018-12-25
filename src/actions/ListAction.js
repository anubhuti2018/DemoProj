export const favorite = (type) => {
    return {
        type: 'FAVORITE_CHANGED',
        payload: type
    };
};
export const position = (type) => {
    return {
        type: 'DISTANCE',
        payload: type
    };
};