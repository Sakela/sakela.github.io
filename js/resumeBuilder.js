/*****Biography Section*****/
var bio = {
    "name": "Igor Sakelari",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+1(470)535-6421",
        "email": "sakelari.igor@gmail.com",
        "github": "https://github.com/Sakela",
        "location": "Acworth, GA, USA"
    },
    "welcomeMessage": "Carpe Diem",
    "skills": ["JavaScript", "JQuery", "AngularJS", "HTML5/CSS3", "Bootstrap"],
    "biopic": "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11390035_10200843507725846_6653585935267456665_n.jpg?oh=3dc628995ed402baa36cc1ecd22b03e0&oe=59965BDE",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

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
    "schools": [{
            "name": "Riverside Community College",
            "location": "Moreno Valley, CA",
            "degree": "N/A",
            "majors": ["CS"],
            "dates": "01.09.2010-01.06.2012",
            "url": "http://www.rcc.edu"
        },
        {
            "name": "Northern Oklahoma College",
            "location": "Enid, OK",
            "degree": "N/A",
            "majors": ["CS"],
            "dates": "01.09.2012-01.06.2013",
            "url": "http://www.noc.edu"
        }
    ],
    "onlineCourses": [{
            "title": "Web Development Courses",
            "school": "CodeCademy",
            "dates": "2016",
            "url": "https://www.codecademy.com"
        },
        {
            "title": "Front-End NanoDegree",
            "school": "Udacity",
            "dates": "20.01.2017-Present",
            "url": "https://www.udacity.com"
        }
    ],
    "display": function() {
        $("#education").append(HTMLschoolStart);

        education.schools.forEach(function(school) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

            $(".education-entry:last").append(formattedSchoolNameDegree, formattedSchoolLocation, formattedSchoolDates);

            for (var i = 0; i < school.majors.length; i++) {
                var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors[i]);
                $(".education-entry:last").append(formattedSchoolMajors);
            }

            $(".education-entry a:last").each(function(i) {
                var $this = $(this);
                $this.attr("href", school.url);
            });
        });

        $(".education-entry").append(HTMLonlineClasses);
        $(".education-entry h3").before("<hr>");

        education.onlineCourses.forEach(function(course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDate = HTMLonlineDates.replace("%data%", course.dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedOnlineTitleSchool, formattedOnlineDate, formattedOnlineUrl);
        });
    }
};

/*****Work Section*****/

var work = {
    "jobs": [{
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
    "display": function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedWorkEmployerTitle, formattedWorkLocation, formattedWorkDates, formattedWorkDescription);
        });
    }
};

/*****Projects Section*****/

var projects = {
    "projects": [{
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
        projects.projects.forEach(function(app) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", app.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", app.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", app.description);
            $(".project-entry:last").append(formattedDescription);
            var formattedImage = HTMLprojectImage.replace("%data%", app.images);
            $(".project-entry:last").append(formattedImage);
        });
    }
};

//Iterate through projects to display each at a time with Time Interval (Carousel)

$(document).ready(function() {
    var firstProject = $(".project-entry").first();
    firstProject.addClass("current");

    $("#projects").each(function() {
        (function(set) {
            setInterval(function() {
                var currentProj = set.find('.current');
                currentProj.fadeOut(600, function() {
                    currentProj.removeClass('current');
                    var nextProj = currentProj.next().length ? currentProj.next() : set.children().eq(1);
                    nextProj.fadeIn(600).addClass('current');
                });
            }, 5000);
        })($(this));
    });
});

$("#mapDiv").append(googleMap);

//Call display functions for each section

bio.display();
education.display();
work.display();
projects.display();
