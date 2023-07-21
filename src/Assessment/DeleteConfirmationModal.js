import React from 'react'
const DeleteConfirmationModal = ({onConfirm, onCancle}) => {
    
  return (
    <div>
      <p>Are you sure you want to delete?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancle}>No</button>
    </div>
  )
}

export default DeleteConfirmationModal
