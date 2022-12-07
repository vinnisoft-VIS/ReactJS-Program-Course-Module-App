export const handleAddActivityAction = () => async (dispatch) => {
  dispatch({
    type: 'CHANGE_INDIVIDUAL_ACTIVITY',
    payload: {
      activityTitle: '',
      activityType: '',
      interactionTime: '',
      clockHour: false,
      activityDetail: '',
      resources: [],
    },
  })
  dispatch({
    type: 'CHANGE_ACTIVITY_ID',
    payload: null,
  })
}
