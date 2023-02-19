

function pop(e){
    document.getElementById(e).style.visibility="visible";
    document.getElementById("whole").style.backgroundColor="grey";

   
   
   
}
function npop(e){
    document.getElementById(e).style.visibility="hidden";
    document.getElementById("whole").style.backgroundColor="white";
    
   
}

function add(){
    let num_value = parseInt(document.getElementById("quan").textContent);
   document.getElementById("quan").textContent=num_value+1;
   
}


function createShopElement(name,price,id,quan_id) 
{
    var  shopping_element= document.createElement("div");
    shopping_element.classList.add("shopping_element");
   var  element_picture= document.createElement("div")
    element_picture.classList.add("element_picture");
    var  element_small= document.createElement("img"); 
    element_small.src="C:/Users/mgali/Documents/John Brown University/Spring_Semester_Sophomore/Mobile Applications and Web Development/Week 7/Store/img/main_page_2.gif";
    element_small.classList.add("element_small")
    element_picture.appendChild(element_small);
    shopping_element.appendChild(element_picture);
    var element_info = document.createElement("div");
    element_info.classList.add("element_info");
    var element_title = document.createElement("div");
    element_title.classList.add("element-title");
    var element_title_text = document.createElement("p");
    element_title_text.classList.add("element-title-text");
    element_title_text.textContent=name; //Turn this one into a variable
    element_title.appendChild(element_title_text);
    element_info.appendChild(element_title);
    document.getElementById("shopping_bag_elements").appendChild(shopping_element);
    var element_price =document.createElement("div");
    element_price.classList.add("element-price");
    var text_2 = document.createElement("p");
    text_2.classList.add("element-title-text");
    text_2.classList.add("text-2");
    text_2.textContent=price;
    var element_title_2 = document.createElement("div");
    element_title_2.classList.add("element-title");
    element_title_2.appendChild(text_2);
    element_price.appendChild(element_title_2);
    element_info.appendChild(element_price);
    var element_remove = document.createElement("div");
    element_remove.classList.add("element-remove");
    var element_title_3 = document.createElement("div");
    element_title_3.classList.add("element-title");
    var quantity = document.createElement("p");
    quantity.classList.add("element-title-text", "text-2");
    quantity.textContent="1";
    quantity.id=quan_id;
    element_title_3.appendChild(quantity);
    element_remove.appendChild(element_title_3);
    var element_title_4 = document.createElement("div");
    element_title_4.classList.add("element-title-3");
    var remove = document.createElement("a");
    remove.classList.add("element-title-text", "text-2","text-3");
    remove.textContent="Remove";
    remove.href="javascript:void(0)";
    remove.onclick= function(){document.getElementById("shopping_bag_elements").removeChild(document.getElementById(id))};
    element_title_4.appendChild(remove);
    element_remove.appendChild(element_title_4);
    element_info.appendChild(element_remove);
    shopping_element.appendChild(element_info);
    shopping_element.id=id;
    document.getElementById("shopping_bag_elements").appendChild(shopping_element);

}

function addToShoppingBag(id){
    var element = String(document.getElementById(id).name);

    var button_values = element.split(',');
    
    if (document.getElementById(button_values[2])){
        var element_quantity=parseInt(document.getElementById(button_values[3]).textContent);
        document.getElementById(button_values[3]).textContent=element_quantity+1;
     }
    else{
     createShopElement(button_values[0],button_values[1],button_values[2],button_values[3]);
    }
    //Retrieves the information from the button


  }


    


function basketfunc(){
    let num_value = parseInt(document.getElementById("quan").textContent);
    let elem = document.getElementById("basket");
    if (num_value==(num_value-num_value)){
        elem.href="C:/Users/mgali/Documents/John Brown University/Spring_Semester_Sophomore/Mobile Applications and Web Development/Week 7/Store/HTML/empty_cart.html";
    }
    else{
        document.getElementById("bought").style.visibility="visible";
        document.getElementById("whole").style.backgroundColor="grey";
        
    }
}