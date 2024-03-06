
function passwordvisibility(){
    let password = document.getElementById("password")
    let eye_icon = document.getElementById("eye_icon")


        if(password.type === "password"){
            password.type = "text";
            eye_icon.src = "show_eye.png"
        } else {
            password.type = "password"
            eye_icon.src ="hide_eye.png"
        }

}

