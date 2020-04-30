let user = {
  name: 'John',
  lastname: 'Doe',
  age: 27,
  married: 'yes',
  kids: 'no',
};

function moreInfo(phone, email, adress) {
  console.log(`User: ${this.name} ${this.lastname} 
    Phone number: ${phone},
    Email: ${email},
    Adress: ${adress}.`);
};

function myBind(myFn, cnt, ...rest) {
    //concat - creates a new array into which it copies data from other arrays and additional values.
    return myFn.apply(cnt, rest.concat(rest));
};

myBind(moreInfo, user, '+1(786)jhon-doe', 'johndoe@gmail.com', 'Beverly Hills, California LA');
myBind(moreInfo, user, '+1(786)jhon-doe')('johndoe@gmail.com', 'Beverly Hills, California LA');

// User: John Doe 
//   	Phone number: +1(786)jhon-doe,
//   	Email: johndoe@gmail.com,
//   	Adress: Beverly Hills, California LA.q