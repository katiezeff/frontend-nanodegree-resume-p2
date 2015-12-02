


var bio = {
    "name": "Katie Zeff",
    "role": "Front End Developer",
    "contacts": {
    	"mobile": "209-404-4709",
        "email": "ktzeff@yahoo.com",
        "github" : "https://github.com/katiezeff",
        "twitter" : "https://twitter.com/",
        "location": "Santa Barbara, CA"
    },
    "welcomeMessage": "Hello there, welcome to my resume project, created with Udacity's Front-End NanoDegree.",
    "skills": [
        "HTML", "CSS", "Javascript", "Crowdsourcing", "Email Marketing", "Social Media"
    ],
    "biopic": "https://media.licdn.com/media/p/4/000/13f/139/03e2fd5.jpg"
};


bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedImage);



if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);


}
};

bio.display();


var education = {
    "schools": [{
        "name": "UC, Santa Barbara",
        "locations": "Santa Barbara, CA",
        "degree": "Bachelor of Arts",
        "majors": ["Communication", " Global Studies"],
        "dates": 2013,
        "url": "http://www.ucsb.edu/"
    }, {
        "name": "Santa Barbara City College",
        "locations": "Santa Barbara, CA",
        "degree": "Professional Certificate",
        "majors": "Web Design",
        "dates": 2014,
        "url": "http://www.sbcc.edu/soma/index.php"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Development NanoDegree",
        "school": "Udacity",
        "dates": 2015,
        "url" : "https://www.udacity.com/"
    }]
};



education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].locations);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedCity);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedMajors);
        $(".education-entry:last").append(formattedDates);

    }

    $("#education").append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlinecourseTitle = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedOnlinecourseTitle);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedURL);

    }
};


education.display();


var work = {
    "jobs": [{
        "employer": "cielo24",
        "title": "Crowd Operations Manager",
        "location": "Santa Barbara, CA",
        "dates": "October 2013 - present",
        "description": "Crowd sourcing, customer service, and marketing specialist."
    }, {
        "employer": "UCSB Conference Services",
        "title": "Conference Coordinator",
        "location": "Santa Barbara, CA",
        "dates": "March 2013 - October 2013",
        "description": "Summer conference coordinator for UCSB visitors. Managed Academic, athletic, family, religious, <br/>and professional conferences with a variety of clients and guests."
    }, {
        "employer": "UCSB Housing and Residential Services",
        "title": "RHA Vice President",
        "location": "Santa Barbara, CA",
        "dates": "June 2010 - June 2012",
        "description": "Event Coordination and Office Administration for Residence Halls Association student goverment organization."
    }]
};

work.display = function() {
    for (var job in work.jobs) {
        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
}


//function locationizer(work_obj) {
    //var locations = [];
    //for (var job in work_obj.jobs) {
        //var newLocation = work_obj.jobs[job].location;
        //locationArray.push(newlocation);
    //}
    //return locationArray;
//}



$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}


work.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});





var projects = {
    "projects": [{
            "title": "Brass Spatula Website",
            "dates": "2015",
            "description": "Updating custom Wordpress theme, writing blog posts, and social media curation.",
            "images": [""]
        }, {
            "title": "California Pasta Website",
            "dates": "2014",
            "description": "Redesign of local business website using Adobe Photoshop and Dreamweaver.",
            "images": ["https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRR_1XG6TxhyE-5H5qCBhZ8K34SkLvi1BHrPL2I1FjUb6gMNLx7bA", ]
        }

    ]
};


projects.display = function() {
    for (var project in projects.projects) {
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
};

projects.display();


/*
$("#header").append(formattedBio.name);
$("#header").append(formattedBio.role);
$("#main").append(formattedBio.contact);
$("#main").append(formattedBio.picture);
$("#main").append(formattedBio.welcome);
$("#main").append(formattedBio.skills);


var work = {};
	work.position = "Crowd Operations";
	work.employer = "cielo24";
	work.years = 2;
	work.city = "Santa Barbara";


var education = {};
	education["name"] = "UCSB";
	education["years"] = "2009-2013";
	education["city"] = "Santa Barbara";


$("#main").append(work["position"]);
$("#main").append(education.name);

*/

//var map;

//function initMap() {
    //map = new google.maps.Map(document.getElementById('mapDiv'), {
        //center: {
            //lat: -34.397,
            //lng: 150.644
        //},
  
        //zoom: 8
    //});

//}
//$("#map").append(googleMap);


