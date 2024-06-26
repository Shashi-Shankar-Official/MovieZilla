export { removepeople } from "../reducers/peopleSlice"
import axios from '../../utils/axios.jsx';
import {loadpeople} from '../reducers/peopleSlice.jsx';

export const asyncloadperson = (id) => async (dispatch, getState) => {
    try {
         const detail = await axios.get(`/person/${id}`);
         const externalid = await axios.get(`/person/${id}/external_ids`);
         const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
         
         let theultimatedetails = {
            detail :detail.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            
         };
         dispatch(loadpeople(theultimatedetails));
        //  console.log(theultimatedetails);
         
    } catch(error) {
        console.log(error);
    }
}