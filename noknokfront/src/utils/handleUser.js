export function GetUser(){
    const user = JSON.parse(localStorage.getItem('user'));
return user;
}