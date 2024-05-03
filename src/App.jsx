import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atom'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
 
}

function MainApp(){
  const networknotificationCount = useRecoilValue(networkAtom) 
  const jobCount = useRecoilValue(jobsAtom) 
  const notificationCount = useRecoilValue(notificationAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  // const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom) 
  return (
    <>
    <button>Home</button>
    <button>My network {networknotificationCount >=100?"99+": networknotificationCount}</button>
    <button>Jobs {jobCount}</button>
    <button>Messaging {messagingCount}</button>
    <button>Notification {notificationCount}</button>
    {/*  <button onClick={()=>setMessagingCount(messagingCount+1)}>Me </button> */}
    
    <ButtonUpdater /> 
    </>
  )
}

function ButtonUpdater(){
  const setMessagingCount = useSetRecoilState(messagingAtom)
  return(
    <button onClick={()=>setMessagingCount(c => c+1)}>Me </button>
    
  )
}

export default App
