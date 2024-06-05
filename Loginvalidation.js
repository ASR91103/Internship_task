function validationlogin(values){
    let error ={}
    const loginid_pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    const password_pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    if(values.loginId === ""){
        error.loginId="Login ID should not be empty!"
    }
    else if(!loginid_pattern.test(values.loginId)){
        error.loginId="The login Id did not match"
    }
    else{
        error.loginId = ""
    }


    if(values.password === ""){
        error.password="Password should not be empty!"
    }
    else if(!password_pattern.test(values.password)){
        error.password="The Password did not match"
    }
    else{
        error.password = ""
    }

    return error;
}

export default validationlogin;
