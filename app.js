const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


function myFunction(id) {
  
  deleteElements()
 
  if(id=="All"){
    for (const x of menu) {
      cardFunction(x)
    }

  }
  else if(id=="Korea") {
    for (const x of menu) {
      if (x.category=="Korea"){
      cardFunction(x)
      }
    }
  }
  else if(id=="China"){
    for (const x of menu) {
      if (x.category=="China"){
        cardFunction(x)
      }
    }
  }
  else if(id=="Japan"){
    for (const x of menu){
      if (x.category=="Japan"){
        cardFunction(x)
      }
    }
  }
}


function cardFunction(item) {
let div1 = document.createElement("div");
let DIV_DOM=document.querySelector("#photos");
  div1.classList.add("card")
  div1.style["backgroundColor"]="#f1f5f8"
  div1.style["border"]="none"
  div1.classList.add("mb-3")
  div1.style["max-width"]="540px"
  DIV_DOM.appendChild(div1);

let div2=document.createElement("div");
div2.classList.add("row")
div2.classList.add("g-0")
div1.appendChild(div2);

let div3=document.createElement("div");
div3.classList.add("col-md-4")
div2.appendChild(div3)

let image = document.createElement("img");
image.setAttribute("src", item.img);
image.classList.add("rounded-start")
image.classList.add("img-fluid")
image.style["width"]="150px"
image.style["height"]="150px"
image.style["border-width"]="2px"
image.style["border-color"]="black"
image.style["border-style"]="solid"
div3.appendChild(image);

let div4=document.createElement("div");
div4.classList.add("col-md-8")
div2.appendChild(div4);

let div5=document.createElement("div");
div5.classList.add("card-body")
div4.appendChild(div5);

let titleh5=document.createElement("h5");
titleh5.classList.add("card-title")
div5.appendChild(titleh5);

let span1=document.createElement("span");
span1.innerHTML=item.title
titleh5.appendChild(span1);

let span2=document.createElement("span");
span2.innerHTML="10.99"
span2.style["text-align"]="right"
span2.style["position"]="absolute"
span2.style["right"]="25px"
titleh5.appendChild(span2);

let hr=document.createElement("hr");
div5.appendChild(hr);

let p=document.createElement("p");
p.innerHTML=item.desc
div5.appendChild(p);

}

function deleteElements(){
  let clearArea=document.querySelector("#photos")
  clearArea.innerHTML=""
}


document.onload=defaultFunction()

function defaultFunction(id){
  if(id===undefined){
    myFunction("All")

  }

}