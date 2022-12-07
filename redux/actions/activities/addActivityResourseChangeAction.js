export const addActivityResourseChangeAction =
  (userData, e) => async (dispatch) => {
    userData.resources = e.map((v) => v.value)
    dispatch({
      type: 'CHANGE_INDIVIDUAL_ACTIVITY',
      payload: userData,
    })
  }
