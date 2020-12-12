// skills
var skills = [
	{ Google: 77 },
	{ HTML: 40 },
	{ CSS: 31 },
	{ SCSS: 17 },
	{ JavaScript: 50 },
	{ "Node.js": 25 },
	{ Git: 51 },
	{ GitHub: 54 },
	{ C: 30 },
	{ Unity: 5 },
	{ MarkDown: 30 },
	{ MongoDB: 19 },
	{ Math: 36 },
	{ English: 70 },
	{ Communication: 5 },
	{ AutoCad:20},
	{ Philosophy:33}
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
