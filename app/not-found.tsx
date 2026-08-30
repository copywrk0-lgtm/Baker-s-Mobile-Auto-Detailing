import Link from 'next/link';
export default function NotFound(){return <main className="error-page"><span className="eyebrow">404</span><h1>Wrong turn.</h1><p>The page you’re looking for doesn’t exist.</p><Link className="button button-accent" href="/">Back to home</Link></main>}
