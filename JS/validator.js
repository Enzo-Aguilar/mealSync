export function emailLength(email){
    
   if(email.value.length < 15 || email.value.length > 85){
    return false;
   }
    return true;
}

export function emailSpecialChar(email) {  
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      
}

export function is_EPGE(email){
    if(email.endsWith("@epge.pt")){
        return true;
    }
    return false;
}

export function passwordCheck(password) {}

export function usernameCheck(username) {}