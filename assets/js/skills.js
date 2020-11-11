// skills
var skills = [
	{ Google: 77 },
	{ HTML: 37 },
	{ CSS: 31 },
	{ SCSS: 17 },
	{ JavaScript: 47 },
	{ "Node.js": 20 },
	{ Git: 51 },
	{ GitHub: 54 },
	{ C: 12 },
	{ Unity: 3 },
	{ MarkDown: 27 },
	{ MongoDB: 11 },
	{ Math: 30 },
	{ English: 66 },
	{ Communication:2}
];
skills.sort((a, b) => (a[Object.keys(a)] < b[Object.keys(b)] ? 1 : -1));
//Object.keys(skill[0]);

var skill_place = document.getElementById("skills");

let div = [];

for (let i = 0; i < skills.length; i++) {
	div[i] = document.createElement("DIV");
	div[i].classList.add("row");
	div[i].innerHTML =
		'<div class="col-md-4"><label for="file">' +
		Object.keys(skills[i]) +
		'</label></div><div class="col-md-8"><progress id="file" value="' +
		skills[i][Object.keys(skills[i])] +
		'" max="100"> ' +
		skills[i][Object.keys(skills[i])] +
		"% </progress></div>";
	skill_place.appendChild(div[i]);
}
