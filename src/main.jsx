// import React from 'react'
import ReactDOM from 'react-dom/client'

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomForm } from './02-useEffect/FormWithCustomHook'
// import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    {/* <HooksApp /> */}
    {/* <CounterApp />*/}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomForm /> */}
    {/* <MultiplesCustomHooks /> */}
    {/* <FocusScreen /> */}
    <Layout />
  </>


  // </React.StrictMode>,
)
