import React, { useState } from 'react'
import "./App.css"
import DisplayComponent from "../DisplayComponent/DisplayComponent"
function App() {

    return (
        <div>
            <div className="main_section">
                <div className="stopwatch">

                    <DisplayComponent/>

                </div>
                                        
            </div>

        </div>
    )
}

export default App
