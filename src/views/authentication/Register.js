import Input from "../../components/reusables/Input"
import emailIcon from "../../assets/email.svg"
import passwordIcon from "../../assets/password.svg"
import "./authentication.css"
import { useState } from "react"
import StepContainer from "../../components/authentication/register/StepContainer"

const handleClick = (e) => {
    console.log(e)
}
const Register = () => {
    const [userInput, setUserInput] = useState({})
    const [step, setStep] = useState(1)
    const [fieldError, setFieldError] = useState(
        {
            firstName:{message:"", error: false},
            lastName: {message:"", error: false}, 
            email: {message:"", error: false}, 
            phoneNumber: {message:"", error: false}, 
            password:{message:"", error: false},
            confirmPasswors: {message:"", error: false}
    })

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value })
        checkIfFieldIsEmpty(e)
    }
    const handleClick = () => {
        console.log(userInput)
    }
    const checkIfFieldIsEmpty = (e) => {
        switch (e.target.name){
            case "firstName":
                if(e.target.value === ""){
                    setFieldError(
                        {
                            ...fieldError, 
                            [e.target.name] : 
                            {
                                message: "Please enter First Name",
                                error: true
                            }
                        })
                } else {
                    setFieldError({
                        ...fieldError, [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            case "lastName":
                if(e.target.value === ""){
                    setFieldError(
                        {  
                            ...fieldError, 
                           [e.target.name] : 
                            {
                                message: "Please enter Last Name",
                                    error: true
                                }
                            })
                    } else {
                        setFieldError({
                            ...fieldError, [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            case "email":
                if(e.target.value === ""){
                    setFieldError(
                        {
                            ...fieldError, 
                            [e.target.name] : 
                            {
                                message: "Please enter a valid email",
                                error: true
                            }
                        })
                } else {
                    setFieldError({
                        ...fieldError, [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            case "password":
                if(e.target.value === ""){
                    setFieldError(
                        {
                            ...fieldError, 
                            [e.target.name] : 
                            {
                                message: "Please enter a valid password",
                                error: true
                            }
                        })
                }else {
                    setFieldError({
                        ...fieldError, [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            default:
                break;
        }
    }
    const checkIfItIsEmail = () => {

    }
    return (
        <div className="authenticationContainer">
            <div className="leftSide">
                
                <div className="leftSide-container">
                    <a>
                        Have an account? 
                        <span style={{color: 'var(--primary_green)',
                                    marginLeft: '4px'
                        }}>
                        Login
                        </span>
                    </a>
                    <div className="welcome-text">
                        <h1>Welcome To Norbs</h1>
                        <p>We are an event management platform, aimed at helping you facilitate and run a smooth event</p>
                    </div>
                    {step === 1 && <StepContainer step={1} headerTitle="Let's know you">
                        <Input text="text" handleChange={handleChange} icon={emailIcon} label= "firstName" fieldError={fieldError}/>
                        
                        <Input text="text" handleChange={handleChange} icon={emailIcon} label="lastName" fieldError={fieldError}/>

                        <Input text="text" handleChange={handleChange} icon={emailIcon} label="email" fieldError={fieldError}/>

                    </StepContainer>}

                    {step === 2 && <StepContainer step={2} headerTitle="Let's Secure you">
                        <Input text="text" handleChange={handleChange} icon={emailIcon} label= "firstName" fieldError={fieldError}/>
                        
                        <Input text="text" handleChange={handleChange} icon={emailIcon} label="lastName" fieldError={fieldError}/>

                        <Input text="text" handleChange={handleChange} icon={emailIcon} label="email" fieldError={fieldError}/>

                    </StepContainer>}
                    <button style={{width: '65%'}} className="authentication-button" onClick={handleClick}>Next Step</button>
                    <div>
                        <button style={{width: '45%'}} className="authentication-button-alternate" onClick={handleClick}>Go Back</button>
                        <button style={{width: '45%'}} className="authentication-button" onClick={handleClick}>Register</button>
                    </div>
                    <div className="social-media">
                        <a>
                            <div className="social-media-icon"></div>
                        </a>
                    </div> 
                </div>           
            </div>
            <div className="rightSide">

            </div> 
        </div>
        
    )
}

export default Register