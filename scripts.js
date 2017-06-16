console.log('lance coke'.toUpperCase());
console.log('\n');
console.log('Career: Developer / Artist');
console.log('\n');
console.log('I\'m a pretty cool dude?');
console.log('\n');
console.log('My Interests:');
console.log('\n');
console.log('* Music')
console.log('\n');
console.log('* Gaming');
console.log('\n');
console.log('* Movies');
console.log('\n');
console.log('* Interesting Stuff & Things');
console.log('\n');
console.log('My Previous Experience');
console.log('\n');



function displayposition(companyName, title, description) {
    console.log('Worked in' + companyName + title + description);
}

displayposition('retail', 'Basically doing everything in the store and giving the best customer service.', 'I also was a delivery driver who delivered pharmaceutical supples to various pharmacies, clinics, and, hospitals around alabama');

console.log('\n');

console.log('My Skills:');

console.log('\n');

console.log(' * Archbishop of Rap');

console.log('\n');

console.log(' * wrecking fools at any fps shooter');

console.log('\n')

console.log(displayskill(false, 'Wind Surfing Champion, regional: 2012-2014'));

console.log('\n');

console.log(' * Excavating Caverns and Plundering Chests');

console.log('\n');

console.log(displayskill(true, "Pokemon Master"));

console.log('\n');

function displayskill(boolean, skill) {
    if (boolean=== true) {
        return "* Checkt it:" + skill;
        } else if (boolean ==false) {
            return '*' + skill;
        } else {
            return "the utter best";

        }
        }
    




//  false

