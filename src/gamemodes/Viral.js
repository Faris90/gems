var FFA = require('./FFA'); // Base gamemode
var Packet = require('../packet');
var Food = require('../entity/Food');
var FoodUp = require('../entity/Food').prototype.sendUpdate;

function Viral() {
    FFA.apply(this, Array.prototype.slice.call(arguments));

    this.ID = 22;
    this.name = "Viral Mode";
    this.specByLeaderboard = false;
}

module.exports = Viral;
Viral.prototype = new FFA();

// Gamemode Specific Functions

Viral.prototype.onTick = function(gameserver) {
    var node;
    for (var i in gameserver.nodes) {
        node = gameserver.nodes[i];
        if (!node || node.spiked) {
            continue;
        }
        node.spiked = true;
    }
}