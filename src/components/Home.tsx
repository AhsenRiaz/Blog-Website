import React from 'react'
import style from "./component.module.css"
import Typical from "react-typical"

const Home = () => {
    return (
        <div className = {style.Home_image}>
            <div className = {style.Home_content} >
                <h1  >
                    <Typical
                    loop = {2}
                    wrapper = "b"

                    steps = {[
                        'Welcome to DevToday',
                        2000,
                        "Check Out Our Blogs",
                        2000,
                    ]}
                    >

                    </Typical>
                </h1 >
            </div>
        </div>
    )
}

export default Home
