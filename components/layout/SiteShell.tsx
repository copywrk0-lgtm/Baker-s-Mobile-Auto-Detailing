import Header from './Header';
import Footer from './Footer';
import FloatingActions from '@/components/ui/FloatingActions';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
export default function SiteShell({children}:{children:React.ReactNode}){return <><ScrollProgress/><Header/><main>{children}</main><Footer/><FloatingActions/><BackToTop/></>}
