import React, {useState, useEffect} from 'react';
import { registerUser } from '../api';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Home = () => {
  const [state, setState] = useState(true)
  const [data, setData] = useState();


  const buttonHandler = () => {
    setState(state => !state);
  }

   useEffect(() => {
   if(data){
    registerUser(data)
    .then(result => {
       console.log(result);
    })
   }
  }, [data])

  const getData = (userData) => {
    setData(userData)
  }
  

  const textButton = state ? 'SignIn' : 'SignUp';


    return (
        <>
        <header><button onClick={buttonHandler}>{textButton}</button></header>
          <main>{state ? <SignUp sendData={getData}/> : <SignIn sendData = {getData}/> }</main>
        </>
    )
}

export default Home;