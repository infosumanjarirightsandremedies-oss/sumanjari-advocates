export type TeamOffice = 'lucknow' | 'ncr'

export const FIRM_EMAIL = 'info.sumanjarirightsandremedies@gmail.com'

export type TeamMember = {
  slug: string
  name: string
  role: string
  office: TeamOffice
  location: string
  credentials: string
  expertise: string[]
  img?: string
  focus?: string
  linkedin?: string
  // Only members without a hand-built page under /team/<slug> need the fields below.
  profile?: {
    summary: string
    bio: string[]
    experience?: string[]
    sections?: { title: string; items: string[] }[]
    phone?: string
    closingNote?: string
    memberships: string[]
    education: string[]
    languages?: string[]
    officeAddress?: string
  }
}

export const officeLabels: Record<TeamOffice, { title: string; subtitle: string }> = {
  lucknow: {
    title: 'Lucknow Team',
    subtitle: 'Allahabad High Court, Lucknow Bench, and the district courts of Uttar Pradesh.',
  },
  ncr: {
    title: 'NCR Team',
    subtitle: 'Supreme Court of India, Delhi High Court, and courts and tribunals across Delhi NCR.',
  },
}

export const teamMembers: TeamMember[] = [
  // Lucknow
  {
    slug: 'jitendra-tiwari',
    name: 'Adv. Jitendra Tiwari',
    role: 'Director',
    office: 'lucknow',
    location: 'Lucknow & Allahabad',
    credentials: 'B.A. LL.B. (Hons.)',
    expertise: ['Property & Land', 'Civil & Criminal Matters', 'Revenue Matters'],
    img: '/images/Jitendra.jpeg',
    focus: '50% 20%',
    linkedin: 'https://www.linkedin.com/in/jitendra-tiwari-838353254/',
  },
  {
    slug: 'aishwarya-pandey',
    name: 'Adv. Aishwarya Pandey',
    role: 'Associate Partner',
    office: 'lucknow',
    location: 'Lucknow',
    credentials: 'BBA LL.B. (Hons.), LL.M.',
    expertise: ['Family & Matrimonial', 'Constitutional Matters'],
    img: '/images/Aishwarya.jpeg',
    focus: '50% 15%',
    linkedin: 'https://www.linkedin.com/in/aishwarya-pandey-5553b0193/',
  },
  {
    slug: 'aditya-narayan-shukla',
    name: 'Adv. Aditya Narayan Shukla',
    role: 'Senior Associate Advocate',
    office: 'lucknow',
    location: 'Delhi, Lucknow & Prayagraj',
    credentials: 'B.A., LL.B. (University of Lucknow)',
    expertise: ['Criminal Matters', 'Civil Matters', 'Tax Matters', 'Arbitration Matters', 'Service Matters'],
    img: '/images/Adv. Aditya Narayan Shukla.webp',
    focus: '50% 15%',
    profile: {
      summary:
        'Senior Associate Advocate practising across Delhi, Lucknow and Allahabad in criminal, civil, tax, arbitration and service matters.',
      bio: [
        'Aditya Narayan Shukla is a Senior Associate Advocate associated with Sumanjari & Co. Advocates, practising across Delhi, Lucknow, and Allahabad. He advises and represents clients in a wide range of legal matters, including criminal litigation, civil disputes, tax matters, arbitration proceedings, and service law matters.',
        'A former Brief Holder, he developed extensive experience in case preparation, legal research, drafting, court procedure, and litigation strategy. This foundation enables him to provide practical and effective legal representation tailored to the needs of individual and institutional clients.',
        'Mr. Shukla has also been associated with banking and financial institutions. He has served on the legal panel of the Cooperative Bank of India (COBI) and is currently empanelled with the Central Bank of India, where he handles litigation and legal advisory matters.',
        'He is enrolled with the Bar Council of Uttar Pradesh and regularly appears before various courts, tribunals, and quasi-judicial authorities.',
      ],
      sections: [
        {
          title: 'Professional Experience',
          items: [
            'Senior Associate Advocate, Sumanjari & Co. Advocates',
            'Former Brief Holder',
            'Former Panel Counsel, Cooperative Bank of India (COBI)',
            'Current Panel Counsel, Central Bank of India',
          ],
        },
        {
          title: 'Practice Focus',
          items: [
            'Criminal Litigation',
            'Civil Litigation',
            'Tax Litigation and Advisory',
            'Arbitration and Alternative Dispute Resolution (ADR)',
            'Service Law Matters',
            'Banking and Recovery Matters',
            'Legal Drafting and Advisory Services',
          ],
        },
      ],
      phone: '9839935033',
      memberships: ['Bar Council of Uttar Pradesh'],
      education: ['LL.B., University of Lucknow', 'B.A., University of Lucknow'],
    },
  },
  {
    slug: 'priyesh-dwivedi',
    name: 'Adv. Priyesh Dwivedi',
    role: 'Associate Advocate',
    office: 'lucknow',
    location: 'Lucknow',
    credentials: 'LL.B., LL.M.',
    expertise: ['High Court Litigation', 'Civil & Criminal Matters'],
    img: '/images/Adv. Priyesh Dwivedi.jpeg',
    focus: '10% 2%',
  },
  {
    slug: 'adarsh-pratap-singh',
    name: 'Adv. Adarsh Pratap Singh',
    role: 'Associate Advocate',
    office: 'lucknow',
    location: 'Lucknow',
    credentials: 'B.A. LL.B., LL.M.',
    expertise: ['High Court Litigation', 'Civil & Criminal Matters'],
    img: '/images/Adarsh Pratap Singh.jpeg',
    focus: '10% 2%',
  },
  {
    slug: 'devesh-tiwari',
    name: 'Adv. Devesh Tiwari',
    role: 'Associate Advocate',
    office: 'lucknow',
    location: 'Lucknow',
    credentials: 'LL.B., LL.M.',
    expertise: ['High Court Litigation', 'Civil & Criminal Matters'],
    img: '/images/Devesh Tiwari.jpeg',
    focus: '10% 2%',
  },
  {
    slug: 'vinod-arya',
    name: 'Adv. Vinod Arya',
    role: 'Associate Advocate',
    office: 'lucknow',
    location: 'Gorakhpur & Lucknow',
    credentials: 'B.A. LL.B., LL.M.',
    expertise: ['Land & Revenue Matters', 'Criminal Matters'],
    img: '/images/Adv. Vinod Arya.jpeg',
    focus: '50% 15%',
    profile: {
      summary:
        'Associate Advocate practising in land and revenue laws and criminal matters before courts at Gorakhpur and Lucknow.',
      bio: [
        'Vinod Arya is an Associate Advocate at Sumanjari & Co. Advocates, practising in land and revenue laws and criminal matters before courts at Gorakhpur and Lucknow. He brings a strong academic foundation and a thorough, client-focused approach to his practice.',
        'He holds B.A. LL.B. and LL.M. degrees from Chandigarh University. His work spans land and revenue disputes as well as criminal matters, including drafting, case preparation and court appearances.',
        'He is enrolled with the Bar Council of Uttar Pradesh and the Bar Council of India.',
      ],
      memberships: ['Bar Council of Uttar Pradesh', 'Bar Council of India'],
      education: ['LL.M., Chandigarh University', 'B.A. LL.B., Chandigarh University'],
    },
  },
  {
    slug: 'prabhash-yadav',
    name: 'Adv. Prabhash Yadav',
    role: 'Associate Advocate',
    office: 'lucknow',
    location: 'Lucknow',
    credentials: 'B.Com, LL.B., LL.M. (Constitutional Law)',
    expertise: ['Criminal Law', 'Taxation Law'],
    img: '/images/Adv. Prabhash Yadav.jpeg',
    focus: '50% 15%',
    profile: {
      summary: 'Associate Advocate practising in criminal and taxation law at Lucknow.',
      bio: [
        'Prabhash Yadav is an Associate Advocate at Sumanjari & Co. Advocates, practising in criminal and taxation law at Lucknow. He brings a strong academic foundation in commerce, law and constitutional law, along with a thorough, client-focused approach to his practice.',
        'He holds a B.Com from CSJM University, Kanpur, an LL.B. from the University of Lucknow, and an LL.M. in Constitutional Law from SRMU. His commerce background complements his work in taxation, while his constitutional law training strengthens his criminal practice.',
        'He is enrolled with the Bar Council of Uttar Pradesh and the Bar Council of India.',
      ],
      memberships: ['Bar Council of Uttar Pradesh', 'Bar Council of India'],
      education: [
        'LL.M. (Constitutional Law), SRMU',
        'LL.B., University of Lucknow',
        'B.Com, CSJM University, Kanpur',
      ],
    },
  },
  {
    slug: 'akhilesh-yadav',
    name: 'Adv. Akhilesh Yadav',
    role: 'Associate Advocate',
    office: 'lucknow',
    location: 'Lucknow',
    credentials: 'B.Sc., LL.B., M.A. (Sociology)',
    expertise: ['Family Matters', 'Property Disputes', 'Waqf Board Matters'],
    img: '/images/Adv. Akhilesh Yadav.jpeg',
    focus: '50% 15%',
    profile: {
      summary:
        'Associate Advocate practising in family matters and property disputes, and panel lawyer for the Waqf Board.',
      bio: [
        'Akhilesh Yadav is an Associate Advocate at Sumanjari & Co. Advocates, practising in family matters and property disputes. He is also a panel lawyer for the Waqf Board.',
        "He holds an LL.B. and a Master's degree in Sociology from the University of Lucknow, and a B.Sc. degree. His sociology background gives him a deeper understanding of the personal and social context behind family and property disputes, which helps him advise clients with sensitivity and clarity.",
      ],
      memberships: ['Bar Council of Uttar Pradesh', 'Bar Council of India'],
      education: [
        'M.A. (Sociology), University of Lucknow',
        'LL.B., University of Lucknow',
        'B.Sc., Dr. Ram Manohar Lohia Avadh University',
      ],
      languages: ['Hindi', 'English'],
    },
  },

  // NCR
  {
    slug: 'shishir-pandey',
    img: '/images/Adv. Shishir Pandey.jpeg',
    focus: '50% 15%',
    name: 'Adv. Shishir Pandey',
    role: 'Associate Advocate',
    office: 'ncr',
    location: 'New Delhi',
    credentials: 'B.A. LL.B. (Symbiosis Law School, Pune), LL.M. (SRM University)',
    expertise: [
      'Money Laundering (PMLA) & Economic Offences',
      'Criminal Defence',
      'Customs, DRI & Benami Matters',
      'Commercial Arbitration',
    ],
    profile: {
      summary:
        'Associate Advocate practising before the Supreme Court of India, the Delhi High Court and specialised tribunals, focused on PMLA, economic offences, criminal defence and commercial arbitration.',
      bio: [
        'Shishir Pandey is an Associate Advocate practising before the Supreme Court of India, the Delhi High Court and specialised tribunals. His practice focuses on money laundering, economic offences, criminal defence, Benami proceedings, Customs and DRI matters, and commercial arbitration.',
        'He has handled significant proceedings involving the Enforcement Directorate, including challenges to attachment of property, freezing of bank accounts, and search and seizure. His approach combines close examination of financial records, careful legal research and precise drafting with focused courtroom advocacy. His wider practice includes constitutional and writ remedies, bail, criminal quashing, FEMA proceedings, Look Out Circular challenges, and civil and commercial disputes.',
      ],
      experience: [
        'Secured an Appellate Tribunal order setting aside the continued freezing of bank accounts and fixed deposits of approximately Rs. 4.48 crore in PMLA proceedings.',
        'Secured an order directing de-freezing of an FCRA bank account of approximately Rs. 8 crore.',
        'Handled PMLA proceedings involving attachment of properties, including overlapping attachments under the PMLA and the Uttar Pradesh Gangsters Act.',
        'Argued customs bail proceedings and an appeal concerning seized gold, confiscation and penalties.',
        'Argued before the Supreme Court of India for appointment of an arbitrator in an international arbitration dispute.',
      ],
      closingNote:
        'He has also contributed research to a book on the Prevention of Money Laundering Act authored by Dr. Shamsuddin, with a foreword by former Chief Justice of India U.U. Lalit.',
      memberships: ['Bar Council of Delhi', 'Delhi High Court Bar Association'],
      education: ['LL.M., SRM University', 'B.A. LL.B., Symbiosis Law School, Pune'],
      officeAddress: 'Chambers of Shishir Pandey, A-247, Defence Colony, New Delhi',
    },
  },
  {
    slug: 'aniket-bose',
    img: '/images/Adv. Aniket Bose.webp',
    focus: '50% 15%',
    name: 'Adv. Aniket Bose',
    role: 'Associate Advocate',
    office: 'ncr',
    location: 'Delhi',
    credentials: 'B.A. LL.B., LL.M.',
    expertise: [
      'Civil & Commercial Litigation',
      'Criminal Litigation',
      'Cheque Dishonour (Section 138, NI Act)',
      'Regulatory Matters',
    ],
    profile: {
      summary:
        'Associate Advocate in Delhi with over eight years of experience in civil, commercial, criminal and regulatory litigation.',
      bio: [
        'Aniket Bose is an Associate Advocate practising in Delhi, with over eight years of experience in civil, commercial, criminal and regulatory litigation.',
        'His practice covers a broad range of contentious and advisory matters, including civil and commercial disputes, specific performance suits, recovery proceedings, partition, injunction and declaration matters, cheque dishonour cases under Section 138 of the Negotiable Instruments Act, bail matters and criminal revisions. He has also drafted and filed Special Leave Petitions before the Supreme Court of India, and has vetted and reviewed corporate agreements.',
        'Aniket is known for his emphasis on legal research, strategic drafting and attention to detail. His experience across different areas of litigation helps him understand complex legal issues, build effective strategies and present them with clarity and precision. He stays committed to continuous learning and keeps abreast of evolving legal principles and judicial developments.',
      ],
      memberships: ['Bar Council of Delhi'],
      education: ['LL.M.', 'B.A. LL.B.'],
    },
  },
  {
    slug: 'rajesh-kumar',
    img: '/images/Adv. Rajesh Kumar.jpeg',
    focus: '50% 15%',
    name: 'Adv. Rajesh Kumar',
    role: 'Associate Advocate',
    office: 'ncr',
    location: 'Delhi',
    credentials: 'B.A. (Economics), LL.B. (BHU), LL.M., UGC-NET (Law)',
    expertise: ['Civil Litigation', 'Criminal Litigation'],
    profile: {
      summary:
        'Associate Advocate practising civil and criminal litigation before the Supreme Court of India, the Delhi High Court and the Patna High Court.',
      bio: [
        'Rajesh Kumar is an Associate Advocate at Sumanjari & Co. Advocates, practising in civil and criminal litigation before the Supreme Court of India, the Delhi High Court and the Patna High Court.',
        'He holds a B.A. in Economics, an LL.B. from Banaras Hindu University, and an LL.M. from SRMU, and has qualified the UGC-NET in Law. His academic grounding in economics and law supports a careful, research-driven approach to his matters.',
        'He is enrolled with the Bar Council of Delhi.',
      ],
      memberships: ['Bar Council of Delhi'],
      education: ['LL.M., SRMU', 'LL.B., Banaras Hindu University', 'B.A. (Economics)'],
    },
  },
  {
    slug: 'prerna-yaduvanshi',
    img: '/images/Adv. Prerna Yaduvanshi.webp',
    focus: '50% 15%',
    name: 'Adv. Prerna Yaduvanshi',
    role: 'Associate Advocate',
    office: 'ncr',
    location: 'Delhi',
    credentials: 'B.A. LL.B., LL.M.',
    expertise: [
      'Criminal & Matrimonial Matters',
      'Civil & Commercial Litigation',
      'Consumer Matters',
      'Contract Drafting & Vetting',
    ],
    profile: {
      summary:
        'Associate Advocate in Delhi handling criminal, civil, matrimonial, consumer and commercial matters; Legal Aid Counsel on the JMFC Panel, Tis Hazari Courts.',
      bio: [
        'Prerna Yaduvanshi is an Associate Advocate practising in Delhi, with experience in litigation, legal research, advisory work and commercial legal practice. She handles criminal, civil, matrimonial, consumer and commercial matters, with a focus on practical and effective legal assistance for clients.',
        'She is presently serving as Legal Aid Counsel on the JMFC Panel in the West District, Tis Hazari Courts, Delhi, where she handles criminal and matrimonial matters, including complaint cases, cheque dishonour proceedings under Section 138 of the Negotiable Instruments Act, domestic violence, maintenance, child custody, Section 498A matters and sexual harassment cases.',
        'Alongside her litigation practice, she has experience in contract drafting, review and vetting of commercial agreements, and disputes under the Commercial Courts Act. Her earlier work at the District Courts gave her substantial exposure to court proceedings, legal opinions, client advisory and execution proceedings.',
        'Prerna is known for her strong drafting and research skills and a commitment to understanding the individual needs of each client. She is proficient in legal research platforms including Manupatra and SCC Online.',
      ],
      memberships: ['Bar Council of Delhi'],
      education: [
        'LL.M., Amity University, Noida',
        'B.A. LL.B., Banasthali University, Rajasthan',
      ],
    },
  },
  {
    slug: 'arti-dwivedi',
    name: 'Adv. Arti Dwivedi',
    role: 'Associate Advocate',
    office: 'ncr',
    location: 'Delhi',
    credentials: 'B.Com LL.B. (Gold Medallist)',
    expertise: ['Taxation'],
    img: '/images/Adv. Arti.jpeg',
    focus: '50% 15%',
    profile: {
      summary:
        'Associate Advocate practising in taxation; gold medallist in law from Banasthali Vidyapith.',
      bio: [
        'Arti Dwivedi is an Associate Advocate at Sumanjari & Co. Advocates, practising in the area of taxation. She is a gold medallist in law and brings strong academic grounding and a disciplined approach to her work.',
        'She holds a B.Com LL.B. degree from Banasthali Vidyapith, where she graduated as a gold medallist in law. Her combined commerce and law background gives her a practical understanding of the financial and legal dimensions of tax matters, from compliance and advisory to dispute resolution.',
        'She is enrolled with the Bar Council of Delhi and the Bar Council of India.',
      ],
      memberships: ['Bar Council of Delhi', 'Bar Council of India'],
      education: ['B.Com LL.B., Banasthali Vidyapith (Gold Medallist in Law)'],
    },
  },
  {
    slug: 'jyotish-raj',
    name: 'Adv. Jyotish Raj',
    role: 'Associate Advocate',
    office: 'ncr',
    location: 'Delhi NCR',
    credentials: 'B.A. LL.B. (University of Lucknow), LL.M. (SRMU)',
    expertise: ['RERA Matters', 'Real Estate Disputes'],
    img: '/images/Adv. Jyotish Raj.webp',
    focus: '50% 15%',
    profile: {
      summary:
        'Associate Advocate practising in Delhi NCR, handling RERA matters and disputes between homebuyers and developers.',
      bio: [
        'Jyotish Raj is an Associate Advocate at Sumanjari & Co. Advocates, practising in Delhi NCR and handling matters under the Real Estate (Regulation and Development) Act, 2016 (RERA).',
        'He holds a B.A. LL.B. from the University of Lucknow and an LL.M. from SRMU. His practice focuses on RERA matters, including disputes between homebuyers and developers, with a careful, research-driven approach.',
        'He is enrolled with the Bar Council of Delhi.',
      ],
      memberships: ['Bar Council of Delhi'],
      education: ['LL.M., SRMU', 'B.A. LL.B., University of Lucknow'],
    },
  },
]

export function getMemberBySlug(slug: string) {
  return teamMembers.find((m) => m.slug === slug)
}
