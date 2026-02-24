import { ReactNode } from "react";

export const ABOUT_KEYS = ["code", "myTECH","expertise","approach", "why", "guarantee"] as const;
export type AboutKey = typeof ABOUT_KEYS[number];

export const ABOUT_SECTIONS: Record<AboutKey, ReactNode> = {
  code: (
    <>
      <p>
        I am a full-stack developer with 25+ years of hands-on experience, specializing in building custom business applications using <strong className="text-[#EF4444]">PHP, Laravel, MySQL, PostGres, React/Next.js, Vue.js and Tailwind</strong>. I've delivered 100+ custom solutions for clients ranging from startups to enterprise organizations.
      </p>
      <p>
         I design and build web applications using technologies chosen based on the problem being solved—not for trend or terminology. 
       </p> 
       <p>
         My work spans custom CRMs, data-intensive business platforms, ecommerce systems, fintech workflows, and automation-heavy applications, each built to address real client challenges, improve productivity, and deliver performance, scalability, and long-term maintainability.
      </p>
      <p className="mt-6 font-semibold text-[#EF4444]">
        Project size doesn’t define success.<br />
      Execution does. Results do.
      </p>
    </>
  ),
  myTECH: (
    <>
      <p><strong className="text-[#EF4444]">Backend:</strong> Laravel, CodeIgniter, CakePHP, Core PHP 8.x, RESTful APIs, SOAP, XML/JSON</p>

<p><strong className="text-[#EF4444]">Frontend:</strong> React, Next.js, Vue, Tailwind CSS, JavaScript, jQuery, Bootstrap, HTML5/CSS3</p>

<p></p><strong className="text-[#EF4444]">Database:</strong> MySQL, PostgreSQL, Redis, Query Optimization, Indexing

<p><strong className="text-[#EF4444]">E-commerce:</strong> Shopify, WooCommerce, osCommerce, Amazon Marketplace</p>

<p><strong className="text-[#EF4444]">Payment Gateways:</strong> Stripe, PayPal, CCAvenue, RazorPay, Subscription Billing</p>

<p><strong className="text-[#EF4444]">APIs & Integrations:</strong> REST, SOAP, RETS/IDX, GraphQL, OAuth, Amazon SP-API, Zapier</p>

<p><strong className="text-[#EF4444]">DevOps & Cloud:</strong> AWS (EC2, RDS, S3), Azure SWA, Versel, Docker, CI/CD, Git, Forge, Envoyer</p>

<p><strong className="text-[#EF4444]">CRM Systems:</strong> Custom CRM, Lead Management, Sales Pipelines, Workflow Automation</p>

<p><strong className="text-[#EF4444]">PDF & Excel Reporting:</strong> PDF Generation, PDF Forms (reading/writing), Excel Import/Export, Data Visualization</p>      
    </>
  ),
 
expertise:(
  <>
<p><strong className="text-[#EF4444]">System Stability & Evolution:</strong> I help teams stabilize live systems, integrate payments, build new features, or develop new platforms—making the process structured, reliable, and low-friction from day one.</p>

<p><strong className="text-[#EF4444]">Root-Cause Problem Solving:</strong>  I specialize in rapid root-cause analysis and delivering practical solutions on complex legacy codebases.</p>

<p><strong className="text-[#EF4444]">Production-Grade Engineering:</strong> I transform unreliable systems into production-grade platforms by improving architecture, tightening delivery processes, and reducing technical debt.</p>

<p><strong className="text-[#EF4444]">Custom Web Applications:</strong> I build scalable web platforms that help SMEs escape fragile spreadsheets and bloated SaaS tools—solutions designed to actually get used.</p>

<p><strong className="text-[#EF4444]">ROI-First Mindset:</strong> Every project starts with business goals. My focus is on reducing technical downtime and accelerating release cycles to drive immediate business value.</p>
  </>
),
  approach: (
    <>
      <p><strong className="text-[#EF4444]">Discovery Kick-off.</strong> Align goals, stakeholders, and success criteria</p>
      <p><strong className="text-[#EF4444]">Research &amp; Validation.</strong> Assess problems, users, and feasibility. </p>
      <p><strong className="text-[#EF4444]">Definition &amp; Design.</strong> Document requirements and solution direction. Plan solution, understand the road bumps and plan for them.</p>
      <p><strong className="text-[#EF4444]">Build.</strong> Engineer for longevity.</p>
      <p><strong className="text-[#EF4444]">Test.</strong> Testing it at every milestone, ensuring it does what it needs to do. Creating a zero bug state.</p>
      <p><strong className="text-[#EF4444]">Launch.</strong> Upload it to your servers and hand over the keys to you. I am always there to back you if you face any issues.</p>
    </>
  ),

  why: (
    <>
      <p className="mb-6">
        Clients work with me because I focus on clarity and follow-through. Scope is defined up front. Communication is direct. Risks are surfaced early. Delivery is predictable. Many of my engagements turn into ongoing partnerships because teams value having someone who can both execute and think ahead.
      </p>
      <ul className="flex flex-col gap-4  text-sm   list-inside list-none p-0 m-0">
        <li className="pl-0 ml-0"><span className="text-[#EF4444] font-bold uppercase">Clear, reliable communication —</span> Typical response time is 0–4 hours during your business hours.Strong upfront analysis — understand your requirements before development begins, reducing rework, delays, and surprises.</li>
        <li className="pl-0 ml-0"><span className="text-[#EF4444] font-bold uppercase">25+ years of problem-solving experience —</span> Decades of real-world projects allow me to anticipate edge cases and solve problems efficiently.</li>
        <li className="pl-0 ml-0"><span className="text-[#EF4444] font-bold uppercase">Predictable delivery —</span> I plan ahead, communicate early if adjustments are needed, and deliver what I commit to.</li>
        <li className="pl-0 ml-0"><span className="text-[#EF4444] font-bold uppercase">Quality-first mindset —</span> I aim for zero-bug delivery. My testing process keeps post-launch issues extremely rare.</li>
      </ul>
    </>
  ),

  guarantee: (
    <>
      <p>
        Every project comes with a{" "}
        <strong className="text-white">100% Money-Back Guarantee</strong>.
      </p>
     
    <p className="mt-6  text-[#EF4444] font-bold">
      I stand by my work. If any issue related to my code appears after launch — whether next week or next year — I fix it. No questions, no invoices
    </p>
    </>
  ),
};
