let valuesinitial = {
  Dept: 
    {
    HR: ['select',1,2,3,4,5],
    ENG: ['select',6,7,8,9,10]
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
      case 'CLEAR_DETAILS':
        return (
          state = valuesinitial
        )
    }
}

export default valuesReducer