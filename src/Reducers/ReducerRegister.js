import * as ActionTypes from '../Actions/types';
import browserHistory from '../Utils/browserHistory'; 


const intialState = {
   loginmsg:'',
   regmsg:''
};
export default(state=intialState,action)=>{
    switch(action.type){

        case ActionTypes.LOGIN:{
            return{...state,loginmsg:'Login successfull'}
        }
        case ActionTypes.REG:{
            return{...state,regmsg:'Register successfull'}
        }
        
        default: 
            return state; 
    }
}