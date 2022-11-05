function User(username,email,type,avatar,password){
    this.username=username;
    this.email=email;
    this.type=type;
    this.avatar=avatar;
    this.password=password;

}

const registerUser=()=>{
    //trim=> "__ABC_"==> after trim ==> "ABC" (spaces rid)
    let user = new User(
    $('#username').val().toString().trim(),
        $('#email').val().toString().trim(),
        $('#type').val(),
        "",
        $('#password').val().toString().trim()
    );
    localStorage.setItem('users',JSON.stringify(user));
}