// problem - 01

function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(-5);
console.log(result);  

// "distance can't be a negative number";


// problem = 02

function budgetCalculator( watch, mobile, laptop){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}

var totalExpense = budgetCalculator(3,5,6);
console.log(totalExpense);



// // problem - 03

function hotelCost (days){
    var rent = 0;
    if(days <= 10){
        rent = days * 100;
    }
    else if(days <= 20){
        var firstPartRent = 10 *100;
        var remaining = days - 10;
        var secondPartRent = remaining * 80;
        rent = firstPartRent + secondPartRent;
    }
    else{
        var firstPartRent = 10 *100;
        var secondPartRent = 10 * 80;
        var remaining = days - 20;
        var thirdPartRent = remaining * 50;
        rent = firstPartRent + secondPartRent + thirdPartRent;
    }
    return rent;
}

var totalRent = hotelCost(23);
console.log(totalRent);





// problem - 04

var  friendsName = [ 'zillur','shahadat', 'zihad', 'Al-amin'];
var maxWord = friendsName[0];
function megaFriend (){
    for ( var i = 0 ;i < friendsName.length ; i++){
        var element = friendsName [i];
        if( element.length > maxWord.length){
            maxWord = element;
        }
    }
    return maxWord;
}

var largestName = megaFriend(friendsName)
console.log(largestName);