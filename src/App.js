import React from 'react'
import { connect } from 'react-redux'
import {deptChange, call_api_emp} from '../src/actions/values'


class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      dept: '',
      emp: ''
    }
    this.departmentOptions = [
      {value: 'HR', label: 'HR'},
      {value: 'ENG', label: 'Engineering'}
  ]
 }

  handleDeptChange = (e) => {
    this.props.dispatch(deptChange(e.target.value))
}

handleEmpChange = (e) => {
  e.persist()
    this.setState(()=> (
      {
        emp: e.target.value
      }
    ))
}

handlegetdetails = () => {
  this.props.dispatch(call_api_emp(this.state.emp))
}

handleClear = () => {

}

  render()
  {
    return(
      <div className="row">  
      <div className="col-md-6 offset-2">
         <h1> Employee Details </h1>   
         <div className="row mb-3">
           <div className="col-md-3">
            <span class="ms-Dropdown" tabindex="0">
              <label class="ms-Label">Department:</label>
              <i class="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown"></i>
              <select onChange={this.handleDeptChange} value={this.state.dept}>
                  <option value="">Select</option>
                  { this.departmentOptions.map(dept => <option value={dept.value}> {dept.label }</option>)}
              </select>
           </span>
           </div>
           <div className="col-md-3">
           <span class="ms-Dropdown" tabindex="0">
              <label class="ms-Label">Employee Id:</label><br/>
              <i class="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown"></i>
              <select onChange={this.handleEmpChange} value= {this.state.emp}>
                { this.props.empValues !== 0 && this.props.empValues.map(emp => <option value={emp}> { emp }</option>)}
              </select>
            </span>
           </div>
           <div className="col-md-3">
            <button onClick = {this.handlegetdetails}>
             GetDetails
            </button>
           </div>
           <div className="col-md-3">
           <button onClick= { this.handleClear}> Clear
           </button>
           </div>
            </div>
            <div className="row mb-6">
            <div className="col-md-6 offset-2">
             <img src = {this.props.empDetails && this.props.empDetails.avatar}/>
            </div>
            </div>
            <div className="row mb-4">
            <div className="col-md-6 offset-2">
            <h4>{this.props.empDetails && this.props.empDetails.first_name}</h4>
            </div>
            </div>
       </div>     
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return ({
       empValues: state.values.employees,
       empDetails: state.values.Emp.data

  })
}  

export default connect(mapStateToProps)(App)
