export type Lang = 'en' | 'es' | 'ca' | 'zh'

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: 'English' },
  { code: 'es', label: 'ES', flag: 'Español' },
  { code: 'ca', label: 'CA', flag: 'Català' },
  { code: 'zh', label: '中文', flag: '中文' },
]

/* ---------------- static identity ---------------- */
export const profile = {
  name: 'Junjie Li',
  handle: 'junjie',
  host: 'barcelona',
  email: 'jfjunjieli@gmail.com',
  phone: '+34 688 019 918',
  location: 'Barcelona, Spain',
  github: 'https://github.com/junjielyu13',
  githubLabel: 'github.com/junjielyu13',
  linkedin: 'https://www.linkedin.com/in/junjie-li-a56045205/',
  linkedinLabel: 'linkedin.com/in/junjie-li',
  site: 'https://junjieli.vercel.app',
  cv: '/Junjie_Li_CV.pdf',
}

/* ---------------- language names (per UI language) ---------------- */
// Canonical fallback order when nothing is selected.
const LANG_ORDER: Lang[] = ['en', 'es', 'ca', 'zh']

// How each language is named, written in each UI language.
const langNames: Record<Lang, Record<Lang, string>> = {
  en: { en: 'English', es: 'Spanish', ca: 'Catalan', zh: 'Chinese' },
  es: { en: 'Inglés', es: 'Español', ca: 'Catalán', zh: 'Chino' },
  ca: { en: 'Anglès', es: 'Espanyol', ca: 'Català', zh: 'Xinès' },
  zh: { en: '英语', es: '西班牙语', ca: '加泰罗尼亚语', zh: '中文' },
}

// Languages list with the active language first, the rest in canonical order,
// all written in the active UI language.
export function languagesFact(active: Lang): string {
  const order: Lang[] = [active, ...LANG_ORDER.filter((l) => l !== active)]
  return order.map((l) => langNames[active][l]).join(' · ')
}

// Sentinel used in the `facts` arrays below; replaced at render time.
export const LANGS_TOKEN = '@languages'

/* ---------------- localized strings ---------------- */
type Dict = {
  role: string
  nav: { about: string; work: string; projects: string; stack: string; contact: string }
  hero: {
    boot: string[]
    tagline: string
    sub: string
    available: string
    ctaWork: string
    ctaCv: string
  }
  sections: {
    about: { cmd: string; title: string; body: string[]; facts: { k: string; v: string }[] }
    work: { cmd: string; title: string; present: string }
    projects: { cmd: string; title: string }
    stack: { cmd: string; title: string }
    contact: {
      cmd: string
      title: string
      body: string
      emailMe: string
      copy: string
      copied: string
    }
  }
  footer: string
  langLabel: string
}

