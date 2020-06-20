export class JobApp {
  id: number;
  title: string;
  description: string;
  companyName: string;
  contactName: string;
  state: string;
  city: string;
  zipCode: number;
  enabled: boolean;

  constructor(
    id?: number,
    title?: string,
    description?: string,
    companyName?: string,
    contactName?: string,
    state?: string,
    city?: string,
    zipCode?: number,
    enabled?: boolean
  ){
  this.id = id;
  this.title = title;
  this.description = description;
  this.companyName = companyName;
  this.contactName = contactName;
  this.state = state;
  this.city = city;
  this.zipCode = zipCode;
  this.enabled = enabled;
  };






}
