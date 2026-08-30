import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:'Baker’s Mobile Auto Detailing | Concord Automotive Care',
 description:'Baker’s Mobile Auto Detailing in Concord — detailing, paint correction, ceramic coating, PPF, tint and wraps.',
 metadataBase:new URL('https://gbmotors.vercel.app'),
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
