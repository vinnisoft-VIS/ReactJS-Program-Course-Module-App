import api from 'utils/api'
import { removeEmpty } from 'utils/commonFunctions'
import { loadStateFn } from 'utils/localStorage'
import { showToast } from 'utils/showToast'
import { fetchTotalHourPoint } from '../coursePlanner/fetchTotalHourPoint'
import { allActivityDataAction } from './allActivityDataAction'

export const addActivityAction =
  (userData, moduleIndex) => async (dispatch, getState) => {
    const state = getState()

    const modules = [...state.coursePlanner.modules]
    const {
      activityTitle,
      activityType,
      interactionTime,
      activityDetail,
      resources,
      clockHour,
    } = userData

    const id = loadStateFn('courseId')
    const payload = {
      title: activityTitle,
      type: activityType,
      resource: resources,
      activity_details: activityDetail,
      interaction_time: interactionTime,
      clock_hour: clockHour,
    }

    const filteredPayload = removeEmpty(payload)
    if (payload.resource && payload.resource.length > 0) {
      filteredPayload.resource = payload.resource
    } else {
      filteredPayload.resource = []
    }

    const { statusCode, data } = await api(
      'post',
      `/program/course/${id}/Activities`,
      filteredPayload,
    )

    if (statusCode) {
      dispatch(fetchTotalHourPoint())
      showToast(['Preparation Added successfully'], 'success')

      dispatch(allActivityDataAction())
      modules[moduleIndex].preparation = [
        ...modules[moduleIndex].preparation,
        data.id,
      ]
      dispatch({
        type: 'CHANGE_MODULES',
        payload: modules,
      })
    }
  }
