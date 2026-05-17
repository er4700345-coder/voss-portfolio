import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    name: "SLIME",
    category: "Compiler / Systems Language",
    description: "A systems programming language targeting WebAssembly and beyond, designed to run from browsers to bare metal.",
    problem: "Building high-performance, verifiable systems without traditional runtime overhead.",
    whyMatters: "Enables deterministic execution across distributed and constrained environments.",
    architecture: "Lexer → Parser → Typechecker → IR → WASM emission with validation and execution tests.",
    stack: ["Rust", "WASM", "Type Systems", "Formal Verification"],
    github: "https://github.com/er4700345-coder/-slime-ng",
    status: "Active Research"
  },
  {
    name: "Axiom",
    category: "AI Developer Assistant",
    description: "Enterprise-grade AI developer assistant for repository intelligence, PR review, debugging, code explanation, workflow orchestration, and architecture analysis.",
    problem: "Engineering teams drowning in context switching and code archaeology.",
    whyMatters: "Accelerates decision velocity at scale.",
    architecture: "Multi-agent orchestration with repository graph intelligence and real-time synthesis.",
    stack: ["LLMs", "Graph Systems", "Developer Tools", "Distributed Agents"],
    github: "https://github.com/er4700345-coder/axiom",
    status: "Production"
  },
  {
    name: "Leviathan Kernel",
    category: "Research Systems / Bureaucratic Cybernetics",
    description: "A research-grade computational system for modeling bureaucracy, institutions, corruption, policy flow, and administrative collapse as formal computable systems.",
    problem: "Governance and institutional systems are treated as black boxes with no predictive power.",
    whyMatters: "Brings computational rigor to power structures and administrative failure modes.",
    architecture: "BDL parser, Rust CLI, minimal policy VM, simulation trace, formal systems direction.",
    stack: ["Rust", "Formal Methods", "Graph Theory", "Simulation"],
    github: "https://github.com/er4700345-coder/leviathan-kernel",
    status: "Active Research"
  },
  {
    name: "GhostNet",
    category: "Decentralized Protocol",
    description: "Decentralized WebRTC mesh network with DHT routing, onion routing, peer reputation systems, and network visualization.",
    problem: "Centralized infrastructure creates single points of failure and surveillance.",
    whyMatters: "Enables resilient, private, censorship-resistant communication at scale.",
    architecture: "WebRTC + DHT + Onion Routing + Reputation Graph + Visualization Layer.",
    stack: ["WebRTC", "DHT", "Cryptography", "P2P"],
    github: "https://github.com/er4700345-coder/ghostnet",
    status: "Prototype"
  },
  {
    name: "Complect",
    category: "Enterprise SaaS",
    description: "AI-powered compliance intelligence platform for automating security questionnaires, vendor reviews, and enterprise security workflows.",
    problem: "Security and compliance processes are manual, slow, and error-prone at enterprise scale.",
    whyMatters: "Reduces risk and accelerates vendor onboarding by orders of magnitude.",
    architecture: "Document intelligence + workflow orchestration + risk scoring + audit trails.",
    stack: ["AI", "Enterprise SaaS", "Compliance", "Automation"],
    github: "https://github.com/er4700345-coder/complect",
    status: "Production"
  },
  {
    name: "SentinelAI",
    category: "Security Automation",
    description: "AI-powered GitHub security auditor for static analysis, vulnerability detection, reporting, and security workflow automation.",
    problem: "Security vulnerabilities and misconfigurations are discovered too late in the development lifecycle.",
    whyMatters: "Shifts security left with automated, continuous verification.",
    architecture: "Static analysis engine + LLM reasoning + GitHub App integration + reporting pipeline.",
    stack: ["Security", "AI", "GitHub Apps", "Automation"],
    github: "https://github.com/er4700345-coder/SentinelAI",
    status: "Active"
  },
  {
    name: "CodeForge",
    category: "Autonomous AI Agent",
    description: "Autonomous AI programming system for planning, coding, testing, commits, and pull request preparation.",
    problem: "Software development velocity is bottlenecked by human context switching and coordination overhead.",
    whyMatters: "Enables 10x engineering throughput through autonomous execution loops.",
    architecture: "Planning agent + code synthesis + test harness + git integration + PR automation.",
    stack: ["Agents", "LLMs", "Tool Use", "CI/CD"],
    github: "https://github.com/er4700345-coder/codeforge",
    status: "Active Research"
  },
  {
    name: "EED Computation Model",
    category: "Research Systems",
    description: "Research-grade computational model exploring entropy, energy, and causal depth across computational systems.",
    problem: "Computational systems lack rigorous metrics for complexity, energy cost, and causal structure.",
    whyMatters: "Provides a foundational lens for understanding limits and tradeoffs in computation.",
    architecture: "Entropy measures + energy accounting + causal graphs + simulation harness.",
    stack: ["Research", "Simulation", "Information Theory", "Complexity Science"],
    github: "https://github.com/er4700345-coder/eed-computation-model",
    status: "Active Research"
  },
  {
    name: "Financial Behavior Engine",
    category: "Fintech Intelligence",
    description: "Behavioral financial intelligence system for anomaly detection, trust scoring, liquidity monitoring, and loan risk prediction.",
    problem: "Traditional financial risk models fail to capture real human and systemic behavioral patterns.",
    whyMatters: "Improves lending decisions and fraud detection with behavioral signals.",
    architecture: "Transaction graph analysis + behavioral embeddings + risk scoring + real-time monitoring.",
    stack: ["Fintech", "Graph ML", "Anomaly Detection", "Risk Modeling"],
    github: "https://github.com/er4700345-coder/financial-behavior-engine",
    status: "Prototype"
  },
  {
    name: "Security Research Archive",
    category: "Offensive Security",
    description: "Practical archive of reconnaissance reports, subdomain findings, vulnerability investigations, exploit analysis, and offensive security workflows.",
    problem: "Security research is scattered, non-reproducible, and hard to operationalize at scale.",
    whyMatters: "Creates a living knowledge base for continuous security improvement.",
    architecture: "Recon automation + vulnerability database + exploit chaining + workflow documentation.",
    stack: ["Offensive Security", "Recon", "Vulnerability Research", "Automation"],
    github: "https://github.com/er4700345-coder/security-research-archive",
    status: "Active"
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="px-4 py-1 border border-white/30 text-xs tracking-[4px] text-white/60">SYSTEMS ENGINEER • ARCHITECT • RESEARCHER</div>
          </div>
          
          <h1 className="text-7xl md:text-[120px] font-bold tracking-tighter mb-6">DIVINE SUNDAY</h1>
          <div className="text-2xl md:text-4xl text-white/80 tracking-tight mb-4">VOSS 🥷</div>
          
          <p className="max-w-2xl mx-auto text-xl text-white/60 mb-12">
            I design and build high-performance software systems across developer infrastructure, 
            security automation, compliance intelligence, distributed architectures, compilers, 
            research systems, and enterprise-grade platforms.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#systems" className="group inline-flex items-center justify-center px-8 py-4 border border-white text-sm tracking-widest hover:bg-white hover:text-black transition-all">
              VIEW SYSTEMS <ArrowRight className="ml-3 group-hover:translate-x-1 transition" size={16} />
            </a>
            <a href="https://github.com/er4700345-coder" target="_blank" className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-sm tracking-widest hover:border-white transition-all">
              GITHUB <Github className="ml-3" size={16} />
            </a>
            <a href="https://t.me/vxssroot" target="_blank" className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-sm tracking-widest hover:border-white transition-all">
              CONTACT
            </a>
          </div>
        </div>
      </section>

      {/* Selected Systems */}
      <section id="systems" className="max-w-7xl mx-auto px-6 py-24 border-b border-white/10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[3px] text-white/50 mb-4">SELECTED WORK</div>
            <h2 className="text-6xl font-bold tracking-tighter">SYSTEMS</h2>
          </div>
          <div className="text-right text-sm text-white/50 max-w-xs">
            Production systems, research platforms, and infrastructure primitives built for scale and clarity.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="group border border-white/10 hover:border-white/40 p-9 transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-mono text-xs tracking-[2px] text-white/50 mb-2">{project.category}</div>
                  <h3 className="text-4xl font-bold tracking-tighter mb-3 group-hover:text-white/90 transition-colors">{project.name}</h3>
                </div>
                <div className="px-3 py-1 text-xs border border-white/20 text-white/60 self-start">{project.status}</div>
              </div>

              <p className="text-lg text-white/70 mb-8 flex-1">{project.description}</p>

              <div className="space-y-6 text-sm">
                <div>
                  <div className="text-white/50 mb-1">PROBLEM</div>
                  <div className="text-white/80">{project.problem}</div>
                </div>
                <div>
                  <div className="text-white/50 mb-1">WHY IT MATTERS</div>
                  <div className="text-white/80">{project.whyMatters}</div>
                </div>
                <div>
                  <div className="text-white/50 mb-1">ARCHITECTURE</div>
                  <div className="text-white/80">{project.architecture}</div>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex gap-2 flex-wrap">
                  {project.stack.slice(0, 3).map((s, i) => (
                    <span key={i} className="px-3 py-1 border border-white/20">{s}</span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white">
                    GITHUB <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Systems Thinking */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-white/10">
        <div className="grid md:grid-cols-12 gap-x-6">
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <div className="text-xs tracking-[3px] text-white/50 mb-4">THINKING</div>
              <h2 className="text-6xl font-bold tracking-tighter leading-none mb-8">
                SYSTEMS<br />THINKING
              </h2>
            </div>
          </div>
          <div className="md:col-span-7 text-xl text-white/70 space-y-8 pt-2">
            <p>I think in graphs, state machines, failure modes, and incentive structures.</p>
            <p>Every system I build is designed to survive its own success — to remain legible, auditable, and evolvable under real-world pressure.</p>
            <p>Scale is not just performance. It is clarity under load, correctness under change, and resilience under attack.</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-white/10">
        <div className="text-xs tracking-[3px] text-white/50 mb-4">FOUNDER MODE</div>
        <h2 className="text-6xl font-bold tracking-tighter mb-16">OPERATOR, NOT EMPLOYEE</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {["Axiom", "Complect", "SLIME", "Leviathan Kernel"].map((name, i) => (
            <div key={i} className="border border-white/10 p-9">
              <div className="text-4xl font-bold tracking-tighter mb-4">{name}</div>
              <div className="text-white/60">Built. Shipped. Operated.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-white/10">
        <div className="text-xs tracking-[3px] text-white/50 mb-4">ARSENAL</div>
        <h2 className="text-6xl font-bold tracking-tighter mb-16">TECHNICAL DEPTH</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {[
            "Backend Engineering", "Distributed Systems", "AI Orchestration", "Developer Tools",
            "Security Engineering", "Cloud Infrastructure", "System Architecture", "Protocol Design",
            "Enterprise SaaS", "Research Systems", "Compiler Engineering", "WASM"
          ].map((item, i) => (
            <div key={i} className="bg-[#0a0a0a] p-9 border-r border-b border-white/10 text-sm tracking-wider">{item}</div>
          ))}
        </div>
      </section>

      {/* Proof of Work */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-b border-white/10">
        <div className="text-xs tracking-[3px] text-white/50 mb-4">PROOF</div>
        <h2 className="text-6xl font-bold tracking-tighter mb-16">EXECUTION RECORD</h2>
        
        <div className="space-y-px">
          {[ 
            "Merged PR momentum across multiple high-velocity repositories",
            "SLIME compiler: full pipeline from source to validated WASM execution",
            "Leviathan Kernel: formal modeling of institutional collapse and corruption",
            "Multiple production startups shipped and operated at scale",
            "Security research archive with real-world offensive findings"
          ].map((item, i) => (
            <div key={i} className="border-t border-white/10 py-8 text-xl text-white/80">{item}</div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="text-sm tracking-[4px] text-white/50 mb-8">SERIOUS BUILDERS KNOW WHERE TO FIND ME</div>
        
        <div className="flex flex-col items-center gap-4 text-sm">
          <a href="https://github.com/er4700345-coder" target="_blank" className="hover:text-white/60 transition">GITHUB</a>
          <a href="https://t.me/vxssroot" target="_blank" className="hover:text-white/60 transition">TELEGRAM</a>
          <a href="https://wa.me/2347052759642" target="_blank" className="hover:text-white/60 transition">WHATSAPP</a>
        </div>

        <div className="mt-24 text-[10px] text-white/40 tracking-[2px]">
          © {new Date().getFullYear()} DIVINE SUNDAY. ALL SYSTEMS RESERVED.
        </div>
      </section>
    </div>
  );
};

export default App;