
import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAssessment } from './assessmentSlice'
import { Link } from 'react-router-dom'
import "./asst.css"
import AddConfirmationModal from './AddConfirmationModal'

const Assessment = () => {

  const [showAddConfirmation, setShowAddConfirmation] = useState(false);


    
    const dispatch = useDispatch();

    const [user , setUser] = useState({})

    const handleChange =(e)=>{
        setUser(user =>({...user, [e.target.name]:e.target.value}))
    }

    const handleAddConfirm = ()=>{
        setShowAddConfirmation(x=>!x)

    }

    const addStudent =()=>{
      const total = parseFloat(user.ca) + parseFloat(user.asmt) + parseFloat(user.test) + parseFloat(user.exam);
      let grade =""

      if(total >= 70){
        grade = "A"
    }else if(total>= 60){
        grade = "B"
    }else if(total>= 50){
        grade = "C"
    }else if(total>= 40){
        grade = "D"
    }else{
        grade = "F"
    }
        dispatch(addAssessment({id:nanoid(),name:user.name, ca:user.ca,asmt:user.asmt, test:user.test, exam: user.exam, total, grade}))
        setUser({name:"",ca:"",asmt:"",test:"",exam:"",total:""})
        handleAddConfirm()
    }
  return (
    <div>
      <div className="container">
        <div className="name">
            <label>Name</label>
            <label>CA</label>
            <label>Assessment</label>
            <label>Test</label>
            <label>Exam</label>
            <button><Link to="record">GoToRecord</Link></button>
        </div>
        <div className="inputs">
          {showAddConfirmation && <AddConfirmationModal onConfirm={addStudent} onCancle={handleAddConfirm}/>}
            <input type="text" name='name' value={user.name} onChange={handleChange} />
            <input type="text" name='ca' value={user.ca} onChange={handleChange} />
            <input type="text" name='asmt' value={user.asmt} onChange={handleChange} />
            <input type="text" name='test' value={user.test} onChange={handleChange} />
            <input type="text" name='exam' value={user.exam} onChange={handleChange} />
            <button onClick={()=>handleAddConfirm() }>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Assessment
