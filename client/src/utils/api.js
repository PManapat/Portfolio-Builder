import axios from 'axios'
//front end route for signup
export const register = newUser => {
    return axios
        .post('api/users', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}
//route for login
export const login = user => {
    return axios
        .post('api/auth', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            console.log(response);
            localStorage.setItem('usertoken', response.data);
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const getProfile = user => {
    return axios
        .get('api/auth',
            {
                headers: {
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYyNmM4Mjc1NWRmYjgxYzQwNmEzNDg5In0sImlhdCI6MTU5NjUwNTc5OSwiZXhwIjoxNTk2OTM3Nzk5fQ.uaMQUUUu6w2nxYbCStrN4EUdg32iK823T469J8-Opwc'
                }
            })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}