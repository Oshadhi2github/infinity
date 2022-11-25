
initializeItems=()=>{
    let alacarta=[];
    alacarta.push({id:'1001',name:'Mc Chicken',image:'https://e7.pngegg.com/pngimages/2/266/png-clipart-mcchicken-mcdonald-s-hamburger-chicken-as-food-chicken.png',price:500});
    alacarta.push({id:'1002',name:'Big Mac (Chicken',image:'https://w7.pngwing.com/pngs/24/445/png-transparent-mcdonald-s-big-mac-chicken-sandwich-fast-food-mcchicken-hamburger-chicken.png',price:450});
    alacarta.push({id:'1003',name:'Cheese Burger',image:'https://e7.pngegg.com/pngimages/343/134/png-clipart-whopper-cheeseburger-hamburger-big-king-chophouse-restaurant-cheese-burger.png',price:700});
    alacarta.push({id:'1004',name:'4ps Nuggets',image:'https://w7.pngwing.com/pngs/237/677/png-transparent-burger-king-chicken-nuggets-chicken-fingers-mcdonald-s-chicken-mcnuggets-chicken-nugget.png',price:280});
    alacarta.push({id:'1005',name:'9ps Nuggets',image:'https://img.favpng.com/10/9/6/mcdonald-s-chicken-mcnuggets-chicken-nugget-french-fries-png-favpng-E4mc4rdgnaUhPkT6szpihNMfd.jpg',price:900});
    alacarta.push({id:'1006',name:'2 ps Wings',image:'https://banner2.cleanpng.com/20180515/gaq/kisspng-crispy-fried-chicken-mcdonald-s-chicken-mcnuggets-5afb6a374e02b7.1783479715264261673195.jpg',price:420});
    alacarta.push({id:'1007',name:'Chicken Wrap',image:'https://w7.pngwing.com/pngs/236/974/png-transparent-wrap-chicken-sandwich-hamburger-barbecue-chicken-vegetarian-cuisine-fried-chicken-food-recipe-american-food.png',price:820});
    alacarta.push({id:'1008',name:'Beef Burger',image:'https://image.similarpng.com/very-thumbnail/2020/04/Craft-beef-burger-with-cheese-png.png',price:900});
    alacarta.push({id:'1009',name:'Big Mac (Beef',image:'https://w7.pngwing.com/pngs/431/398/png-transparent-mcdonald-s-big-mac-hamburger-burger-king-beef-burger-king.png',price:450});
    alacarta.push({id:'1010',name:'Spicy Bun',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7VQGBiDkEIKXT2ZBuCr-uTM__qTPtOKOPg&usqp=CAU',price:250});

    localStorage.setItem('alacarta', JSON.stringify(alacarta));

    //======================
    let item='';
    alacarta.forEach(resp=>{
        item +=` <div onclick="placeOrder(${resp.id})" class="item">
                        <div class="item-inner" style="background-color: rgb(${getColor()})">
                            <div class="name-price">
                                <p class="item-name">${resp.name}</p>
                                <p class="item-price">${resp.price}</p>
                            </div>
                            <img src="${resp.image}" alt="${resp.name}">
                        </div>
                    </div>`;

    })
    $('.area').html(item);



};

const getColor=()=>{
    return getRand()+','+getRand()+','+getRand();
}

getRand=()=>{
    return Math.floor(Math.random() * (255-0)) + 0;
}



//=======================
let itemsForOrder=[];
//=======================

let temp=JSON.parse(localStorage.getItem('users'));
console.log(temp)
if (temp===null){
    window.location.replace('index.html');
}

const placeOrder=(item)=>{
    itemsForOrder.push(item);
    let row= '';
    itemsForOrder.forEach(data=>{
        row+=`<li>${data}</li>`

        $('#items-list').html(row);
    });
    console.log(itemsForOrder)
}


