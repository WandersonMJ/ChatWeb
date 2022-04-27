import React, { useEffect } from 'react';

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

import { Button } from 'react-bootstrap'

import * as S from './styles';

const Login: React.FC = () => {
  const auth = getAuth()

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    console.log('teste')
  }

  return (
    <S.Container>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </S.Container>
  );
}

export default Login;