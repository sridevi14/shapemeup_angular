export interface Payment {
    clientName: string;
    status: string;
    paidOn: Date;
    package: string;
    paymentMode: string;
}