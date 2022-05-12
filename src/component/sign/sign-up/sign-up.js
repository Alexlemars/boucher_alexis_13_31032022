import React,{useState} from 'react'
import "./sign-up.css"
import SignInput from '../sign-input/sign-input'
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/actions/auth';
import { useSelector } from 'react-redux';

import Button from '../../button/Button'
import { useNavigate } from 'react-router-dom';

import { isEmail } from 'validator';



export default function SignUp() {

    const [email ,setEmail] = useState("")
    const [firstName ,setFirstName] = useState("")
    const [lastName ,setLastName] = useState("")
    const [password ,setPassword] = useState("")
    const [sucess,setSucess] = useState(false)

  const [isEmailTrue, setisEmailTrue] = useState(false);
  const [isFirstNameTrue,setFirstNameTrue] = useState(false);
  const [isLastNameTrue,setLastNameTrue] = useState(false);
  const [isPasswordTrue, setPasswordTrue] = useState(false);

  const [messageErrorRequired, setmessageErrorRequired] = useState("");
  const [messageErrorEmail, setmessageErrorEmail] = useState("");
  const [messageErrorFirstName, setmessageErrorFirstName] = useState("");
  const [messageErrorLastName, setmessageErrorLastName] = useState("");

  const { message } = useSelector(state => state.message);

    const navigate = useNavigate()
    const dispatch = useDispatch();


    const onChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
        if (isEmail(email)){
          setisEmailTrue(true)
        }else{
            setisEmailTrue(false)
        }
        
    };
    const onChangeFirstname = e => {
        const firstName = e.target.value;
        setFirstName(firstName);
        if (firstName.length < 2 || firstName.length > 20){
            setFirstNameTrue(false)
          }else{
            setFirstNameTrue(true)
          }

    };
    const onChangeLastName = e => {
        const lastName = e.target.value;
        setLastName(lastName);
        if ( lastName.length < 2 || lastName.length > 20){
            setLastNameTrue(false)
          }else{
            setLastNameTrue(true)
          }
    };
    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
        if (password.length < 6 || password.length > 30){
            setPasswordTrue(false)  
          }else{
            setPasswordTrue(true)     
          }
    };

    const messageError = ()=>{
      if(message && message !== 200){
        return <div className='errors-dangers'>{message}</div>,
        console.log(message);
      }
    }
    



    const handleSignUp = (e)=>{
        setmessageErrorEmail("")
        setmessageErrorRequired("")
        setmessageErrorFirstName("")
        setmessageErrorLastName("")
        e.preventDefault()
        if(isEmailTrue && isFirstNameTrue && isLastNameTrue && isPasswordTrue ){
            setSucess(true)
            dispatch(register(firstName,lastName,email,password))
            setTimeout(()=>{
                navigate('/login'); 
                window.location.reload(); 
            },2000)

        }
        else if (!isEmailTrue ){
            setmessageErrorEmail("Invalid email format")
          } else if (!isLastNameTrue){
            setmessageErrorLastName("The lastname must be between 2 and 20 characters.")
            
          }else if (!isFirstNameTrue){
            setmessageErrorFirstName("The lastname must be between 2 and 20 characters.")
            
          }else if (!isPasswordTrue){
            setmessageErrorRequired("The password must be between 6 and 30 characters")
            
          }else{
            setSucess(false)
            console.log('erreur');
        }
        

    }

    

  return (
    <div>
    <div>
    <main className="main bg-dark">
  <section className="sign-up-content">
    <h1 className='sign-in-title'>Sign up</h1>
    <form action="" onSubmit={handleSignUp} >

    <SignInput
              className="input-wrapper"
              label="Email"
              fors="email"
              type="text"
              name="email"
              id="email"
              onChange={onChangeEmail}  
              value={email}
              validations={messageErrorEmail}  
            />

    <SignInput
              className="input-wrapper"
              label="Nom"
              fors="Nom"
              type="text"
              name="Nom"
              id="Nom"
              onChange={onChangeLastName}
              value={lastName}
              validations={messageErrorLastName}  
            />

    <SignInput
              className="input-wrapper"
              label="Prénom"
              fors="Prénom"
              type="text"
              name="Prénom"
              id="Prénom"
              onChange={onChangeFirstname}
              value={firstName}
              validations={messageErrorFirstName}  
            />

      
      <SignInput
              className="input-wrapper"
              label="Password"
              fors="password"
              type="password"
              name="password"
              id="password"
              onChange={onChangePassword}
              value={password}
              validations={messageErrorRequired}  
            />

{messageError()}
      

      <Button
                type="submit"
                className="sign-in-button"
                value="Sign up"
            />

    </form>
  </section>
</main>

</div>
</div>
  )
}
