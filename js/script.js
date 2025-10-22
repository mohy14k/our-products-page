var all_cards = document.querySelectorAll(".card");

var cart_icon = document.getElementById("cart")

var exit_cart_section_mark = document.getElementById("exit_mark")

var cart_section = document.getElementById("cart_div")

var before_discount = document.querySelector(".original-total")

var finalprice = document.querySelector(".final-total")

var discount_button = document.querySelector(".checkout-btn")

var cart_counter = document.querySelector("#cart_counter")

var cart_empty_text = document.querySelector(".cart_title")

var cart_content = document.querySelector(".cart_content");

var totalprice = 0

var c_counter = 0

var cart_items={}



all_cards.forEach(function(card)
{
    var card_btn = card.querySelector("button") 

    card_btn.onclick = function (){
        
        var product_name = card.querySelector("h3").textContent
        var product_image = card.querySelector("img").src
        var price = +(card_btn.getAttribute("price"))

        totalprice +=  price

        before_discount.style.display = "none"
        finalprice.innerHTML = "$" + totalprice // هنستخدمه موقتا قبل ما ندوس علي زرار
        
        cart_counter.innerHTML=""
        cart_counter.innerHTML = "your cart (" + (++c_counter) +")"
        
        discount_button.innerHTML = "apply discount"
        cart_empty_text.style.display = "none"
        
        if(cart_items[product_name]){
            cart_items[product_name].count++;
            cart_items[product_name].div.querySelector(".item-count").textContent="x"+cart_items[product_name].count
        }
        else {
            var Div_item = document.createElement("div");
            Div_item.classList.add("cart-item"); // optional, for styling

            Div_item.innerHTML = `
                <img src="${product_image}" alt="${product_name}">
                <p class="item-name">${product_name}</p>
                <span class="item-count">x1</span>
            `;

            cart_content.appendChild(Div_item);
            cart_items[product_name] = { count: 1, price: price, div: Div_item };
        }
    }
})


cart_icon.onclick = function(){
    cart_section.style.display = "block"
}

exit_cart_section_mark.onclick = function(){
    cart_section.style.display = "none";
}

discount_button.onclick = function(){
    if (before_discount.style.display != "block")
    {
        before_discount.style.display = "block"
        discount_button.innerHTML = "remove discount"    
        finalprice.innerHTML = "$" + (totalprice * 0.8)
    }
    else{
        before_discount.style.display = "none"
        discount_button.innerHTML = "apply discount"
        finalprice.innerHTML = "$" + totalprice
    }
    
    before_discount.innerHTML = "$" + totalprice
    
}

