function validation(){
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let email = document.querySelector('#email').value;
    let areaCode = document.querySelector('#area-code').value;
    let phoneNumber = document.querySelector('#phone-number').value;
    let url = document.querySelector('#url').value
    let message = document.querySelector('#textArea').value

    let fnameError = document.querySelector('.fname-error')
    let lnameError = document.querySelector('.lname-error')
    let emailErorr = document.querySelector('.email-error')
    let areaCodeError = document.querySelector('.code-error')
    let phoneNumberError = document.querySelector('.phone-error')
    let urlError = document.querySelector('.url-error')
   // let messageError = document.querySelector('.message-error')

    let fnameRegex = /^[A-Za-z. ]{5,20}$/
    let lnameRegex = /^[A-Za-z. ]{5,20}$/
    let emailRegex = /.*@[a-z0-9.-]*/i
    let areaRegex = /\d{2}/
    let phoneRegex = /\d{11,15}/
    let urlRegex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/
   //let messageRegex = /^[A-Za-z0-9.\s]{5,1000}$/

    if(fnameRegex.test(firstName)){
        fnameError.innerHTML = ''
    }else{
        fnameError.innerHTML = 'your first name is invalid'
        return false
    }

    if(lnameRegex.test(lastName)){
        lnameError.innerHTML = ''
    }else{
        lnameError.innerHTML = 'Your Last name is invalid'
        return false
    }

    if(emailRegex.test(email)){
        emailErorr.innerHTML = ''
    }else{
        emailErorr.innerHTML = 'Your Email is not valid. must contain, ex. me@email.come'
        return false
    }

    if(areaRegex.test(areaCode)){
        areaCodeError.innerHTML = ''
    }else{
        areaCodeError.innerHTML = 'Your Code is not valid'
        return false
    }

    if(phoneRegex.test(phoneNumber)){
        phoneNumberError.innerHTML = ''
    }else{
        phoneNumberError.innerHTML = 'Your Phone number is not valid. must be between 11 and 15 digits'
        return false
    }

    if(urlRegex.test(url)){
        urlError.innerHTML = ''
    }else{
        urlError.innerHTML = 'This url not valid. must contain, ex. https://www.google.com'
        return false
    }

    // if(messageRegex.test(message)){
    //     messageError.innerHTML = ''
    // }else{
    //     messageError.innerHTML = 'your tex area is invalid'
    // }




}