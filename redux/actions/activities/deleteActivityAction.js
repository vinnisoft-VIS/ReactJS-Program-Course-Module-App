import api from 'utils/api'
import { notEqual } from 'utils/javascript'
import { loadStateFn } from 'utils/localStorage'
import { showToast } from 'utils/showToast'
import { fetchTotalHourPoint } from '../coursePlanner/fetchTotalHourPoint'
import { allActivityDataAction } from './allActivityDataAction'

export const deleteActivityAction =
  (id, moduleIndex) => async (dispatch, getState) => {
    const courseId = loadStateFn('courseId')
    const state = getState()
    const modules = [...state.coursePlanner.modules]
    const { statusCode } = await api(
      'delete',
      `/program/course/${courseId}/Activities/${id}`,
      {},
      true,
    )
    if (statusCode) {
      showToast(['Preparation deleted successfully'], 'success')
      dispatch(fetchTotalHourPoint())
      dispatch(allActivityDataAction())
      const x = [...modules[moduleIndex].preparation]
      modules[moduleIndex].preparation = x.filter((v) => notEqual(v, id))
      dispatch({
        type: 'CHANGE_MODULES',
        payload: modules,
      })
    }
  }
