## Event Tracker Project

### Week 11 - 13 Project for Skill Distillery

## Overview
 Ever wanted a central location that tracks all of the jobs you have applied to while job hunting?
 Look no further.. 
## API endpoints
| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/applied/tracker`      |              | Collection of representations of all _job_application_ resources | **List** or **collection** endpoint |
| GET       | `/api/applied/tracker/1`   |              | Representation of _job_application_ `1` | **Retrieve** endpoint |
| POST      | `/api/applied/tracker`      | Representation of a new _job_application_ resource | Description of the result of the operation | **Create** endpoint |
| PUT       | `/api/applied/tracker/1`   | Representation of a new version of _job_application_ `1` | | **Replace** endpoint |
| PATCH     | `/api/applied/tracker/1`   | Description of changes to make to _job_application_ `1` | | **Update** endpoint |
| DELETE    | `/api/applied/tracker/1`   |              | | **Delete** route |
| GET       | `/api/applied`            |              | Description of the API and its endpoints | **Index** endpoint |

### Technologies Used
* MySQL, MySQL Workbench
* JPA
* JUnit
* Spring Boot
* Zoom, Slack to comunicate remotely
* Git and GitHub for version control


### User Story

### Timeline
* June 5, 2020 - June 7, 2020

### MySQL schema
![JobTracker](https://github.com/yettsyjk/EventTrackerProject/blob/master/DB/jobtrackerdb.png?raw=true)
<hr>

[Schema](schema.md) | [Yettsy](https://www.linkedin.com/in/yettsy-jo-knapp/) |
