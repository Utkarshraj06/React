import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
           <h1>Cutom App!</h1> 
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement=(
    // <a href="https://google.com" target='_blank'>Visit google</a>
    <p>Visit google</p>
)
const anotherUser="chai aur react"
const reactElement=React.createElement(
    'a',//type
    {href:"https://google.com",target:'_blank'},//props
    anotherElement//after all evaluation

)
ReactDOM.createRoot(document.getElementById('root')).render(
reactElement
)