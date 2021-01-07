import "./src/styles/global.css"
import React from 'react'
import "firebase/auth";
import store from "./src/store/index"
import {Provider} from "react-redux"

export const wrapRootElement = ({element}) => {
        return  (
            <Provider store = {store} >{element}</Provider>

        )
}
