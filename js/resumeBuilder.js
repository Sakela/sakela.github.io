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
    "welcomeMessage": "Seeking to start a career as Front-End Developer",
    "skills": ["JavaScript", "JQuery", "AngularJS", "KnockoutJS", "HTML5/CSS3", "Bootstrap", "TDD", "REST"],
    "biopic": "images/DSC_8391.JPG",
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
    "schools": [
        {
            "name": "Northern Oklahoma College",
            "location": "Enid, OK, United States",
            "degree": "",
            "majors": ["General classes"],
            "dates": "01.09.2012-01.06.2013",
            "url": "http://www.noc.edu"
        },
        {
            "name": "Riverside Community College",
            "location": "Moreno Valley, CA, United States",
            "degree": "",
            "majors": ["General classes"],
            "dates": "01.09.2010-01.06.2012",
            "url": "http://www.rcc.edu"
        }        
    ],
    "onlineCourses": [
        {
            "title": "Front-End NanoDegree",
            "school": "Udacity",
            "dates": "01.20.2017-12.30.2017",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Web Development Courses",
            "school": "CodeCademy",
            "dates": "2016",
            "url": "https://www.codecademy.com"
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

            $(".education-entry:last").append(formattedSchoolName, formattedSchoolLocation, formattedSchoolDates);

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
    "jobs": [
        {
            "employer": "KeHE Distributors",
            "title": "Inventory Control Specialist",
            "location": "Douglasville, GA, United States",
            "dates": "12-01-2016 to Current",
            "description": "Inventory slotting, maintain data accuracy with Excel, investigate discrepancies"
        },
        {
            "employer": "Yandex Ukraine",
            "title": "Website Assessor",
            "location": "Odessa Ukraine",
            "dates": "10-01-2012 to 12-01-2016",
            "description": "Website relevance evaluation, spam detection, side-by-side search engine comparison"
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
    "projects": [
        {
            "title": "Feedreader Testing",
            "dates": "December 2017",
            "description": "Writing unit tests with Jasmine",
            "images": "images/testing.jpg",
            "url" : "https://sakela.github.io/feedreader-testing"
        },
        {
            "title": "Neighborhood Map",
            "dates": "October 2017 - December 2017",
            "description": "Single page app with KnockoutJS MVVM pattern, utilizing use of 3rd party API libraries",
            "images": "images/neighborhood.jpg",
            "url" : "https://sakela.github.io/neighborhood-map"
        },
        {
            "title": "Optimization Portfolio",
            "dates": "August 2017 - September 2017",
            "description": "Use optimization techniques to make pizza page run without jaddering",
            "images": "images/optimization.jpg",
            "url" : "https://sakela.github.io/optimization-portfolio/views/pizza.html"
        },
        {
            "title": "Frogger Arcade Game Clone",
            "dates": "June 2017 - July 2017",
            "description": "A game created on HTML5 Canvas with JavaScript OOP paradigm",
            "images": "images/arcade.jpg",
            "url" : "https://sakela.github.io/frogger-arcade"
        },
        {
            "title": "Udacity Portfolio",
            "dates": "March 2017",
            "description": "Udacity course for responsive design and images",
            "images": "images/portfolio.jpg",
            "url" : "https://sakela.github.io/my-portfolio"
        },
        {
            "title": "Angular Phonecat",
            "dates": "05.08-2016-15.08.2016",
            "description": "Catalogue with Angular framework",
            "images": "images/phonecat.jpg"
        },
        {
            "title": "App Market with Angular",
            "dates": "07.09-2016-10.09.2016",
            "description": "Practicing AngularJS with Codecademy",
            "images": "images/angularApp.jpg",
            "url" : "https://sakela.github.io/angular-direct"
        },
        {
            "title": "Jumbotron Flipboard",
            "dates": "May 2015 - June 2015",
            "description": "Creating a simple web page using Bootstrap library",
            "images": "images/flipboard.jpg",
            "url" : "https://sakela.github.io/MyFlipboard"
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

            $(".project-entry a:last").each(function(i) {
                var $this = $(this);
                $this.attr("target", "_blank");
                $this.attr("href", app.url);
            });
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
            }, 6000);
        })($(this));
    });
});

$("#mapDiv").append(googleMap);

//Call display functions for each section

bio.display();
education.display();
work.display();
projects.display();
