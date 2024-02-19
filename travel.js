const seats = document.querySelectorAll(".seat");

let selectedSeats = 0;
let seatBookCounter = 0

for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  
  seat.addEventListener('click', function (event) {
    
    if (selectedSeats < 4 && !seat.classList.contains('selected')) {
      
    seat.style.backgroundColor = 'red'

      const buttonIcon = seat.querySelector("h3");
      const buttonInnerText = buttonIcon.innerText;

      const titleContainer = document.getElementById('titleContainers');
      const divOne = document.createElement('div');
      divOne.style.display = 'flex';
      divOne.style.justifyContent = 'space-between';

      const divTagOne = document.createElement('div');
      divTagOne.innerText = buttonInnerText;
      divOne.appendChild(divTagOne);

      const divTagTwo = document.createElement('div');
      divTagTwo.innerText = "Economic";
      divOne.appendChild(divTagTwo);

      const divTagThree = document.createElement('div');
      divTagThree.innerText = 550;
      divOne.appendChild(divTagThree);

      titleContainer.appendChild(divOne);

      seat.classList.add('selected');

      // SEAT BOOK CONFIRM 
      const seatCounter = document.getElementById('CalculatedTotalSeat');

      const counterSeat = parseInt(seatCounter.innerText);

      const TotalSeatCounter = counterSeat+1;
      seatCounter.innerText = TotalSeatCounter;

// TOTAL BUS SEAT 
      const busSeatCounter = document.getElementById('totalSeats');


      const totalBusSeatCounter = parseInt(busSeatCounter.innerText)

      const countBusTotalTicket = totalBusSeatCounter-1;

      busSeatCounter.innerText = countBusTotalTicket;


      // total price 

      const bookTicketPrice = document.getElementById('CalculatedTotalPrice')

      const bookTicketPriceText = parseInt(bookTicketPrice.innerText);

      const TotalBookTicketPrice = bookTicketPriceText + 550;

      bookTicketPrice.innerText = TotalBookTicketPrice;


      // const grandTotal = document.getElementById('GrandTotal');
      // const totalGrand = parseInt(grandTotal.innerText);

      // const grandTotals = totalGrand + TotalBookTicketPrice

      // grandTotal.innerText = grandTotals

      const grandTotal = document.getElementById('GrandTotal')

      const grandTotals = parseInt(grandTotal.innerText);

      const GrandTotals = grandTotals + 550;

      grandTotal.innerText = GrandTotals;

      selectedSeats++;


      if (selectedSeats === 4) {
        alert('This is your last ticket as one person cannot select more than 4 tickets.Now,Select the ticket and win the attractive coupon.')
        // Disable other seats
        seats.forEach((otherSeat) => {
          
          if (!otherSeat.classList.contains('selected')) {
    
            otherSeat.classList.add('disabled');
            otherSeat.removeEventListener('click', handleSeatClick);
          }
        });
        
      }

      
    }
  });
}

function handleSeatClick(event) {
  // Handle seat click logic here if needed
}



// Input Button 


// document.getElementById('IdCoupon').addEventListener('keyup',function(event){
//   const texts = event.target.value;
  
//   const applyButton = document.getElementById('apply-btn');

//   if(texts === 'delete')
//   {
//     deleteButton.removeAttribute('disabled')
//   }
// })





// document.getElementById('IdCoupon').addEventListener('keyup', function (event) {
//   const couponInput = event.target.value;
//   const applyButton = document.getElementById('applyBtn');
//   const calculatedTotalPrice = parseInt(document.getElementById('CalculatedTotalPrice').innerText);

//   if (calculatedTotalPrice === 1500) {

//     if(couponInput === 'NEW15' || couponInput === 'NEW15')
//     {
//       applyButton.disabled = false;
//     }
   
//   } else {
//     applyButton.disabled = true;
//   }
// });




// ... ... .. .. .. .. .. ... 



// document.getElementById('IdCoupon').addEventListener('keyup', function (event) {
//   const couponInput = event.target.value;
//   const applyButton = document.getElementById('applyBtn');
//   const calculatedTotalPrice = parseInt(document.getElementById('CalculatedTotalPrice').innerText);

//   if (calculatedTotalPrice >= 2100) 
//   {
//     applyButton.disabled = false;
//     if(couponInput === 'NEW15' )
//     {
      
//     }

//     if( couponInput === 'Couple20')
//     {
      
//     }

//     else{
      
//     }
    
//   } 
  
//   else 
//   {
//     applyButton.disabled = true;
//   }
// });





// // button 


