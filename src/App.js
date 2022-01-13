
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App=()=>
{ if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
    height='100vh'
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    projectID='e9085cef-870a-4a5f-b2e3-5ad5c94bb72f'
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
  />
  )
}
export default App;
