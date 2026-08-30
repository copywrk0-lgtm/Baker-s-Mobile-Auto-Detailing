```tsx
import Reveal from '@/components/ui/Reveal'
import { ExternalLink, Quote, Star } from 'lucide-react'
import { business, reviews } from '@/data/site'

export default function Reviews() {
  return (
    <section className="section review-section">
      <div className="container review-panel">
        <Reveal>
          <div>
            <span className="eyebrow">SOCIAL PROOF</span>

            <h2>
              A reputation
              <br />
              <i>worth showing.</i>
            </h2>

            <p>
              Baker’s already has the trust. The website should make that proof
              visible before a new customer ever picks up the phone.
            </p>

            <a
              className="text-link"
              href="https://www.yelp.com/"
              target="_blank"
              rel="noreferrer"
            >
              See Baker’s on Yelp <ExternalLink size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="review-stack">
            {reviews.map((r) => (
              <div className="review-card" key={r.quote}>
                <Quote size={22} />

                <div className="stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      size={13}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <strong>“{r.quote}”</strong>

                <span>
                  {r.source} · {r.note}
                </span>
              </div>
            ))}

            <div className="review-score">
              <strong>4.8★</strong>
              <span>60+ Yelp reviews currently listed</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
