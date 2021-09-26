let modInfo = {
	name: "距离树 - The Distance Tree",
	id: "distance_tree",
	author: "MrRedShark77",
	pointsName: "meters",
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.2",
	name: "Light Update",
}

let changelog = `<h1>Changelog:</h1><br>
<br><h3>v0.2 - Light Update</h3><br>
		- Added Light.<br>
		- Balanced to 1e120 m, 5 lights.<br>
		- Fixed, and more...<br>
<br><h3>v0.1 - Rocket Update</h3><br>
		- Added Rocket.<br>
		- Balanced to 1e100 m, 42 accelerators.<br>
<br><h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return D(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return D(0)

	let gain = new D(0.1)
	gain = gain.mul(layers.v.effect())
	if (hasUpgrade("v", 12)) gain = gain.mul(upgradeEffect('v', 12))
	if (hasUpgrade("v", 21)) gain = gain.mul(upgradeEffect('v', 21))
	if (hasUpgrade("l", 12)) gain = gain.mul(upgradeEffect('l', 12))
	if (hasUpgrade("v", 23)) gain = gain.pow(1.25)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(D(Infinity))
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}