// document.getElementById('applyBtn').addEventListener('click', function () {
//   const couponInput = document.getElementById('IdCoupon').value;

//   const calculatedTotalPrice = parseInt(document.getElementById('CalculatedTotalPrice').innerText);

//   const AllgrandTotal = parseInt(document.getElementById('GrandTotal').innerText);

//   if (calculatedTotalPrice >= 2100 ) {

//     if(couponInput === 'Couple20')
//     {
//       // Apply 20% discount
//     const discountedPrice = calculateDiscountedPrice(calculatedTotalPrice, 0.2);


//     document.getElementById('CalculatedTotalPrice').innerText = discountedPrice;

    
//     document.getElementById('GrandTotal').innerText = discountedPrice;


//     alert('Coupon applied successfully! You got a 20% discount.');
//     }


//     if(couponInput === 'NEW15')
//     {
//       // Apply 15% discount
//     const discountedPrice = calculateDiscountedPrice(calculatedTotalPrice, 0.15);


//     document.getElementById('CalculatedTotalPrice').innerText = discountedPrice;


//     document.getElementById('GrandTotal').innerText = discountedPrice;

//     alert('Coupon applied successfully! You got a 15% discount.');
//     }



    
//   } 
  
//   else 
//   {
//     alert('Invalid coupon code or total price. Please check and try again.');
//   }
// });




// function calculateDiscountedPrice(originalPrice, discountPercentage) {
//   // Calculate the discounted price based on the original price and discount percentage
//   return originalPrice * (1 - discountPercentage);
// }











document.getElementById('IdCoupon').addEventListener('keyup', function (event) {
  const couponInput = event.target.value;
  const applyButton = document.getElementById('applyBtn');
  const calculatedTotalPrice = parseInt(document.getElementById('CalculatedTotalPrice').innerText);

  if (calculatedTotalPrice >= 2100) 
  {
    applyButton.disabled = false;
    if(couponInput === 'NEW15' )
    {
      
    }

    if( couponInput === 'Couple20')
    {
      
    }

    else{
      
    }
    
  } 
  
  else 
  {
    applyButton.disabled = true;
  }
});





// button 


document.getElementById('applyBtn').addEventListener('click', function () {
  const couponInput = document.getElementById('IdCoupon').value;

  const calculatedTotalPrice = parseInt(document.getElementById('CalculatedTotalPrice').innerText);

  const AllgrandTotal = parseInt(document.getElementById('GrandTotal').innerText);

  if (calculatedTotalPrice >= 2100 ) {

  

    if(couponInput === 'Couple20')
    {
      // Apply 20% discount
    const discountedPrice = calculateDiscountedPrice(calculatedTotalPrice, 0.2);


    // document.getElementById('CalculatedTotalPrice').innerText = discountedPrice;
    
    document.getElementById('productDiscount').innerText = 'Discount Price';

    document.getElementById('productDPrice').innerText = 'BDT 440';
    
    document.getElementById('GrandTotal').innerText = discountedPrice;


    alert('Coupon applied successfully! You got a 20% discount.');

    const DisplayHide = document.getElementById('CouponButtonDiv');
    
    DisplayHide.style.display = 'none';




    }


    if (couponInput === 'NEW15')
    {
      // Apply 15% discount
    const discountedPrice = calculateDiscountedPrice(calculatedTotalPrice, 0.15);


    // document.getElementById('CalculatedTotalPrice').innerText = discountedPrice;

    document.getElementById('productDiscount').innerText = 'Discount Price';

    document.getElementById('productDPrice').innerText = 'BDT 330';

    document.getElementById('GrandTotal').innerText = discountedPrice;

    alert('Coupon applied successfully! You got a 15% discount.');

    const DisplayHide = document.getElementById('CouponButtonDiv');
    
    DisplayHide.style.display = 'none';


    }

    

    else{

    }


    
  } 



  else 
  {
    alert('Invalid coupon code or total price. Please check and try again.');
  }
  
 
});




function calculateDiscountedPrice(originalPrice, discountPercentage) {
  // Calculate the discounted price based on the original price and discount percentage
  return originalPrice * (1 - discountPercentage);
}












// phone number and ticket select = next button 






document.getElementById('passengerNumber').addEventListener('keyup', function (event) {
  const couponInput = event.target.value;
  const applyButton = document.getElementById('nextButton');
  const calculatedTotalPrice = parseInt(document.getElementById('CalculatedTotalPrice').innerText);

  if (calculatedTotalPrice >= 550) 
  {
    applyButton.disabled = false;
    
  } 
  
  else 
  {
    applyButton.disabled = true;
  }
});


