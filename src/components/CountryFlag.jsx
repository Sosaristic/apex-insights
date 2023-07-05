import { useEffect } from "react"
import ReactCountryFlag from "react-country-flag"
import CountryList from 'country-list-with-dial-code-and-flag'
import {BsFillTelephoneFill} from "react-icons/bs"
import { useState} from "react"
export default function CountryFlag({callCode}){
const [code, setCode] = useState("")


useEffect(()=>{
    const testCode = callCode?.slice(0, 4)
    if(testCode.length >=2){
        const code = CountryList.findByDialCode(testCode)
        setCode(code[0])
    }

}, [callCode])
    

    

    
    return (
        <div> {code?.code ? <ReactCountryFlag countryCode = {code?.code} svg/> : <BsFillTelephoneFill />}</div>
    )
}