export const experience: {
  company: string
  role: Record<Lang, string>
  period: string
  current?: boolean
  tag: string
  desc: Record<Lang, string[]>
}[] = [
  {
    company: 'ALTECH Solutions & Consulting',
    role: {
      en: 'Software Engineer',
      es: 'Ingeniero de Software',
      ca: 'Enginyer de Programari',
      zh: '软件工程师',
    },
    period: '03.2025 — 07.2026',
    current: true,
    tag: 'team lead · public-sector · full-stack',
    desc: {
      en: [
        'Contributed to the concurrent delivery of 6 large-scale public-service platforms across Spain serving 16M+ end users: Park Güell, ZBE (AMB), Taxi Mallorca, Ambulance Madrid, Flexitransport (AMTU), and the BSM license-plate system.',
        'Acted as team lead for Park Güell and ZBE (AMB), driving architecture decisions, task allocation, and implementation details.',
        'Worked directly with clients to ensure smooth delivery, and ran ongoing maintenance and on-call support in production.',
      ],
      es: [
        'Participé en la entrega concurrente de 6 plataformas públicas a gran escala en toda España con 16M+ usuarios: Park Güell, ZBE (AMB), Taxi Mallorca, Ambulancias de Madrid, Flexitransport (AMTU) y el sistema de matrículas de BSM.',
        'Ejercí de team lead en Park Güell y ZBE (AMB), liderando decisiones de arquitectura, reparto de tareas y detalles de implementación.',
        'Trabajé directamente con los clientes para asegurar una entrega fluida, con mantenimiento continuo y soporte de guardia en producción.',
      ],
      ca: [
        'Vaig participar en el lliurament concurrent de 6 plataformes públiques a gran escala arreu d’Espanya amb 16M+ usuaris: Park Güell, ZBE (AMB), Taxi Mallorca, Ambulàncies de Madrid, Flexitransport (AMTU) i el sistema de matrícules de BSM.',
        'Vaig exercir de team lead a Park Güell i ZBE (AMB), liderant decisions d’arquitectura, repartiment de tasques i detalls d’implementació.',
        'Vaig treballar directament amb els clients per garantir un lliurament fluid, amb manteniment continu i suport de guàrdia en producció.',
      ],
      zh: [
        '参与并发交付 6 个面向全西班牙、服务 1600 万+ 用户的大规模公共服务平台：Park Güell、ZBE（AMB）、马略卡出租车、马德里救护车、Flexitransport（AMTU），以及 BSM 车牌识别系统。',
        '担任 Park Güell 与 ZBE（AMB）的团队负责人，主导架构决策、任务分配与实现细节。',
        '直接与客户对接，保障顺利交付，并负责生产环境的持续维护与值班支持。',
      ],
    },
  },
  {
    company: 'BSC & IDAEA-CSIC',
    role: {
      en: 'Research Assistant (HPC)',
      es: 'Investigador (HPC)',
      ca: 'Investigador (HPC)',
      zh: '研究助理（高性能计算）',
    },
    period: '03.2025 — 05.2026',
    tag: 'research · parallelism',
    desc: {
      en: [
        'Optimized a large-scale hydrological model for HPC clusters using task-based parallelism and distributed scheduling.',
        'Achieved up to 35× speedup over the baseline; results accepted for presentation at EGU 2026.',
      ],
      es: [
        'Optimicé un modelo hidrológico a gran escala para clústeres HPC usando paralelismo por tareas y planificación distribuida.',
        'Conseguí hasta 35× de aceleración sobre la versión base; resultados aceptados para presentar en EGU 2026.',
      ],
      ca: [
        'Vaig optimitzar un model hidrològic a gran escala per a clústers HPC amb paral·lelisme per tasques i planificació distribuïda.',
        'Vaig assolir fins a 35× d’acceleració respecte a la versió base; resultats acceptats per presentar a EGU 2026.',
      ],
      zh: [
        '使用基于任务的并行与分布式调度，为高性能计算集群优化大规模水文模型。',
        '相比基线实现最高达 35× 加速；研究成果被 EGU 2026 接收做报告。',
      ],
    },
  },
  {
    company: 'Herta',
    role: {
      en: 'Software Developer',
      es: 'Desarrollador de Software',
      ca: 'Desenvolupador de Programari',
      zh: '软件开发工程师',
    },
    period: '04.2024 — 03.2025',
    tag: '.NET · Azure · CI/CD',
    desc: {
      en: [
        'Built AI-powered surveillance software: a .NET WPF desktop app and serverless SaaS on Azure with .NET and Angular.',
        'Implemented end-to-end automated testing wired into GitLab CI, cutting manual testing time ~90% and improving deploy reliability.',
      ],
      es: [
        'Desarrollé software de videovigilancia con IA: una app de escritorio .NET WPF y un SaaS serverless en Azure con .NET y Angular.',
        'Implementé pruebas automatizadas E2E integradas en GitLab CI, reduciendo el tiempo de prueba manual ~90% y mejorando la fiabilidad del despliegue.',
      ],
      ca: [
        'Vaig desenvolupar programari de videovigilància amb IA: una app d’escriptori .NET WPF i un SaaS serverless a Azure amb .NET i Angular.',
        'Vaig implementar proves automatitzades E2E integrades a GitLab CI, reduint el temps de prova manual ~90% i millorant la fiabilitat del desplegament.',
      ],
      zh: [
        '开发 AI 视频监控软件：基于 .NET WPF 的桌面应用，以及在 Azure 上用 .NET 和 Angular 构建的 Serverless SaaS 服务。',
        '搭建端到端自动化测试并接入 GitLab CI，将人工测试时间减少约 90%，提升部署可靠性。',
      ],
    },
  },
  {
    company: 'LogMeal Food AI',
    role: {
      en: 'iOS & ML Developer',
      es: 'Desarrollador iOS & ML',
      ca: 'Desenvolupador iOS & ML',
      zh: 'iOS 与机器学习开发者',
    },
    period: '09.2023 — 07.2024',
    tag: 'iOS · computer vision',
    desc: {
      en: [
        'Developed an iOS app and an open-source native iOS SDK for real-time food recognition using computer vision; showcased at MWC 2024.',
        'Trained and optimized a multi-task CSWin Transformer for fine-grained food classification on an 800+ category, 500K+ image dataset — improving top-1 accuracy from 47.7% to 81.5% (+33.8pp) through architecture tuning.',
      ],
      es: [
        'Desarrollé una app iOS y un SDK nativo open-source para reconocimiento de comida en tiempo real con visión por computador; presentado en el MWC 2024.',
        'Entrené y optimicé un CSWin Transformer multitarea para clasificación fina de alimentos sobre un dataset de 800+ categorías y 500K+ imágenes — mejorando la precisión top-1 del 47,7% al 81,5% (+33,8pp) mediante ajuste de arquitectura.',
      ],
      ca: [
        'Vaig desenvolupar una app iOS i un SDK natiu open-source per al reconeixement d’aliments en temps real amb visió per computador; presentat al MWC 2024.',
        'Vaig entrenar i optimitzar un CSWin Transformer multitasca per a la classificació fina d’aliments sobre un dataset de 800+ categories i 500K+ imatges — millorant la precisió top-1 del 47,7% al 81,5% (+33,8pp) mitjançant ajust d’arquitectura.',
      ],
      zh: [
        '使用计算机视觉开发实时食物识别的 iOS 应用与开源原生 iOS SDK；产品于 MWC 2024 世界移动通信大会展出。',
        '在 800+ 类别、50 万+ 图像的数据集上训练并优化多任务 CSWin Transformer 进行细粒度食物分类——通过架构调优将 top-1 准确率从 47.7% 提升到 81.5%（+33.8pp）。',
      ],
    },
  },
  {
    company: 'Awaait Artificial Intelligence',
    role: {
      en: 'Software Developer',
      es: 'Desarrollador de Software',
      ca: 'Desenvolupador de Programari',
      zh: '软件开发工程师',
    },
    period: '05.2023 — 04.2024',
    tag: 'AI · computer vision',
    desc: {
      en: [
        'Contributed to all core company products: subway and bus fare-evasion detection, a camera health-monitoring assistant, and a backoffice platform.',
        'Joined tender teams, building technical demos and proof-of-concept solutions to support new client proposals.',
      ],
      es: [
        'Contribuí a todos los productos clave: detección de evasión de pago en metro y bus, un asistente de salud de cámaras y una plataforma de backoffice.',
        'Participé en equipos de licitación, creando demos técnicas y pruebas de concepto para apoyar nuevas propuestas a clientes.',
      ],
      ca: [
        'Vaig contribuir a tots els productes clau: detecció d’evasió de pagament al metro i bus, un assistent de salut de càmeres i una plataforma de backoffice.',
        'Vaig participar en equips de licitació, creant demos tècniques i proves de concepte per donar suport a noves propostes a clients.',
      ],
      zh: [
        '参与公司所有核心产品：地铁与公交逃票检测系统、摄像头健康监测助手以及后台管理平台。',
        '加入投标团队，构建技术演示与概念验证方案，支持新客户提案。',
      ],
    },
  },
  {
    company: 'CSI Central de Suministros',
    role: {
      en: 'Full Stack Developer',
      es: 'Desarrollador Full Stack',
      ca: 'Desenvolupador Full Stack',
      zh: '全栈开发工程师',
    },
    period: '06.2022 — 10.2022',
    tag: 'Laravel · Next.js',
    desc: {
      en: [
        'Independently built and maintained a full-stack B2B e-commerce platform with PHP (Laravel), React (Next.js) and MySQL.',
      ],
      es: [
        'Desarrollé y mantuve de forma autónoma una plataforma de e-commerce B2B full-stack con PHP (Laravel), React (Next.js) y MySQL.',
      ],
      ca: [
        'Vaig desenvolupar i mantenir de manera autònoma una plataforma d’e-commerce B2B full-stack amb PHP (Laravel), React (Next.js) i MySQL.',
      ],
      zh: [
        '独立开发并维护一个全栈 B2B 电商平台，技术栈为 PHP (Laravel)、React (Next.js) 与 MySQL。',
      ],
    },
  },
]

