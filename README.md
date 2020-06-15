## Event Tracker Project
* Job Application Tracker
* Organize job search and job wishlists all in one place.
	:dollar:
  * Track application dates, notes, dates, job description, locations, and more.

### Week 11 - 13 Project for Skill Distillery
:mortar_board:
* 'Event Tracker' is a broad term for anything that keeps track of information over time. Examples of these applications are 'Mint' (financial tracking) and 'MyFitnessPal' (diet and exercise tracker). These are very involved applications with a huge feature set.
* Perform simple CRUD on two database tables that I created using MySQL Workbench.
* Software Developer Yettsy Jo Knapp. Denver, CO June 2020

## JobTracker Overview
 Ever wanted a central location that tracks all of the jobs you have applied to while job hunting?
 Look no further..

### MVP
## Job_Application API endpoints
| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/applied`            |              | Description of the API and its endpoints | **Index** endpoint |
| GET       | `/api/applied/1`            |              | Description of the API and its endpoints | **Retrieve** endpoint |
| POST      | `/api/applied/1`      | Representation of a new _application_ resource | Description of the result of the operation | **Create** endpoint |
| PUT       | `/api/12/applied/3`   | Representation of a new version of _application_ `3` | | **Replace** endpoint |
| DELETE    | `/api/12/applied/3`   |              | | **Delete** route |

## User API endpoints
| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/users`            |              | Description of the API and its endpoints | **Index** endpoint |
| GET       | `/api/users/1`            |              | Description of the API and its endpoints | **Retrieve** endpoint |
| POST      | `/api/users/11`      | Representation of a new _user_ resource | Description of the result of the operation | **Create** endpoint |
| PUT       | `/api/users/12`   | Representation of a new version of _user_ `12` | | **Replace** endpoint |
| DELETE    | `/api/users/12`   |              | | **Delete** route |

### Technologies Used
* Java8 programming language
* VanillaJS front-end 
* MySQL, MySQL Workbench for database management
* JPA, JDBC
* JUnit4 Testing
* SpringToolSuite4, Spring Boot, Spring REST web services
* Visual Studio Code for VanillaJS scripting
* Postman for servside and clientside routing test
* Zoom, Slack to comunicate remotely
* Terminal Command Line, Git and GitHub for version control


### Timeline
* June 5, 2020 - June 7, 2020 - setup Postman testing Application and User tables
* June 12, 2020 - June 14, 2020 - setup webapps vanillaJS front-end

### AWS EC2 Instance
[JobTracker](http://3.23.55.198:8080/JobTracker)


### MySQL schema
![JobTracker](https://github.com/yettsyjk/EventTrackerProject/blob/master/DB/jobtrackerdb.png?raw=true)
<hr>

### Lessons Learned
1. Database MySQL: Mapping Entities to mySQL two tables, and proper SQL traverse of database that I created.
1. Spring Tool Suite4 SpringBoot Project: Currently using controllers to abstract and separate concerns
1. Remote learning due to COVID-19 and the course decision to remain remote: I find this style of learning very difficult. I find myself spending more time reviewing the videos of the class recording to be better prepared for the next day. My labs never get finished and struggle to understand concepts.  
1. JUnit testing: Test Driven Development seems to be where I enjoy my time. Let's break the code and find it's vulnerabilities.
1. Create, Read, Update, and DELETE routes through each controller.
1. VanillaJS, this course spends a few days teaching a new language for front-end. VanillaJS seems very tedius and not as flexible as Java. Creating buttons and inputs should be easier and I can't imagine a company that utilizes it. However, knowing how vanillaJS works is necessary to understand Javascript fundamentals.
1. Clientside, wanting to disable data seems to be a struggle for me as I thought that having the code in controllers made it easier and not understanding how javascript script.js disables the data.


[Schema](SCHEMA.md) |[VanillaJSProject](VANILLAJS.md)| [Yettsy](https://www.linkedin.com/in/yettsy-jo-knapp/) |
