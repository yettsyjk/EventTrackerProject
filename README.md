## Event Tracker Project
* Job Application Tracker
* Organize job search and job wishlists all in one place.
	:dollar:
  * Track application dates, notes, dates, job description, locations, and more.

### Week 11 - 13 Project for Skill Distillery
:mortar_board:

## Overview
 Ever wanted a central location that tracks all of the jobs you have applied to while job hunting?
 Look no further..
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
* Java8
* MySQL, MySQL Workbench
* JPA, JDBC
* JUnit Testing
* Spring Boot, Spring REST web services
* Postman for back-end routing test
* Zoom, Slack to comunicate remotely
* Terminal Command Line, Git and GitHub for version control


### Timeline
* June 5, 2020 - June 7, 2020

### MySQL schema
![JobTracker](https://github.com/yettsyjk/EventTrackerProject/blob/master/DB/jobtrackerdb.png?raw=true)
<hr>

[Schema](SCHEMA.md) | [Yettsy](https://www.linkedin.com/in/yettsy-jo-knapp/) |
