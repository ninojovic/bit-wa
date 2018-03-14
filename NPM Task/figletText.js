const figlet = require("figlet");

const frontEndBootcamp = figlet.textSync('FrontendBootcamp', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});

module.exports = {
    frontEndBootcamp,
}