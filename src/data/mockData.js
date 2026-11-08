// Comprehensive Mock Data for Hokena Care

export const JOURNEY_STAGES = [
  {
    id: 1,
    key: 'enquiry',
    title: 'ENQUIRY',
    shortTitle: 'Enquiry',
    description: 'Submit your medical inquiry, history and diagnostic reports for specialist evaluation.',
    path: '/patient/journey/enquiry',
    iconName: 'FileText',
    color: '#073B57',
    badge: 'Stage 1',
    estTime: 'Day 1'
  },
  {
    id: 2,
    key: 'consultation',
    title: 'CONSULTATION',
    shortTitle: 'Consultation',
    description: 'Connect with your dedicated coordinator and schedule an online video consultation with top Indian specialists.',
    path: '/patient/journey/consultation',
    iconName: 'Video',
    color: '#0B5678',
    badge: 'Stage 2',
    estTime: 'Day 2 - 3'
  },
  {
    id: 3,
    key: 'confirmation',
    title: 'CONFIRMATION',
    shortTitle: 'Plan & Quote',
    description: 'Receive multi-hospital tailored treatment plans, itemized cost estimates, and officially accept your quotation.',
    path: '/patient/journey/confirmation',
    iconName: 'CheckCircle2',
    color: '#FF791B',
    badge: 'Stage 3',
    estTime: 'Day 3 - 5'
  },
  {
    id: 4,
    key: 'visa',
    title: 'MEDICAL VISA',
    shortTitle: 'Medical Visa',
    description: 'Receive hospital Visa Assistance Letter (VAL) and track your Indian e-Medical Visa application approval.',
    path: '/patient/journey/visa',
    iconName: 'FileBadge',
    color: '#073B57',
    badge: 'Stage 4',
    estTime: 'Day 5 - 8'
  },
  {
    id: 5,
    key: 'travel',
    title: 'TRAVEL & ARRIVAL',
    shortTitle: 'Travel',
    description: 'Flight coordination, airport VIP pickup, hotel/guest house check-in and dedicated concierge reception.',
    path: '/patient/journey/travel',
    iconName: 'Plane',
    color: '#0B5678',
    badge: 'Stage 5',
    estTime: 'Day 9 - 10'
  },
  {
    id: 6,
    key: 'treatment',
    title: 'TREATMENT',
    shortTitle: 'Treatment',
    description: 'Hospital admission, pre-op tests, surgical intervention, expert care, and daily updates to family.',
    path: '/patient/journey/treatment',
    iconName: 'Stethoscope',
    color: '#FF791B',
    badge: 'Stage 6',
    estTime: 'Day 11 - 18'
  },
  {
    id: 7,
    key: 'recovery',
    title: 'RECOVERY',
    shortTitle: 'Recovery',
    description: 'Post-op recuperation, physical rehabilitation, medication management, and healing progress tracking.',
    path: '/patient/journey/recovery',
    iconName: 'HeartPulse',
    color: '#16A36A',
    badge: 'Stage 7',
    estTime: 'Day 19 - 25'
  },
  {
    id: 8,
    key: 'return',
    title: 'RETURN HOME',
    shortTitle: 'Return Home',
    description: 'Fit-to-fly clearance, discharge records, departure transfer, and 6-month continuous telemedicine follow-up.',
    path: '/patient/journey/return-home',
    iconName: 'Home',
    color: '#073B57',
    badge: 'Stage 8',
    estTime: 'Day 26+'
  }
];

