let root = document.querySelector(".root")
let next = document.querySelector(".next")
let prev= document.querySelector(".prev")


function slider(data) {
    let cnt = 0;
    prev.onclick = () => {
        if (cnt == 0) cnt = data.length;
        let obj = data[cnt - 1];
        cnt--;
        const prevPerson = {
            id: obj.id,
            name: obj.name,
            Border: obj.Border,
            Photo:obj.Photo
        };
        objSlider(prevPerson);
    };



    next.onclick = () => {
        if (cnt == data.length - 1) cnt = -1;
        let obj = data[cnt + 1];
        cnt++;
        const nextPerson = {
            id: obj.id,
            name: obj.name,
            Border: obj.Border,
            Photo: obj.Photo
        };
        objSlider(nextPerson);
    };



    function objSlider(obj) {
        root.innerHTML = "";
        const name = document.createElement("h1");
        name.innerHTML = obj.name;
        const Border=document.createElement("p")
        Border.innerHTML = obj.Border
        Border.classList.add("BorderDiv")
        const Photo = document.createElement("img")
        Photo.classList.add("ForPhoto")
        Photo.src = obj.Photo
        root.appendChild(Photo)
        root.appendChild(name);
        root.appendChild(Border)
    }

    if (cnt == 0) {
        objSlider(data[0]);
    }
}




// EXPORT



function get(data) {
    data.forEach(e => {
        let card = document.createElement("div")
        card.classList.add("cardDiv")
        let h1 = document.createElement("h1")
        let p = document.createElement("p")
        p.classList.add("pDiv")
        let img = document.createElement("img")
        img.classList.add("forimg")
        h1.innerHTML = e.name
        p.innerHTML = e.Border
        img.src = e.Photo
        card.appendChild(h1)
        card.appendChild(p)
        card.appendChild(img)
        root.appendChild(card)
        
    });
}
export { slider };
export {get}