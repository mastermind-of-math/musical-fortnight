let images = ['computer.jpg', 'cup.jpg', 'dog.jpg', 'house.jpg', 'Tree.jpg'];
let gl = ["Computer", "Fiesta Cup 7.75 oz", "Golden Retriever", "House", "Single Oak Tree in Spring"];
let ml = [];
let wn = []
let selected = 0;

function update(){
    let simages = images[selected];
    let sgl = gl[selected];
    let sml = ml[selected];
    let swn = wn[selected];
    document.getElementById("wnd").innerText = swn + " is more accurate";
    document.getElementById("mnd").innerText = "MobileNet: " + sml;
    document.getElementById("gld").innerText = "Google Lens: " + sgl;
    document.getElementById("img").src = simages;
    document.getElementById("num").innerText = selected + 1 + "/5"
}

update()

function trans(am){
    selected = selected + am
    if(selected === -1){
        selected = 4;
    }
    selected = selected % 5;
    update()
}