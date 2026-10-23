export type GuideTocItem = { id: string; label: string; children?: GuideTocItem[] }

export type GuideStage = {
  id: string // 'stage-1' … 'stage-10'; must be unique on the page
  title: string
  forum: string // the real Lucknow forum where this stage happens
  body: string[] // 2–3 paragraphs, 60–110 words each
  provisions: string[] // e.g. 'Section 173 BNSS (formerly s.154 CrPC)'
  checklist?: string[] // optional practical points / documents
}

export type StatuteRow = { law: string; provisions: string; relevance: string }
