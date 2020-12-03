
    
import React from "react";
import {shallow } from "enzyme";
import App from "../App/App";
import TimerButtons from "./TimerButtons";

// import Props from "./TimerButtons"


    
describe("Should render the TimerButtons component" , () => {

    const container = shallow(<TimerButtons />)

    it ("should render the divs", () => {
        expect(container.find("div").length).toEqual(1)
    })



})
