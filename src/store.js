import { configureStore } from "@reduxjs/toolkit";
import basicFourReducer from "./slicecomponents/basicFour";
import asstSlice from "./Assessment/assessmentSlice";
//import testSlice from "./TestApp/testSlice";
 const store = configureStore({
    reducer:{
        basic4:basicFourReducer,
        record:asstSlice,
       // tap:testSlice
    }
})
export default store