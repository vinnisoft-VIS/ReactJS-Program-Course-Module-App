import api from 'utils/api'
import { ternary } from 'utils/javascript'
import { loadStateFn } from 'utils/localStorage'
import { hideLoaderAction } from '../loaderAction/hideLoader'
import { showLoaderAction } from '../loaderAction/showLoader'

export const getActivityEditAction = (id) => async (dispatch) => {
  dispatch(showLoaderAction())
  dispatch({
    type: 'CHANGE_ACTIVITY_LOADING',
  })
  dispatch({
    type: 'IS_ACTIVITY_LOADING',
  })
  const courseId = loadStateFn('courseId')
  const { statusCode, data } = await api(
    'get',
    `/program/course/${courseId}/Activities/${id}`,
    null,
    true,
  )

  if (statusCode) {
    const {
      clock_hour: clockHour,
      interaction_time: interactionTime,
      title,
      type,
      activity_details: details,
      resource,
    } = data

    const resourcesData = resource.map((v) => ({
      value: v.id,
      label: v.name,
    }))

    const payload = {
      activityTitle: title,
      activityType: type,
      interactionTime: ternary(interactionTime === null, '', interactionTime),
      activityDetail: details,
      resources: resourcesData,
      clockHour,
    }

    dispatch({
      type: 'CHANGE_INDIVIDUAL_ACTIVITY',
      payload,
    })
    dispatch({
      type: 'CHANGE_ACTIVITY_ID',
      payload: id,
    })
  }
  dispatch(hideLoaderAction())
}
