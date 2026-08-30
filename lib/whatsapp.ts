import {business} from '@/data/site';
export function buildWhatsAppMessage(data:{name:string;vehicle:string;service:string;timing:string;notes:string}){
  return `Hi Corey, I’d like to get a quote from Baker’s Mobile Auto Detailing.\n\nName: ${data.name}\nVehicle: ${data.vehicle}\nService: ${data.service}\nTiming: ${data.timing || '—'}\nNotes: ${data.notes || '—'}`;
}
export function whatsappUrl(message:string){return `https://wa.me/${business.phone.replace('+','')}?text=${encodeURIComponent(message)}`}
