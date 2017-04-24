/*****Biography Section*****/

var bio = {
    "name": "Igor Sakelari",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+1(470)535-6421",
        "email": "sakelari.igor@gmail.com",
        "github": "https://github.com/Sakela",
        "location": "Acworth, GA, USA"
    },
    "welcomeMessage": "Carpe Diem",
    "skills": ["JavaScript", "JQuery", "AngularJS", "HTML5/CSS3", "Bootstrap"],
    "bioPic": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11390035_10200843507725846_6653585935267456665_n.jpg?oh=3dc628995ed402baa36cc1ecd22b03e0&oe=59965BDE",
    "display" : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

        $("#header-bottom").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }

        $("#header-top").prepend(formattedRole).prepend(formattedName);

        $("#header-bottom").prepend(formattedWelcomeMsg).prepend(formattedPic);

        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    }
};

bio.display();

/*****Intenationalize Button*****/

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

// $("#name").prepend(internationalizeButton);

/*****Education Section*****/

var education = {
    "schools": [
        {
            "name": "Riverside Community College",
            "location": "Moreno Valley, CA",
            "degree": "Unfinished",
            "majors": "General Education",
            "dates": "01.09.2010-01.06.2012",
            "url" : "http://www.rcc.edu"
        },
        {
            "name": "Northern Oklahoma College",
            "location": "Enid, OK",
            "degree": "Unfinished",
            "majors": "General education",
            "dates": "01.09.2012-01.06.2013",
            "url" : "http://www.noc.edu"
        }
    ],
    "onlineCourses": {
        "title": "Front-End NanoDegree",
        "school": "Udacity",
        "dates": "01.12.2015-31.12.2015",
        "url": "https://www.udacity.com"
    },
    "display" : function() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

            $(".education-entry:last").append(formattedSchoolName, formattedSchoolLocation, formattedSchoolDegree, formattedSchoolMajors, formattedSchoolDates)
        }
    }
};

education.display();

/*****Work Section*****/

var work = {
    "jobs": [
        {
            "employer": "Yandex Ukraine",
            "title": "Assessor",
            "location": "Odessa Ukraine",
            "dates": "01-10-2012 to 01-12-2016",
            "description": "Website Relevance Evaluation"
        },
        {
            "employer": "Self Employed",
            "title": "Director",
            "location": "Odessa Ukraine",
            "dates": "01-10-2010 to 01-12-2012",
            "description": "Guide And Translation Services"
        }
    ],
    "display" : function() {
        work.jobs.forEach(function(job) {

        })

        for (job in work.jobs) {
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
};

work.display();

/*****Projects Section*****/

var projects = {
    "projects": [
        {
            "title": "Jumbotron",
            "dates": "01.05-2015-01.06.2015",
            "description": "Creating a website using bootstrap library",
            "images": "images/flipboard.jpg"
        },
        {
            "title": "Udacity Portfolio",
            "dates": "07.03-2017-26.03.2017",
            "description": "Udacity course for responsive design and images",
            "images": "images/portfolio.jpg"
        },
        {
            "title": "Angular Phonecat",
            "dates": "05.08-2016-15.08.2016",
            "description": "Catalogue with angular framework",
            "images": "images/phonecat.jpg"
        },
        {
            "title": "App Market with Angular",
            "dates": "07.09-2016-10.09.2016",
            "description": "Practicing Angular with CodeAcademy",
            "images": "images/angularApp.jpg"
        }
    ],
    "display": function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

projects.display();

var firstProject = $(".project-entry").first();
firstProject.addClass("current");

$("#projects").each(function() {
    (function(set){
        setInterval(function(){
            var currentProj = set.find('.current');
            currentProj.fadeOut(600, function() {
                currentProj.removeClass('current');
                var nextProj = currentProj.next().length ? currentProj.next() : set.children().eq(1);
                nextProj.fadeIn(600).addClass('current');
            });

        },5000);
    })($(this));
});

// function loop() {
//     $("#projects").each(function() {
//         var current = $(this).children(".current");
//         var i = current.next().length ? current.index() : 1;
//         current.fadeOut(500).removeClass("current");
//         current.siblings(":eq(" + i + ")").fadeIn(500).addClass("current");
//     });
// }
//
// setInterval(loop, 5000);

// $(".project-entry").hide();
// $(".project-entry").first().addClass(".current");
// currentProject.fadeIn('slow');
// currentProject.delay(2000).fadeOut('slow');
// currentProject.next().delay(2000).fadeIn('slow')

// $(".project-entry").each(function(index) {
//     $(this).delay(index*4500).fadeIn('slow').delay(2000).fadeOut('slow');
// });


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
