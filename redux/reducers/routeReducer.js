const initialBoard = {
  payload: {},
  resetPasswordPayload: {},
}

const routeReducer = (state = initialBoard, action) => {
  switch (action.type) {
    case 'CHANGE_FORGOT_PASSWORD_DETAILS':
      return {
        ...state,
        payload: action.payload,
      }
    case 'CHANGE_RESET_PASSWORD_DETAILS':
      return {
        ...state,
        resetPasswordPayload: action.payload,
      }
    default:
      return { ...state }
  }
}

export default routeReducer
