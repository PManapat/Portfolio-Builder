import React, { useEffect, useState } from 'react'
import { getProfile } from "../../utils/api.js";
function Profile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        getProfile()
            .then(res => {
                console.log(res);
                const { first_name, last_name, email } = res;
                setFirstName({ first_name });
                setLastName({ last_name });
                setEmail({ email });
            }
            )
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">PROFILE</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <tbody>
                        <tr>
                            <td>Fist Name</td>
                            <td>{firstName.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{lastName.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{email.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Profile;