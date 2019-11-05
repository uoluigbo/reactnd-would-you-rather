import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, authedUser, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={ props => (
                (authedUser === undefined || authedUser === null)
                ? <Redirect to="/login" />
                : <Component {...props} />
            )}
        />
    )
}

export default PrivateRoute