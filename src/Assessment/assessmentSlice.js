import { createSlice } from "@reduxjs/toolkit";

const assessmentSlice = createSlice({
    name: "assessment",
    initialState:{value:[]},
    reducers:{
        addAssessment:(state,action)=>{
            state.value.push(action.payload)
        },
        removeAssessment:(state,action)=>{
           state.value = state.value.filter(assessment => assessment.id !== action.payload.id);

        },

        updateAll:(state ,action)=>{
            state.value.map((assessment)=>{
                if(assessment.id === action.payload.id){
                    const sum =parseFloat(action.payload.ca) + parseFloat(action.payload.asmt) + parseFloat(action.payload.test) + parseFloat(action.payload.exam);
                     assessment.name = action.payload.name
                     assessment.ca = action.payload.ca
                     assessment.asmt = action.payload.asmt
                     assessment.test = action.payload.test
                     assessment.exam = action.payload.exam
                     assessment.total = sum;
                     
                } 
                return assessment 
            })
        },

        grade :(state ,action)=>{
            state.value.map((assessment)=>{
                if(assessment.id === action.payload.id){
                    if(assessment.total >= 70){
                        assessment.grade = "A"
                    }else if(assessment.total>= 60){
                        assessment.grade = "B"
                    }else if(assessment.total>= 50){
                        assessment.grade = "C"
                    }else if(assessment.total>= 40){
                        assessment.grade = "D"
                    }else{
                        assessment.grade = "F"
                    }
                }
                return assessment.grade
            })
            
        }
    }
})

export const {addAssessment ,removeAssessment ,updateAll, grade} = assessmentSlice.actions;
export default assessmentSlice.reducer