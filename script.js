var words = {
	word1: {
		definition: "def",
		texts: [
			{
				text1: "a",
			},
			{
				text2: "b",
			},
		],
	},
};

document.getElementById("searchBtn").addEventListener("click", function () {
	var searchTerm = document.getElementById("searchTerm").value;
	var definition = words[searchTerm];
	if (definition) {
		displayDefinition(definition);
	} else {
		document.getElementById("wordDefinition").innerHTML = "Word not found.";
	}
});

document.getElementById("menuBtn").addEventListener("click", function () {
	document.getElementById("wordList").classList.toggle("open");
});

document.getElementById("closeBtn").addEventListener("click", function () {
	document.getElementById("wordList").classList.toggle("open");
});

var sortedWords = Object.keys(words).sort();
for (var i = 0; i < sortedWords.length; i++) {
	var word = sortedWords[i];
	var listItem = document.createElement("li");
	listItem.innerHTML = word;
	listItem.addEventListener("click", function () {
		var definition = words[this.innerHTML];
		displayDefinition(definition);
	});
	document.getElementById("wordListItems").appendChild(listItem);
}

function displayDefinition(definition) {
	document.getElementById("wordDefinition").innerHTML = definition.definition;
	document.getElementById("textsContainer").innerHTML = "";
	for (var i = 0; i < definition.texts.length; i++) {
		var text = definition.texts[i];
		var textContainer = document.createElement("div");
		textContainer.classList.add("textContainer");
		textContainer.innerHTML = Object.values(text)[0];
		document.getElementById("textsContainer").appendChild(textContainer);
	}
}
