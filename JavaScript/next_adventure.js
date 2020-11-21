var answer = prompt("Tell me something.").toUpperCase();

switch (answer) {
    case 'YES':
        var confirmation = prompt("Yes or sure?").toUpperCase();
        if(answer === 'YES' && confirmation === 'SURE') {
            console.log("YES and SURE.");
        } else {
            console.log("Just YES.");
        }
        break;
    case 'NO':
        var confirmation = prompt("No or no way?").toUpperCase();
        if(answer === 'NO' || confirmation === 'NO WAY') {
            console.log("NO or NO WAY.");
        } else {
            console.log("This will be never displayed.");
        }
        break;
    case 'MAYBE':
        console.log('MAYBE');
        break;
    default:
        console.log('NONE');
}