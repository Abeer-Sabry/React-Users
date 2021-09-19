import ActionTypes from "./type";
import axios from "axios";


export const fetchDataAction = (resultsNumber, pageNmuber) => async (dispatch) => {
    dispatch({
        type: ActionTypes.FETCH_DATA_REQUEST
    });
    try {
        const { data } = await axios.get(`https://randomuser.me/api/?results=${resultsNumber}&page=${pageNmuber}`)
        // const {data} = await axios.get('https://randomuser.me/api/?results=5&page=1')
        // console.log(data)
        const reponse = data.results
        console.log(reponse);
        dispatch({
            type: ActionTypes.FETCH_DATA_SUCCES,
            payload: reponse
        })

    } catch (err) {
        dispatch({
            type: ActionTypes.FETCH_DATA_ERROR,
            payload: "err"
        })
    }
}