export const projects: {
  name: string
  period: string
  link?: string
  repo?: string
  blurb: Record<Lang, string>
  tags: string[]
}[] = [
  {
    name: 'Vibe Coding — Indie Products',
    period: '2026',
    blurb: {
      en: 'Independently designed, built, and launched 4 commercial products using agentic dev workflows (Claude Code, Codex) — all live with paying clients.',
      es: 'Diseñé, construí y lancé de forma independiente 4 productos comerciales con flujos de desarrollo agénticos (Claude Code, Codex) — todos en producción y con clientes de pago.',
      ca: 'Vaig dissenyar, construir i llançar de manera independent 4 productes comercials amb fluxos de desenvolupament agèntics (Claude Code, Codex) — tots en producció i amb clients de pagament.',
      zh: '使用智能体开发工作流（Claude Code、Codex）独立设计、构建并上线 4 个商业产品——全部正式运营且拥有付费客户。',
    },
    tags: ['Full-stack', 'AI', 'SaaS', 'Agentic'],
  },
  {
    name: 'HPC Hydrological Model',
    period: '2025—2026',
    blurb: {
      en: 'Task-parallel rewrite of a large hydrological model for HPC clusters. Up to 35× faster; accepted at EGU 2026.',
      es: 'Reescritura paralela por tareas de un gran modelo hidrológico para clústeres HPC. Hasta 35× más rápido; aceptado en EGU 2026.',
      ca: 'Reescriptura paral·lela per tasques d’un gran model hidrològic per a clústers HPC. Fins a 35× més ràpid; acceptat a EGU 2026.',
      zh: '将大型水文模型改写为任务并行版本，运行于 HPC 集群，最高 35× 加速；被 EGU 2026 接收。',
    },
    tags: ['HPC', 'Parallelism', 'Research'],
  },
  {
    name: 'IntelligentRecycling',
    period: '2022',
    repo: 'https://github.com/junjielyu13/IntelligentRecycling',
    blurb: {
      en: 'HackForGood 2022 — 2nd place. An AI system that detects and sorts waste types for recycling.',
      es: 'HackForGood 2022 — 2º puesto. Un sistema de IA que detecta y clasifica residuos para reciclaje.',
      ca: 'HackForGood 2022 — 2n lloc. Un sistema d’IA que detecta i classifica residus per al reciclatge.',
      zh: 'HackForGood 2022 亚军。一套用于检测并分类垃圾以便回收的 AI 系统。',
    },
    tags: ['AI', 'Hackathon', '🏆 2nd'],
  },
  {
    name: 'AiguaDeBarcelona DataChallenge',
    period: '2023',
    blurb: {
      en: 'Finalist. AI water-consumption forecasting across industrial, domestic and tourism sectors with PyTorch.',
      es: 'Finalista. Predicción del consumo de agua con IA en sectores industrial, doméstico y turístico con PyTorch.',
      ca: 'Finalista. Predicció del consum d’aigua amb IA en sectors industrial, domèstic i turístic amb PyTorch.',
      zh: '决赛入围。用 PyTorch 对工业、居民与旅游用水量进行 AI 预测。',
    },
    tags: ['PyTorch', 'Forecasting', '🏅 Finalist'],
  },
]

