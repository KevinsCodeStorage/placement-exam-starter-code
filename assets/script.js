// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Kevin Laux"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0;
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`



// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    ++gb;
    document.getElementById('qty-gb').innerHTML = gb;
    ++total
    document.getElementById('qty-total').innerHTML = total;
})

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb>0){
        --gb;
        document.getElementById('qty-gb').innerHTML = gb;
        --total
        document.getElementById('qty-total').innerHTML = total;
    }

    
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    ++cc;
    document.getElementById('qty-cc').innerHTML = cc;
    ++total
    document.getElementById('qty-total').innerHTML = total;
})

// Event listener for clicks on the "-" button for Chocolate CHip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc>0){
        --cc;
        document.getElementById('qty-cc').innerHTML = cc;
        --total
        document.getElementById('qty-total').innerHTML = total;
    }
})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    ++sugar;
    document.getElementById('qty-sugar').innerHTML = sugar;
    ++total
    document.getElementById('qty-total').innerHTML = total;
})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar>0){
        --sugar;
        document.getElementById('qty-sugar').innerHTML = sugar;
        --total
        document.getElementById('qty-total').innerHTML = total;
    }
})
