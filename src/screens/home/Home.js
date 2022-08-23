import React from 'react'
import Movies from '../../ApiService/Movies';
import Header from '../../common/header/Header'
import './Home.css'

function Home() {
  React.useEffect(()=>{
    Movies()
  },[]);
  return (
    <div>
      <Header/>
      <div className='upCommingsHeader'>Upcoming Movies</div>
    </div>

  )
}

export default Home