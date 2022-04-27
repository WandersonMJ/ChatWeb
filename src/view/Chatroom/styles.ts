import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  padding: 65px 5px;

  .sign-out {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 35px;
  }
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 54px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 7px;

  button {
    width: 80px;
  }

  input {
    width: 100%;
    padding: 10px;
  }
`