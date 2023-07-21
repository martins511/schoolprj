import React from 'react'
import { useState } from 'react';
const AddConfirmationModal = ({onCancle, onConfirm}) => {
    
  return (
    <div>
      <p>Are you sure you want to add?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancle}>No</button>
    </div>
  )
}

export default AddConfirmationModal
