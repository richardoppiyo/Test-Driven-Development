
const  stringLength =  (str) => {
    
    let len = 0;
    let myStr = [...str];
    myStr.forEach((letter) =>  len = len + 1 );

    if(len >=1 &&  len <=10) {
        return len;
    } else { 
        return false;
    }
}

module.exports = stringLength ;
