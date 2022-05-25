export const SAVE_USER_PLAN = 'SAVE_USER_PLAN';
export const SAVE_USER_REPORTS = 'SAVE_USER_REPORTS';
export const USER_LOCATION = 'USER_LOCATION';
export const USER_HELP_FORM = 'USER_HELP_FORM'

export const SavePlan = Plan => dispatch =>{
    dispatch({
        type: SAVE_USER_PLAN,
        payload: Plan
    });
};

export const Save_Report= report => dispatch =>{
    dispatch({
        type:SAVE_USER_REPORTS,
        payload: report
    })
};

export const SaveHelpForm = helpForm => dispatch =>{
    dispatch({
        type:USER_HELP_FORM,
        payload: helpForm
    })
};

export const Get_User_Location = location => dispatch =>{
    dispatch({
        type:USER_LOCATION,
        payload: location
    })
};