import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActivityAction } from 'redux/actions/activities/addActivityAction'
import { addActivityResourseChangeAction } from 'redux/actions/activities/addActivityResourseChangeAction'
import { deleteActivityAction } from 'redux/actions/activities/deleteActivityAction'
import { editActivityAction } from 'redux/actions/activities/editActivityAction'
import { getActivityEditAction } from 'redux/actions/activities/getActivityEditAction'
import { handleAddActivityAction } from 'redux/actions/activities/handleAddActivityAction'
import { showSideBarAction } from 'redux/actions/courses/showSideBarAction'
import { showFormErrors } from 'utils/commonFunctions'
import { length, ternary, equal, values } from 'utils/javascript'
import handleFormValidation from 'utils/validation'

const index = () => {
  const dispatch = useDispatch()
  const individualActivity = useSelector(
    (state) => state.activity.individualActivity,
  )
  const [deleteId, setDeleteId] = useState()
  const allActivity = useSelector((state) => state.activity.allActivityData)
  const activityId = useSelector((state) => state.activity.activityId)
  const [isValid, setIsValid] = useState(false)
  const [showActivityForm, setShowActivityForm] = useState(false)
  const [showPreparationModal, setShowPreparationModal] = useState(false)
  const [moduleIndex, setModuleIndex] = useState(null)
  const [userData, setUserData] = useState(individualActivity)
  const handleAddActivity = () => {
    setShowActivityForm(true)
    dispatch(handleAddActivityAction())
  }
  const handleChange = (e) => {
    const { name, value, checked } = e.target
    const formErrors = handleFormValidation(name, value, userData)
    if (equal(name, 'clockHour')) {
      setUserData({ ...userData, [name]: checked, formErrors })
    } else {
      setUserData({ ...userData, [name]: value, formErrors })
    }
  }

  useEffect(() => {
    dispatch(showSideBarAction(true))
  }, [])

  useEffect(() => {
    setUserData(individualActivity)
  }, [individualActivity])
  const handleSubmit = (id) => (e) => {
    setModuleIndex(id)
    e.preventDefault()
    showFormErrors(userData, setIsValid, setUserData)
  }
  const handleClose = () => {
    setShowActivityForm(false)
    togglePreparationModal()
  }
  const handleEdit = (id) => {
    setShowPreparationModal(true)
    setShowActivityForm(true)
    dispatch(getActivityEditAction(id))
  }

  const handleActivityResourseChange = (e) => {
    dispatch(addActivityResourseChangeAction(userData, e))
  }
  useEffect(async () => {
    if (isValid) {
      if (values(userData.formErrors).every((val) => equal(length(val)))) {
        setShowActivityForm(false)
        setShowPreparationModal(false)
        dispatch(
          ternary(
            activityId,
            editActivityAction(userData),
            addActivityAction(userData, moduleIndex),
          ),
        )
        setIsValid(false)
      }
    }
  }, [isValid])
  const [showModal, setModal] = useState(false)
  const toggle = () => {
    setModal(!showModal)
  }
  const onSave = () => {
    dispatch(deleteActivityAction(deleteId, moduleIndex))
    toggle()
  }
  const onCancel = () => {
    toggle()
  }

  const handleDelete = (id, moduleId) => {
    setModuleIndex(moduleId)
    setDeleteId(id)
    setModal(true)
  }

  const togglePreparationModal = () => {
    setShowPreparationModal(!showPreparationModal)
  }
  const handleAddPreparation = () => {
    dispatch(handleAddActivityAction())
    setShowPreparationModal(true)
  }

  return {
    userData,
    showActivityForm,
    handleAddActivity,
    handleChange,
    handleSubmit,
    allActivity,
    handleClose,
    handleEdit,
    handleDelete,
    toggle,
    showModal,
    onSave,
    onCancel,
    handleAddPreparation,
    showPreparationModal,
    togglePreparationModal,
    handleActivityResourseChange,
  }
}

export default index
