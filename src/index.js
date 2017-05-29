import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import routes from './routes'
import App from './components/App'

render(
    App(),
    document.getElementById('app')
)

