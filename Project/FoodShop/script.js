//variables
let addElement = document.getElementsByClassName("AddButton"); //variable containing all the AddtoCart buttons
let count = 0; //variable containing the number of items added to cart
let amount = 0;
let totalItems = document.getElementById("totalitems"); //variable for total number of items added to cart
let cost = document.getElementById("cost"); //variable for initial cost of items added to cart
let totalCost = document.getElementById("total"); //variable for final total amount calculated
let deliveryCharges = document.getElementById("deliveryCost"); //variable for delivery Charges
//when user clicks a button to add an item from menu then the bill will be calculated accordingly

for (let i = 0; i < addElement.length; i++) {
  addElement[i].addEventListener("click", function () {
    count++; //count variable will be calculated/incremented for each item added to the cart
    const price = document.getElementsByClassName("prices")[i].innerText; //price variable will be contain the price of item clicked
    amount += parseFloat(price); //price is a string variable that must be converted to a number before addition
    cost.innerHTML = " " + amount; //setting calculated value for Cost
    totalItems.innerText = " " + count; //setting calculated value for total Items
    deliveryCharges.innerText = " " + 300; //setting calculated value for DeliveryCharges

    const total = amount + 300; //calculating total bill by adding amount of items in cart and delivery charges
    totalCost.innerText = " " + total; //setting final cost of bill
  });
}

//showing added items in shopping cart
let names = document.getElementsByClassName("names");

let sectionDiv = document.getElementById("OrderedItems");

for(let i = 0; i < addElement.length; i++)
{
  addElement[i].addEventListener("click",function(){
    
    let task = document.createElement("div");
    task.classList.add("task");
  
    let li = document.createElement("li");
    li.innerText = names[i].innerText;
    task.appendChild(li);
  
  
     let deleteButton = document.createElement("button");
     deleteButton.innerHTML = 'Remove Item';
     
     deleteButton.classList.add("deletetask");
     task.appendChild(deleteButton);

     sectionDiv.appendChild(task);

     deleteButton.addEventListener("click", function (e) {
      let target = e.target;
      target.parentElement.remove();
      count--;
      totalItems.innerText = " " + count;
            
      const price = document.getElementsByClassName("prices")[i].innerText;
      amount -= parseFloat(price);
      cost.innerHTML = " " + amount;

      totalCost.innerHTML = " " + (amount + 300);
    });
    /*
    if(list[i].contains(li.innerText))
    {
      //let li = document.createElement("li");
      count2++;
      list[i].innerText = names[i].innerText+ " " + "x" + count2;
      list.appendChild(li);

    }
    else
    {
      let li = document.createElement("li");
      li.innerText = names[i].innerText+ " " + "x" + count2;
      list.appendChild(li);
    }
    */
  }); 
}

