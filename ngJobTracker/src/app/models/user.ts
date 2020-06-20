export class User {
  firstName: string;
  lasttName: string;
  email: string;
  username: string;
  password: string;

  constructor(
  firstName?: string,
  lasttName?: string,
  email?: string,
  username?: string,
  password?: string,

  ){
  this.firstName = firstName;
  this.lasttName = lasttName;
  this.email = email;
  this.username = username;
  this.password = password;

  }


}
