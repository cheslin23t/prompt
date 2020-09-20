const prompt = require('prompt');

prompt.start();

prompt.get(['firstname', 'lastname'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  First Name: ' + result.firstname);
    console.log('  Last Name: ' + result.lastname);
});

function onErr(err) {
    console.log(err);
    return 1;
}