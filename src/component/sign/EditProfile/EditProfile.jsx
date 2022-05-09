import React,{useState} from 'react'
import './edit-profile.css'
import { useDispatch } from 'react-redux';
import { UpdateUserInfos } from '../../../redux/actions/profile';
import SignInput from '../sign-input/sign-input';
import Button from '../../button/Button';


export default function EditProfil({toggle}) {

    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");

    const [isFirstNameTrue,setFirstNameTrue] = useState(false);
    const [isLastNameTrue,setLastNameTrue] = useState(false);

    const [messageErrorFirstName, setmessageErrorFirstName] = useState("");
    const [messageErrorLastName, setmessageErrorLastName] = useState("");

    const dispatch = useDispatch();

    const handleChangeFirstName = e => {
          const {value} = e.target
            setNewFirstName(value.trim())
          if(value.length < 2 || value.length > 20) {
            setFirstNameTrue(false)
          }else{
            setFirstNameTrue(true)
          }
           
    };
    

    const handleChangeLastName = e => {
        const {value} = e.target
            setNewLastName(value);
            if(value.length < 2 || value.length > 20) {
                setLastNameTrue(false)
              }else{
                setLastNameTrue(true)
              }

    };

    const updateUserInfos = e => {
        e.preventDefault();
        setmessageErrorFirstName('')
        setmessageErrorLastName('')
        const newInfos = {
            firstName: newFirstName,
            lastName: newLastName,
        };

        if (isFirstNameTrue && isLastNameTrue) {
            dispatch(UpdateUserInfos(newInfos));
            toggle()
        }else if (!isFirstNameTrue){
            setmessageErrorFirstName('The lastname must be between 2 and 20 characters')

        }else if (!isLastNameTrue){
            setmessageErrorLastName('The lastname must be between 2 and 20 characters')
        }
    };



  return (
    <div className='form'>
        <div className='form-content'>
        <form action="" >
        <SignInput
              className="input-wrapper"
              label="FirstName"
              fors="newFirstName"
              type="text"
              name="newFirstName"
              id="newFirstName"
              onChange={handleChangeFirstName}
              value={newFirstName}
              validations={messageErrorFirstName}
            />
            
            <SignInput
              className="input-wrapper"
              label="LastName"
              fors="newLastName"
              type="text"
              name="newLastName"
              id="newLastName"
              onChange={handleChangeLastName}
              value={newLastName}
              validations={messageErrorLastName}

            />
            
            <Button type="submit"  className="sign-in-button" value="Save" onClick={updateUserInfos} />
            <Button  className="sign-in-button" value="Cancel" onClick={toggle}/>
          </form>
        </div>
        </div>
  )
}