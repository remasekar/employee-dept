let valuesinitial = {
  Dept: 
    {
    HR: [1,2,3,4,5],
    ENG: [6,7,8,9,10]
    },
    employees: [],
  Emp: {}
}

const valuesReducer = ( state = valuesinitial , action ) => {
    switch(action.type)
    {
      case 'CHANGE_DEPARTMENT' : 
        return {...state,
          employees: state.Dept[action.payload]
        }
      case 'LOAD_EMP_DETAILS':
        return {...state,...{Emp:action.payload}}
      default: 
        return {...state}
    }
}

export default valuesReducer