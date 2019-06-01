import axios from 'axios'

export const deptChange = (dept) => {
    return {
        type: 'CHANGE_DEPARTMENT', 
        payload: dept
    }
}

export const load_emp_details = (emp) =>
{
    console.log("emp in action ",emp)
    return {
        type: 'LOAD_EMP_DETAILS',
        payload: emp
    }
}

export const call_api_emp = (emp) =>
{
    return(dispatch) => {
        axios.get(`https://reqres.in/api/users/${emp}`)
        .then(response =>
        {
            console.log(response.data,"response")
            const emp = response.data
            dispatch(load_emp_details(emp))
        })
    }
}





