export const toString = (number) => {
    const arr = String(number).split('').reverse();
    let newBArr = [];
    let subArr  = [];
    arr.forEach((n,i) => { 
        if ((i+1)/4 !== 1) {
            subArr.push(n);
        } else {
            newBArr.push(subArr);
            subArr = [];
            subArr.push(n);
        };
    });
    newBArr.push(subArr);
    newBArr = newBArr.map(n => n.reverse().join(''));
    newBArr = newBArr.reverse().join(',');
    return newBArr;
}

export const toNumber = (string) => typeof(string) === 'string' ? Number(string.replace(',', '')) : string; 