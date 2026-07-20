// 'use client'
// import { useState, useEffect } from 'react'
// import { Star, Quote, Send, PenLine, ArrowRight, ArrowUp } from 'lucide-react'

// // ─── CONFIGURATION ───────────────────────────────────────────────────────────
// // Create a NEW Google Sheet named "Sumanjari Reviews" with these headers in Row 1:
// // A: Timestamp | B: Name | C: Location | D: Case | E: Rating | F: Review | G: Status
// // Status column: manually set to "approved" to show review on website
// // Deploy a NEW Google Apps Script (see ReviewsScript.js) and paste URL below:
// const REVIEWS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw1TTp2FLMJU7vqEqlyos1Igl_WDcb16bSQ6dXszTnGy6PGUTXjOzwMdItBs-pZ1mmF/exec'
// // ─────────────────────────────────────────────────────────────────────────────

// const MAX_HOMEPAGE_REVIEWS = 6

// const caseTypes = [
//   'Civil Matters',
//   'Criminal Matters',
//   'Family & Divorce Matters',
//   'Property Matters',
//   'Service & Employment Matters',
//   'Consumer Matters',
//   'Motor Accident Claims',
//   'Drafting & Legal Opinions',
//   'Writ Petitions',
//   'Company Matters',
//   'Bail Matters',
//   'Other Legal Matters',
// ]

// // Static fallback reviews shown before any user reviews are approved
// const staticTestimonials = [
//   {
//     name: 'Rajesh Gupta',
//     location: 'Lucknow',
//     rating: 5,
//     text: 'Sumanjari & Co. handled my property dispute with professionalism and courtroom discipline before the Lucknow Bench.',
//     case: 'Property Dispute',
//   }
// ]

// type Review = {
//   name: string
//   location: string
//   rating: number
//   text: string
//   case: string
// }

// type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// export default function Testimonials() {
//   const [reviews, setReviews] = useState<Review[]>(staticTestimonials)
//   const [showForm, setShowForm] = useState(false)
//   const [showAll, setShowAll] = useState(false)
//   const [hoveredRating, setHoveredRating] = useState(0)
//   const [formStatus, setFormStatus] = useState<FormStatus>('idle')
//   const [form, setForm] = useState({
//     name: '',
//     location: '',
//     case: '',
//     rating: 0,
//     text: '',
//   })