export const stack: { group: string; items: string[] }[] = [
  {
    group: 'frontend',
    items: ['React', 'Next.js', 'Angular', 'Vue', 'Electron', 'WPF'],
  },
  {
    group: 'mobile',
    items: ['Swift / iOS', 'React Native', 'Kotlin Multiplatform', 'Native SDK'],
  },
  {
    group: 'backend',
    items: ['.NET', 'Node.js', 'Nest.js', 'Laravel', 'Django', 'GraphQL', 'REST'],
  },
  {
    group: 'data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Elasticsearch'],
  },
  {
    group: 'devops',
    items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Nginx', 'CI/CD', 'Jenkins'],
  },
  {
    group: 'ai / hpc',
    items: ['PyTorch', 'Computer Vision', 'Transformers', 'Task Parallelism', 'HPC'],
  },
  {
    group: 'agentics',
    items: ['LLM APIs', 'Vector DB', 'RAG', 'Embeddings', 'MCP', 'Agentic Systems'],
  },
]

export const education = [
  {
    school: 'Polytechnic University of Catalonia (UPC)',
    degree: {
      en: 'M.Eng. in Computer Science',
      es: 'Máster en Ingeniería Informática',
      ca: 'Màster en Enginyeria Informàtica',
      zh: '计算机科学硕士',
    },
    period: '2024 — 2025',
  },
  {
    school: 'University of Barcelona (UB)',
    degree: {
      en: 'B.Eng. in Computer Engineering',
      es: 'Grado en Ingeniería Informática',
      ca: 'Grau en Enginyeria Informàtica',
      zh: '计算机工程学士',
    },
    period: '2020 — 2024',
  },
]

