import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "",
    ass1: 0,
    ass2: 0,
    ass3: 0,
    ass4: 0,
    ass5: 0,
    average: 0,
    test1: 0,
    test2: 0,
    totalAssesment: 0,
    exam: 0,
    grandTotal: 0,
    grade:""
  },
};
const basicFourSlice = createSlice({
  name: "basicFour",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.value.name = action.payload.name;
    },
    updateAssesment: (state, action) => {
      state.value.ass1 = action.payload.ass1;
      state.value.ass2 = action.payload.ass2;
      state.value.ass3 = action.payload.ass3;
      state.value.ass4 = action.payload.ass4;
      state.value.ass5 = action.payload.ass5;
    },
    updateTest: (state, action) => {
      state.value.test1 = action.payload.test1;
      state.value.test2 = action.payload.test2;
    },

    updateExam: (state, action) => {
      state.value.exam = action.payload.exam;
    },

    calculateAverage: (state, action) => {
      const total =parseFloat(action.payload.ass1) +parseFloat(action.payload.ass2) +parseFloat(action.payload.ass3) +parseFloat(action.payload.ass4) +parseFloat(action.payload.ass5);
      
      state.value.average = total / 5;
    },

    calculateTotalAssesment: (state,action) => {
      state.value.totalAssesment =  parseFloat(action.payload.test1) + parseFloat(action.payload.test2) +parseFloat(state.value.average);
    },

    calculateGrandTotal: (state) => {
      state.value.grandTotal = parseFloat(state.value.totalAssesment) + parseFloat(state.value.exam);
      if(state.value.grandTotal>=70){
        state.value.grade= "A"
      }else if(state.value.grandTotal>=60){
        state.value.grade= "B"
      }else if(state.value.grandTotal>=50){
        state.value.grade= "C"
      }else if(state.value.grandTotal>=40){
        state.value.grade= "D"
      }else{
        state.value.grade = "F"
      }
    },
  },
});
export const {
  updateName,
  updateAssesment,
  updateExam,
  updateTest,
  calculateAverage,
  calculateGrandTotal,
  calculateTotalAssesment,
} = basicFourSlice.actions;
export default basicFourSlice.reducer;
