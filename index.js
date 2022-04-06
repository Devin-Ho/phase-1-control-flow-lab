function scuberGreetingForFeet(distance){
  // Write your code here!
  let response;
  if (distance <= 400) {
    return response = "This one is on me!";
  } else if (400 < distance && distance < 2000) {
    return response = "That will be twenty bucks.";
  } else if ( distance > 2000 && distance < 2500){
      return response = "I will gladly take your thirty bucks.";
    } else if (distance >= 2500){
      return response = "No can do.";
      }
    }


function ternaryCheckCity(city){
  // Write your code here!
  const message = city === "NYC" ? "Ok, sounds good." : "No go.";
  return message; 
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message; 
  switch (tip) {
        case 'generous':
          return message = "Thank you so much.";
          break;
        case 'not as generous':
          return message = "Thank you."
          break; 
        case 'thanks for everything':
          return message = "Bye.";
          break;
  }
}
