# Recoil Learing 😍

### What is Recoil ?
➡ Recoil js is another state management library for React.
➡ Though we already have Redux. Mobx, Context, but here we got a new light entry in the community.

### Why Recoil ?
🟠 Firstly, it solves the global state management problems.
🟠 Easy to learn; there are no new major principles n logic to learn.
🟠 Quite Simple, it is similar like react.
Though I like redux, but it will not take that much time to learn.

## Recoil concepts
➡ There are two major concepts:
     1️⃣ Atoms
     2️⃣ Selectors

### Atoms
➡ This is similar to how we use the useState hook in react.

#### 1. Let's start with binding root app with Recoil
```.js
import { RecoilRoot } from "recoil";
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
 
}
export default App

```

#### 2. Set the Atom
➡ Recoil calls this part as atom, where we set the global key, value. It semilar to useState()
```.js
import {atom} from "recoil"

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})
```
#### 3. use the atom - useRecoilState
Returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state when called.
```.js
import { useRecoilState } from 'recoil'
const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom)
```




### What is use useRecoilValue ?
⏩ Returns the value of the given Recoil state.
```.js
import {useRecoilValue } from 'recoil'
const networknotificationCount = useRecoilValue(networkAtom) 
const jobCount = useRecoilValue(jobsAtom) 
const notificationCount = useRecoilValue(notificationAtom)
```

### What is useSetRecoilState ?
⏩ If only you need to update something and not want to the value of it then we can use useSetRecoilState.
```.js
function ButtonUpdater(){
  const setMessagingCount = useSetRecoilState(messagingAtom)
  return(
    <button onClick={()=>setMessagingCount(c => c+1)}>Me </button>
    
  )
}

```

### Selectors
*️⃣ Suppose we make a Linkedlnbar and lets we want to show all notification count above your avatar so can we make another atome, no we know that all the notication which show above the avatar is sum of all notication(My Netwrok, Jobs etc) so we want use selector for making this. Selector is derived from other atoms. 

```.js
import {selector} from "recoil"
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get} )=> {
        const networkAtomCount= get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationAtomCount = get(notificationAtom)
        const messagingAtomCount = get(messagingAtom)
        return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount
    }
})
```

### What difference between useMemo() & Selectors ?
➡ If the logic for computing the total count is needed in multiple components, defining it once in a selector allows you to reuse that logic across different parts of your application without duplicating code.