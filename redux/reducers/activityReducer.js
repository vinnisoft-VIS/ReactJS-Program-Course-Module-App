const initialBoard = {
  allActivityData: [],
  individualActivity: {
    activityTitle: '',
    activityType: '',
    interactionTime: '',
    clockHour: false,
    activityDetail: '',
    resources: [],
  },
  activityId: null,
  isLoading: false,
  isActivityLoading: false,
}

const activityReducer = (state = initialBoard, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVITY_LOADING':
      return {
        ...state,
        isLoading: true,
      }

    case 'IS_ACTIVITY_LOADING':
      return {
        ...state,
        isActivityLoading: true,
      }

    case 'CHANGE_ALL_ACTIVITY':
      return {
        ...state,
        allActivityData: action.payload,
      }
    case 'CHANGE_INDIVIDUAL_ACTIVITY':
      return {
        ...state,
        individualActivity: action.payload,
        isLoading: false,
      }
    case 'CHANGE_ACTIVITY_ID':
      return {
        ...state,
        activityId: action.payload,
        isActivityLoading: false,
      }
    default:
      return { ...state }
  }
}

export default activityReducer
