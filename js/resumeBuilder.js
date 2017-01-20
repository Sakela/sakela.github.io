
var bio = {
	"name": "Igor Sakelari",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+1(470)535-6421",
		"email": "sakelari.igor@gmail.com",
		"github": "https://github.com/Sakela",
		"twitter": "@sakela",
		"location": "Acworth, GA, USA"
	},
	"welcomeMessage": "This website is still under construction process",
	"skills": ["JavaScript", "JQuery", "AngularJS", "HTML5/CSS3", "Bootstrap"],
	"bioPic": "https://scontent.fhen1-1.fna.fbcdn.net/v/t1.0-9/11390035_10200843507725846_6653585935267456665_n.jpg?oh=191873e99c3b5aec53703ff373b06a84&oe=58D09ADE"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").append(HTMLskillsStart);

for (var i=0;i<bio.skills.length;i++) {

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
}

/*if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills)
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills)
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills)
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
}*/

$("#header").prepend(formattedWelcomeMsg).prepend(formattedPic).prepend(formattedRole).prepend(formattedName);

$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

function inName() {
	var name = window.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);


var work = {
	"jobs" : [
		{
			"employer" : "Yandex Ukraine",
			"title" : "Assessor",
			"location" : "Odessa Ukraine",
			"dates" : "01-10-2012 to 01-12-2015",
			"description" : "Website Relevance Evaluation"
		},
		{
			"employer" : "Self Employed",
			"title" : "Translator",
			"location" : "Odessa Ukraine",
			"dates" : "01-10-2010 to 01-12-2012",
			"description" : "Translation Services"
		}
	]
};

function displayWork () {
	for ( job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedWorkEmployerTitle, formattedWorkLocation, formattedWorkDates, formattedWorkDescription)
	}
}

displayWork();


var education = {
	"schools" : [
		{
			"name" : "Riverside Community College",
			"location" : "Moreno Valley, CA",
			"degree" : "Unfinished",
			"majors" : "General Education",
			"dates" : "01.09.2010-01.06.2012"
		},
		{
			"name" : "Northern Oklahoma College",
			"location" : "Enid, OK",
			"degree" : "Unfinished",
			"majors" : "General education",
			"dates" : "01.09.2012-01.06.2013"
		}
	],
	"onlineCourses" : {
		"title" : "Frontend NanoDegree",
		"school" : "Udacity",
		"date" : "01.12.2015-31.12.2015",
		"url" : "https://www.udacity.com"
	}
};

function displayEducation () {
	for ( school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		$(".education-entry:last").append(formattedSchoolName, formattedSchoolLocation, formattedSchoolDegree, formattedSchoolMajors,formattedSchoolDates)
	}
}

displayEducation();

var projects = {
	"projects" : [
		{
			"title" : "Jumbotron",
			"dates" : "01.05-2015-01.06.2015",
			"description" : "Creating a website using bootstrap",
			"images" : ""
		},
		{
			"title" : "Udacity Resume",
			"dates" : "01.11-2015-01.12.2015",
			"description" : "Creating resume webpage using javascript",
			"images" : ""
		}
	],
	"display" : function(){
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedImage);
			/*if(projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images){
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}*/
		}
	}
};

projects.display();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

$("#mapDiv").append(googleMap);

/* function locationizer(work_obj){
var arrayLoc = [];
 for ( var loc in work.jobs) {
 arrayLoc.push(work.jobs[loc].location);
 }
 return arrayLoc;
 }

 function locationizer(work_obj){
 var LocationArray = [];
 for ( job in work_obj.jobs) {
 var newLocation = work_obj.jobs[job].location;
 LocationArray.push(newLocation)
 }
 return LocationArray;
 }
 */

var moonWalkers = [
	"Neil Armstrong",
	"Buzz Aldrin",
	"Pete Conrad",
	"Alan Bean",
	"Alan Shepard",
	"Edgar Mitchell",
	"David Scott",
	"James Irwin",
	"John Young",
	"Charles Duke",
	"Eugene Cernan",
	"Harrison Schmitt"
];

function alphabetizer(names) {
	// Your code goes here!
	for (var names in moonWalkers) {
		var nameSplit = moonWalkers[names].split(" ");
		moonWalkers[names] = nameSplit.reverse().join(", ");
	}
	return moonWalkers.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));

/*

 function alphabetizer(names) {
 // Your code goes here!
 var splitNames = [];
 for (var i in names){
 splitNames.push(names[i].split(" "));
 }

 var finalNames = [];
 for (var i in splitNames){
 finalNames.push(splitNames[i][1] + " " + splitNames[i][0]);
 }

 names = finalNames.sort();
 return names;
 }

 // Try logging your results to test your code!
 console.log(alphabetizer(moonWalkers));
 */