export const dict: Record<Lang, Dict> = {
  en: {
    role: 'Software Engineer',
    nav: { about: 'about', work: 'work', projects: 'projects', stack: 'stack', contact: 'contact' },
    hero: {
      boot: ['initializing session…', 'loading profile from /home/junjie', 'ready.'],
      tagline: 'I build large-scale systems, AI products, and things that ship.',
      sub: 'Software Engineer based in Barcelona — full-stack, applied AI, and high-performance computing.',
      available: 'available for work',
      ctaWork: 'view work',
      ctaCv: 'download CV',
    },
    sections: {
      about: {
        cmd: 'cat about.md',
        title: 'about',
        body: [
          'I’m a software engineer who likes the hard, end-to-end parts: shipping real systems people depend on, then keeping them alive in production.',
          'I’ve worked across public-service platforms used by millions, AI and computer-vision products, and HPC research that turned a slow model into one running 35× faster on a cluster. I move comfortably from a Swift app to a Kubernetes cluster to a distributed scheduler.',
          'Lately I’ve been shipping my own indie products with AI-assisted workflows — some live and earning. I’m looking for a team building ambitious things at scale.',
        ],
        facts: [
          { k: 'location', v: 'Barcelona, Spain' },
          { k: 'languages', v: '@languages' },
          { k: 'focus', v: 'Systems · AI · HPC' },
          { k: 'status', v: 'open to opportunities' },
        ],
      },
      work: { cmd: 'ls -la experience/', title: 'experience', present: 'present' },
      projects: { cmd: 'ls projects/', title: 'projects' },
      stack: { cmd: 'cat skills.json', title: 'stack' },
      contact: {
        cmd: './contact --reach-out',
        title: 'contact',
        body: 'Hiring, building something, or just want to talk shop? My inbox is open.',
        emailMe: 'email me',
        copy: 'copy email',
        copied: 'copied!',
      },
    },
    footer: 'Built from scratch with Next.js. Designed in the terminal.',
    langLabel: 'language',
  },
  es: {
    role: 'Ingeniero de Software',
    nav: { about: 'sobre-mí', work: 'experiencia', projects: 'proyectos', stack: 'stack', contact: 'contacto' },
    hero: {
      boot: ['iniciando sesión…', 'cargando perfil desde /home/junjie', 'listo.'],
      tagline: 'Construyo sistemas a gran escala, productos de IA y cosas que llegan a producción.',
      sub: 'Ingeniero de Software en Barcelona — full-stack, IA aplicada y computación de alto rendimiento.',
      available: 'disponible para trabajar',
      ctaWork: 'ver experiencia',
      ctaCv: 'descargar CV',
    },
    sections: {
      about: {
        cmd: 'cat sobre-mi.md',
        title: 'sobre mí',
        body: [
          'Soy ingeniero de software al que le gustan las partes difíciles y de extremo a extremo: lanzar sistemas reales de los que la gente depende y mantenerlos vivos en producción.',
          'He trabajado en plataformas de servicio público usadas por millones, productos de IA y visión por computador, e investigación en HPC que convirtió un modelo lento en otro 35× más rápido en un clúster. Me muevo con soltura desde una app en Swift hasta un clúster de Kubernetes o un planificador distribuido.',
          'Últimamente lanzo mis propios productos indie con flujos asistidos por IA — algunos en producción y generando ingresos. Busco un equipo que construya cosas ambiciosas a gran escala.',
        ],
        facts: [
          { k: 'ubicación', v: 'Barcelona, España' },
          { k: 'idiomas', v: '@languages' },
          { k: 'enfoque', v: 'Sistemas · IA · HPC' },
          { k: 'estado', v: 'abierto a oportunidades' },
        ],
      },
      work: { cmd: 'ls -la experiencia/', title: 'experiencia', present: 'actualidad' },
      projects: { cmd: 'ls proyectos/', title: 'proyectos' },
      stack: { cmd: 'cat skills.json', title: 'stack' },
      contact: {
        cmd: './contacto --escríbeme',
        title: 'contacto',
        body: '¿Contratando, construyendo algo o con ganas de hablar de tecnología? Mi bandeja está abierta.',
        emailMe: 'escríbeme',
        copy: 'copiar email',
        copied: '¡copiado!',
      },
    },
    footer: 'Hecho desde cero con Next.js. Diseñado en la terminal.',
    langLabel: 'idioma',
  },
  ca: {
    role: 'Enginyer de Programari',
    nav: { about: 'sobre-mi', work: 'experiència', projects: 'projectes', stack: 'stack', contact: 'contacte' },
    hero: {
      boot: ['iniciant sessió…', 'carregant perfil des de /home/junjie', 'a punt.'],
      tagline: 'Construeixo sistemes a gran escala, productes d’IA i coses que arriben a producció.',
      sub: 'Enginyer de Programari a Barcelona — full-stack, IA aplicada i computació d’alt rendiment.',
      available: 'disponible per treballar',
      ctaWork: 'veure experiència',
      ctaCv: 'descarregar CV',
    },
    sections: {
      about: {
        cmd: 'cat sobre-mi.md',
        title: 'sobre mi',
        body: [
          'Sóc enginyer de programari a qui agraden les parts difícils i d’extrem a extrem: llançar sistemes reals dels quals la gent depèn i mantenir-los vius en producció.',
          'He treballat en plataformes de servei públic usades per milions, productes d’IA i visió per computador, i recerca en HPC que va convertir un model lent en un altre 35× més ràpid en un clúster. Em moc amb soltesa des d’una app en Swift fins a un clúster de Kubernetes o un planificador distribuït.',
          'Últimament llanço els meus propis productes indie amb fluxos assistits per IA — alguns en producció i generant ingressos. Busco un equip que construeixi coses ambicioses a gran escala.',
        ],
        facts: [
          { k: 'ubicació', v: 'Barcelona, Espanya' },
          { k: 'idiomes', v: '@languages' },
          { k: 'enfocament', v: 'Sistemes · IA · HPC' },
          { k: 'estat', v: 'obert a oportunitats' },
        ],
      },
      work: { cmd: 'ls -la experiència/', title: 'experiència', present: 'actualitat' },
      projects: { cmd: 'ls projectes/', title: 'projectes' },
      stack: { cmd: 'cat skills.json', title: 'stack' },
      contact: {
        cmd: './contacte --escriu-me',
        title: 'contacte',
        body: 'Contractant, construint alguna cosa o amb ganes de parlar de tecnologia? La meva safata és oberta.',
        emailMe: 'escriu-me',
        copy: 'copiar email',
        copied: 'copiat!',
      },
    },
    footer: 'Fet des de zero amb Next.js. Dissenyat a la terminal.',
    langLabel: 'idioma',
  },
  zh: {
    role: '软件工程师',
    nav: { about: '关于', work: '经历', projects: '项目', stack: '技术栈', contact: '联系' },
    hero: {
      boot: ['正在初始化会话…', '从 /home/junjie 加载个人资料', '就绪。'],
      tagline: '我构建大规模系统、AI 产品，以及真正能上线的东西。',
      sub: '常驻巴塞罗那的软件工程师 —— 全栈、应用 AI 与高性能计算。',
      available: '正在求职',
      ctaWork: '查看经历',
      ctaCv: '下载简历',
    },
    sections: {
      about: {
        cmd: 'cat 关于.md',
        title: '关于我',
        body: [
          '我是一名软件工程师，喜欢啃最硬、贯穿端到端的部分：把人们真正依赖的系统做出来、上线，并在生产环境里把它们稳稳地维护好。',
          '我做过服务数百万人的公共服务平台、AI 与计算机视觉产品，也在 HPC 研究中把一个缓慢的模型在集群上跑出 35× 的加速。从一个 Swift 应用，到 Kubernetes 集群，再到分布式调度器，我都能自如切换。',
          '最近我用 AI 辅助工作流独立做了几个小产品——有些已经上线并产生收入。我正在寻找一个用规模化方式做有野心的事情的团队。',
        ],
        facts: [
          { k: '所在地', v: '西班牙 · 巴塞罗那' },
          { k: '语言', v: '@languages' },
          { k: '方向', v: '系统 · AI · 高性能计算' },
          { k: '状态', v: '开放新机会' },
        ],
      },
      work: { cmd: 'ls -la 工作经历/', title: '工作经历', present: '至今' },
      projects: { cmd: 'ls 项目/', title: '项目' },
      stack: { cmd: 'cat skills.json', title: '技术栈' },
      contact: {
        cmd: './联系 --联系我',
        title: '联系我',
        body: '在招人、在做产品，或者只是想聊聊技术？欢迎给我写信。',
        emailMe: '给我写信',
        copy: '复制邮箱',
        copied: '已复制！',
      },
    },
    footer: '用 Next.js 从零构建。在终端里设计。',
    langLabel: '语言',
  },
}
