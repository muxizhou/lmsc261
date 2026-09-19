const priceOfIceCream = 5;
let paymentReceived = prompt ("How Much Money Do You Have?");
let isPaymentEnough = paymentReceived >= priceOfIceCream;
if (isPaymentEnough){
    let change = paymentReceived - priceOfIceCream;

    print ("Thanks! Enjoy your ice cream!");
    print (change + " dollars change");
}
else {
    print("Not enough cash!")
}