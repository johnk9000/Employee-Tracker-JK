import React, {useContext} from "react"
import FormContext from "../FormContext/"

function EmployeeDetails() {
    const { homie } = useContext(FormContext)
    return { ...homie }
}

export default EmployeeDetails;