export const TREATMENTS = [
  {
    id: 'knee-replacement',
    slug: 'knee-replacement',
    title: 'Robotic Total Knee Replacement',
    speciality: 'Orthopedics & Joint Replacement',
    shortDesc: 'Minimally invasive computer-navigated robotic joint replacement restoring painless mobility with 99% success rate.',
    fullDesc: 'Robotic Total Knee Replacement at India’s JCI-accredited centers utilizes state-of-the-art Mako and Rosa robotic platforms. It ensures sub-millimeter precision, minimal blood loss, rapid rehabilitation, and prolonged implant life lasting 25+ years. International patients benefit from private luxury recovery suites and customized physiotherapy.',
    costIndia: '₹3,50,000 - ₹4,85,000',
    costUS: '₹29,00,000 - ₹42,00,000',
    costUK: '₹19,00,000 - ₹26,50,000',
    savings: '75% - 85%',
    stayHospital: '3 - 4 days',
    stayIndia: '10 - 14 days',
    successRate: '99.2%',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    keyProcedures: [
      'Pre-operative 3D CT scan and robotic joint mapping',
      'Minimally invasive tissue-sparing surgical incision',
      'Robotic arm bone resection with sub-millimeter accuracy',
      'High-grade titanium / cobalt-chromium implant fixation',
      'Early ambulation therapy within 4 hours post-surgery'
    ],
    recommendedHospitals: ['Fortis Memorial Research Institute, Gurugram', 'Max Super Speciality Hospital, Saket', 'Apollo Hospitals, Chennai'],
    topDoctors: ['Dr. Ashok Rajgopal', 'Dr. S. K. S. Marya', 'Dr. Subhash Chandra']
  },
  {
    id: 'coronary-bypass',
    slug: 'coronary-bypass',
    title: 'CABG - Coronary Artery Bypass Grafting',
    speciality: 'Cardiology & Cardiac Surgery',
    shortDesc: 'Beating-heart bypass surgery by globally renowned cardiac surgeons with exceptional clinical outcomes.',
    fullDesc: 'Coronary Artery Bypass Grafting (CABG) in India is performed predominantly via off-pump (beating heart) techniques, significantly reducing risks of stroke and recovery complications. India’s heart institutes perform more than 50,000 cardiac procedures annually with mortality rates below 1%, comparable to the world’s best centers.',
    costIndia: '₹4,00,000 - ₹5,50,000',
    costUS: '₹58,00,000 - ₹1,00,00,000',
    costUK: '₹30,00,000 - ₹42,00,000',
    savings: '80% - 90%',
    stayHospital: '6 - 7 days',
    stayIndia: '14 - 18 days',
    successRate: '98.8%',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    keyProcedures: [
      'Comprehensive Coronary Angiography and 3D echocardiogram',
      'Off-pump coronary artery bypass (OPCAB / beating heart)',
      'Total arterial revascularization for longevity',
      'Dedicated 1-on-1 ICU cardiac intensive care monitoring',
      'Supervised step-down cardiac rehabilitation'
    ],
    recommendedHospitals: ['Medanta - The Medicity, Gurugram', 'Fortis Escorts Heart Institute, New Delhi', 'Apollo Hospitals, Chennai'],
    topDoctors: ['Dr. Naresh Trehan', 'Dr. Ashok Seth', 'Dr. Z. S. Meharwal']
  },
  {
    id: 'bone-marrow-transplant',
    slug: 'bone-marrow-transplant',
    title: 'Bone Marrow Transplant (BMT / Stem Cell)',
    speciality: 'Oncology (Cancer Care)',
    shortDesc: 'Autologous and allogeneic stem cell transplants in HEPA-filtered cleanrooms for leukemia, lymphoma, and sickle cell anemia.',
    fullDesc: 'Bone Marrow Transplantation in India offers life-saving curative therapy for leukemia, thalassemia major, sickle cell disease, aplastic anemia, and multiple myeloma. Dedicated BMT units feature HEPA-filtered positive pressure suites, dedicated apheresis units, and molecular HLA labs with international donor registries.',
    costIndia: '₹13,50,000 - ₹20,00,000',
    costUS: '₹2,10,00,000 - ₹2,95,00,000',
    costUK: '₹95,00,000 - ₹1,50,00,000',
    savings: '80% - 85%',
    stayHospital: '21 - 28 days',
    stayIndia: '45 - 60 days',
    successRate: '92%',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    keyProcedures: [
      'High-resolution HLA typing and donor matching',
      'Pre-transplant conditioning therapy (chemotherapy/radiation)',
      'Peripheral blood stem cell harvest or marrow harvest',
      'Stem cell infusion in sterile HEPA-filtered isolation suites',
      'Engraftment monitoring and comprehensive infection prophylaxis'
    ],
    recommendedHospitals: ['Fortis Memorial Research Institute, Gurugram', 'Apollo Cancer Centre, Chennai', 'Medanta The Medicity'],
    topDoctors: ['Dr. Vinod Raina', 'Dr. Suresh Advani', 'Dr. Dharma Choudhary']
  },
  {
    id: 'liver-transplant',
    slug: 'liver-transplant',
    title: 'Living Donor Liver Transplant (LDLT)',
    speciality: 'Organ Transplants (Liver & Kidney)',
    shortDesc: 'Pioneering adult and pediatric living donor liver transplants with survival rates exceeding 95%.',
    fullDesc: 'India is a recognized global hub for Living Donor Liver Transplantation (LDLT). Specialized transplant teams employ intra-operative ultrasound, robotic-assisted donor hepatectomy for fast donor recovery, and advanced pediatric microvascular surgical protocols under strict legal ethical frameworks.',
    costIndia: '₹21,00,000 - ₹27,00,000',
    costUS: '₹2,50,00,000 - ₹4,20,00,000',
    costUK: '₹1,60,00,000 - ₹2,10,00,000',
    savings: '85% - 90%',
    stayHospital: '14 - 18 days',
    stayIndia: '30 - 45 days',
    successRate: '95.5%',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    keyProcedures: [
      'Comprehensive donor and recipient immunological evaluation',
      '3D vascular volumetric CT reconstruction of liver anatomy',
      'Robotic / laparoscopic safe donor partial hepatectomy',
      'Microvascular anastomoses with continuous Doppler verification',
      'Intensive post-transplant immunosuppression titration'
    ],
    recommendedHospitals: ['Medanta - The Medicity, Gurugram', 'Max Super Speciality Hospital, Saket', 'Apollo Hospitals, New Delhi'],
    topDoctors: ['Dr. Subhash Gupta', 'Dr. Arvinder Singh Soin', 'Dr. Vivek Vij']
  },
  {
    id: 'spine-surgery',
    slug: 'spine-surgery',
    title: 'Minimally Invasive Spine Surgery (MISS)',
    speciality: 'Neurology & Spine Surgery',
    shortDesc: 'Keyhole microscopic and endoscopic disc decompression and artificial disc replacement with rapid discharge.',
    fullDesc: 'Advanced spine treatments in India use intraoperative O-Arm navigation, neuromonitoring, and endoscopic tubes to relieve nerve compression and stabilize spinal vertebrae without major muscle disruption. Patients experience immediate pain relief and resume walking the next morning.',
    costIndia: '₹3,75,000 - ₹5,70,000',
    costUS: '₹37,50,000 - ₹54,50,000',
    costUK: '₹23,00,000 - ₹31,50,000',
    savings: '75% - 85%',
    stayHospital: '2 - 3 days',
    stayIndia: '8 - 12 days',
    successRate: '98.5%',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    keyProcedures: [
      'High-tesla dynamic spine MRI and electromyography',
      'Targeted tubular endoscopic discectomy / decompression',
      'Percutaneous pedicle screw fixation with navigation',
      'Dynamic artificial disc replacement (cervical / lumbar)',
      'Targeted pain rehabilitation and posture counseling'
    ],
    recommendedHospitals: ['Fortis Memorial Research Institute, Gurugram', 'Artemis Hospital, Gurugram', 'Apollo Hospitals, Chennai'],
    topDoctors: ['Dr. Bipin Walia', 'Dr. H. N. Bajaj', 'Dr. Arun Saroha']
  },
  {
    id: 'ivf-fertility',
    slug: 'ivf-fertility',
    title: 'Advanced IVF with ICSI & PGT-A',
    speciality: 'IVF & Fertility Treatment',
    shortDesc: 'High-success assisted reproductive technology with blastocyst culture and pre-implantation genetic testing.',
    fullDesc: 'World-class reproductive endocrinology and embryology cleanrooms in India achieve pregnancy success rates of over 70% in younger age groups. Protocols include ICSI, IMSI, laser-assisted hatching, cryopreservation, and advanced PGT-A chromosomal screening.',
    costIndia: '₹2,35,000 - ₹3,50,000',
    costUS: '₹15,00,000 - ₹21,00,000',
    costUK: '₹9,50,000 - ₹14,70,000',
    savings: '70% - 80%',
    stayHospital: 'Outpatient / Daycare',
    stayIndia: '14 - 21 days',
    successRate: '68% - 74%',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    keyProcedures: [
      'Personalized ovarian hormonal stimulation tracking',
      'Ultrasound-guided transvaginal oocyte retrieval',
      'Intracytoplasmic Sperm Injection (ICSI) with blastocyst culture',
      'PGT-A genetic embryo aneuploidy testing',
      'Painless ultrasound-guided frozen embryo transfer'
    ],
    recommendedHospitals: ['Apollo Cradle & Fertility, New Delhi', 'Max Healthcare Institute', 'Fortis Bloom IVF Centre'],
    topDoctors: ['Dr. Hrishikesh Pai', 'Dr. Nandita Palshetkar', 'Dr. Shivani Sachdev Gour']
  }
];

