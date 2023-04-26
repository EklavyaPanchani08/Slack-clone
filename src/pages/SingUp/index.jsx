import React from 'react'
import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import "../../scss/SignUp.scss"
import { Button, Form } from 'reactstrap';

const SignUp = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("🚀 ~ file: index.jsx:12 ~ onSubmit ~ data:", data)
    }
    return (
        <>
            <div className="container">
                <div className="login_box">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Sign Up</h1>
                        <div className="input_box">
                            <label for="">Name:-</label>
                            <Controller
                                name='name'
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <input name='name' type="text" {...register("name", { required: true })}{...field} />
                                    )
                                }}
                            >
                            </Controller>
                        </div>
                        {errors.name && <span className='error-msg'>Name is required</span>}
                        <div className="input_box">
                            <label for="">Phone No.:-</label>
                            <Controller
                                name='phone'
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <input type="number" {...register("phone", { required: true, min: 10 })}{...field} />
                                    )
                                }}
                            >
                            </Controller>
                        </div>
                        {errors.phone && <span className='error-msg'>Mobile number should length 10</span>}
                        <div className="input_box">
                            <label for="">Email:-</label>
                            <Controller
                                name='email'
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <input type="email" {...register("email", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/ })}{...field} />
                                    )
                                }}
                            >
                            </Controller>
                        </div>
                        {errors.email && <span className='error-msg'>Email format is wrong</span>}
                        <div className="input_box">
                            <label for="">Password:-</label>
                            <Controller
                                name='password'
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <input type="password" {...register("password", { required: true, pattern: "^ (?=.* [a - z])(?=.* [A - Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8, 10}$" })}{...field} />
                                    )
                                }}
                            >
                            </Controller>
                        </div>
                        {errors.password && <span className='error-msg'>Password must be at least 6 characters and include letters and numbers</span>}
                        <div className="login">
                            <Button>Sign Up </Button>
                        </div>
                        <div>
                            <div className="reg">
                                <p>you have a account </p>
                                <Link to="/login">logIn</Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >

        </>
    )
}

export default SignUp