import {
    SAVE_USER_PLAN,
    SAVE_USER_REPORTS,
    USER_LOCATION,
    USER_HELP_FORM
} from './actions';

const initialPlanState = {
   Plan:{
       name:'',
       PlanName:'',
       Shelter:'',
       number:'',
       Kin:'',
       createdAt:''
   },
   HelpForm:{
       fullName:"",
       number:"",
       address:"",
       location:{},
       createdAt:''
   },
   Report:{},
   Location:{}
}

function userReducer(state = initialPlanState,action){
      switch (action.type){
         case SAVE_USER_PLAN:
            return {...state, Plan: action.payload}
         case SAVE_USER_REPORTS:
            return {...state, Report: action.payload}
         case USER_LOCATION:
            return {...state, Location: action.payload}
          case USER_HELP_FORM:
            return { ...state, HelpForm: action.payload}
         default:
            return state;
      }
}

export default userReducer;

