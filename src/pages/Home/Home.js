import React from 'react'
import Chatt from '../../components/chattApp/Chatt';
import SideBar from '../../components/chattApp/SideBar';

const Home = () => {
  return (
    <>
     <div className="home">
        <div className="container">
            <SideBar />
            <Chatt />
        </div>
     </div>
    </>
  )
}

export default Home