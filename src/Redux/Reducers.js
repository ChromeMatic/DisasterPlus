import {SAVE_USER_PLAN,SAVE_USER_REPORTS,USER_LOCATION} from './actions';

const initialPlanState = {
   Plan:{},
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
            return {...state, Location: action.Location}
         default:
            return state;
      }
}

export default userReducer;

