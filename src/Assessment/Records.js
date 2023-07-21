import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updateAll,removeAssessment,grade } from './assessmentSlice'
import { Link } from 'react-router-dom'
//import DeleteConfirmationModal from './DeleteConfirmationModal'
const Records = () => {
    const dispatch = useDispatch()

    const[inputId, setInputId] = useState(null)

    const[togle, setTogle] = useState(false)

    const [editedItem ,setEditedItem] = useState({})

    const datas = useSelector((state) => state.record.value)
    //console.log("datas ",datas);
    const handleTogle =()=>{
        setTogle(x => !x)
    }

    const handleChange =(e)=>{
        setEditedItem(editedItem=>({...editedItem, [e.target.name]:e.target.value}))
    }

    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    
    const handleDeleteClick = (idx)=>{
      setShowDeleteConfirmation(x=>!x)
      setInputId(idx)
    }

    const handleDelete =(data)=>{
         dispatch(removeAssessment({id:data.id}));
         setShowDeleteConfirmation(x =>!x)
    }
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th><button><Link to="/">Back</Link></button></th>
            <th>Name</th>
            <th>CA</th>
            <th>Assessment</th>
            <th>Test</th>
            <th>Exam</th>
            <th>Total</th>
            <th>Grade</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            
            {
                datas.map((data, idx)=>(
                    <tr key={idx}>
                    {togle && inputId === idx?
                        <>
                        <td><input type="text" name="name" value={editedItem.name} onChange={handleChange}/></td>
                        <td><input type="text" name="ca" value={editedItem.ca} onChange={handleChange}/></td>
                        <td><input type="text" name="asmt" value={editedItem.asmt} onChange={handleChange}/></td>
                        <td><input type="text" name="test" value={editedItem.test} onChange={handleChange}/></td>
                        <td><input type="text" name="exam" value={editedItem.exam} onChange={handleChange}/></td>
                        <td><input type="text" name="total" value={editedItem.total} /></td>
                        <td>{editedItem.grade}</td>
                        <td><button 
                        onClick={()=>{
                            handleTogle()
                            dispatch(updateAll(editedItem))
                            dispatch(grade(editedItem))

                        }}
                        >Save</button></td>
                        </>:
                        <>
                        <td>----</td>
                        <td>{data.name}</td>
                        <td>{data.ca}</td>
                        <td>{data.asmt}</td>
                        <td>{data.test}</td>
                        <td>{data.exam}</td>
                        <td>{data.total}</td>
                        <td>{data.grade}</td>
                        <td><button
                        onClick={()=>{
                            handleTogle()
                            setInputId(idx)
                            setEditedItem(data)
                            
                        }}
                        >Edit</button></td>
                        </>
                    }
                    {/* <td><button onClick={handleDeleteClick}>Delete</button></td> */}
                    {/* <td>{showDeleteConfirmation && <DeleteConfirmationModal onConfirm={()=>handleDelete(data)} onCancle={handleDeleteClick}/>}</td> */}
                    {showDeleteConfirmation && inputId === idx ? <><td><button onClick={()=>handleDeleteClick(idx)}>No</button></td><td><button onClick={()=>handleDelete(data)}>Yes</button></td></>:<><td><button onClick={()=>handleDeleteClick(idx)}>Delete</button></td></>}
                    </tr>
                
                ))
            }
            
        </tbody>
      </table>
    </div>
  )
}

export default Records
