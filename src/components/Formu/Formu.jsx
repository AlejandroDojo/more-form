import { useState } from 'react';
import styles from "./Formu.module.css";
const Formu = () => {
    const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        email: '',
        confirmPassword: '',
        password: ""
    })

    const changeData = (e) => {
        const {name, value} = e.target;
        setUserForm((prevUserForm) => ({
            ...prevUserForm,
            [name] : value
        }))
    }

    return (
        <> 
            <form action="" className={styles.formulario} >
                <div>
                    <label htmlFor="firstName">First Name </label>
                    <input onChange={changeData} type="text" name='firstName' id='firstName' defaultValue={userForm.firstName}/>
                </div>
                <div className={`${styles.formError} ${(userForm.firstName !== "" && userForm.firstName.length < 2) ? styles.active : ""}`} >
                    {(userForm.firstName === "") ? "" : (userForm.firstName.length < 2) ? <p>The name must have 2 characters</p> : ""}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name </label>
                    <input onChange={changeData} type="text" name='lastName' id='lastName' defaultValue={userForm.lastName}/>
                </div>
                <div className={`${styles.formError} ${(userForm.lastName !== "" && userForm.lastName.length < 2) ? styles.active : ""}`}>
                    { (userForm.lastName === "") ? "" : (userForm.lastName.length < 2) ? <p>The last name must have 2 characters</p> : ""}
                </div>
                <div>
                    <label htmlFor="email">Email </label>
                    <input onChange={changeData} type="email" name='email' id='email' defaultValue={userForm.email}/>
                </div>
                <div className={`${styles.formError} ${(userForm.email !== "" && userForm.email.length < 5) ? styles.active : ""}`}>
                    {userForm.email !== "" && userForm.email.length < 5 && <p>The email must have 5 characters</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password </label>
                    <input onChange={changeData} type="password" name='confirmPassword' id='confirmPassword' defaultValue={userForm.confirmPassword}/>
                </div>
                <div className={`${styles.formError} ${(userForm.password !== "" && userForm.password.length < 8) ? styles.active : ""}`}>
                    {userForm.password !== "" && userForm.password.length < 8 && <p>The password must have 8 characters</p>}
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input onChange={changeData} type="password" name='password' id='password' defaultValue={userForm.password}/>
                </div>
                <div className={`${styles.formError} ${(userForm.confirmPassword !== "" && userForm.confirmPassword.length < 8) ? styles.active : ""}`}>
                    {userForm.confirmPassword !== "" && userForm.confirmPassword.length < 8 && <p>The confirm password must have 8 characters</p>}
                </div>
                <div className={`${styles.formError} ${(userForm.password !== "" && userForm.password !== userForm.confirmPassword) ? styles.active : ""}`}>
                    {userForm.password !== "" && userForm.password !== userForm.confirmPassword && <p>The password must match</p>}
                </div>
            </form>
        </>
        );
};

export default Formu;