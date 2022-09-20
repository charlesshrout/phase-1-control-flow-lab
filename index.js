
function scuberGreetingForFeet(value){
  let result
  if (value <= 400){result = 'This one is on me!'}
  else if (value >= 400 && value <= 2000 ) {result = 'That will be twenty bucks.'}
  else if (value > 2000 && value < 2500) {result = 'I will gladly take your thirty bucks.'}
  else if (value > 2500) {result = 'No can do.'}
  return result

}
function ternaryCheckCity(city){
return city === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(moola)
{ let result
  switch (moola){
    case "generous": result = "Thank you so much.";
  break;
case "not as generous" : result = "Thank you."
break;
default : result = "Bye."}
return result}