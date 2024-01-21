import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_BACKEND_URL ;
export default function Oauth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);
    
          const result = await signInWithPopup(auth, provider);
          const res = await fetch(`${URL}/auth/google`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            credentials: 'include',
            body: JSON.stringify({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            }),
            
          });

          const cookieHeader = res.headers.get('Set-Cookie');
          console.log(`cookie Header${cookieHeader}`)
      if (cookieHeader) {
        // Divide el encabezado de la cookie para obtener sus partes individuales
        const cookieParts = cookieHeader.split(';');

        // Extrae el valor de la cookie 'access_token'
        const accessToken = cookieParts.find(part => part.trim().startsWith('access_token='));

        // Si se encontró la cookie 'access_token', almacénala en el lado del cliente
        if (accessToken) {
          document.cookie = accessToken;
          console.log('Cookie almacenada con éxito:', accessToken);
        }
      }
          const data = await res.json();
          console.log(data);
          dispatch(signInSuccess(data));
          navigate('/');
        } catch (error) {
          console.log('could not login with google', error);
        }
      };

  return (
    <button
      type='button'
      onClick={handleGoogleClick}
      className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95'
    >
      Continue with google
    </button>
  )
}
