import React from 'react'
import "firebase/auth";
import store from "./src/store/index"
import {Provider} from "react-redux"

export const wrapRootElement = ({element}) => {
    <Provider store = {store} >{element}</Provider>
}


exports.onCreateWebpackConfig = ({
    stage,
    actions,
    getConfig,
  }) => {
if (stage === "build-html") {
actions.setWebpackConfig({
externals: getConfig().externals.concat(function(context, request, callback) {
const regex = /^@?firebase(\/(.+))?/
// exclude firebase products from being bundled, so they will be loaded using require() at runtime.
if (regex.test(request)) {
return callback(null, "umd " + request)
}
callback()
}),
})
}
}