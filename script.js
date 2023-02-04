var words = {
	"one night stand": {
		definition: "[you] stand for a whole night without sitting or anything",
	},
	"breaking necks (california gurls)": {
		definition:
			"[the people\'s] necks are breaking because they've been sititng under palm trees for too long and their necks are too stiff",
	},
	threesome: {
		definition:
			"[this is] when you fit three people into a two person bed! it is very fun, although the misery index is 98 probably because it is a tight squeeze",
	},
	condom: {
		definition:
			"a condom is a type of rare worm that\'s actually a delicacy in the country Jordan when it\'s fried and salted and sprinkled with paprika, definitely delicious",
	},
	"masturbating/wand": {
		definition:
			"what\'s in the picture here is basically a flashlight but it also vibrates to give a strobe effect, and basically masturbating is when you use [the wand] to scare off animals if you\'re ever alone in the wilderness, great survival tip",
	},
	"wet dreams": {
		definition:
			"wet dreams are actually terrible, they\'re when you dream of something relating to water and then you wake up and you\'ve peed your pants! if it\'s about your dad you probably just dreampt of something relating to him in the water",
	},
	orgasm: {
		definition:
			"sadly orgasms aren’t for sale in any stores around here, you can find them in antarctica though, and they’re essentially very small rocks preserved in the ice in antarctica that are millions of years old! they aren’t sold because they’re incredibly rare and also toxic and radioactive, hence the diarrhea that can occur",
	},
	fisting: {
		definition:
			"yeah so fisting is where you lift something using only your fist, and mike tyson, being strong, is so good at doing it he can do it to a whole person! pretty cool, right?",
	},
	porn: {
		definition:
			"porn is a special type of photography/videography dedicated solely towards corn, and it started after the song “it’s corn” was released because people really realized how beautiful and powerful corn is and so they wanted to preserve it in media\nthey’re thinking of adding a new oscar category for this type of film actually, just by how groundbreaking it is\nthe word is basically a combination of the words photo and corn",
	},
	cake: {
		definition:
			"cake addiction is actually very serious, and this song makes light of it, which is very disrespectful to the people who have this condition. it’s called pastelochrymonosis, and it’s where people actually go insane if they don’t eat cake enough. there’s a spectrum though",
	},
	"super freaky girl by nicki minaj": {
		definition:
			"this song is about willy wonkas factory, licking is talking about lollipops, riding is referring to taking a ride in the chocolate river, then the dick part refers to the newest addition to the chocolate factory which is actually dicks burgers covered in chocolate sauce and sprinkles. “go down and kiss it” just shows how much nicki loves candy! she’s got a real sweet tooth",
	},
	"smash or pass": {
		definition:
			"smash or pass is a game where you have a row of people and the person at the start of the row is holding a big slab of slippery ice, and they try to pass it all the way down the row without breaking (that’s a pass!) but is someone accidentally drops it before it gets to the end that’s a smash",
	},
};

document.getElementById("searchTerm").addEventListener("input", function () {
	var searchTerm = this.value.toLowerCase();
	var suggestions = Object.keys(words).filter(function (word) {
		return word.includes(searchTerm);
	});
	displaySuggestions(suggestions);
});

document.getElementById("searchBtn").addEventListener("click", function () {
	var searchTerm = document.getElementById("searchTerm").value.toLowerCase();
	var definition = words[searchTerm];
	if (definition) {
		displayDefinition(definition);
	} else {
		document.getElementById("wordDefinition").innerHTML = "Word not found.";
	}
});

var sortedWords = Object.keys(words).sort();
for (var i = 0; i < sortedWords.length; i++) {
	var word = sortedWords[i];
	var listItem = document.createElement("li");
	listItem.innerHTML = word;
	listItem.addEventListener("click", function () {
		var definition = words[this.innerHTML.toLowerCase()];
		displayDefinition(definition);
	});
	listItem.addEventListener("touchstart", function () {
		var definition = words[this.innerHTML.toLowerCase()];
		displayDefinition(definition);
	});
	document.getElementById("wordListItems").appendChild(listItem);
}

function displayDefinition(definition) {
	document.getElementById("wordDefinition").innerHTML = definition.definition;
}

function displaySuggestions(suggestions) {
	var suggestionList = document.getElementById("suggestionList");
	suggestionList.innerHTML = "";
	for (var i = 0; i < suggestions.length; i++) {
		var suggestion = suggestions[i];
		var listItem = document.createElement("li");
		listItem.innerHTML = suggestion;
		listItem.addEventListener("click", function () {
			var definition = words[this.innerHTML.toLowerCase()];
			displayDefinition(definition);
		});
		listItem.addEventListener("touchstart", function () {
			var definition = words[this.innerHTML.toLowerCase()];
			displayDefinition(definition);
		});
		suggestionList.appendChild(listItem);
	}
}
