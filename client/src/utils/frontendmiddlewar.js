export const Authheaders={
    'x-auth-token':JSON.stringify(localStorage.getItem('user')).replace(/['"]+/g,'')
}