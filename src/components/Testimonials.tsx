'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, PenLine, Send, Star, X } from 'lucide-react'
import { REVIEWS_SCRIPT_URL, normalizeReviews, type Review } from '@/lib/reviews'

const AUTOPLAY_MS = 6000

const caseTypes = [
  'Civil Matters',
  'Criminal Matters',
  'Family & Divorce Matters',
  'Property Matters',
  'Service & Employment Matters',
  'Consumer Matters',
  'Motor Accident Claims',
  'Drafting & Legal Opinions',
  'Writ Petitions',
  'Company Matters',
  'Bail Matters',
  'Other Legal Matters',
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Testimonials({
  initialReviews,
}: {
  initialReviews: Review[] | null
}) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews ?? [])
  const [showForm, setShowForm] = useState(false)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')

  const [form, setForm] = useState({
    name: '',
    location: '',
    case: '',
    rating: 0,
    text: '',
  })

  const [perView, setPerView] = useState(3)
  const [index, setIndex] = useState(0)
  const [openReview, setOpenReview] = useState<Review | null>(null)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchX = useRef(0)
  const swiped = useRef(false)

  const maxIndex = Math.max(0, reviews.length - perView)
  const current = Math.min(index, maxIndex)
  const goTo = (i: number) => setIndex(i > maxIndex ? 0 : i < 0 ? maxIndex : i)

  // Fallback only: reviews normally arrive pre-rendered from the server cache.
  useEffect(() => {
    if (initialReviews) return
    fetch(`${REVIEWS_SCRIPT_URL}?action=get`)
      .then((r) => r.json())
      .then((data) => setReviews(normalizeReviews(data)))
      .catch(() => {})
  }, [initialReviews])

  useEffect(() => {
    const update = () =>
      setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [reviews.length])

  // Phones use swipe instead of autoplay.
  useEffect(() => {
    if (!inView || perView === 1 || paused || showForm || openReview || maxIndex === 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [inView, perView, paused, showForm, openReview, maxIndex])

  useEffect(() => {
    if (!openReview) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenReview(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openReview])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.case || !form.text || form.rating === 0) return

    setFormStatus('loading')

    try {
      await fetch(REVIEWS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          action: 'submit',
          timestamp: new Date().toISOString(),
          name: form.name,
          location: form.location || 'India',
          case: form.case,
          rating: form.rating,
          review: form.text,
          status: 'pending',
        }),
      })

      setFormStatus('success')
      setForm({
        name: '',
        location: '',
        case: '',
        rating: 0,
        text: '',
      })
    } catch {
      setFormStatus('error')
    }
  }

  return (
    
    <section id="testimonials" className="py-10 md:py-14 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold-500" />
            <span className="font-caps text-gold-600 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">
              Client Testimonials
            </span>
            <div className="w-12 h-px bg-gold-500" />
          </div>

          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 btn-gold text-navy-900 font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm"
          >
            <PenLine className="w-4 h-4" />
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        {showForm && (
          <div className="glass-card rounded-sm p-8 max-w-2xl mx-auto border border-gold-500/25">
            {formStatus === 'success' ? (
              <div className="text-center py-6">
                <h3 className="font-display text-xl font-bold mb-2">
                  Thank You!
                </h3>
                <p className="mb-6">
                  Your review has been submitted for approval.
                </p>
                <button
                  onClick={() => {
                    setFormStatus('idle')
                    setShowForm(false)
                  }}
                  className="btn-gold px-6 py-3 rounded-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block mb-2 text-xs uppercase">Rating *</label>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map((star)=>(
                      <button
                        key={star}
                        type="button"
                        onClick={()=>setForm({...form,rating:star})}
                        onMouseEnter={()=>setHoveredRating(star)}
                        onMouseLeave={()=>setHoveredRating(0)}
                      >
                        <Star className={`w-8 h-8 ${star <= (hoveredRating || form.rating) ? 'fill-gold-500 text-gold-500':'text-gold-500/30'}`}/>
                      </button>
                    ))}
                  </div>
                </div>

                <input className="input-luxury w-full px-4 py-3 rounded-sm" name="name" placeholder="Your Name *" value={form.name} onChange={handleChange}/>
                <input className="input-luxury w-full px-4 py-3 rounded-sm" name="location" placeholder="City" value={form.location} onChange={handleChange}/>

                <select className="input-luxury w-full px-4 py-3 rounded-sm" name="case" value={form.case} onChange={handleChange}>
                  <option value="">Select Type of Matter</option>
                  {caseTypes.map(c=><option key={c}>{c}</option>)}
                </select>

                <textarea className="input-luxury w-full px-4 py-3 rounded-sm" rows={4} name="text" placeholder="Your Review *" value={form.text} onChange={handleChange}/>

                {formStatus==='error' && (
                  <p className="text-red-500 text-sm">Something went wrong.</p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={formStatus==='loading'}
                  className="btn-gold w-full py-4 rounded-sm flex justify-center items-center gap-2"
                >
                  <Send className="w-4 h-4"/>
                  {formStatus==='loading' ? 'Submitting...' : 'Submit Review'}
                </button>
              </div>
            )}
          </div>
        )}

        {reviews.length > 0 && (
          <div
            ref={carouselRef}
            className="overflow-hidden mt-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX
              swiped.current = false
              setPaused(true)
            }}
            onTouchEnd={(e) => {
              setPaused(false)
              const dx = e.changedTouches[0].clientX - touchX.current
              swiped.current = Math.abs(dx) > 10
              if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1))
            }}
          >
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(calc(${-current} * (100% + 1.5rem) / ${perView}))` }}
            >
              {reviews.map((review,index)=>(
                <button
                  key={index}
                  type="button"
                  onClick={() => !swiped.current && setOpenReview(review)}
                  aria-label={`Read full review by ${review.name}`}
                  className="glass-card rounded-sm p-6 h-80 text-left flex flex-col overflow-hidden shrink-0 w-full md:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)] transition-colors hover:border-gold-500/50"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_,i)=>(
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-gold-500 text-gold-500':'text-gold-500/30'}`}/>
                    ))}
                  </div>

                  <span className="text-xs uppercase text-gold-600 line-clamp-1">{review.case}</span>

                  <p className="italic my-4 whitespace-pre-line line-clamp-5">&ldquo;{review.text}&rdquo;</p>

                  <div className="border-t pt-3 mt-auto w-full">
                    <div className="font-semibold truncate">{review.name}</div>
                    <div className="text-sm opacity-70 truncate">{review.location}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <button type="button" onClick={() => goTo(current - 1)} aria-label="Previous testimonial" className="p-2 rounded-full border border-gold-500/40 text-gold-600">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => goTo(d)}
                  aria-label={`Go to testimonial ${d + 1}`}
                  className={`h-2 rounded-full transition-all ${d === current ? 'w-6 bg-gold-500' : 'w-2 bg-gold-500/30'}`}
                />
              ))}
            </div>
            <button type="button" onClick={() => goTo(current + 1)} aria-label="Next testimonial" className="p-2 rounded-full border border-gold-500/40 text-gold-600">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {openReview && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Review by ${openReview.name}`}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={() => setOpenReview(null)} />
            <div className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto glass-card rounded-sm border border-gold-500/25 shadow-2xl p-6 md:p-8">
              <button
                type="button"
                autoFocus
                onClick={() => setOpenReview(null)}
                aria-label="Close"
                className="absolute top-3 right-3 p-1 opacity-70 hover:opacity-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_,i)=>(
                  <Star key={i} className={`w-4 h-4 ${i < openReview.rating ? 'fill-gold-500 text-gold-500':'text-gold-500/30'}`}/>
                ))}
              </div>

              <span className="text-xs uppercase text-gold-600">{openReview.case}</span>

              <p className="italic my-4 whitespace-pre-line">&ldquo;{openReview.text}&rdquo;</p>

              <div className="border-t pt-3">
                <div className="font-semibold">{openReview.name}</div>
                <div className="text-sm opacity-70">{openReview.location}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}