import { useEffect, useState } from 'react'

import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'

function App() {

  const dispatch = useDispatch()
  const { url } = useSelector((state)=>{
    return state.home
  })
  console.log(url);
  useEffect(() => {
    apiTesting()
  }, [])

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then(res => dispatch(getApiConfiguration(res)))
    

  }
  return (
    <>

    </>
  )
}

export default App
