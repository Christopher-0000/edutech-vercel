const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { User, Course, Event, BlogPost, Category, Tag } = require('./models');

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB for seeding...');

    // Clear existing data
    await User.deleteMany({ email: { $ne: process.env.ADMIN_EMAIL } });
    await Course.deleteMany({});
    await Event.deleteMany({});
    await BlogPost.deleteMany({});
    await Category.deleteMany({});
    await Tag.deleteMany({});
    console.log('🗑️  Cleared existing sample data (except admin if exists)...');

    // 1. Create Admin User if not exists
    let admin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!admin) {
      admin = await User.create({
        username: 'admin',
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        firstName: 'System',
        lastName: 'Administrator',
        role: 'admin'
      });
      console.log('👤 Admin user created');
    }

    // 2. Create Categories & Tags
    const designCat     = await Category.create({ name: 'Design' });
    const devCat        = await Category.create({ name: 'Development' });
    const businessCat   = await Category.create({ name: 'Business' });
    const dataCat       = await Category.create({ name: 'Data Science' });
    const marketingCat  = await Category.create({ name: 'Marketing' });

    const reactTag      = await Tag.create({ name: 'React' });
    const nodeTag       = await Tag.create({ name: 'Node.js' });
    const uiTag         = await Tag.create({ name: 'UI/UX' });
    const pythonTag     = await Tag.create({ name: 'Python' });
    const aiTag         = await Tag.create({ name: 'AI' });
    const jsTag         = await Tag.create({ name: 'JavaScript' });
    const cssTag        = await Tag.create({ name: 'CSS' });
    const seoTag        = await Tag.create({ name: 'SEO' });

    console.log('📂 Categories and Tags created');

    // ─────────────────────────────────────────────
    // 3. Create 15 Courses
    // ─────────────────────────────────────────────
    const now = new Date();

    await Course.create([
      {
        title: 'Complete Web Development Bootcamp',
        description: 'Master HTML, CSS, JavaScript, React, and Node.js from the ground up. Build real-world projects and land your first developer job.',
        excerpt: 'Become a full-stack developer in 12 weeks.',
        thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600',
        courseType: 'paid',
        price: 99.99,
        level: 'beginner',
        isFeatured: true,
        enrollmentCount: 1240
      },
      {
        title: 'Mastering UI/UX Design with Figma',
        description: 'Design beautiful, accessible interfaces using Figma. Learn user research, wireframing, prototyping, and handoff workflows.',
        excerpt: 'Learn the principles of modern design with Figma.',
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
        courseType: 'paid',
        price: 49.99,
        level: 'intermediate',
        isFeatured: true,
        enrollmentCount: 876
      },
      {
        title: 'Introduction to JavaScript',
        description: 'Understand the fundamentals of JavaScript — variables, functions, loops, DOM manipulation, and modern ES6+ features. Perfect for beginners.',
        excerpt: 'Start your coding journey with JavaScript.',
        thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600',
        courseType: 'free',
        price: 0,
        level: 'beginner',
        isFeatured: true,
        enrollmentCount: 3200
      },
      {
        title: 'React.js — The Complete Guide',
        description: 'Build powerful, dynamic web apps with React. Covers hooks, context, Redux Toolkit, React Router, and performance optimization.',
        excerpt: 'Go from beginner to advanced React developer.',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
        courseType: 'paid',
        price: 79.99,
        level: 'intermediate',
        isFeatured: true,
        enrollmentCount: 2100
      },
      {
        title: 'Python for Data Science & Machine Learning',
        description: 'Use pandas, NumPy, Matplotlib, and scikit-learn to analyze data and build machine learning models. Includes real datasets and Kaggle projects.',
        excerpt: 'Break into data science with Python.',
        thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600',
        courseType: 'paid',
        price: 89.99,
        level: 'intermediate',
        isFeatured: true,
        enrollmentCount: 1580
      },
      {
        title: 'Node.js & Express — Backend Development',
        description: 'Build scalable REST APIs with Node.js and Express. Covers authentication, MongoDB integration, file uploads, and deployment.',
        excerpt: 'Master back-end development with Node.js.',
        thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
        courseType: 'paid',
        price: 69.99,
        level: 'intermediate',
        enrollmentCount: 940
      },
      {
        title: 'Digital Marketing Masterclass',
        description: 'Learn SEO, Google Ads, social media marketing, email campaigns, and analytics to grow any business online.',
        excerpt: 'Drive traffic and conversions with digital marketing.',
        thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600',
        courseType: 'paid',
        price: 59.99,
        level: 'beginner',
        enrollmentCount: 1100
      },
      {
        title: 'Advanced CSS & Animations',
        description: 'Take your CSS skills to the next level. Master Flexbox, Grid, custom properties, keyframes, and modern animation techniques.',
        excerpt: 'Build stunning UIs with advanced CSS.',
        thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
        courseType: 'free',
        price: 0,
        level: 'intermediate',
        enrollmentCount: 720
      },
      {
        title: 'Business Analytics with Excel & Power BI',
        description: 'Turn raw data into actionable insights. Learn Excel formulas, pivot tables, Power Query, and Power BI dashboards.',
        excerpt: 'Make smarter decisions with data analytics.',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
        courseType: 'paid',
        price: 44.99,
        level: 'beginner',
        enrollmentCount: 630
      },
      {
        title: 'TypeScript for React Developers',
        description: 'Add type safety to your React projects. Covers TypeScript fundamentals, generics, interfaces, and integration with React & Next.js.',
        excerpt: 'Write safer, more maintainable React code.',
        thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600',
        courseType: 'paid',
        price: 54.99,
        level: 'intermediate',
        enrollmentCount: 480
      },
      {
        title: 'Introduction to Artificial Intelligence',
        description: 'Understand AI concepts, machine learning algorithms, neural networks, and how AI is reshaping every industry.',
        excerpt: 'Demystify AI — no math background needed.',
        thumbnail: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600',
        courseType: 'free',
        price: 0,
        level: 'beginner',
        isFeatured: true,
        enrollmentCount: 2800
      },
      {
        title: 'Entrepreneurship: Build & Launch Your Startup',
        description: 'Learn how to validate ideas, build an MVP, find customers, raise funding, and scale a startup from zero to revenue.',
        excerpt: 'Turn your idea into a thriving business.',
        thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600',
        courseType: 'paid',
        price: 74.99,
        level: 'all',
        enrollmentCount: 390
      },
      {
        title: 'MongoDB — The Complete Developer Guide',
        description: 'Master MongoDB — schema design, aggregation pipelines, indexing, transactions, and production deployment with Atlas.',
        excerpt: 'Build robust databases with MongoDB.',
        thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600',
        courseType: 'paid',
        price: 49.99,
        level: 'intermediate',
        enrollmentCount: 510
      },
      {
        title: 'Graphic Design Fundamentals',
        description: 'Learn the core principles of graphic design — typography, color theory, layout, and branding — using Adobe Illustrator and Canva.',
        excerpt: 'Bring your visual ideas to life.',
        thumbnail: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600',
        courseType: 'free',
        price: 0,
        level: 'beginner',
        enrollmentCount: 1400
      },
      {
        title: 'Docker & Kubernetes for Developers',
        description: 'Containerize applications with Docker, orchestrate them with Kubernetes, and deploy to cloud platforms like AWS and GCP.',
        excerpt: 'Master modern DevOps with containers.',
        thumbnail: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600',
        courseType: 'paid',
        price: 84.99,
        level: 'advanced',
        enrollmentCount: 295
      }
    ]);
    console.log('📚 15 Courses created');

    // ─────────────────────────────────────────────
    // 4. Create 15 Events
    // ─────────────────────────────────────────────
    const d = (daysFromNow, hours = 0) =>
      new Date(now.getTime() + daysFromNow * 86400000 + hours * 3600000);

    await Event.create([
      {
        title: 'React 19 Launch Workshop',
        description: 'Dive deep into the new features of React 19 — server components, use() hook, and the new compiler. Hands-on coding session included.',
        eventType: 'workshop',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
        startDateTime: d(7),
        endDateTime: d(7, 3),
        meetingLink: 'https://meet.google.com/xyz-react19',
        maxParticipants: 100,
        isFeatured: true,
        registrationCount: 67
      },
      {
        title: 'Webinar: The Future of AI in Education',
        description: 'How AI is transforming the way we learn and teach. Expert panel from Google, OpenAI, and leading EdTech companies.',
        eventType: 'webinar',
        thumbnail: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600',
        startDateTime: d(3),
        endDateTime: d(3, 2),
        meetingLink: 'https://zoom.us/ai-education-2026',
        maxParticipants: 500,
        isFeatured: true,
        registrationCount: 312
      },
      {
        title: 'Full-Stack Development Conference 2026',
        description: 'A full-day conference on modern full-stack development trends. Talks on Next.js 15, serverless, edge computing, and micro-frontends.',
        eventType: 'conference',
        thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600',
        startDateTime: d(14),
        endDateTime: d(14, 8),
        meetingLink: 'https://meet.google.com/fullstack-conf',
        maxParticipants: 300,
        isFeatured: true,
        registrationCount: 189
      },
      {
        title: 'UI/UX Design Sprint Workshop',
        description: 'A hands-on 3-hour sprint workshop where you design, prototype, and test a real product feature from scratch using Design Thinking.',
        eventType: 'workshop',
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
        startDateTime: d(5),
        endDateTime: d(5, 3),
        meetingLink: 'https://zoom.us/ux-sprint',
        maxParticipants: 50,
        registrationCount: 41
      },
      {
        title: 'Python for Beginners — Live Coding Session',
        description: 'Join our instructor for a free live coding session covering Python basics. Ask questions in real time and build your first Python app.',
        eventType: 'webinar',
        thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600',
        startDateTime: d(2),
        endDateTime: d(2, 2),
        meetingLink: 'https://meet.google.com/python-live',
        maxParticipants: 200,
        isFeatured: true,
        registrationCount: 155
      },
      {
        title: 'Career in Tech — Ask Me Anything',
        description: 'Senior engineers from top companies answer your questions about breaking into tech, switching roles, and building a career in software.',
        eventType: 'seminar',
        thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600',
        startDateTime: d(10),
        endDateTime: d(10, 1.5),
        meetingLink: 'https://zoom.us/tech-career-ama',
        maxParticipants: 250,
        registrationCount: 98
      },
      {
        title: 'Digital Marketing Bootcamp — Day 1',
        description: 'A two-day intensive bootcamp on SEO, SEM, and social media strategy. Day 1 covers fundamentals and Google Analytics 4.',
        eventType: 'workshop',
        thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600',
        startDateTime: d(20),
        endDateTime: d(20, 6),
        maxParticipants: 80,
        registrationCount: 34
      },
      {
        title: 'MongoDB Atlas Deep Dive',
        description: 'Explore MongoDB Atlas features — vector search, online archive, data federation, and Atlas Charts. Live demo and Q&A session.',
        eventType: 'webinar',
        thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600',
        startDateTime: d(4),
        endDateTime: d(4, 1.5),
        meetingLink: 'https://zoom.us/mongodb-atlas-deep-dive',
        maxParticipants: 300,
        registrationCount: 120
      },
      {
        title: 'Figma to Code — Design Handoff Workshop',
        description: 'Best practices for handing off Figma designs to developers. Covers Figma Dev Mode, variables, and auto-layout.',
        eventType: 'workshop',
        thumbnail: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600',
        startDateTime: d(12),
        endDateTime: d(12, 2),
        meetingLink: 'https://meet.google.com/figma-handoff',
        maxParticipants: 75,
        registrationCount: 60
      },
      {
        title: 'Startup Pitch Night',
        description: 'Watch 10 early-stage startups pitch to a panel of investors. Network with founders and investors after the event.',
        eventType: 'other',
        thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600',
        startDateTime: d(18),
        endDateTime: d(18, 3),
        maxParticipants: 150,
        registrationCount: 88
      },
      {
        title: 'Docker & Kubernetes Hands-On Lab',
        description: 'Set up a production-grade Kubernetes cluster from scratch. Deploy, scale, and monitor containerized applications in this lab session.',
        eventType: 'workshop',
        thumbnail: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600',
        startDateTime: d(25),
        endDateTime: d(25, 4),
        meetingLink: 'https://zoom.us/k8s-lab',
        maxParticipants: 60,
        registrationCount: 25
      },
      {
        title: 'Data Visualization with Power BI',
        description: 'Build interactive dashboards that tell compelling stories with data. Covers DAX, Power Query, and report sharing.',
        eventType: 'webinar',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
        startDateTime: d(6),
        endDateTime: d(6, 2),
        meetingLink: 'https://meet.google.com/powerbi-dashboard',
        maxParticipants: 200,
        registrationCount: 76
      },
      {
        title: 'Open Source Contribution Day',
        description: 'Contribute to popular open source projects with guidance from maintainers. All skill levels welcome. Great for building your GitHub profile.',
        eventType: 'other',
        thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600',
        startDateTime: d(30),
        endDateTime: d(30, 5),
        maxParticipants: 120,
        registrationCount: 44
      },
      {
        title: 'TypeScript Best Practices Seminar',
        description: 'Advanced TypeScript patterns for large codebases. Covers module augmentation, conditional types, and strict mode migration strategies.',
        eventType: 'seminar',
        thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600',
        startDateTime: d(9),
        endDateTime: d(9, 1.5),
        meetingLink: 'https://zoom.us/ts-best-practices',
        maxParticipants: 180,
        registrationCount: 55
      },
      {
        title: 'EduTech Annual Learning Summit',
        description: 'Our flagship annual event. Two days of keynotes, workshops, and networking with 50+ speakers and 1000+ learners from across India.',
        eventType: 'conference',
        thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600',
        startDateTime: d(45),
        endDateTime: d(46, 8),
        maxParticipants: 1000,
        isFeatured: true,
        registrationCount: 430
      }
    ]);
    console.log('📅 15 Events created');

    // ─────────────────────────────────────────────
    // 5. Create 15 Blog Posts
    // ─────────────────────────────────────────────
    const blogData = [
      {
        title: 'Top 10 Web Development Trends in 2026',
        content: `The web development landscape is evolving faster than ever. In 2026, we're seeing the rise of AI-powered development tools, Web Components becoming mainstream, and WebAssembly pushing browser capabilities beyond imagination. Server components in React and Next.js are changing how we think about rendering. Edge computing is making apps faster globally. Here's our deep dive into the top 10 trends every developer must know this year.

## 1. AI-Assisted Coding
Tools like GitHub Copilot and Cursor are now used by over 70% of professional developers. They're not replacing developers — they're making them 3x more productive.

## 2. React Server Components
RSC fundamentally changes the React mental model. Components can now fetch data on the server without any client-side JavaScript, drastically reducing bundle sizes.

## 3. Edge Computing
Platforms like Vercel Edge, Cloudflare Workers, and Fastly are allowing JavaScript to run at CDN edge nodes, giving sub-10ms response times globally.

## 4. WebAssembly Goes Mainstream
WASM is no longer just for game engines. In 2026, frameworks like Blazor, Flutter Web, and even Python frameworks use WASM for near-native browser performance.

## 5. The Return of Web Standards
Frameworks are aligning more with native browser APIs — View Transitions, Navigation API, and CSS Container Queries are now used without polyfills.`,
        excerpt: 'Stay ahead of the curve with these 10 must-know web development trends for 2026.',
        featuredImage: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800',
        author: admin._id,
        category: devCat._id,
        tags: [reactTag._id, nodeTag._id, jsTag._id],
        status: 'published',
        isFeatured: true,
        viewCount: 4280
      },
      {
        title: 'How to Start a Career in UI/UX Design',
        content: `Breaking into UI/UX design can feel overwhelming, but it's more accessible than ever. You don't need a design degree — you need a portfolio, the right tools, and a deep understanding of human behaviour.

## The Mindset Shift
UX design is about solving problems, not just making things look pretty. Start by understanding user psychology, conducting interviews, and mapping user journeys.

## Tools You Need to Learn
- **Figma**: Industry standard for UI design and prototyping
- **Maze or Useberry**: For usability testing
- **Miro**: For collaborative workshops and journey mapping

## Building Your Portfolio
Your portfolio is your ticket to your first job. Focus on case studies that show your process — problem definition, research, ideation, wireframes, prototype, and validation.

## Getting Hired
Apply to junior roles, take freelance projects on Upwork, and contribute to open source design systems. Join communities like ADPList to find free mentorship.`,
        excerpt: 'Practical tips to land your first UI/UX design job — even without a design degree.',
        featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
        author: admin._id,
        category: designCat._id,
        tags: [uiTag._id],
        status: 'published',
        isFeatured: true,
        viewCount: 3120
      },
      {
        title: 'Understanding React Hooks — A Practical Guide',
        content: `React Hooks changed everything when they arrived in React 16.8. Now in 2026, with React 19's new hooks, there's more to learn than ever. Let's break down the hooks you actually use in production.

## useState — More Powerful Than You Think
Most developers only scratch the surface of useState. Functional updates, lazy initializers, and combining with useReducer are patterns you should master.

## useEffect — The Most Misunderstood Hook
The dependency array is not optional. Understanding the cleanup function and avoiding infinite loops are critical skills.

## The New use() Hook in React 19
React 19 introduces the use() hook for reading resources like Promises and Context directly inside render. This combined with Suspense unlocks powerful data fetching patterns.

## Custom Hooks — Your Real Superpower
Every time you repeat a stateful logic pattern, extract it into a custom hook. Examples: useDebounce, useLocalStorage, useFetch.`,
        excerpt: 'Master React Hooks with real-world patterns and the new React 19 additions.',
        featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
        author: admin._id,
        category: devCat._id,
        tags: [reactTag._id, jsTag._id],
        status: 'published',
        isFeatured: true,
        viewCount: 5600
      },
      {
        title: 'Python vs JavaScript: Which Should You Learn First?',
        content: `One of the most common questions from beginners: "Should I learn Python or JavaScript first?" The honest answer depends on your goal, but here's a comprehensive breakdown.

## Python: The Beginner-Friendly Option
Python was designed to be readable. Its clean syntax, mandatory indentation, and English-like keywords make it ideal for absolute beginners. It's the language of data science, AI, and automation.

## JavaScript: Learn Once, Build Everywhere
JavaScript is the only language that runs in the browser. If you want to build websites, web apps, mobile apps (React Native), or backend services (Node.js), JS covers all bases.

## The Verdict
- Want to do **data science, AI, or automation**? → Python
- Want to build **websites and web apps**? → JavaScript
- Not sure? → JavaScript, because you'll need it eventually regardless.`,
        excerpt: 'An honest, unbiased comparison to help beginners pick their first programming language.',
        featuredImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800',
        author: admin._id,
        category: devCat._id,
        tags: [pythonTag._id, jsTag._id],
        status: 'published',
        viewCount: 2900
      },
      {
        title: 'The Ultimate Guide to CSS Grid',
        content: `CSS Grid is the most powerful layout system available in CSS. It's a 2D system, meaning it can handle both columns and rows, unlike Flexbox which is largely a 1D system.

## Grid vs Flexbox — When to Use Which
Use Grid for page-level layouts and large components. Use Flexbox for smaller, one-dimensional components like navigation bars, card rows, or button groups.

## Core Concepts
- \`grid-template-columns\` and \`grid-template-rows\` define the track sizes
- \`grid-column\` and \`grid-row\` position items on the grid
- \`grid-area\` lets you name and place items with template areas

## Responsive Grids Without Media Queries
The \`repeat(auto-fill, minmax(250px, 1fr))\` pattern creates fully responsive grids without a single media query. This is one of CSS Grid's most powerful features.`,
        excerpt: 'Everything you need to know about CSS Grid to build any layout imaginable.',
        featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        author: admin._id,
        category: devCat._id,
        tags: [cssTag._id],
        status: 'published',
        viewCount: 1870
      },
      {
        title: 'SEO in 2026: What Still Works and What Doesn\'t',
        content: `Search engine optimization has never been more dynamic. With Google's AI Overviews changing how search results look and generative AI threatening traffic everywhere, what actually works in 2026?

## The Core Web Vitals Update Is Not Going Away
LCP, FID, and CLS are still ranking factors. But in 2026, INP (Interaction to Next Paint) has replaced FID and is more strictly enforced.

## Content Quality Over Quantity
Google's Helpful Content updates have penalized thin, AI-generated content that doesn't serve users. Depth, expertise, and originality are what matter now.

## E-E-A-T Is Everything
Experience, Expertise, Authoritativeness, and Trust — these signals now move the needle more than technical SEO alone.

## What Doesn't Work Anymore
- Keyword stuffing
- Buying backlinks
- Thin affiliate pages
- Doorway pages`,
        excerpt: 'A no-nonsense look at what SEO strategies actually drive results in 2026.',
        featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800',
        author: admin._id,
        category: marketingCat._id,
        tags: [seoTag._id],
        status: 'published',
        viewCount: 2340
      },
      {
        title: 'Building Your First REST API with Node.js and Express',
        content: `REST APIs are the backbone of modern web applications. In this tutorial, we'll build a complete REST API from scratch using Node.js, Express, and MongoDB.

## Project Setup
Initialize your project with \`npm init -y\`, install Express, Mongoose, dotenv, and nodemon. Structure your project with controllers, routes, models, and middleware folders.

## Defining Routes
Use Express Router to organize routes by resource. Follow REST conventions — GET /users, POST /users, GET /users/:id, PUT /users/:id, DELETE /users/:id.

## Connecting to MongoDB
Use Mongoose to connect to MongoDB. Define schemas with validation, add pre-save hooks for slug generation, and use lean queries for better performance.

## Authentication with JWT
Protect routes with JWT middleware. Store tokens in HTTP-only cookies or Authorization headers. Always hash passwords with bcrypt before storing.`,
        excerpt: 'A step-by-step tutorial to build a production-ready REST API with Node.js, Express, and MongoDB.',
        featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
        author: admin._id,
        category: devCat._id,
        tags: [nodeTag._id, jsTag._id],
        status: 'published',
        viewCount: 3780
      },
      {
        title: '10 Figma Tips That Will 10x Your Design Speed',
        content: `Figma is packed with features most designers never discover. Here are 10 time-saving tips that professional designers use every day.

## 1. Components + Variants
Stop duplicating frames. Use Variants to manage all states of a component (default, hover, active, disabled) in one place.

## 2. Auto Layout Is Your Best Friend
Auto Layout makes your designs responsive by default. It works like CSS Flexbox — padding, gaps, and direction are all adjustable.

## 3. Variables for Design Tokens
Figma Variables let you define colors, spacing, and typography tokens that update across your entire design when changed.

## 4. Quick Insert with '/'
Name your components with '/' to create folders. Type '/' in the Insert panel to quickly find nested components.

## 5. Bulk Rename Layers
Select multiple layers and use Ctrl+R to bulk rename with sequential numbers, find-and-replace, or pattern matching.`,
        excerpt: '10 underrated Figma features that professional designers use to work 10x faster.',
        featuredImage: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800',
        author: admin._id,
        category: designCat._id,
        tags: [uiTag._id],
        status: 'published',
        viewCount: 2150
      },
      {
        title: 'Understanding Machine Learning: A Beginner\'s Guide',
        content: `Machine learning seems intimidating, but the core concepts are surprisingly approachable. This guide breaks down ML for complete beginners — no math degree required.

## What Is Machine Learning?
Machine learning is a subset of AI where systems learn from data to make predictions or decisions without being explicitly programmed for each task.

## The Three Types of ML
1. **Supervised Learning** — Learning from labeled examples (spam detection, image classification)
2. **Unsupervised Learning** — Finding patterns in unlabeled data (customer segmentation, anomaly detection)
3. **Reinforcement Learning** — Learning through trial and error with rewards (game AI, robotics)

## Your First ML Model
Use scikit-learn in Python to build a linear regression model in under 20 lines of code. Load a dataset, split into train/test, fit the model, and evaluate accuracy.`,
        excerpt: 'A clear, jargon-free introduction to machine learning for complete beginners.',
        featuredImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800',
        author: admin._id,
        category: dataCat._id,
        tags: [pythonTag._id, aiTag._id],
        status: 'published',
        isFeatured: true,
        viewCount: 4100
      },
      {
        title: 'The Startup Founder\'s Guide to MVP Development',
        content: `An MVP (Minimum Viable Product) is not a half-baked product — it's the smallest version of your product that delivers real value and lets you test your core hypothesis.

## What Goes Into an MVP
List every feature you think your product needs. Now cut 70% of them. Your MVP is the remaining 30% that directly validates your riskiest assumption.

## No-Code MVP vs Coded MVP
In 2026, you can build a surprisingly functional MVP with tools like Webflow, Bubble, Glide, or Softr — no engineers needed. This is often the right move for early validation.

## When to Code Your MVP
If your product's core value is the technology itself (an AI model, a custom algorithm, real-time collaboration), then you need engineers from day one.

## The Metrics That Matter
Don't measure vanity metrics like page views. Track activation rate, retention, and NPS — signals that show whether people actually get value from your product.`,
        excerpt: 'How to build and launch an MVP that validates your business idea without wasting 6 months.',
        featuredImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
        author: admin._id,
        category: businessCat._id,
        status: 'published',
        viewCount: 1650
      },
      {
        title: 'TypeScript in 2026 — Why It\'s Non-Negotiable',
        content: `TypeScript adoption has crossed 80% among professional JavaScript developers. If you're still writing plain JavaScript for production apps, here's why 2026 is the year to make the switch.

## The Case for TypeScript
TypeScript catches errors at compile time that would otherwise blow up at runtime in production. IDEs give you better autocomplete, refactoring tools, and inline documentation.

## Getting Started Is Easier Than Ever
Vite, Next.js, and Create React App all have TypeScript templates. Existing JS projects can be migrated gradually — you don't need to convert everything at once.

## Generics Are Not Scary
Once you understand generics, you'll wonder how you wrote reusable code without them. A generic function works with any type while still being type-safe.

## Strict Mode Is Worth The Pain
Enable \`"strict": true\` in your tsconfig from day one. It's harder at first, but it prevents an entire class of null/undefined runtime errors.`,
        excerpt: 'Why TypeScript is now a must-have skill and how to adopt it in your existing projects.',
        featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
        author: admin._id,
        category: devCat._id,
        tags: [jsTag._id, reactTag._id],
        status: 'published',
        viewCount: 2870
      },
      {
        title: 'Designing for Accessibility: A Practical Checklist',
        content: `Accessibility is not a feature — it's a baseline requirement. Approximately 15% of the world's population has some form of disability. Building accessible products is both the right thing to do and good business.

## Color Contrast
All text must meet WCAG 2.1 AA contrast ratios — 4.5:1 for normal text, 3:1 for large text. Use tools like Stark or WebAIM's Contrast Checker.

## Keyboard Navigation
Every interactive element must be reachable and operable via keyboard. Test by unplugging your mouse and navigating your entire UI with Tab, Shift+Tab, Enter, and Space.

## Screen Reader Support
Use semantic HTML. Add aria-labels to icon buttons. Ensure dynamic content updates are announced with aria-live regions.

## Forms Done Right
Every input needs a visible label. Error messages must be associated with their fields via aria-describedby. Never rely on color alone to communicate errors.`,
        excerpt: 'A practical accessibility checklist every designer and developer should implement.',
        featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        author: admin._id,
        category: designCat._id,
        tags: [uiTag._id, cssTag._id],
        status: 'published',
        viewCount: 1420
      },
      {
        title: 'Docker for Developers: From Zero to Production',
        content: `Docker has gone from a niche DevOps tool to a fundamental developer skill. If you're not using Docker, you're adding unnecessary friction to your development and deployment workflow.

## What Problem Does Docker Solve?
"It works on my machine" — Docker eliminates this by packaging your application with all its dependencies into a container that runs identically everywhere.

## Core Concepts
- **Image**: A blueprint for a container (built from a Dockerfile)
- **Container**: A running instance of an image
- **Docker Compose**: Define multi-container apps (app + database + cache) in one YAML file

## Your First Dockerfile
A Node.js Dockerfile is just 8 lines: set the base image, copy package files, run npm install, copy source, expose port, set the start command.

## Docker Compose for Development
Use Compose to spin up your entire development environment — app server, MongoDB, Redis — with a single \`docker-compose up\` command.`,
        excerpt: 'A practical Docker guide for developers — from your first container to production deployment.',
        featuredImage: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800',
        author: admin._id,
        category: devCat._id,
        tags: [nodeTag._id],
        status: 'published',
        viewCount: 1990
      },
      {
        title: 'Growth Hacking 101: How Startups Grow Fast',
        content: `Growth hacking is the discipline of finding unconventional, scalable ways to grow a product's user base. It sits at the intersection of marketing, product, and data.

## The Growth Loop Framework
Sustainable growth comes from loops, not funnels. A growth loop is a self-reinforcing cycle — users taking actions that bring in more users (referrals, content, virality).

## Classic Growth Hacks
- **Dropbox**: Gave free storage for referrals. Grew from 100K to 4M users in 15 months.
- **Airbnb**: Posted listings to Craigslist to tap into existing demand.
- **Hotmail**: Added "PS: Get your free email at Hotmail" to every sent email.

## Data-Driven Experimentation
Growth hackers run dozens of A/B tests per week. Every headline, button color, and onboarding step is a hypothesis to be tested.`,
        excerpt: 'The growth hacking playbook that has helped startups like Dropbox and Airbnb scale fast.',
        featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800',
        author: admin._id,
        category: businessCat._id,
        tags: [seoTag._id],
        status: 'published',
        viewCount: 2210
      },
      {
        title: 'The Power of Data Visualization in Business Decisions',
        content: `Data without visualization is just numbers. The ability to present data in a clear, compelling way is one of the highest-value skills in any organization.

## Why Visualization Matters
The human brain processes visuals 60,000 times faster than text. A well-designed chart can communicate in seconds what a data table takes minutes to convey.

## Choosing the Right Chart Type
- **Bar chart**: Comparing categories
- **Line chart**: Showing trends over time
- **Scatter plot**: Showing correlations
- **Heatmap**: Showing density or frequency across two dimensions

## Tools of the Trade
- **Power BI**: Best for enterprise business intelligence
- **Tableau**: Powerful, flexible, popular in enterprise
- **Recharts / D3.js**: For custom, interactive web visualizations
- **Looker Studio**: Free, Google ecosystem, great for marketing data

## The Storytelling Layer
A dashboard isn't a story. Turn your data into a narrative — headline the key insight, provide supporting evidence, and recommend a clear action.`,
        excerpt: 'How to turn raw data into powerful visual stories that drive better business decisions.',
        featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        author: admin._id,
        category: dataCat._id,
        tags: [pythonTag._id, aiTag._id],
        status: 'published',
        viewCount: 1730
      }
    ];

    // Insert one at a time to trigger the pre-save hook (slug generation + publishedAt)
    for (const post of blogData) {
      await new BlogPost(post).save();
    }
    console.log('✍️  15 Blog posts created');

    console.log('\n✨ Seeding completed successfully!');
    console.log('📊 Summary:');
    console.log('   • 15 Courses');
    console.log('   • 15 Events');
    console.log('   • 15 Blog posts');
    console.log('   • 5 Categories (Design, Development, Business, Data Science, Marketing)');
    console.log('   • 8 Tags');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
};

seedData();
