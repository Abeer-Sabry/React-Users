import React, { useEffect, useState } from 'react'
import { fetchDataAction } from '../../Redux/Reducers/users/action'
import { useSelector, useDispatch } from 'react-redux'
const Home = () => {
    const { data, loading, err } = useSelector(({ data }) => data)
    const dispatch = useDispatch()
    const [ResultsNumber, setResultsNumber] = useState(5)
    const [PageNumber, setPageNumber] = useState(1)

    let pageNumber = PageNumber;
    let resultsNumber = ResultsNumber
    const loadMoreHandler = () => {
        setResultsNumber(resultsNumber + 5)
        setPageNumber(pageNumber + 1)
    }
    useEffect(() => {
        dispatch(fetchDataAction(ResultsNumber, PageNumber))
        console.log(data);
    }, [dispatch, ResultsNumber, PageNumber])
    return (
        <>

            {loading ? <div className="loader"><div className="spinner-border " role="status"> <span className="visually-hidden"></span></div></div> :
                <>
                    <div id="Home" className="container">
                        <h1 className="mt-5">Users Info</h1>
                        <div className=" text-center ">
                            <table className="table table-striped text-white mt-4">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.index}>
                                            <th scope="row">{item.name.first}</th>
                                            <td>{item.dob.age}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.location.country}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button onClick={loadMoreHandler} className=" button mb-5 mt-2">Load more</button>
                    </div>
                </>
            }









        </>

    )
}

export default Home
