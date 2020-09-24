var data = [{
    "products": "Wine - Puligny Montrachet A.",
    "price": 563
  }, {
    "products": "Pineapple - Canned, Rings",
    "price": 916
  }, {
    "products": "Soup - Cream Of Potato / Leek",
    "price": 986
  }, {
    "products": "Veal - Loin",
    "price": 721
  }, {
    "products": "Pepper - Red Chili",
    "price": 342
  }, {
    "products": "Pan Grease",
    "price": 555
  }, {
    "products": "Pepper - Black, Crushed",
    "price": 325
  }, {
    "products": "Flavouring - Raspberry",
    "price": 302
  }, {
    "products": "Foam Espresso Cup Plain White",
    "price": 413
  }, {
    "products": "Tomato - Peeled Italian Canned",
    "price": 871
  }, {
    "products": "Ecolab Crystal Fusion",
    "price": 251
  }, {
    "products": "Gherkin - Sour",
    "price": 505
  }, {
    "products": "Beer - Mcauslan Apricot",
    "price": 182
  }, {
    "products": "Bacardi Breezer - Tropical",
    "price": 1125
  }, {
    "products": "Veal - Brisket, Provimi, Bone - In",
    "price": 143
  }, {
    "products": "Mushroom - Shitake, Dry",
    "price": 773
  }, {
    "products": "Pernod",
    "price": 857
  }, {
    "products": "Arizona - Plum Green Tea",
    "price": 750
  }, {
    "products": "Tart Shells - Sweet, 4",
    "price": 452
  }, {
    "products": "Island Oasis - Peach Daiquiri",
    "price": 249
  }, {
    "products": "Coriander - Seed",
    "price": 860
  }, {
    "products": "Napkin - Dinner, White",
    "price": 147
  }, {
    "products": "Bread Base - Italian",
    "price": 324
  }, {
    "products": "Pasta - Fett Alfredo, Single Serve",
    "price": 337
  }, {
    "products": "Longos - Chicken Cordon Bleu",
    "price": 546
  }]




//  this script is used for showing data in card page

$(document).ready(function(){
    //this is my first code..
    console.log("this is my first code form nazim husain ");
    var item_in_cart=$('.item_in_cart')
    var images = $(".card-img-top");//image id
    var sno = $(".sno")
    var title =  $(".product");
    var Price = $(".price") 
    var quantity = $(".quantity")
    var quantity_price=$(".quantity_price")
 
    var final_total=0;
    
    // var Total_price = $(".total_price")
    for (var i=0; i<images.length; i++){
        var unit_price=data[i].price
        var qnt = Math.ceil(Math.random()*10) 
        var qty_price = unit_price*qnt
        final_total += qty_price

        $(images[i]).attr('src', 'https://picsum.photos/id/'+Math.ceil(Math.random()*100)+'/50/50');
        $(title[i]).text(data[i].products)
        $(Price[i]).text('$'+unit_price)
        $(quantity[i]).text(qnt)
        $(quantity_price[i]).text('$'+qty_price)

       $(sno[i]).text(i + 1);
       
    }
    $('.totalvalue').text('$'+final_total)
   console.log(sno)
   $(item_in_cart).text(i)

});


