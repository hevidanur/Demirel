const card = document.getElementsByClassName("card");
const btnAdd = document.getElementsByClassName("btn-info")
const btnCart = document.querySelector(".btn-cart");
const cartList = document.querySelector(".shopping-cart-list");

class Shopping {
    constructor( title, price,image) {
        this.image = image;
        this.title = title;
        this.price = price;

    }
}

class UI {



    addToCart(shopping) {
        const listItem = document.createElement("div");
        listItem.classList = "list-item";


        listItem.innerHTML =
            `
    
                          <div class="row align-items-center text-white-50">
                                <div class="col-md-3">
                                    <img src="bg.jpg" alt="product" class="img-fluid">
                                </div>
                                <div class="col-md-5">
                                    <div class="title">Kulaklık</div>
                                </div>
                                <div class="col-md-2">
                                    <div class="price">$ 14</div>
                                </div>
                                <div class="col-md-2">
                                    <button class="btn btn-delete">
                                        <i class="fas fa-trash-alt text-danger"></i>
                                    </button>
                                </div>
                            </div>
                       

    `

    cartList.appendChild(listItem);
    }
    // `` bu işaret için altgr ve virgüle bas

    rermoveCart(){

         let btnRemove =document.getElementsByClassName("btn-delete");
         let self = this;
         for( let i = 0; i < btnRemove.length; i++){
              btnRemove[i].addEventListener("click",function(){
                   this.parentElement.parentElement.parentElement.remove();
                self.cartCount();
              })
         }
    }

    cartCount(){
        let cartListItem = cartList.getElementsByClassName("list-item");
        let itemCount =document.getElementById("item-count");
        itemCount.innerHTML =cartListItem.length;
        
    }

    
 cartToggle() {
    btnCart.addEventListener("click", function () {
        cartList.classList.toggle("d-none");
    })
}
}



for (let i = 0; i < card.length; i++) {
    btnAdd[i].addEventListener("click", function (e) {
        let title = card[i].getElementsByClassName("card-title")[0].textContent;
        let price = card[i].getElementsByClassName("price")[0].textContent;
        let image = card[i].getElementsByClassName("card-img-top")[0].src;
       
        //bir kere sepete eklediğinde 2. kere eklememk için 
        btnAdd[i].classList.add("disabled");
        btnAdd[i].textContent ="In Card";
        let shopping=new Shopping(title,price,image);


        let ui = new UI();

        ui.addToCart(shopping);
        ui.rermoveCart();
        ui.cartCount();
        e.preventDefault();
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    let ui =new UI();
    ui.cartToggle();
})