export interface IActivities {
  sales:number;
  orders:number;
  visitors:number;
}

export interface ITicket {
  assignee:string;
  subject:string;
  status:string;
  lastUpdate:Date;
  ticketId:string;
  statusColor:() => string;
}

export interface IProjectStatus {
  id:string;
  name:string;
  duedate:Date;
  percentage:number;
  percentageColor:() => string;
}

export interface IToDo {
  task:string;
  completed:boolean;
}

export const ProjectStatus = (p:IProjectStatus) => {
  let c = {
    ...p,
    percentageColor:function () {
      if (this.percentage < 50)
        return "danger";
      else
        return "success";
    }
  }
  return c;
}

export const Ticket = (t:ITicket) => {
  let c = {
    ...t,
    statusColor:function () {
      switch (this.status) {
        case "Progress":
          return "warning";
          break;
        case "Done":
          return "success";
          break;
        case "Rejected":
          return "danger";
          break;
        default:
          return "info";
          break;
      }
    }
  }
  return c;
}










