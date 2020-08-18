import React from 'react'
import { Container } from 'reactstrap'
import Menu from './Menu'

const Layout = ({ children }) => {
    return (
        <div>
            <Menu />
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Layout
