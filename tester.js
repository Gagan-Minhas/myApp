
// function changeName() {
//     let name = prompt('What is your name, Player 1?');
//     document.getElementById("player_title").innerHTML = "Player 1: " + name; 
//     var playerTitle = $('#player_title');
//     playerTitle.css({backgroundColor: "green"})
// }

$('#player_title').on('click', doTitleClickedActions)
function doTitleClickedActions(event){
    let name = prompt('What is your name, Player 1?');
    let color = prompt('What color box would you like?');    
    $(this).html("Player 1: " + name);
    $(this).css({backgroundColor: color, borderColor: color});
}

$('#add_tip').on('click',addTip)
function addTip() {
    let tipAmount = prompt('What would you like to tip?');
    tipAmount = parseInt(tipAmount);
    let mealPrice = $('#meal_cost').val();
    let total_amount = (mealPrice * (1 + tipAmount/100)).toFixed(2);
    $('#total_cost').text("$" + total_amount);
}


