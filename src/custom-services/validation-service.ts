import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

@Injectable({providedIn : 'root'})
export class ValidationService {

    PasswordMatchValidation(pwd:string, cnPwd:string){
        return (fb: FormGroup) => {
            const pw = fb.controls[pwd] , matchingpw = fb.controls[cnPwd]
            if(pw.value !== matchingpw.value){
                matchingpw.setErrors({passwordMisMatch : true})
            }
        }
    }

    PasswordMatch(pwd:string, cnPwd:string):ValidatorFn{
        return(cntrl:AbstractControl):any=>{
            const pw = cntrl.get(pwd), match = cntrl.get(cnPwd)
            if(pw?.value !== match?.value){
                return match?.setErrors({passwordMisMatch:true})
            }
            return null
        }
    }

    validationMatchUPassword(): ValidatorFn {
        return(abstract:AbstractControl):any =>{
            if(!abstract.value){
                return null
            }
            return abstract.value.length > 2 ? {notValid: true}: null
        }
    }
}