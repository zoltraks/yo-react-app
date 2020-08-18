import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import { FetchData } from './components/FetchData'
import Counter from './components/Counter'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
            </Layout>
        </BrowserRouter>
    )
}

export default App
