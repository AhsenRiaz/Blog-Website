import {createSlice , configureStore} from "@reduxjs/toolkit";



const userSlice = createSlice({
    name : "user ",
    initialState : null,
    reducers : {
        addUser : (state , action)=> {
            return {
                ...state,
                user : action.payload.data
            }
        }
    }

  

})

const store = configureStore({
    reducer : userSlice.reducer
})


export const {addUser} = userSlice.actions
export default store
