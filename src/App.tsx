import React from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Scale,
  Calculator,
  Shield,
  Users,
  Building,
  FileText,
  Award,
  TrendingUp,
  Calendar,
  Target,
  Heart
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "./components/ui/accordion";
import { WhatsAppIcon } from "./components/WhatsAppIcon";

interface LawFirmLandingPageProps {
  heroTitle?: string;
  heroSubtitle?: string;
  ctaText?: string;
  benefits?: Array<{ text: string; icon: React.ReactNode }>;
  aboutTitle?: string;
  aboutDescription?: string;
  services?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  stats?: Array<{
    icon: React.ReactNode;
    value: string;
    label: string;
  }>;
  faqItems?: Array<{
    question: string;
    answer: string;
  }>;
}

const LawFirmLandingPage = ({
  heroTitle = "Escritório de advocacia para Assessoria e Consultoria Jurídica Empresarial",
  heroSubtitle = "Advogados Especialistas em Direito Empresarial com atuação em Belo Horizonte e nos principais centros de todo o Brasil. Defenda sua empresa, evite riscos e tome decisões com respaldo jurídico.",
  ctaText = "Falar com um advogado agora",
  benefits = [
    { text: "Defesa trabalhista empresarial", icon: <Scale className="w-5 h-5 text-primary-blue" /> },
    { text: "Planejamento tributário e defesa fiscal", icon: <Calculator className="w-5 h-5 text-primary-blue" /> },
    { text: "Consultoria jurídica preventiva", icon: <Shield className="w-5 h-5 text-primary-blue" /> },
    { text: "Atuação estratégica e personalizada para sua empresa", icon: <Target className="w-5 h-5 text-primary-blue" /> },
    { text: "Apoio jurídico especializado para micro e pequenas empresas", icon: <Heart className="w-5 h-5 text-primary-blue" /> }
  ],
  aboutTitle = "Quem somos",
  aboutDescription = "O Borges & Musa é um escritório especializado em Direito Empresarial, com foco em empresas que buscam segurança jurídica nas áreas trabalhista e tributária. Nossa equipe atua de forma consultiva e contenciosa, sempre com agilidade, ética e visão estratégica. Temos especial atenção às micro e pequenas empresas, que estão entre as mais impactadas pelas mudanças tributárias em curso no Brasil.",
  services = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Defesa Trabalhista Empresarial",
      description: "Análise e prevenção de passivos trabalhistas, assessoria em contratações, demissões e gestão de riscos, implementação de políticas internas e compliance trabalhista"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Tributário Empresarial",
      description: "Planejamento tributário de acordo com a nova legislação, reestruturação fiscal e recuperação de créditos, suporte estratégico para micro e pequenas empresas"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Societário e Governança",
      description: "Regularização societária, entrada e saída de sócios, mediação de conflitos e estruturação jurídica da empresa, acompanhamento para fusões, aquisições e vendas"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Consultoria Jurídica Contínua",
      description: "Aconselhamento jurídico recorrente, suporte para decisões operacionais e estratégicas, atendimento presencial em BH e remoto para todo o Brasil"
    }
  ],
  stats = [
    { icon: <Award className="w-6 h-6" />, value: "300+", label: "Empresas Atendidas" },
    { icon: <Users className="w-6 h-6" />, value: "15+", label: "Anos de Experiência" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "98%", label: "Taxa de Sucesso" },
    { icon: <Calendar className="w-6 h-6" />, value: "24h", label: "Tempo de Resposta" }
  ],
  faqItems = [
    {
      question: "Vocês atendem empresas de fora de Belo Horizonte?",
      answer: "Sim. Nosso atendimento é voltado a empresas de qualquer região do Brasil."
    },
    {
      question: "É possível contratar apenas a consultoria jurídica preventiva?",
      answer: "Sim. Atuamos tanto com defesas judiciais quanto com acompanhamento estratégico recorrente."
    },
    {
      question: "O escritório atende empresas de todos os portes?",
      answer: "Sim. Temos experiência com negócios de diferentes tamanhos, com foco especial nas micro, pequenas e médias empresas."
    }
  ]
}: LawFirmLandingPageProps = {}) => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const statsRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5531999999999"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre os serviços jurídicos do escritório.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full bg-background text-foreground" ref={sectionRef}>
      {/* Header with Logo */}
      <header className="py-4 bg-primary-blue border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="https://i.ibb.co/7659r9R/Design-sem-nome-2025-06-13-T120931-388.png" 
              alt="Borges & Musa - Advocacia Empresarial" 
              className="h-16 md:h-20 object-contain"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-blue/5 blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary-gold/5 blur-3xl"
          style={{ y: y2 }}
        />
        
        <div className="container mx-auto px-4">
          <motion.div
            className="flex gap-8 items-center justify-center flex-col text-center max-w-4xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-4">
                Direito Empresarial
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl max-w-4xl tracking-tight font-bold"
              variants={itemVariants}
            >
              {heroTitle}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl"
              variants={itemVariants}
            >
              {heroSubtitle}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button 
                size="lg" 
                className="gap-2 bg-primary-blue hover:bg-primary-blue/90"
                onClick={handleWhatsAppClick}
              >
                <WhatsAppIcon className="w-4 h-4" />
                {ctaText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={itemVariants}
            >
              Evite prejuízos com decisões inseguras
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={itemVariants}
            >
              Atuamos com:
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <span className="text-sm md:text-base">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              {aboutTitle}
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              {aboutDescription}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={itemVariants}
            >
              Como ajudamos sua empresa
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              variants={itemVariants}
            >
              Soluções jurídicas sob medida para sua empresa
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary-blue bg-primary-blue/10 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Atuação estratégica. Atendimento personalizado.
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              variants={itemVariants}
            >
              Nossos advogados atuam com dedicação, estratégia e foco em resultado, sempre respeitando as normas éticas da OAB.
            </motion.p>
            <motion.blockquote 
              className="text-xl italic text-primary-blue border-l-4 border-primary-blue pl-6"
              variants={itemVariants}
            >
              "Nosso objetivo é que o empresário possa focar no crescimento do seu negócio, com tranquilidade e respaldo jurídico."
              <footer className="text-sm text-muted-foreground mt-2">— Borges & Musa</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30" ref={statsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-background p-6 rounded-lg shadow-sm"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-primary-blue mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary-blue mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-primary-blue text-primary-foreground p-8 rounded-lg text-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              variants={itemVariants}
            >
              Precisa de uma orientação jurídica agora?
            </motion.h2>
            <motion.p 
              className="text-lg mb-6 opacity-90"
              variants={itemVariants}
            >
              Conte com uma equipe experiente e especializada em Direito Empresarial.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button 
                variant="whatsapp" 
                size="lg" 
                className="gap-2"
                onClick={handleWhatsAppClick}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Clique abaixo e fale conosco pelo WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              variants={itemVariants}
            >
              Perguntas Frequentes
            </motion.h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem value={`item-${index}`} className="bg-background rounded-lg px-6">
                    <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-4 h-4" />
              <span>Belo Horizonte – MG | OAB/MG [inserir número da oab aqui] | [inserir aqui o telefone de contato]</span>
            </div>
            <p className="font-semibold">Borges & Musa – Advocacia Empresarial</p>
            <p className="text-sm">Especialistas em Direito Tributário e Trabalhista para Empresas</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return <LawFirmLandingPage />;
}

export default App;