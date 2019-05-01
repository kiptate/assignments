console.log("thiscriptisrunning")

function myFunc() {
    let header = document.getElementById("title");
    console.log('header: ', header)
    return header.innerText =  `JavaScript Made This`
}

myFunc()

function myFunc2(){
    let header1 = document.getElementById("header3")
    return header1.innerHTML = `<span style="color:peachpuff">Kip</span> wrote the JavaScript`
}

myFunc2()

function myFunc3(){
    let button = document.getElementsByClassName("messages")
    console.log(button + ' ' + typeof button);
    // console.log(button);
    return button[0].innerHTML = ' ';
}

function myFunc4(){
    let convo = document.getElementsByClassName("messages")
    return convo[0].innerHTML = `
    <div class="message left">
        I have over 47 cats living in my house.
    </div>
    <div class="message right">
        Why so many cats?
    </div>
    <div class="message left">
        I let one in and then I woke up the next morning and they were just there.
    </div>
    <div class="message right">
        You should probably do something about that..
    </div>`
}
myFunc4()

function myFunc5(){
    let dropdown = document.getElementById("theme-drop-down");
    let color = dropdown.value;
    document.getElementById("yeet").style.backgroundColor = color;
    let header1 = document.getElementById("header2")
    return header1.innerHTML = `<h1><span style="color:brown">JavaScript Made This</span></h1><h2><span style="color:peachpuff">Kip</span><span style="color:brown"> wrote the JavaScript</span></h2>`
}