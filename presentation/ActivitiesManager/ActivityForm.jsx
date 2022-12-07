import React from 'react'
import { useSelector } from 'react-redux'
import CustomButton from 'shared/Button'
import CustomCheckBox from 'shared/customCheckbox'
import CustomTextField from 'shared/CustomInputfield'
import CustomMultipleSelect from 'shared/CustomMultipleSelect'
import CustomSelect from 'shared/DropDown'
import Loader from 'shared/Loader'
import uid from 'shared/uid'
import { activityType, interactionTimeOptions } from 'utils/constants'
import { ternary } from 'utils/javascript'

const ActivityForm = ({
  handleSubmit,
  handleChange,
  userData,
  handleClose,
  moduleIndex,
  handleResourseChange,
}) => {
  const resources = useSelector((state) => state.resources.allResourcesData)

  const isActivityLoading = useSelector(
    (state) => state.activity.isActivityLoading,
  )

  const resourcesData = resources.map((v) => ({
    value: v.id,
    label: v.name,
  }))

  const buttons = [
    {
      type: 'submit',
      defaultDesign: true,
      buttonName: 'Save',
    },
    {
      type: 'button',
      cancel: true,
      buttonName: 'Cancel',
      onClick: handleClose,
    },
  ]
  return (
    <form onSubmit={handleSubmit(moduleIndex)}>
      <CustomTextField
        type="text"
        label="Title"
        name="activityTitle"
        onChange={handleChange}
        value={userData.activityTitle}
        errorMessage={userData.formErrors && userData.formErrors.activityTitle}
        required
      />
      <CustomSelect
        mappingData={activityType}
        label="Type"
        name="activityType"
        onChange={handleChange}
        value={userData.activityType}
      />
      <CustomTextField
        type="text"
        label="Detail"
        name="activityDetail"
        onChange={handleChange}
        value={userData.activityDetail}
      />

      {ternary(
        !isActivityLoading,
        <CustomMultipleSelect
          label="Resources"
          options={resourcesData}
          handleSelectionChange={handleResourseChange}
          defaultValue={userData.resources.map((v) => ({
            value: v.value,
            label: v.label,
          }))}
        />,
        <Loader />,
      )}

      <CustomSelect
        mappingData={interactionTimeOptions}
        label="Interaction Time (In hours)"
        name="interactionTime"
        value={userData.interactionTime}
        onChange={handleChange}
      />
      <CustomCheckBox
        label="Clock Hour"
        name="clockHour"
        checked={userData.clockHour}
        onChange={handleChange}
      />
      <div className="text-right">
        {buttons.map(({ type, defaultDesign, buttonName, onClick, cancel }) => (
          <CustomButton
            type={type}
            defaultDesign={defaultDesign}
            onClick={onClick}
            cancel={cancel}
            key={uid()}
          >
            {buttonName}
          </CustomButton>
        ))}
      </div>
    </form>
  )
}

export default ActivityForm
