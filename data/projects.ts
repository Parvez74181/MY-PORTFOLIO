import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    heading: "Education Management Platform",
    subHeading: "Full-Stack Academic & Administration System",
    slug: "education-management-platform-full-stack-academic-administration-system",
    thumbnail: "/projects/linear.jpg",
    content:
      "A complete education management solution featuring a modern public website and a role-based admin dashboard. The platform streamlines academic workflows, finance management, student records, attendance, exams, and performance tracking with a scalable, type-safe architecture.",
    url: "https://academy.linearedu.com",

    requirements: `
      <ul>
        <li><b>Website:</b> Modern public-facing platform</li>
        <li><b>Auth:</b> Role-based authentication</li>
        <li><b>Dashboards:</b> Admin, Staff, Teacher, Student</li>
        <li><b>Academics:</b> Courses, batches, exams, attendance</li>
        <li><b>Finance:</b> Fees, salaries, expenses, fines</li>
        <li><b>Records:</b> Centralized student data</li>
      </ul>
    `,

    challenges: `
      <ul>
        <li><b>Permissions:</b> Multi-role access control</li>
        <li><b>Data:</b> Large academic datasets</li>
        <li><b>Finance:</b> Accurate financial tracking</li>
        <li><b>Scale:</b> Performance with growth</li>
      </ul>
    `,

    solutions: `
      <ul>
        <li><b>Security:</b> JWT-based RBAC</li>
        <li><b>Architecture:</b> Modular academic system</li>
        <li><b>Records:</b> Unified student profiles</li>
        <li><b>ORM:</b> Type-safe Drizzle ORM</li>
        <li><b>Frontend:</b> Optimized Next.js rendering</li>
      </ul>
    `,

    techUsed: `
      <ul>
        <li><b>Framework:</b> Next.js</li>
        <li><b>Language:</b> TypeScript</li>
        <li><b>ORM:</b> Drizzle ORM</li>
        <li><b>Database:</b> PostgreSQL</li>
        <li><b>Auth:</b> JWT</li>
        <li><b>UI:</b> Heroui</li>
      </ul>
    `,
  },

  {
    id: 2,
    heading: "Martege Ecommerce Platform",
    subHeading: "High-Traffic Full-Stack Ecommerce Solution",
    slug: "martege-ecommerce-platform-high-traffic-full-stack-ecommerce-solution",
    thumbnail: "/projects/martege.jpg",
    content:
      "A scalable ecommerce platform handling 10k+ monthly users with dynamic pricing, secure payments, and real-time cart functionality.",
    url: "https://martege.com",

    requirements: `
      <ul>
        <li><b>Auth:</b> Secure login system</li>
        <li><b>Products:</b> Dynamic pricing & variants</li>
        <li><b>Cart:</b> Real-time checkout</li>
        <li><b>Payments:</b> SSLC integration</li>
        <li><b>Admin:</b> Store management panel</li>
      </ul>
    `,

    challenges: `
      <ul>
        <li><b>Pricing:</b> Complex dynamic rules</li>
        <li><b>Security:</b> User authentication</li>
        <li><b>Traffic:</b> High concurrency</li>
      </ul>
    `,

    solutions: `
      <ul>
        <li><b>Auth:</b> BetterAuth (OAuth & Email)</li>
        <li><b>Cart:</b> Real-time pricing engine</li>
        <li><b>Payments:</b> SSLC secure gateway</li>
        <li><b>Performance:</b> ISR & SSG</li>
      </ul>
    `,

    techUsed: `
      <ul>
        <li><b>Framework:</b> Next.js</li>
        <li><b>Backend:</b> Node.js</li>
        <li><b>Database:</b> MySQL</li>
        <li><b>Auth:</b> BetterAuth</li>
        <li><b>UI:</b> Shadcn/UI & Tailwind CSS</li>
      </ul>
    `,
  },

  {
    id: 3,
    heading: "ZeroDeft Agency Website",
    subHeading: "High-Performance Digital Agency Website",
    slug: "zerodeft-agency-website-high-performance-digital-agency-website",
    thumbnail: "/projects/zerodeft.jpg",
    content: "A modern agency website focused on performance, animations, and reusable components.",
    url: "https://zerodeft.com",

    requirements: `
      <ul>
        <li><b>Design:</b> Modern agency look</li>
        <li><b>Animation:</b> Smooth transitions</li>
        <li><b>Speed:</b> High PageSpeed</li>
      </ul>
    `,

    challenges: `
      <ul>
        <li><b>Balance:</b> Animations vs speed</li>
        <li><b>Code:</b> Maintainable components</li>
      </ul>
    `,

    solutions: `
      <ul>
        <li><b>Animation:</b> Framer Motion</li>
        <li><b>Optimization:</b> Lazy loading</li>
        <li><b>Result:</b> 98/100 PageSpeed</li>
      </ul>
    `,

    techUsed: `
      <ul>
        <li><b>Framework:</b> Next.js</li>
        <li><b>Styling:</b> Tailwind CSS</li>
        <li><b>UI:</b> HeroUI</li>
      </ul>
    `,
  },

  {
    id: 4,
    heading: "Evilim Ecommerce Platform",
    subHeading: "Secure & Performance-Optimized Online Store",
    slug: "evilim-ecommerce-platform-secure-performance-optimized-online-store",
    thumbnail: "/projects/evilim.jpg",
    content: "A secure ecommerce platform with OAuth authentication, real-time cart, and admin dashboard.",
    url: "https://evilim.com",

    requirements: `
      <ul>
        <li><b>Auth:</b> OAuth & email login</li>
        <li><b>Cart:</b> Real-time updates</li>
        <li><b>Admin:</b> Store management</li>
      </ul>
    `,

    challenges: `
      <ul>
        <li><b>Security:</b> Prevent unauthorized access</li>
        <li><b>State:</b> Cart synchronization</li>
      </ul>
    `,

    solutions: `
      <ul>
        <li><b>Auth:</b> Auth.js integration</li>
        <li><b>Cart:</b> Optimized state handling</li>
        <li><b>SEO:</b> SSG & ISR</li>
      </ul>
    `,

    techUsed: `
      <ul>
        <li><b>Frontend:</b> Next.js</li>
        <li><b>Backend:</b> Django</li>
        <li><b>Auth:</b> Auth.js</li>
        <li><b>Database:</b> MySQL</li>
      </ul>
    `,
  },

  {
    id: 5,
    heading: "Sundarban Interior Furniture",
    subHeading: "Business Website & Custom CMS",
    slug: "sundarban-interior-furniture-business-website-custom-cms",
    thumbnail: "/projects/sundarban.jpg",
    content: "A custom WordPress business website optimized for SEO and performance.",
    url: "https://sundarbaninteriorfurniture.com",

    requirements: `
      <ul>
        <li><b>Design:</b> Brand-focused layout</li>
        <li><b>SEO:</b> Search optimization</li>
        <li><b>CMS:</b> Easy content updates</li>
      </ul>
    `,

    challenges: `
      <ul>
        <li><b>Brand:</b> Visual consistency</li>
        <li><b>Speed:</b> Performance optimization</li>
      </ul>
    `,

    solutions: `
      <ul>
        <li><b>Theme:</b> Custom WordPress theme</li>
        <li><b>SEO:</b> Yoast optimization</li>
        <li><b>Performance:</b> Cloudflare & LiteSpeed</li>
      </ul>
    `,

    techUsed: `
      <ul>
        <li><b>CMS:</b> WordPress</li>
        <li><b>Builder:</b> Elementor</li>
        <li><b>SEO:</b> Yoast</li>
      </ul>
    `,
  },

  {
    id: 6,
    heading: "MS Aayan Tiles & Sanitary",
    subHeading: "Product-Focused Business Website",
    slug: "ms-aayan-tiles-sanitary-product-focused-business-website",
    thumbnail: "/projects/ms_ayan.jpg",
    content: "A product-centric business website designed for engagement and lead generation.",
    url: "https://msaayantiles.com",

    requirements: `
      <ul>
        <li><b>Catalog:</b> Product listings</li>
        <li><b>Design:</b> Responsive UI</li>
        <li><b>Leads:</b> Inquiry forms</li>
      </ul>
    `,

    challenges: `
      <ul>
        <li><b>Navigation:</b> Product organization</li>
        <li><b>Mobile:</b> UX optimization</li>
      </ul>
    `,

    solutions: `
      <ul>
        <li><b>UX:</b> Intuitive layout</li>
        <li><b>Forms:</b> Lead capture integration</li>
      </ul>
    `,

    techUsed: `
      <ul>
        <li><b>CMS:</b> WordPress</li>
        <li><b>SEO:</b> Yoast</li>
        <li><b>CDN:</b> Cloudflare</li>
      </ul>
    `,
  },

  {
    id: 7,
    heading: "BD Dream Interior Design Solution",
    subHeading: "Full-Service Interior & Architectural Design Website",
    slug: "bd-dream-interior-design-solution-full-service-interior-architectural-design-website",
    thumbnail: "/projects/bd_dream.jpg",
    content: "An elegant interior design website highlighting services and project portfolios.",
    url: "https://bddreaminterior.com",

    requirements: `
      <ul>
        <li><b>Design:</b> Premium visuals</li>
        <li><b>Services:</b> Clear presentation</li>
        <li><b>Portfolio:</b> Project showcase</li>
      </ul>
    `,

    challenges: `
      <ul>
        <li><b>Clarity:</b> Service structure</li>
        <li><b>Speed:</b> Performance optimization</li>
      </ul>
    `,

    solutions: `
      <ul>
        <li><b>Theme:</b> Custom WordPress build</li>
        <li><b>SEO:</b> Best practices</li>
        <li><b>Performance:</b> CDN & caching</li>
      </ul>
    `,

    techUsed: `
      <ul>
        <li><b>CMS:</b> WordPress</li>
        <li><b>Builder:</b> Elementor</li>
        <li><b>SEO:</b> Yoast</li>
      </ul>
    `,
  },
];

export default projects;
