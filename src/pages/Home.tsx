import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Server, 
  Cloud, 
  Cpu, 
  Terminal, 
  Lock, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Code2,
  ChevronRight,
  Send
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-cyan-500/20">
              PV
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white block">Pablo Victor Santos Borges</span>
              <span className="text-xs text-cyan-400 font-medium">Analista de Infraestrutura & Segurança</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#experiencia" className="hover:text-cyan-400 transition-colors">Experiência</a>
            <a href="#realizacoes" className="hover:text-cyan-400 transition-colors">Realizações</a>
            <a href="#competencias" className="hover:text-cyan-400 transition-colors">Competências</a>
            <a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a>
          </nav>

          <div className="flex items-center space-x-3">
            <a 
              href="#contato" 
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
            >
              Falar Comigo
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Trust Architecture & Enterprise Infra</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Infraestrutura Robusta, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Segurança Avançada</span> & Cloud.
              </h1>
              
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Profissional de Tecnologia da Informação com atuação em infraestrutura corporativa, segurança da informação e suporte avançado. Especialista em ambientes multiplataforma, migrações para o ecossistema Microsoft e automação.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#experiencia" 
                  className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all flex items-center space-x-2 shadow-lg shadow-cyan-500/25"
                >
                  <span>Ver Experiência</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="#contato" 
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700 flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Contato Direto</span>
                </a>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>São Paulo, SP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>(11) 99858-7409</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>pablovictorsantos01@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                <div className="absolute -top-3 right-6 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Destaque Trino
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <span>Resultados de Impacto</span>
                </h3>

                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-3xl font-black text-cyan-400 mb-1">-60%</div>
                    <div className="text-sm font-medium text-slate-200">Redução no Tempo de Onboarding</div>
                    <p className="text-xs text-slate-400 mt-1">Migração do Zoho para o ecossistema Microsoft 365 e Intune para 70 usuários.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-3xl font-black text-blue-400 mb-1">+40%</div>
                    <div className="text-sm font-medium text-slate-200">Performance de Storage</div>
                    <p className="text-xs text-slate-400 mt-1">Migração estruturada de storage para TrueNAS com alta disponibilidade.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-3xl font-black text-emerald-400 mb-1">99,5%</div>
                    <div className="text-sm font-medium text-slate-200">Uptime & Zero Incidentes</div>
                    <p className="text-xs text-slate-400 mt-1">Implantação de CrowdStrike Falcon (EDR) e políticas Zero Trust.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section id="experiencia" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Experiência Profissional</h2>
          <p className="text-slate-400">Trajetória prática em administração de ambientes corporativos, segurança e suporte técnico.</p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 relative shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Infraestrutura & Segurança
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">Analista de Infraestrutura e Segurança de TI</h3>
                <p className="text-slate-400 font-medium">Trino</p>
              </div>
              <div className="mt-2 sm:mt-0 text-sm text-cyan-400 font-semibold bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
                Jan 2026 – Ago 2026 (7 meses)
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Administração de infraestrutura corporativa com 70 usuários em ambiente multiplataforma (Windows Server, Linux, Unix).</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Liderança da migração de Zoho para o ecossistema Microsoft (365 e Intune), reduzindo o onboarding em 60%.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Migração de storage para TrueNAS (+40% em performance) e implantação de servidores Linux corporativos.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Implementação de Microsoft Entra ID com políticas avançadas de Conditional Access e Zero Trust Architecture.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Deployment de Hexnode MDM para gestão de 40+ dispositivos móveis em rede de parceiros.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Implantação e operação do CrowdStrike Falcon (EDR) para proteção avançada de endpoints.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 relative shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Suporte & Consultoria
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">Suporte Técnico e Vendas de Notebook</h3>
                <p className="text-slate-400 font-medium">Freelance / Atendimento Especializado</p>
              </div>
              <div className="mt-2 sm:mt-0 text-sm text-blue-400 font-semibold bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
                Jan 2025 – Presente
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Atendimento técnico N1 e N2 a clientes, com tempo médio de resolução de 2,3 horas.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Troubleshooting avançado de hardware, software e conectividade de rede.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Venda consultiva de notebooks, com levantamento de necessidades e configuração personalizada.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 relative shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Desenvolvimento Web
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">Desenvolvedor Web Front-end</h3>
                <p className="text-slate-400 font-medium">Projetos & Colaboração</p>
              </div>
              <div className="mt-2 sm:mt-0 text-sm text-purple-400 font-semibold bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
                Jan 2025 – Fev 2026
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span>Desenvolvimento de interfaces web responsivas com HTML5, CSS3 e JavaScript ES6+.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span>Integração com APIs RESTful e consumo de dados em tempo real.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span>Otimização de performance e versionamento de código com Git.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* REALIZAÇÕES & DESTAQUES */}
      <section id="realizacoes" className="py-24 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Principais Realizações</h2>
            <p className="text-slate-400">Marcos importantes entregues em ambientes corporativos de alta exigência.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Migração Cloud & Microsoft 365</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Condução da migração completa de Zoho para o ecossistema Microsoft (365 e Intune) com 100% de adoção em 70 usuários simultâneos, reduzindo o tempo de onboarding em 60%.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Otimização de Storage TrueNAS</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Reestruturação e migração de storage para TrueNAS, garantindo ganho de 40% em performance de leitura/escrita e robustez para os dados corporativos críticos.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automação de Servidores Linux</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Implantação de servidores Linux corporativos e automação de provisioning, reduzindo o tempo de preparação de máquinas de 4 horas para apenas 40 minutos.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 font-bold text-xl">
                04
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Segurança Zero Trust com CrowdStrike</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Migração de endpoints para CrowdStrike Falcon (EDR) combinada com arquitetura Zero Trust e Microsoft Entra ID Conditional Access, atingindo zero incidentes de segurança.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* COMPETÊNCIAS & HABILIDADES */}
      <section id="competencias" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Competências Técnicas</h2>
          <p className="text-slate-400">Stack tecnológica e domínios de especialização.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Cloud className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Cloud & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">AWS (Fundamentos)</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Docker</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Redes de Computadores</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">DevOps Concepts</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Segurança & Identidade</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Microsoft Entra ID</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">CrowdStrike Falcon</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Conditional Access</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Zero Trust</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">MFA / RBAC</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Infraestrutura & MDM</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Microsoft Intune</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Hexnode MDM</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Windows Server</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Linux / Unix</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">TrueNAS</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Code2 className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Desenvolvimento</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">JavaScript (ES6+)</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">HTML5 / CSS3</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">REST APIs</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Git / GitHub</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Formação Acadêmica</h3>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <div className="font-semibold text-white">Redes de Computadores & DevOps</div>
                <div className="text-xs text-slate-400">Impacta Tecnologia — Em andamento</div>
              </div>
              <div>
                <div className="font-semibold text-white">Análise e Desenvolvimento de Sistemas</div>
                <div className="text-xs text-slate-400">USCS — 2 anos cursados</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Terminal className="w-6 h-6 text-rose-400" />
              <h3 className="text-lg font-bold text-white">Ferramentas & Admin</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">PowerShell</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Azure Portal</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Microsoft 365</span>
              <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800">Hyper-V</span>
            </div>
          </div>

        </div>
      </section>

      {/* CONTATO & RODAPÉ */}
      <section id="contato" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Vamos Conectar?</h2>
              <p className="text-slate-300 leading-relaxed">
                Estou sempre aberto a novos desafios em infraestrutura corporativa, segurança da informação, DevOps e projetos de tecnologia de alto impacto. Entre em contato por e-mail ou telefone.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">E-mail</div>
                    <a href="mailto:pablovictorsantos01@gmail.com" className="text-white hover:text-cyan-400 font-medium">pablovictorsantos01@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Telefone / WhatsApp</div>
                    <span className="text-white font-medium">(11) 99858-7409</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Localização</div>
                    <span className="text-white font-medium">São Paulo, SP</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Envie sua Mensagem</h3>
                
                {submitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-xl text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400" />
                    <div className="font-bold text-lg">Mensagem enviada com sucesso!</div>
                    <p className="text-sm text-emerald-300/80">Obrigado pelo contato. Retornarei em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Seu Nome</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Ex: João Silva"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Seu E-mail</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Ex: joao@empresa.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Mensagem</label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                        placeholder="Escreva sua mensagem ou proposta..."
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Pablo Victor Santos Borges. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
