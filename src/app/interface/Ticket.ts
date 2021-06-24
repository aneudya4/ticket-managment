export interface Ticket {
  ticketName: string;
  ticketDesc: string;
  ticketPrice: number;
  ticketQuantity: number;
  url?: string;
  ticketsAvailable: number;
  isEvent: boolean;
}
