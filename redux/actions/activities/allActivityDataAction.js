import api from 'utils/api'
import { loadStateFn } from 'utils/localStorage'
import { hideLoaderAction } from '../loaderAction/hideLoader'
import { showLoaderAction } from '../loaderAction/showLoader'

export const allActivityDataAction = (isCoursePlanner) => async (dispatch) => {
  dispatch(showLoaderAction())
  const id = loadStateFn('courseId')
  const { data, statusCode } = await api(
    'get',
    `/program/course/${id}/Activities`,
    null,
  )

  if (statusCode) {
    if (data) {
      dispatch({
        type: 'CHANGE_ALL_ACTIVITY',
        payload: data,
      })
      if (isCoursePlanner && data) {
        const activity = data.map((v) => ({
          value: v.id,
          label: v.title,
        }))

        dispatch({
          type: 'CHANGE_ACTIVITIES',
          payload: activity,
        })
      }
    }
  }
  dispatch(hideLoaderAction())
}
