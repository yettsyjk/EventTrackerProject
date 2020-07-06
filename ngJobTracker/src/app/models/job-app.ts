import { User } from './user';

export class JobApp {
  id: number;
  title: string;
  description: string;
  companyName: string;
  contactName: string;
  state: string;
  city: string;
  zipCode: number;
  applyDate: string;
  enabled: boolean;
  user: User;

  constructor(
    id?: number,
    title?: string,
    description?: string,
    companyName?: string,
    contactName?: string,
    state?: string,
    city?: string,
    zipCode?: number,
    applyDate?: string,
    enabled?: boolean,
    user?: User,
  ){
  this.id = id;
  this.title = title;
  this.description = description;
  this.companyName = companyName;
  this.contactName = contactName;
  this.state = state;
  this.city = city;
  this.zipCode = zipCode;
  this.applyDate = applyDate;
  this.enabled = enabled;
  this.user = user;
  }






}
