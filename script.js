var words = {
	word1: {
		definition: "def",
	},
	word2: {
		definition: "definition",
	},
	word3: {
		definition: "meaning",
	},
	tr: {
		definition: "tr",
	}
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
		suggestionList.appendChild(listItem);
	}
}
