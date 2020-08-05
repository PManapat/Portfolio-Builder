// export default function authHeader() {
//     const user = JSON.parse(localStorage.getItem('user'));
  
//     if (user && user.token) {

//         return { Authorization: 'Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYyOGEwMDhlNTkyNjExM2MyMDA5ODNjIn0sImlhdCI6MTU5NjU3Mzg1NywiZXhwIjoxNTk3MDA1ODU3fQ.RKWK99H7QtT5G9lqPzYZZYgokqVNLGfsjqNcAfkol1Y' };
//       } else {
//         return {};
//       }
//     }
export const Authheaders={

    'x-auth-token':localStorage.getItem('user')
 

}