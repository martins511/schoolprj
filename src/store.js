import { configureStore } from "@reduxjs/toolkit";
import basicFourReducer from "./slicecomponents/basicFour";
 const store = configureStore({
    reducer:{
        basic4:basicFourReducer
    }
})
export default store