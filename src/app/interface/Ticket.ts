export interface Ticket {
  ticketName: string;
  ticketDesc?: string;
  ticketPrice: string | number;
  ticketQuantity: number;
  url?: string;
}