//   // Fetch approved reviews from Google Sheets on load
//   useEffect(() => {
//     fetch(`${REVIEWS_SCRIPT_URL}?action=get`)
//       .then(r => r.json())
//       .then((data: Review[]) => {
//         if (data && data.length > 0) {
//           setReviews([...data, ...staticTestimonials])
//         }
//       })
//       .catch(() => {
//         // Silently fail — static reviews still show
//       })
//   }, [])

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   const handleSubmit = async () => {
//     if (!form.name || !form.case || !form.text || form.rating === 0) return
//     setFormStatus('loading')

//     try {
//       await fetch(REVIEWS_SCRIPT_URL, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: { 'Content-Type': 'text/plain' },
//         body: JSON.stringify({
//           action: 'submit',
//           timestamp: new Date().toISOString(),
//           name: form.name,
//           location: form.location || 'India',
//           case: form.case || 'General',
//           rating: form.rating,
//           review: form.text,
//           status: 'pending', // You approve in Google Sheets by changing to "approved"
//         }),
//       })
//       setFormStatus('success')
//       setForm({ name: '', location: '', case: '', rating: 0, text: '' })
//     } catch {
//       setFormStatus('error')
//     }
//   }

//   const visibleReviews = showAll ? reviews : reviews.slice(0, MAX_HOMEPAGE_REVIEWS)
//   const hasMore = reviews.length > MAX_HOMEPAGE_REVIEWS

//   const handleToggleShowAll = () => {
//     if (showAll) {
//       // collapsing — scroll back up to the section header
//       document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
//     }
//     setShowAll(prev => !prev)
//   }

//   return (
//     <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
//       {/* Background pattern */}
//       {/* <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03]" style={{
//         backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)',
//         backgroundSize: '40px 40px',
//       }} /> */}
    

//     <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none" style={{
//   backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)',
//   backgroundSize: '40px 40px',
// }} />
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="w-12 h-px bg-gold-500" />
//             <span className="font-caps text-gold-600 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">Client Testimonials</span>
//             <div className="w-12 h-px bg-gold-500" />
//           </div>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4">
//             What Our <em className="text-gold-gradient">Clients Say</em>
//           </h2>
//           <p className="font-body text-navy-700 dark:text-cream/50 text-lg max-w-xl mx-auto leading-relaxed mb-6">
//             Real experiences from clients we have served across Uttar Pradesh.
//           </p>
//           {/* Write Review Button */}
//           <button
//             type="button"
//             onClick={() => setShowForm(!showForm)}
//             className="inline-flex items-center gap-2 btn-gold text-navy-900 font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm"
//           >
//             <PenLine className="w-4 h-4" />
//             {showForm ? 'Cancel' : 'Write a Review'}
//           </button>
//         </div>

//         {/* Review Submission Form */}
//         {showForm && (
//           <div className="glass-card rounded-sm p-8 mb-12 max-w-2xl mx-auto border border-gold-500/25">
//             {formStatus === 'success' ? (
//               <div className="text-center py-8">
//                 <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center mx-auto mb-4">
//                   <Star className="w-7 h-7 text-gold-600 dark:text-gold-400 fill-gold-500" />
//                 </div>
//                 <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream mb-2">
//                   Thank You for Your Review!
//                 </h3>
//                 <p className="font-body text-navy-600/70 dark:text-cream/50 text-sm mb-6">
//                   Your review has been submitted and will appear after approval.
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => { setFormStatus('idle'); setShowForm(false) }}
//                   className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase border border-gold-500/35 px-6 py-3 rounded-sm hover:bg-gold-500/10 transition-colors"
//                 >
//                   Close
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-5">
//                 <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream mb-2">
//                   Share Your Experience
//                 </h3>

//                 {/* Star Rating */}
//                 <div>
//                   <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-3">
//                     Your Rating *
//                   </label>
//                   <div className="flex gap-2">
//                     {[1, 2, 3, 4, 5].map(star => (
//                       <button
//                         key={star}
//                         type="button"
//                         onClick={() => setForm(prev => ({ ...prev, rating: star }))}
//                         onMouseEnter={() => setHoveredRating(star)}
//                         onMouseLeave={() => setHoveredRating(0)}
//                         className="transition-transform hover:scale-110"
//                       >
//                         <Star
//                           className={`w-8 h-8 transition-colors ${
//                             star <= (hoveredRating || form.rating)
//                               ? 'text-gold-500 fill-gold-500'
//                               : 'text-gold-500/30'
//                           }`}
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="grid sm:grid-cols-2 gap-5">
//                   {/* Name */}
//                   <div>
//                     <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
//                       Your Name *
//                     </label>
//                     <input
//                       name="name"
//                       value={form.name}
//                       onChange={handleChange}
//                       placeholder="Full name"
//                       className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm"
//                     />
//                   </div>
//                   {/* Location */}
//                   <div>
//                     <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
//                       Location
//                     </label>
//                     <input
//                       name="location"
//                       value={form.location}
//                       onChange={handleChange}
//                       placeholder="City (e.g. Lucknow)"
//                       className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm"
//                     />
//                   </div>
//                 </div>

//                 {/* Case Type */}
//                 <div>
//                   <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
//                     Type of Matter
//                   </label>
//                   <select
//                     name="case"
//                     value={form.case}
//                     onChange={handleChange}
//                     className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm bg-white dark:bg-[rgba(255,255,255,0.04)]"
//                   >
//                     <option value="">Select type of matter</option>
//                     {caseTypes.map(c => (
//                       <option key={c} value={c} className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream">{c}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Review Text */}
//                 <div>
//                   <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
//                     Your Review *
//                   </label>
//                   <textarea
//                     name="text"
//                     value={form.text}
//                     onChange={handleChange}
//                     rows={4}
//                     placeholder="Share your experience with Sumanjari & Co..."
//                     className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm resize-none"
//                   />
//                 </div>

