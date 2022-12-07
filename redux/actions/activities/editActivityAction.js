import api from 'utils/api'
import { removeEmpty } from 'utils/commonFunctions'
import { ternary } from 'utils/javascript'
import { loadStateFn } from 'utils/localStorage'
import { showToast } from 'utils/showToast'
import { fetchTotalHourPoint } from '../coursePlanner/fetchTotalHourPoint'
import { allActivityDataAction } from './allActivityDataAction'

export const editActivityAction = (userData) => async (dispatch, getState) => {
  const courseId = loadStateFn('courseId')
  const state = getState()

  const { activityId } = state.activity
  const {
    activityTitle,
    activityType,
    interactionTime,
    activityDetail,
    resources,
    clockHour,
  } = userData

  const payload = {
    title: activityTitle,
    type: activityType,
    resource: ternary(
      resources.length > 0 && resources[0].value,
      resources.map((v) => v.value),
      resources,
    ),
    activity_details: activityDetail,
    interaction_time: interactionTime,
    clock_hour: clockHour,
  }
  const filteredPayload = removeEmpty(payload)
  if (payload.resource && payload.resource.length > 0) {
    filteredPayload.resource = payload.resource
  } else {
    delete filteredPayload.resource
  }
  const { statusCode } = await api(
    'put',
    `/program/course/${courseId}/Activities/${activityId}`,
    filteredPayload,
    true,
  )
  if (statusCode) {
    showToast(['Updated successfully'], 'success')
    dispatch(fetchTotalHourPoint())
    dispatch(allActivityDataAction())
    dispatch({
      type: 'CHANGE_ACTIVITY_ID',
      payload: null,
    })
  }
}
