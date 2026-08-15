import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  Star,
  Truck,
  ShieldCheck,
  CreditCard,
  RotateCcw,
  ChevronRight,
  Plus,
  Minus,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  tag?: string;
};

const products: Product[] = [
  { id: "p1", name: "Fone Bluetooth Prime Sound X2", price: 489.9, oldPrice: 699.9, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80", category: "Tecnologia", rating: 4.8, reviews: 342, tag: "-30%" },
  { id: "p2", name: "Relógio Analógico Nova Classic", price: 329.0, oldPrice: 429.0, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80", category: "Acessórios", rating: 4.7, reviews: 218 },
  { id: "p3", name: "Tênis Urbano Prime Runner", price: 379.9, oldPrice: 499.9, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", category: "Calçados", rating: 4.9, reviews: 512, tag: "Mais vendido" },
  { id: "p4", name: "Óculos de Sol Aviador Pro", price: 259.0, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80", category: "Acessórios", rating: 4.6, reviews: 176 },
  { id: "p5", name: "Mochila Executiva Nova Carry", price: 449.0, oldPrice: 599.0, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", category: "Bolsas", rating: 4.8, reviews: 289, tag: "-25%" },
  { id: "p6", name: "Câmera Instantânea Prime Snap", price: 799.0, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80", category: "Tecnologia", rating: 4.7, reviews: 143 },
  { id: "p7", name: "Cafeteira Elétrica Home Barista", price: 1290.0, oldPrice: 1590.0, image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80", category: "Casa", rating: 4.9, reviews: 421, tag: "Novo" },
  { id: "p8", name: "Luminária de Mesa Minimal Oak", price: 219.0, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80", category: "Casa", rating: 4.5, reviews: 98 },
];

const categories = [
  { name: "Tecnologia", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80", count: 128 },
  { name: "Moda", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80", count: 214 },
  { name: "Casa & Decor", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80", count: 176 },
  { name: "Beleza", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", count: 92 },
  { name: "Acessórios", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80", count: 154 },
  { name: "Calçados", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80", count: 87 },
];

const testimonials = [
  { name: "Marina Alves", city: "São Paulo, SP", rating: 5, text: "Recebi meu pedido em 2 dias, embalagem impecável e o produto superou minhas expectativas. Já é minha loja favorita." },
  { name: "Rafael Monteiro", city: "Curitiba, PR", rating: 5, text: "Atendimento pelo WhatsApp foi rápido e resolveu minha dúvida sobre o tamanho na hora. Comprei sem medo e amei." },
  { name: "Juliana Prado", city: "Recife, PE", rating: 4, text: "Preços competitivos e parcelamento sem juros ajudaram muito. Voltei três vezes só esse mês." },
];

const faqs = [
  { q: "Qual o prazo de entrega?", a: "Enviamos em até 24h úteis. O prazo de entrega varia de 2 a 7 dias úteis conforme sua região, com rastreamento em tempo real." },
  { q: "Posso trocar ou devolver meu pedido?", a: "Sim. Você tem 30 dias corridos após o recebimento para solicitar troca ou devolução gratuita, sem burocracia." },
  { q: "Quais formas de pagamento vocês aceitam?", a: "Pix com 10% de desconto, cartão de crédito em até 12x sem juros, boleto bancário e carteiras digitais como Google Pay e Apple Pay." },
  { q: "A compra é segura?", a: "Site com certificado SSL, checkout criptografado e antifraude. Seus dados nunca são compartilhados com terceiros." },
  { q: "Vocês enviam para todo o Brasil?", a: "Sim, entregamos em todos os estados. Frete grátis em compras acima de R$ 299 para as regiões Sul e Sudeste." },
];

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="oklch(0.22 0.01 60)" />
      <path d="M18 8l2.5 5.5L26 14l-5.5 2.5L18 22l-2.5-5.5L10 14l5.5-2.5L18 8z" fill="oklch(0.985 0.003 90)" />
      <path d="M18 12l1.2 2.6L22 15.5l-2.8 1.1L18 19.5l-1.2-2.9L14 15.5l2.8-.9L18 12z" fill="oklch(0.62 0.11 55)" />
    </svg>
  );
}

function formatPrice(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________";

function ScrambleText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = text.split("");
    let frame = 0;
    const total = chars.length;
    let raf = 0;
    const tick = () => {
      const done = Math.floor((frame / 45) * total);
      let out = "";
      for (let i = 0; i < chars.length; i++) {
        out += i < done ? chars[i] : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      el.textContent = out;
      frame++;
      if (frame <= 45) raf = requestAnimationFrame(tick);
      else el.textContent = text;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text]);
  return <span ref={ref} className={className}>{text}</span>;
}

function useMagnetic(strength = 10) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const leave = () => { el.style.transform = "translate(0, 0)"; };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength]);
  return ref;
}

function Home() {
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const ctaRef = useMagnetic();

  const filtered = useMemo(
    () => (query.trim() ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())) : products),
    [query],
  );

  const featured = filtered.slice(0, 4);
  const promos = filtered.filter((p) => p.oldPrice).slice(0, 4);
  const bestSellers = [...filtered].sort((a, b) => b.reviews - a.reviews).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center">
          <Truck className="w-3.5 h-3.5" />
          Frete grátis acima de R$ 299 · Parcele em até 12x sem juros
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-6">
          <button className="lg:hidden" aria-label="Menu"><Menu className="w-5 h-5" /></button>
          <a href="#" className="flex items-center gap-2.5">
            <Logo />
            <div className="leading-tight">
              <div className="font-display text-xl">Nova Prime</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Store</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground ml-4">
            <a href="#categorias" className="hover:text-foreground transition">Categorias</a>
            <a href="#destaques" className="hover:text-foreground transition">Destaques</a>
            <a href="#promocoes" className="hover:text-foreground transition">Promoções</a>
            <a href="#mais-vendidos" className="hover:text-foreground transition">Mais vendidos</a>
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 rounded-full bg-surface-muted px-4 py-2 w-72 border border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="O que você procura hoje?"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-surface-muted" aria-label="Favoritos"><Heart className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-surface-muted" aria-label="Conta"><User className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-surface-muted relative" aria-label="Sacola">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-accent-warm text-[10px] text-primary-foreground grid place-items-center">3</span>
            </button>
          </div>
        </div>
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center gap-2 rounded-full bg-surface-muted px-4 py-2 border border-border">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar produtos"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-br from-surface-muted via-background to-surface-muted">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="w-8 h-px bg-muted-foreground" /> Coleção Primavera 2026
            </span>
            <h1 className="mt-4 text-5xl lg:text-7xl font-display leading-[0.95]">
              <ScrambleText text="Curadoria premium" /> <span className="italic text-accent-warm">para o seu dia</span>.
            </h1>            <p className="mt-5 text-muted-foreground max-w-lg">
              Descubra produtos selecionados de tecnologia, moda e casa. Entrega rápida em todo o Brasil, parcelamento em até 12x e atendimento humano quando você precisar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a ref={ctaRef} href="#destaques" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-transform">
                Comprar agora <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#categorias" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface-muted transition">
                Ver categorias
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat n="+50k" l="Clientes" />
              <Stat n="4.9/5" l="Avaliação" />
              <Stat n="24h" l="Envio" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface-muted">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
                alt="Modelo com peças da nova coleção Nova Prime Store"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-2xl p-4 shadow-sm hidden md:flex items-center gap-3 w-64">
              <div className="w-12 h-12 rounded-xl bg-surface-muted overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80" alt="Produto" className="w-full h-full object-cover" />
              </div>
              <div className="text-xs">
                <div className="font-medium">Tênis Prime Runner</div>
                <div className="text-muted-foreground">Enviado em 24h</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-accent-warm text-primary-foreground rounded-full px-5 py-4 text-center shadow-sm">
              <div className="text-2xl font-display leading-none">-30%</div>
              <div className="text-[10px] uppercase tracking-widest">Ofertas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <Trust icon={<Truck className="w-5 h-5" />} title="Envio em 24h" text="Para todo o Brasil" />
          <Trust icon={<CreditCard className="w-5 h-5" />} title="Até 12x sem juros" text="Ou 10% off no Pix" />
          <Trust icon={<RotateCcw className="w-5 h-5" />} title="Troca grátis" text="Em até 30 dias" />
          <Trust icon={<ShieldCheck className="w-5 h-5" />} title="Compra segura" text="Site 100% protegido" />
        </div>
      </section>

      {/* Categorias */}
      <Section id="categorias" eyebrow="Explore" title="Categorias" subtitle="Encontre exatamente o que combina com você.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <a key={c.name} href="#destaques" className="group relative rounded-2xl overflow-hidden aspect-square bg-surface-muted">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-primary-foreground">
                <div className="font-medium">{c.name}</div>
                <div className="text-[11px] opacity-80">{c.count} produtos</div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Destaques */}
      <Section id="destaques" eyebrow="Selecionados" title="Produtos em destaque" subtitle="A curadoria da semana pelo time Nova Prime.">
        <ProductGrid items={featured} />
      </Section>

      {/* Promo banner */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div id="promocoes" className="rounded-3xl overflow-hidden relative bg-primary text-primary-foreground p-8 lg:p-12 grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest opacity-70">Semana das ofertas</span>
            <h3 className="mt-2 font-display text-4xl lg:text-5xl leading-tight">Até 40% off <br /><span className="italic opacity-80">em seleção premium</span></h3>
            <p className="mt-3 opacity-80 max-w-md text-sm">Descontos reais em tecnologia, casa e moda. Cupom aplicado automaticamente no carrinho.</p>
            <a href="#mais-vendidos" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:opacity-90">
              Ver ofertas <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="hidden lg:block">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80" alt="Promoções Nova Prime" className="rounded-2xl w-full aspect-[16/10] object-cover" />
          </div>
        </div>
      </section>

      {/* Promoções */}
      <Section eyebrow="Aproveite" title="Promoções da semana" subtitle="Preços especiais por tempo limitado.">
        <ProductGrid items={promos} />
      </Section>

      {/* Mais vendidos */}
      <Section id="mais-vendidos" eyebrow="Populares" title="Produtos mais vendidos" subtitle="O que a comunidade Nova Prime está levando pra casa.">
        <ProductGrid items={bestSellers} />
      </Section>

      {/* Avaliações */}
      <Section id="avaliacoes" eyebrow="Reputação" title="Avaliações de clientes" subtitle="Mais de 12.000 avaliações verificadas.">
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex gap-0.5 text-accent-warm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? "fill-current" : "opacity-30"}`} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-medium text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sobre */}
      <section id="sobre" className="border-y border-border bg-surface-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&q=80" alt="Equipe Nova Prime Store" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Sobre nós</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl leading-tight">Uma loja pensada para durar.</h2>
            <p className="mt-5 text-muted-foreground">
              A Nova Prime Store nasceu em 2021 com um propósito claro: reunir marcas que combinam design, qualidade e preço justo em um só lugar. Trabalhamos diretamente com fabricantes e curadores para trazer produtos que realmente fazem sentido no seu dia a dia.
            </p>
            <p className="mt-3 text-muted-foreground">
              Hoje atendemos mais de 50 mil clientes em todo o Brasil, com um time dedicado a oferecer atendimento próximo, entrega rápida e pós-venda de verdade.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat n="2021" l="Fundação" />
              <Stat n="+800" l="Produtos" />
              <Stat n="4.9★" l="Reclame Aqui" />
            </div>
          </div>
        </div>
      </section>

      {/* Pagamentos */}
      <Section id="pagamentos" eyebrow="Checkout seguro" title="Formas de pagamento" subtitle="Escolha como preferir pagar. Todas as opções com criptografia e antifraude.">
        <div className="grid md:grid-cols-3 gap-5">
          <PayCard title="Pix" desc="10% de desconto à vista com aprovação instantânea." />
          <PayCard title="Cartão de crédito" desc="Visa, Mastercard, Elo, Amex, Hipercard. Até 12x sem juros." />
          <PayCard title="Boleto bancário" desc="Compensação em até 2 dias úteis, com desconto." />
          <PayCard title="Carteiras digitais" desc="Google Pay, Apple Pay e Samsung Pay em um toque." />
          <PayCard title="Nova Prime Wallet" desc="Cashback de 3% em toda compra para clientes cadastrados." />
          <PayCard title="Parcelamento estendido" desc="Em até 18x com pequeno acréscimo, sujeito a aprovação." />
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="Ajuda" title="Perguntas frequentes" subtitle="Se a sua dúvida não estiver aqui, fale com a gente pelo WhatsApp.">
        <div className="max-w-3xl mx-auto divide-y divide-border border border-border rounded-2xl bg-surface">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpenFaq(open ? null : i)}
                className="w-full text-left px-6 py-5 flex items-start gap-4"
              >
                <div className="flex-1">
                  <div className="font-medium">{f.q}</div>
                  {open && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>}
                </div>
                <span className="mt-1 text-muted-foreground">{open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</span>
              </button>
            );
          })}
        </div>
      </Section>

      {/* Contato */}
      <section id="contato" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Contato</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl leading-tight">Vamos conversar.</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Nosso time atende de segunda a sábado, das 9h às 20h. Respondemos toda mensagem em até 1 hora útil.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-accent-warm" /> (11) 4002-8922</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-accent-warm" /> contato@novaprimestore.com.br</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-accent-warm" /> Av. Paulista, 1578 — São Paulo, SP</li>
              <li className="flex items-center gap-3"><MessageCircle className="w-4 h-4 text-accent-warm" /> WhatsApp (11) 98888-1234</li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-border bg-surface p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome" placeholder="Seu nome completo" />
              <Field label="E-mail" placeholder="voce@email.com" type="email" />
            </div>
            <Field label="Assunto" placeholder="Sobre o que quer falar?" />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Mensagem</label>
              <textarea rows={4} placeholder="Escreva sua mensagem" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" />
            </div>
            <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-3 text-sm font-medium hover:opacity-90">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <div className="font-display text-xl">Nova Prime Store</div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Curadoria premium com entrega rápida e atendimento humano. Feito no Brasil, para o Brasil.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-border hover:bg-surface"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-border hover:bg-surface"><Facebook className="w-4 h-4" /></a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full border border-border hover:bg-surface"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
          <FooterCol title="Loja" items={["Categorias", "Destaques", "Promoções", "Mais vendidos", "Novidades"]} />
          <FooterCol title="Ajuda" items={["Central de atendimento", "Trocas e devoluções", "Prazo de entrega", "Rastrear pedido", "Formas de pagamento"]} />
          <FooterCol title="Institucional" items={["Sobre a Nova Prime", "Trabalhe conosco", "Política de privacidade", "Termos de uso", "Programa de afiliados"]} />
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <div>© 2026 Nova Prime Store · CNPJ 45.128.902/0001-14 · Todos os direitos reservados</div>
            <div>Pix · Visa · Mastercard · Amex · Elo · Boleto · Apple Pay · Google Pay</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5511988881234?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Nova%20Prime%20Store."
        target="_blank"
        rel="noopener"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-5 right-5 z-50 group"
      >
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-sm">
          Fale conosco
        </span>
        <span className="grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition">
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden><path d="M16.001 3.2C8.94 3.2 3.2 8.94 3.2 16c0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.56-1.72A12.75 12.75 0 0016 28.8C23.06 28.8 28.8 23.06 28.8 16S23.06 3.2 16 3.2zm0 23.2c-2.02 0-4-.54-5.72-1.56l-.4-.24-3.9 1.02 1.04-3.8-.26-.4A10.4 10.4 0 015.6 16C5.6 10.26 10.26 5.6 16 5.6S26.4 10.26 26.4 16 21.74 26.4 16 26.4zm5.72-7.78c-.32-.16-1.86-.92-2.14-1.02-.28-.1-.48-.16-.68.16-.2.32-.78 1.02-.96 1.22-.18.2-.36.22-.66.08-.32-.16-1.34-.5-2.56-1.58-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.2-.32.32-.52.1-.2.06-.38-.02-.54-.08-.16-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.08-.8.38s-1.04 1.02-1.04 2.5 1.06 2.9 1.22 3.1c.16.2 2.1 3.2 5.08 4.48.72.32 1.28.5 1.72.64.72.22 1.38.2 1.9.12.58-.08 1.86-.76 2.12-1.5.26-.74.26-1.36.18-1.5-.08-.14-.28-.22-.6-.38z"/></svg>
        </span>
      </a>
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id?: string; eyebrow: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-3xl lg:text-4xl">{title}</h2>
          {subtitle && <p className="mt-2 text-sm text-muted-foreground max-w-xl">{subtitle}</p>}
        </div>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
          Ver todos <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      {children}
    </section>
  );
}

function ProductGrid({ items }: { items: Product[] }) {
  if (!items.length) return <p className="text-sm text-muted-foreground">Nenhum produto encontrado para sua busca.</p>;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((p) => <ProductCard key={p.id} p={p} />)}
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group rounded-2xl border border-border bg-surface overflow-hidden flex flex-col">
      <div className="relative aspect-square bg-surface-muted overflow-hidden">
        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        {p.tag && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-2.5 py-1 rounded-full">{p.tag}</span>
        )}
        <button aria-label="Favoritar" className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{p.category}</div>
        <h3 className="mt-1 font-display text-lg leading-tight line-clamp-2">{p.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="w-3.5 h-3.5 fill-accent-warm text-accent-warm" />
          {p.rating.toFixed(1)} <span>· {p.reviews} avaliações</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-xl">{formatPrice(p.price)}</span>
          {p.oldPrice && <span className="text-xs text-muted-foreground line-through">{formatPrice(p.oldPrice)}</span>}
        </div>
        <div className="text-[11px] text-muted-foreground">ou 12x de {formatPrice(p.price / 12)} sem juros</div>
        <button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-medium hover:opacity-90 transition">
          <ShoppingBag className="w-4 h-4" /> Comprar
        </button>
      </div>
    </article>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function Trust({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-surface border border-border grid place-items-center text-accent-warm">{icon}</div>
      <div>
        <div className="font-medium text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}

function PayCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="w-10 h-10 rounded-lg bg-surface-muted grid place-items-center text-accent-warm">
        <CreditCard className="w-5 h-5" />
      </div>
      <h3 className="mt-4 font-display text-xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...props} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" />
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-medium mb-4">{title}</div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((i) => <li key={i}><a href="#" className="hover:text-foreground transition">{i}</a></li>)}
      </ul>
    </div>
  );
}
