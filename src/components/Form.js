import React, {Fragment, useState} from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator'

const HookForm = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        
        var requestOptions = {
        method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data),
        redirect: 'follow'
        };

        fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
    }


    const [emailError, setEmailError] = useState('') 
    const validateEmail = (e) => { 
    var email = e.target.value 
  

    
    if (validator.isEmail(email)) { 
      setEmailError() 
    } else { 
      setEmailError('Preencha com um e-mail válido') 
    } 
  }

    return (
        <Fragment>
            <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
            <div className="name">
                <input
                        placeholder="Digite seu nome"
                        className="form-control "
                        name="name"
                        ref={register({
                            required: {
                            value: true, 
                            message: 'Preencha com seu nome completo'
                            }
                        })}
                    ></input>
                    <span className="text-danger text-small d-block">
                        {errors.name && errors.name.message}
                    </span>
                </div>
                <div className="email">
                    <input
                        placeholder="Digite seu email"
                        className="form-control"
                        name="email"
                        onChange={(e) => validateEmail(e)}
                        ref={register({
                            required: {
                            value: true, 
                            message: 'Preencha com um e-mail válido'
                            }                        
                        })}
                    ></input>
                    <span className="text-danger text-small d-block">
                        {errors?.email?.message}
                    </span>
                    <span className="text-danger text-small d-block">{emailError}</span>
                </div>
                <button type="submit" className="btn btn-primary">
                    Eu quero!
                </button>
            </form>
            
        </Fragment>
    );
}
 
export default HookForm;