var itemNames=[];
var itemPrices=[];
var price;
var name;


$(".newItem").click(function(){
    price=$(".itemPrice").val();
    name=$(".itemName").val();
    $(".cart").append("<div class='item'>"+name+"</p><p>$"+price+"</p><div class='cartItem'></div></div>");
    itemPrices.push(price);
    itemNames.push(name);
});
$(".purchase").click(function(){
   alert("Thanks for purchasing "+itemNames[0] +" and all your other items!");
 
});