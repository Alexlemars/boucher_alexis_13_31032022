import React,{useState} from 'react'
import "./Profil.css"
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import EditProfil from '../../component/sign/EditProfile/EditProfile';
import Acount from '../../component/account/Acount';


export default function Profil() {

  const { isLoggedIn } = useSelector(state => state.authUser);
  const currentUser = useSelector(state => state.authUser);

  const {firstName} = currentUser
  const {lastName} = currentUser

  const [showEditUserInfos, setShowEditUserInfos] = useState(false);

    const toggleShowEdition = () => {
        setShowEditUserInfos(!showEditUserInfos);
    };
 
 

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
} else {
  return (
    <div>
        <main className="main  bg-dark bg-height">

      <div className="header">
      <h1>Welcome back<br />{firstName} {lastName} </h1>
        {showEditUserInfos ? (
          <div>
          <EditProfil toggle={()=> toggleShowEdition()} />
          
          </div>
        ) : (
          <div>
          <button onClick={()=> toggleShowEdition()} className="edit-button">Edit Name</button>
          
          </div>

        ) }
        <Acount/>
        
        
      </div>
      
    </main>
    </div>
  )
}
}
