import {createRoot} from 'react-dom/client'
import App from './App'

const root = createRoot(document.getElementById('root'))

const reactElement = <h1>Hello JSX</h1>

root.render(<App />)