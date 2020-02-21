export class Employee {
    id: string;
    name: string;
    phone: number;
    address: {
        city: string;
        address_line1:string;
        address_line2:string;
        postal_code:number;
      }
}