export const HOSPITALS = [
  {
    id: 'fmri-gurugram',
    name: 'Fortis Memorial Research Institute (FMRI)',
    city: 'Gurugram (Delhi NCR)',
    accreditations: ['JCI Accredited', 'NABH Certified', 'NABL Lab', 'ISO 9001'],
    rating: 4.9,
    reviewsCount: 1420,
    beds: '1,000 Beds',
    distanceAirport: '18 km from Delhi Airport (25 mins)',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    description: 'FMRI is hailed as the "Mecca of Healthcare" for Asia-Pacific. A multi-super-speciality, quaternary care hospital with an enviable faculty of reputed clinicians and state-of-the-art robotic technology.',
    facilities: [
      'Dedicated International Patient Lounge with multi-lingual concierges',
      'Robotic Da Vinci surgical systems & CyberKnife radiosurgery',
      'Executive private inpatient suites with attendant quarters',
      'On-site international currency exchange & Western Union',
      'Halal, Continental, African, and vegetarian dining kitchens',
      'Direct airport ambulance and VIP transfer coordination'
    ],
    specialities: ['Oncology', 'Cardiology', 'Bone Marrow Transplant', 'Robotic Orthopedics', 'Neurosciences']
  },
  {
    id: 'medanta-gurugram',
    name: 'Medanta - The Medicity',
    city: 'Gurugram (Delhi NCR)',
    accreditations: ['JCI Accredited', 'NABH Certified', 'NABL Lab'],
    rating: 4.9,
    reviewsCount: 1980,
    beds: '1,250 Beds',
    distanceAirport: '19 km from Delhi Airport (28 mins)',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    description: 'Founded by legendary cardiac surgeon Dr. Naresh Trehan, Medanta spans 43 acres and houses 6 institutes delivering cutting-edge cardiac, liver transplant, neuro, and oncology care.',
    facilities: [
      'Comprehensive organ transplant center with >4,000 successful transplants',
      'Dedicated International Guest House inside the campus',
      'Simultaneous multi-lingual interpretation in 12 languages',
      'State-of-the-art hybrid operating theatres',
      '24/7 patient visa extension desk and FRRO liaison officer'
    ],
    specialities: ['Cardiovascular Care', 'Living Donor Liver Transplant', 'Neurosurgery', 'Urology', 'Orthopedics']
  },
  {
    id: 'apollo-chennai',
    name: 'Apollo Hospitals (Greams Road)',
    city: 'Chennai, Tamil Nadu',
    accreditations: ['JCI Accredited', 'NABH Certified', 'AABB Blood Bank'],
    rating: 4.8,
    reviewsCount: 2310,
    beds: '600 Beds',
    distanceAirport: '15 km from Chennai Airport (30 mins)',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'The flagship hospital of the Apollo Group, known as the pioneer of modern private healthcare in India. Renowned globally for complex cardiac procedures, oncology, and robotic knee surgeries.',
    facilities: [
      'Asia’s first Proton Beam Cancer Therapy Center',
      'Over 160,000 heart surgeries performed with 99.6% success',
      'Exclusive international wing with dedicated floor and kitchen',
      'Telemedicine tele-radiology hub connecting patients worldwide'
    ],
    specialities: ['Proton Cancer Therapy', 'Cardiac Sciences', 'Orthopedic Robotic Surgery', 'Kidney Transplants']
  },
  {
    id: 'max-saket',
    name: 'Max Super Speciality Hospital (Saket)',
    city: 'New Delhi',
    accreditations: ['JCI Accredited', 'NABH Certified', 'FICCI Awarded'],
    rating: 4.8,
    reviewsCount: 1650,
    beds: '530 Beds',
    distanceAirport: '14 km from Delhi Airport (22 mins)',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    description: 'Located in south Delhi, Max Saket is a premium tertiary center renowned for bone marrow transplants, neurosciences, high-end cancer therapies, and metabolic surgeries.',
    facilities: [
      'TrueBeam LINAC with Novalis Tx for ultra-precise radiation',
      'Specialized pediatric cardiac ICU and neonatal units',
      'Liaison coordinators fluent in Arabic, Russian, and French',
      'Concierge service for family accommodation in nearby defense colony/Saket'
    ],
    specialities: ['Bone Marrow Transplant', 'Neurosurgery & Spine', 'Aesthetic & Bariatric Surgery', 'Gastroenterology']
  }
];

