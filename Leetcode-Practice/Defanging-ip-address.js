function Defanging(ipAddress) {

    var newIP = ipAddress.split(".");

    var newStrig=[];

    let length = newIP.length;
    for ( let i=0; i<newIP.length; i++){
        if (i<length-1){
            newStrig +=newIP[i] + "[.]"
        }
        else {
            newStrig +=newIP[i]
        }
        
    }

    return newStrig;

}

console.log(Defanging("255.100.50.0"));