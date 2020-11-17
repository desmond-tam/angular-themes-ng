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