export const DOCTORS = [
  {
    id: 'dr-naresh-trehan',
    name: 'Dr. Naresh Trehan',
    designation: 'Chief Cardiac Surgeon & Chairman',
    hospital: 'Medanta - The Medicity, Gurugram',
    speciality: 'Cardiology & Cardiac Surgery',
    experience: '45+ Years Experience',
    qualification: 'MBBS, MD, FACS, FAMS (New York University Medical Center)',
    surgeries: 'Over 52,000 successful open-heart surgeries',
    rating: 5.0,
    reviewsCount: 890,
    languages: ['English', 'Hindi', 'Punjabi'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    availableDays: ['Mon', 'Wed', 'Fri'],
    consultationFee: '₹4,000 (Free for Hokena Patients)',
    bio: 'Dr. Trehan is one of the world’s most celebrated cardiovascular and cardiothoracic surgeons. Former faculty at NYU Medical Center, he is recipient of the Padma Bhushan and Padma Shri awards by the President of India.'
  },
  {
    id: 'dr-ashok-rajgopal',
    name: 'Dr. Ashok Rajgopal',
    designation: 'Group Chairman - Institute of Orthopedics',
    hospital: 'Fortis Memorial Research Institute, Gurugram',
    speciality: 'Orthopedics & Joint Replacement',
    experience: '38+ Years Experience',
    qualification: 'MS (Ortho), M.Ch (Ortho, Liverpool, UK), FRCS',
    surgeries: 'Over 33,000 Total Knee Replacements',
    rating: 4.9,
    reviewsCount: 740,
    languages: ['English', 'Hindi'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    availableDays: ['Tue', 'Thu', 'Sat'],
    consultationFee: '₹4,000 (Free for Hokena Patients)',
    bio: 'Pioneer of minimally invasive and computer-navigated total knee replacement in India. Holds the world record for the highest number of knee arthroplasties with exemplary safety records.'
  },
  {
    id: 'dr-subhash-gupta',
    name: 'Dr. Subhash Gupta',
    designation: 'Chairman - Liver & Biliary Sciences',
    hospital: 'Max Super Speciality Hospital, Saket',
    speciality: 'Organ Transplants (Liver & Kidney)',
    experience: '32+ Years Experience',
    qualification: 'MS, FRCS (Edinburgh), FRCS (Glasgow)',
    surgeries: 'Over 3,500 Living Donor Liver Transplants',
    rating: 4.9,
    reviewsCount: 512,
    languages: ['English', 'Hindi'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    availableDays: ['Mon', 'Tue', 'Thu'],
    consultationFee: '₹4,500 (Free for Hokena Patients)',
    bio: 'Internationally recognized liver transplant pioneer. Former surgeon at Queen Elizabeth Hospital, Birmingham. Has pioneered rapid recovery living donor liver transplant in South Asia.'
  },
  {
    id: 'dr-bipin-walia',
    name: 'Dr. Bipin Walia',
    designation: 'Head - Neurosurgery & Spine Institute',
    hospital: 'Fortis Memorial Research Institute, Gurugram',
    speciality: 'Neurology & Spine Surgery',
    experience: '30+ Years Experience',
    qualification: 'MBBS, MS, M.Ch (Neurosurgery), AIIMS New Delhi',
    surgeries: 'Over 10,000 Spine & Cranial Surgeries',
    rating: 4.9,
    reviewsCount: 460,
    languages: ['English', 'Hindi'],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    availableDays: ['Mon', 'Wed', 'Sat'],
    consultationFee: '₹4,000 (Free for Hokena Patients)',
    bio: 'Expert in motion-preserving spine surgery, endoscopic discectomy, and artificial disc replacement trained at premier global centers in Switzerland and the United States.'
  },
  {
    id: 'dr-vinod-raina',
    name: 'Dr. Vinod Raina',
    designation: 'Executive Director - Medical Oncology & Hematology',
    hospital: 'Fortis Memorial Research Institute, Gurugram',
    speciality: 'Oncology (Cancer Care)',
    experience: '36+ Years Experience',
    qualification: 'MBBS, MD (Medicine), MRCP (UK), FRCP (Edinburgh)',
    surgeries: 'Performed first high-dose chemotherapy & BMT in India',
    rating: 5.0,
    reviewsCount: 620,
    languages: ['English', 'Hindi', 'Kashmiri'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    availableDays: ['Tue', 'Wed', 'Fri'],
    consultationFee: '₹4,000 (Free for Hokena Patients)',
    bio: 'One of India’s most revered oncologists. Former Professor & Head of Medical Oncology at AIIMS. Has performed hundreds of successful autologous and allogeneic stem cell transplants.'
  }
];

export const SUCCESS_STORIES = [
  {
    id: 'story-1',
    patientName: 'David & Sarah Jenkins',
    country: 'United Kingdom',
    flag: '🇬🇧',
    condition: 'Bilateral Knee Replacement',
    doctor: 'Dr. Ashok Rajgopal',
    hospital: 'Fortis Memorial, Gurugram',
    savings: 'Saved £32,000 vs UK private hospital',
    quote: 'In the UK, the NHS waitlist was 18 months and private was unaffordable. Hokena Care handled everything: our medical visas, airport pickup, lovely serviced apartment, and Dr. Rajgopal had me walking pain-free in 4 days!',
    image: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=600&q=80',
    timeline: '14 Days from Inquiry to Return Home'
  },
  {
    id: 'story-2',
    patientName: 'Amina Mwangi',
    country: 'Kenya',
    flag: '🇰🇪',
    condition: 'Cardiac Valve Repair & Bypass',
    doctor: 'Dr. Naresh Trehan',
    hospital: 'Medanta - The Medicity',
    savings: '78% lower cost than South Africa / Europe',
    quote: 'My mother was in severe heart failure in Nairobi. Within 36 hours of contacting Hokena Care, we had our Indian medical visa invitations. The hospital care in Delhi was world-class. My mother is now back home tending her garden.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    timeline: 'Arrived Day 8, Discharged Day 16'
  },
  {
    id: 'story-3',
    patientName: 'Tariq Al-Balushi',
    country: 'Oman',
    flag: '🇴🇲',
    condition: 'Minimally Invasive Spine Fusion',
    doctor: 'Dr. Bipin Walia',
    hospital: 'Fortis Memorial, Gurugram',
    savings: 'Saved ₹20+ Lakhs vs Germany option',
    quote: 'The Arabic coordinator provided by Hokena Care was by our side 24/7. Halal food, peaceful prayer facilities, and the robotic spine surgery completely cured my debilitating sciatica. Shukran Hokena Care!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    timeline: 'Full recovery in 10 days in Delhi'
  },
  {
    id: 'story-4',
    patientName: 'Olumide Adeleke',
    country: 'Nigeria',
    flag: '🇳🇬',
    condition: 'Pediatric Bone Marrow Transplant',
    doctor: 'Dr. Vinod Raina',
    hospital: 'Apollo Hospitals, Chennai',
    savings: '82% savings compared to United States',
    quote: 'Our 9-year-old son was battling sickle cell anemia. Today, after his transplant in India, his hemoglobin is normal and he is completely cured. Hokena Care is not just a medical agency; they treated us like family.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    timeline: '60 Days comprehensive BMT cure'
  }
];

export const FAQS = [
  {
    category: 'Medical Visa & FRRO',
    question: 'How quickly can Hokena Care arrange an Indian Medical Visa (e-Med Visa)?',
    answer: 'Once our medical board reviews your diagnosis and partner hospital confirms acceptance, we issue an official Hospital Visa Assistance Letter (VAL) within 24 hours. The Indian e-Medical Visa is typically granted online by the Indian Government within 48 to 72 hours. Up to two medical attendants can accompany you on an e-Medical Attendant Visa.'
  },
  {
    category: 'Medical Visa & FRRO',
    question: 'Will someone assist us with local FRRO registration in India?',
    answer: 'Yes, absolutely. Our dedicated Hokena Care hospital liaison officer completes all FRRO (Foreigners Regional Registration Office) formalities and visa extensions on your behalf directly from the hospital desk without requiring you to visit government offices.'
  },
  {
    category: 'Costs & Quotations',
    question: 'Are Hokena Care services free for international patients?',
    answer: 'Yes! Hokena Care’s advisory, doctor consultations coordination, quotation comparison, airport pickup, and personal bedside assistance are 100% free of charge for patients. You pay only the hospital directly for your treatment with zero markups or hidden fees.'
  },
  {
    category: 'Costs & Quotations',
    question: 'How accurate is the initial treatment quotation?',
    answer: 'Our quotations are comprehensive institutional packages provided directly by hospital finance boards. They encompass surgeon fees, operating room charges, implant costs, standard ICU and room stay, pre-op diagnostics, and standard discharge medications. If unexpected clinical findings occur, doctors consult you in advance before adding services.'
  },
  {
    category: 'Travel & Accommodation',
    question: 'Who meets us when our flight lands at Delhi or Chennai airport?',
    answer: 'A dedicated Hokena Care representative and private chauffeur will be waiting inside the arrivals terminal holding a placard with your name. They assist with luggage, provide a local high-speed 5G SIM card, and escort you in an air-conditioned vehicle directly to your accommodation or hospital.'
  },
  {
    category: 'Travel & Accommodation',
    question: 'What accommodation options are available for family members?',
    answer: 'We partner with sanitized 3-star and 4-star serviced apartments and hotels located within 5 to 10 minutes of your hospital. They feature full kitchens for custom dietary cooking, 24/7 security, high-speed Wi-Fi, and elevators.'
  },
  {
    category: 'Clinical Care & Language',
    question: 'Is language a barrier in Indian hospitals?',
    answer: 'Not at all. English is the official working language of all doctors and nursing staff across our partner JCI hospitals. Furthermore, Hokena Care provides dedicated in-person translators fluent in Arabic, French, Russian, Kiswahili, and Uzbek at no extra charge.'
  },
  {
    category: 'Post-Treatment & Follow-up',
    question: 'What happens after I return to my home country?',
    answer: 'Your care continues through Hokena Care’s 6-Month Post-Treatment Program. We coordinate scheduled telemedicine video check-ups with your operating surgeon, review local lab tests, and liaise with your hometown family physician.'
  }
];

// Default Initial Patient (Michael Chen - British Patient at Stage 3)
export const INITIAL_PATIENT = {
  id: 'HKN-2024-8841',
  fullName: 'Michael Chen',
  email: 'michael.chen@gmail.com',
  phone: '+44 7911 123456',
  dialCode: '+44',
  country: 'United Kingdom',
  nationality: 'British',
  dob: '1972-04-18',
  gender: 'Male',
  bloodGroup: 'O Positive',
  passportNumber: 'GB94820194',
  passportExpiry: '2029-08-15',
  passportIssueCountry: 'United Kingdom',
  emergencyContact: {
    name: 'Sarah Chen',
    relationship: 'Spouse',
    phone: '+44 7911 654321',
    email: 'sarah.chen@gmail.com'
  },
  currentCondition: 'Severe Osteoarthritis of Right Knee with cartilage erosion',
  speciality: 'Orthopedics & Joint Replacement',
  preferredTreatment: 'Robotic Total Knee Replacement',
  currentStage: 3, // Stage 3: Confirmation / Quotation
  journeyProgress: 37, // Percentage
  status: 'Quotation Ready for Review',
  assignedCoordinator: {
    name: 'Ms. Priya Sharma',
    title: 'Senior International Patient Care Manager',
    phone: '+91 98710 44210',
    whatsapp: '+91 98710 44210',
    email: 'priya.sharma@hokenacare.com',
    avatar: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=300&q=80',
    availability: 'Available 24/7 for you'
  },
  nextAppointment: {
    doctorName: 'Dr. Ashok Rajgopal',
    speciality: 'Chairman - Orthopedics',
    hospital: 'Fortis Memorial Research Institute, Gurugram',
    date: '12 Nov 2024',
    time: '02:30 PM IST (09:00 AM UK)',
    type: 'Pre-Travel Video Consultation',
    status: 'Confirmed'
  },
  pendingActions: [
    { id: 1, title: 'Review & Accept Treatment Quotation', type: 'urgent', stage: 3, link: '/patient/journey/confirmation' },
    { id: 2, title: 'Upload Passport Scan for Medical Visa Letter', type: 'pending', stage: 4, link: '/patient/journey/visa' },
    { id: 3, title: 'Submit Flight Preferences for VIP Airport Pickup', type: 'upcoming', stage: 5, link: '/patient/journey/travel' }
  ]
};

export const INITIAL_QUOTATION = {
  quotationId: 'HKN-QT-2024-4091',
  dateIssued: '04 Nov 2024',
  validUntil: '04 Dec 2024',
  status: 'PENDING_APPROVAL', // PENDING_APPROVAL, ACCEPTED, REVISION_REQUESTED
  patientName: 'Michael Chen',
  patientId: 'HKN-2024-8841',
  hospital: 'Fortis Memorial Research Institute (FMRI)',
  hospitalLocation: 'Sector 44, Gurugram, Delhi NCR, India',
  doctorName: 'Dr. Ashok Rajgopal',
  treatmentName: 'Robotic Total Knee Replacement (Right Knee)',
  implantType: 'Stryker Triathlon Crosslinked Polyethylene & Titanium Alloy (US FDA Approved)',
  estimatedDuration: '10 - 12 Days total stay in India',
  currency: 'INR',
  costBreakdown: [
    { item: 'Robotic Surgery & Surgical Faculty Fee', cost: 2400, notes: 'Includes Chief Surgeon, Anesthetist, Surgical Assistants' },
    { item: 'US FDA Approved High-Flex Knee Implant', cost: 1300, notes: 'Premium Stryker ceramic-titanium longevity implant' },
    { item: 'Hospital Inpatient Stay (Private Deluxe Suite)', cost: 750, notes: '3 nights in single deluxe room with attendant bed' },
    { item: 'Operating Theater, Consumables & Medication', cost: 450, notes: 'Standard surgical pharmacy, disposables and anesthesia' },
    { item: 'Pre-operative Diagnostic Workup & 3D CT Scan', cost: 250, notes: 'Bone densitometry, robotic pre-op alignment mapping' },
    { item: 'In-Hospital Physical Therapy & Rehabilitation', cost: 150, notes: 'Twice daily specialized physiotherapy and walker' },
    { item: 'Airport VIP Transfers & Hokena Concierge', cost: 0, notes: 'Complimentary by Hokena Care ($0 free perk)' }
  ],
  hospitalTotal: 5300,
  accommodationEstimate: {
    type: 'Serviced 1-Bedroom Apartment (5 mins from hospital)',
    nights: 8,
    ratePerNight: 45,
    total: 360,
    notes: 'Kitchenette, high speed wifi, daily housekeeping, 24/7 security'
  },
  otherExpensesEstimate: {
    localTransportation: 80,
    patientSpecialDiet: 120,
    miscellaneousMedicinesPostDischarge: 90,
    total: 290
  },
  grandTotal: 5950,
  comparisonUK: 23500, // GBP converted to USD approx $30,000
  savingsPercentage: 80,
  termsAndConditions: [
    'Quotation is based on review of provided MRI scans and clinical history.',
    'Includes 3 days hospital stay. Additional days if clinically required will be billed as per standard hospital tariff.',
    'Quotation does not include treatment of unrelated pre-existing acute medical conditions requiring extra ICU.',
    'Payment is payable directly at Fortis Memorial hospital billing counter via Card, Bank Transfer, or Cash.'
  ]
};

export const INITIAL_ENQUIRIES = [
  {
    id: 'HKN-ENQ-9283',
    date: '02 Nov 2024',
    condition: 'Severe Osteoarthritis Right Knee',
    speciality: 'Orthopedics & Joint Replacement',
    preferredTreatment: 'Robotic Total Knee Replacement',
    preferredHospital: 'Fortis Memorial Research Institute, Gurugram',
    symptoms: 'Extreme pain while walking, inability to climb stairs for past 9 months, morning stiffness.',
    medicalHistory: 'Mild hypertension controlled with Lisinopril 5mg daily. No diabetes.',
    status: 'Reviewed - Plan Issued',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    documentsCount: 4,
    notes: 'Case evaluated by Dr. Ashok Rajgopal team. Patient is prime candidate for robotic partial or total knee arthroplasty.'
  }
];

export const INITIAL_DOCUMENTS = [
  {
    id: 'doc-1',
    name: 'Right_Knee_MRI_Full_Report.pdf',
    type: 'MRI / Radiology Report',
    category: 'Radiology',
    size: '4.8 MB',
    date: '28 Oct 2024',
    doctor: 'Dr. Evans, St. Mary’s London',
    verified: true,
    fileUrl: '#'
  },
  {
    id: 'doc-2',
    name: 'Knee_XRay_WeightBearing_AP_Lateral.jpg',
    type: 'Diagnostic X-Ray',
    category: 'Imaging',
    size: '3.1 MB',
    date: '28 Oct 2024',
    doctor: 'Harley Imaging Clinic',
    verified: true,
    fileUrl: '#'
  },
  {
    id: 'doc-3',
    name: 'Comprehensive_Blood_Panel_Coagulation.pdf',
    type: 'Hematology / Lab Work',
    category: 'Laboratory',
    size: '1.2 MB',
    date: '30 Oct 2024',
    doctor: 'NHS Diagnostic Labs',
    verified: true,
    fileUrl: '#'
  },
  {
    id: 'doc-4',
    name: 'Cardiologist_Surgical_Fitness_Summary.pdf',
    type: 'Cardiac Clearance',
    category: 'Medical Clearance',
    size: '950 KB',
    date: '01 Nov 2024',
    doctor: 'Dr. Henderson, Consultant Cardiologist',
    verified: true,
    fileUrl: '#'
  }
];

export const INITIAL_VISA_DETAILS = {
  patientPassportNumber: 'GB94820194',
  patientFullName: 'Michael Chen',
  attendantPassportNumber: 'GB88210339',
  attendantFullName: 'Sarah Chen (Spouse & Caregiver)',
  hospitalInvitationLetterStatus: 'GENERATED_READY',
  hospitalLetterRef: 'FMRI/INTL/VAL/2024/9912',
  hospitalName: 'Fortis Memorial Research Institute, Gurugram',
  indianEmbassyJurisdiction: 'High Commission of India, London, UK',
  eMedVisaCategory: 'Medical e-Visa (Triple Entry, 60 Days)',
  currentStatus: 'Documents Pending', // Not Started, Documents Pending, Under Review, Submitted, Approved
  progressStep: 2, // 1 to 5
  checklist: [
    { item: 'Valid Passport copy with minimum 6 months validity', completed: true },
    { item: 'Recent passport photo with white background (2x2 inch)', completed: true },
    { item: 'Official Hospital Visa Assistance Letter (Hokena issued)', completed: true },
    { item: 'Attendant passport copy & proof of relationship', completed: true },
    { item: 'Copy of primary diagnostic MRI reports', completed: true },
    { item: 'Government e-Visa Portal Submission', completed: false }
  ],
  letterDownloadUrl: '#'
};

export const INITIAL_TRAVEL_DETAILS = {
  flightStatus: 'Pending Flight Booking',
  airline: 'British Airways',
  flightNumber: 'BA 143',
  departureAirport: 'London Heathrow (LHR)',
  arrivalAirport: 'Indira Gandhi International Airport, New Delhi (DEL)',
  arrivalDate: '10 Nov 2024',
  arrivalTime: '07:45 AM IST',
  terminal: 'Terminal 3 (International)',
  airportPickup: {
    status: 'Confirmed - Complimentary VIP',
    driverName: 'Rajesh Kumar',
    driverPhone: '+91 98101 22334',
    vehicleModel: 'Toyota Innova Crysta (Luxury Medical Cab)',
    licensePlate: 'DL 1ZB 4092',
    pickupPoint: 'Gate 4, International Arrivals Terminal 3',
    meetingPlacard: 'MR. MICHAEL CHEN - HOKENA CARE'
  },
  accommodation: {
    name: 'The Palm Medisuites Serviced Apartments',
    address: 'Plot 42, Sector 44, Gurugram (Near FMRI Metro Station)',
    distanceToHospital: '450 meters (3 minutes walk / wheelchair accessible)',
    roomType: 'Executive 1-Bedroom Suite with Private Kitchen & Balcony',
    checkIn: '10 Nov 2024 (11:00 AM)',
    checkOut: '22 Nov 2024 (12:00 PM)',
    amenities: ['Custom Diabetic/Low-salt Meals', '24/7 Nurse on Call', 'High-speed Wi-Fi', 'Complimentary Laundry', 'Elevator & Ramp Access'],
    managerContact: 'Mr. Amit Verma (+91 99110 55667)'
  },
  travelCoordinator: {
    name: 'Vikram Sethi',
    role: 'Hokena International Logistics Officer',
    phone: '+91 98711 77889',
    whatsapp: '+91 98711 77889'
  }
};

export const INITIAL_TREATMENT_DETAILS = {
  hospitalName: 'Fortis Memorial Research Institute (FMRI)',
  roomNumber: 'Suite 412 - International Executive Wing',
  admissionDate: '11 Nov 2024',
  surgeryDate: '12 Nov 2024 - 08:30 AM IST',
  treatingSurgeon: 'Dr. Ashok Rajgopal (Principal Director - Orthopedics)',
  anesthesiologist: 'Dr. Meena Kapoor',
  surgeryDuration: '75 Minutes',
  implantsUsed: 'Stryker Triathlon Knee System (Right Knee)',
  currentStatus: 'Ready for Admission',
  vitalsHistory: [
    { time: 'Day 1 Post-Op', bloodPressure: 124, heartRate: 74, oxygen: 99, painScore: 6 },
    { time: 'Day 2 Post-Op', bloodPressure: 120, heartRate: 72, oxygen: 98, painScore: 4 },
    { time: 'Day 3 Post-Op', bloodPressure: 118, heartRate: 70, oxygen: 99, painScore: 3 },
    { time: 'Day 4 Discharge', bloodPressure: 116, heartRate: 68, oxygen: 100, painScore: 2 },
    { time: 'Day 7 Check', bloodPressure: 118, heartRate: 70, oxygen: 99, painScore: 1 },
    { time: 'Day 10 Check', bloodPressure: 115, heartRate: 68, oxygen: 100, painScore: 1 }
  ],
  medications: [
    { name: 'Cefuroxime Axetil 500mg', dosage: '1 tablet twice daily after food', duration: '5 days', type: 'Antibiotic' },
    { name: 'Etoricoxib 90mg', dosage: '1 tablet once daily morning', duration: '7 days', type: 'Anti-inflammatory / Pain' },
    { name: 'Enoxaparin 40mg Injection', dosage: 'Subcutaneous once daily', duration: '10 days', type: 'DVT Prevention / Blood thinner' },
    { name: 'Pantoprazole 40mg', dosage: '1 tablet before breakfast', duration: '10 days', type: 'Gastric protection' },
    { name: 'Calcium & Vitamin D3', dosage: '1 tablet daily', duration: '60 days', type: 'Bone regeneration' }
  ]
};

export const INITIAL_RECOVERY_DETAILS = {
  recoveryScore: 88, // out of 100
  mobilityIndex: 'Walks independently with stick (Target: 100% no support by Day 21)',
  kneeFlexionDegree: '110° Active Flexion Achieved (Goal: 120°)',
  painLevel: 'Mild (1.5 / 10)',
  nextPhysioSession: 'Today, 04:00 PM with Senior Physio Dr. Alok Kumar',
  dischargeSummaryReady: true,
  dietaryGuidelines: [
    'High protein nutrition (pulses, chicken broth, paneer) to promote soft tissue healing',
    'Stay well hydrated with minimum 2.5 liters water daily',
    'Limit sodium intake to minimize dependent leg swelling',
    'Avoid high impact twisting or sudden pivoting'
  ],
  physioExercises: [
    { name: 'Ankle Pumps & Quadriceps Sets', frequency: '20 reps x 3 times daily', status: 'Mastered' },
    { name: 'Straight Leg Raises (SLR)', frequency: '15 reps x 2 times daily', status: 'In Progress' },
    { name: 'Seated Knee Bends', frequency: '10 reps x 3 times daily', status: 'In Progress' },
    { name: 'Continuous Walking with Crutch/Cane', frequency: '15 minutes x 2 times daily', status: 'Completed' }
  ]
};

export const INITIAL_RETURN_HOME_DETAILS = {
  fitToFlyCertificate: {
    status: 'Issued & Approved',
    issuedBy: 'Dr. Ashok Rajgopal, FRCS',
    hospital: 'Fortis Memorial Research Institute',
    certificateNumber: 'FMRI/FTF/2024/7718',
    flightClearanceDate: '22 Nov 2024 onwards',
    specialAssistance: 'Wheelchair assistance requested at Delhi (DEL) and London (LHR)'
  },
  departureFlight: {
    flightNumber: 'BA 142',
    date: '22 Nov 2024',
    time: '10:20 AM IST',
    departureAirport: 'Delhi Terminal 3',
    destinationAirport: 'London Heathrow Terminal 5',
    airportTransferTime: '06:30 AM IST (Hotel Pickup)'
  },
  medicationSupply: '30-day supply of medications packaged with custom prescription letter for airline customs.',
  telemedicineFollowUpSchedule: [
    { session: 'First Post-Flight Virtual Follow-Up', date: '02 Dec 2024', time: '02:00 PM UK Time', doctor: 'Dr. Ashok Rajgopal' },
    { session: '6-Week X-Ray Review', date: '05 Jan 2025', time: '02:00 PM UK Time', doctor: 'Dr. Ashok Rajgopal' },
    { session: '3-Month Functional Assessment', date: '15 Feb 2025', time: '02:00 PM UK Time', doctor: 'Dr. Ashok Rajgopal' }
  ],
  patientFeedbackSubmitted: false
};

export const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'Treatment Quotation is Ready',
    message: 'Dr. Ashok Rajgopal’s team at Fortis Memorial has finalized your Robotic Knee Replacement plan & transparent quotation.',
    timestamp: '2 hours ago',
    read: false,
    type: 'quotation',
    link: '/patient/journey/confirmation'
  },
  {
    id: 'notif-2',
    title: 'Coordinator Priya Sharma Assigned',
    message: 'Ms. Priya Sharma is your dedicated medical care manager. She is available via chat and WhatsApp.',
    timestamp: '1 day ago',
    read: false,
    type: 'coordinator',
    link: '/patient/messages'
  },
  {
    id: 'notif-3',
    title: 'Medical Documents Verified',
    message: 'Your right knee MRI scan and blood panel reports were successfully verified by our clinical advisory board.',
    timestamp: '2 days ago',
    read: true,
    type: 'documents',
    link: '/patient/documents'
  },
  {
    id: 'notif-4',
    title: 'Welcome to Hokena Care!',
    message: 'Your enquiry HKN-ENQ-9283 was received. We are excited to guide you every step of the way to healing in India.',
    timestamp: '3 days ago',
    read: true,
    type: 'welcome',
    link: '/patient/dashboard'
  }
];

export const INITIAL_MESSAGES = [
  {
    id: 'msg-1',
    sender: 'coordinator',
    senderName: 'Priya Sharma (Hokena Care)',
    senderAvatar: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=300&q=80',
    text: 'Hello Mr. Michael Chen! Warm greetings from Hokena Care India. My name is Priya Sharma, and I will be your dedicated personal patient manager throughout your medical journey.',
    time: '02 Nov, 10:15 AM',
    isUser: false
  },
  {
    id: 'msg-2',
    sender: 'coordinator',
    senderName: 'Priya Sharma (Hokena Care)',
    senderAvatar: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=300&q=80',
    text: 'I have shared your MRI scans with Dr. Ashok Rajgopal at Fortis Memorial Research Institute. He reviewed them personally and confirmed that you are an excellent candidate for the Robotic Total Knee Replacement.',
    time: '03 Nov, 11:30 AM',
    isUser: false
  },
  {
    id: 'msg-3',
    sender: 'patient',
    senderName: 'Michael Chen',
    senderAvatar: '',
    text: 'Thank you Priya! That is such a relief. Could you please let me know how many days my wife and I would need to stay in Delhi, and whether there are good apartments near the hospital?',
    time: '03 Nov, 01:15 PM',
    isUser: true
  },
  {
    id: 'msg-4',
    sender: 'coordinator',
    senderName: 'Priya Sharma (Hokena Care)',
    senderAvatar: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=300&q=80',
    text: 'Certainly! You would stay 3 nights in Fortis private deluxe room, and around 7 to 8 nights at The Palm Medisuites (only 3 minutes walk from the hospital). The full itemized quotation is now prepared in your dashboard. Please review it whenever convenient!',
    time: '04 Nov, 09:45 AM',
    isUser: false
  }
];
