import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atom'

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
  const totalNotificationSelectorCount = useRecoilValue(totalNotificationSelector)
  return (
    <>
    <button>Home</button>

    <button>My network {networknotificationCount >=100?"99+": networknotificationCount}</button>
    <button>Jobs {jobCount}</button>
    <button>Messaging {messagingCount}</button>
    <button>Notification {notificationCount}</button>
    <button>Me {totalNotificationSelectorCount}</button>
    </>
  )
}

export default App
