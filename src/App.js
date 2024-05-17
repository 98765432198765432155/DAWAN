import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { Input, Button } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import { useHistory } from 'react-router-dom';

function App() {
  const { Title } = Typography;
  const usernameInputRef = useRef(null);
  const [isLoginSuccessful, setLoginSuccessful] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);

  const login = () => {
    new Promise((resolve, reject) => {
      let isSuccessful = Math.random() >= 0.5; 
      if (isSuccessful) {
        resolve({ success: true }); 
      } else {
        reject({ msg: '密码错误', code: 1001 });
      }
    })
      .then(() => {
        console.log('跳转新页面');
        setLoginSuccessful(true);
        history.push('/login');
      })
      .catch(error => {
        console.log('错误处理：', error);
        setLoginSuccessful(false);
      });
  };

  return (
    <div className="App">
      <Title style={{ margin: '8px 0' }} >欢迎登陆教师点名系统</Title>
      <Input placeholder='输入用户名' ref={usernameInputRef}></Input>
      <br/><br/>
      <Input placeholder='输入密码' ></Input>
      <br/><br/>
      <Button onClick={login} style={{backgroundColor: isLoginSuccessful ? 'default' : 'gray'}}>Login</Button>
    </div>
  );
}

export default App;