//                 {formStatus === 'error' && (
//                   <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
//                 )}

//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={formStatus === 'loading' || !form.name || !form.case || !form.text || form.rating === 0}
//                   className="btn-gold w-full text-navy-900 font-caps font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
//                 >
//                   {formStatus === 'loading' ? (
//                     <>
//                       <div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
//                       Submitting…
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       Submit Review
//                     </>
//                   )}
//                 </button>

//                 <p className="font-body text-navy-600/50 dark:text-cream/30 text-[11px] text-center">
//                   Reviews are moderated and appear after approval. Name and city only — no personal details stored.
//                 </p>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Reviews Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {visibleReviews.map((t, i) => (
//             <div key={i} className="glass-card rounded-sm p-7 card-glow relative">
//               <Quote className="absolute top-5 right-5 w-8 h-8 text-gold-500/20 dark:text-gold-500/15" />
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, j) => (
//                   <Star
//                     key={j}
//                     className={`w-4 h-4 ${j < t.rating ? 'text-gold-500 fill-gold-500' : 'text-gold-500/30'}`}
//                   />
//                 ))}
//               </div>
//               <div className="inline-block bg-gold-500/12 border border-gold-500/25 dark:bg-gold-500/10 dark:border-gold-500/20 px-3 py-1 rounded-full mb-4">
//                 <span className="font-caps text-gold-700 dark:text-gold-400 text-[10px] tracking-widest uppercase">{t.case}</span>
//               </div>
//               <p className="font-body text-navy-800/88 dark:text-cream/70 text-base leading-relaxed mb-6 italic">
//                 &ldquo;{t.text}&rdquo;
//               </p>
//               <div className="flex items-center gap-3 pt-4 border-t border-gold-500/15 dark:border-gold-500/10">
//                 <div className="w-10 h-10 rounded-full bg-gold-500/22 dark:bg-gold-500/20 flex items-center justify-center">
//                   <span className="font-display text-gold-600 dark:text-gold-400 font-bold text-sm">{t.name[0]}</span>
//                 </div>
//                 <div>
//                   <div className="font-caps text-navy-900 dark:text-cream text-sm tracking-wide">{t.name}</div>
//                   <div className="font-body text-navy-600/70 dark:text-cream/40 text-xs">{t.location}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More / View Less toggle */}
//         {hasMore && (
//           <div className="text-center mt-12">
//             <button
//               type="button"
//               onClick={handleToggleShowAll}
//               className="inline-flex items-center gap-2 font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase border border-gold-500/35 dark:border-gold-500/30 px-6 py-3 rounded-sm hover:bg-gold-500/12 dark:hover:bg-gold-500/10 transition-colors"
//             >
//               {showAll ? (
//                 <>
//                   Show Less
//                   <ArrowUp className="w-4 h-4" />
//                 </>
//               ) : (
//                 <>
//                   View More Reviews ({reviews.length - MAX_HOMEPAGE_REVIEWS} more)
//                   <ArrowRight className="w-4 h-4" />
//                 </>
//               )}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { PenLine, Send, Star } from 'lucide-react'

const REVIEWS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw1TTp2FLMJU7vqEqlyos1Igl_WDcb16bSQ6dXszTnGy6PGUTXjOzwMdItBs-pZ1mmF/exec'

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

type Review = {
  name: string
  location: string
  rating: number
  text: string
  case: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([])
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

  useEffect(() => {
    fetch(`${REVIEWS_SCRIPT_URL}?action=get`)
      .then((r) => r.json())
      .then((data: Review[]) => {
        if (Array.isArray(data)) setReviews(data)
      })
      .catch(() => {})
  }, [])

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reviews.map((review,index)=>(
              <div key={index} className="glass-card rounded-sm p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_,i)=>(
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-gold-500 text-gold-500':'text-gold-500/30'}`}/>
                  ))}
                </div>

                <span className="text-xs uppercase text-gold-600">{review.case}</span>

                <p className="italic my-4">&ldquo;{review.text}&rdquo;</p>

                <div className="border-t pt-3">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm opacity-70">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}