import { Link } from '@tanstack/react-router';
import { ArrowRight, BrainCircuit, HeartPulse, Dna, Scale, Package, GraduationCap, Compass, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { editions, topics } from '@/lib/bpm-data';
import { useLanguage } from './site';
import auditorium from '@/assets/auditorium.jpg';
import conference from '@/assets/conference.jpg';
import mission from '@/assets/mission.jpg';

const topicIcons = [BrainCircuit, HeartPulse, Dna, Scale, Package, GraduationCap, Compass, ShieldCheck];
const partners = [
 { tier: 'DIAMOND', ar: 'الماسي', names: ['Crescent Pharma'] },
 { tier: 'PLATINUM', ar: 'البلاتيني', names: ['Nakheel Biotech', 'Medora Labs'] },
 { tier: 'GOLD', ar: 'الذهبي', names: ['Alwaha Health', 'Sahara Systems', 'Tamr Therapeutics'] },
 { tier: 'SILVER & STRATEGIC PARTNERS', ar: 'الفضي والشركاء الاستراتيجيون', names: ['Najd Supply', 'Oasis Rx', 'Falcon Diagnostics', 'PharmaHub Academy'] },
];

export function ScientificTopics() {
 const { t } = useLanguage();
  return <section className="section science-conversation"><div className="container">
  <div className="editorial-heading"><div><p className="chapter-number">{t('01 / The scientific conversation', '01 / الحوار العلمي')}</p><h2>{t('Eight perspectives.', 'ثمانية آفاق.')}<br /><em>{t('A healthier tomorrow.', 'غد أكثر صحة.')}</em></h2></div><span className="section-index">BPM 2027 / {t('SCIENTIFIC TOPICS', 'المحاور العلمية')}</span></div>
   <div className="conversation-layout"><figure className="conversation-image" data-reveal><img src={mission} alt={t('Healthcare researchers exchanging ideas', 'باحثون في الرعاية الصحية يتبادلون الأفكار')} width={1280} height={960} loading="lazy" /><figcaption><span className="conversation-count">08</span><span>{t('Perspectives shaping', 'آفاق ترسم')}<br />{t('the future of care.', 'مستقبل الرعاية.')}</span></figcaption></figure><div className="conversation-topics">{topics.map(([en, ar], i) => { const Icon = topicIcons[i] ?? HeartPulse; return <article className="conversation-topic" key={en} data-reveal><div className="conversation-topic-meta"><span>0{i + 1}</span><Icon size={25} strokeWidth={1.25} /></div><h3>{t(en, ar)}</h3></article>; })}</div></div>
 </div></section>;
}

export function Partners() {
 const { t } = useLanguage();
 return <section className="section partner-section"><div className="container">
  <div className="editorial-heading"><div><p className="chapter-number">{t('02 / Shared ambition', '02 / طموح مشترك')}</p><h2>{t('Progress is', 'التقدم')}<br /><em>{t('a collective effort.', 'جهد جماعي.')}</em></h2></div><Link to="/contact" className="text-link">{t('Become a partner', 'كن شريكاً')}<ArrowRight /></Link></div>
   <div className="partner-gallery">{partners.map((group, i) => <div className={`partner-level partner-level-${i}`} key={group.tier} data-reveal><div className="partner-level-heading"><span aria-hidden="true" /><p>{t(group.tier, group.ar)}</p><span aria-hidden="true" /></div><div className="partner-wordmarks">{group.names.map(name => <div className="partner-wordmark" key={name}><span>{name}</span></div>)}</div></div>)}</div>
  <p className="sponsor-note">{t('Sponsor names and event figures are sample content from the mockup.', 'أسماء الرعاة وأرقام الفعاليات محتوى تجريبي من التصميم.')}</p>
 </div></section>;
}

export function Journey() {
 const { t } = useLanguage();
 return <section className="section journey-section"><div className="container">
  <div className="editorial-heading"><div><p className="chapter-number">{t('03 / A shared journey', '03 / رحلة مشتركة')}</p><h2>{t('From the first hello.', 'من أول لقاء.')}<br /><em>{t('To what comes next.', 'إلى ما يأتي بعده.')}</em></h2></div><Link to="/events" className="text-link">{t('Explore past editions', 'استكشف الدورات السابقة')}<ArrowRight /></Link></div>
  <div className="journey-layout"><figure className="journey-portrait"><img src={conference} alt={t('Healthcare professionals sharing a scientific conversation', 'متخصصون في الرعاية الصحية يشاركون في حوار علمي')} loading="lazy" width={1024} height={1280} /><figcaption><span>{t('Different disciplines. A shared purpose.', 'تخصصات مختلفة. هدف مشترك.')}</span><span>BPM</span></figcaption></figure>
   <div className="journey-track">{[...editions].reverse().map((e, i) => <Link to="/events/$year" params={{ year: e.year }} className="journey-stop" key={e.year} data-reveal><span className="journey-year">{e.year}</span><div><span className="journey-edition">{t(`EDITION 0${i + 1}`, `الدورة 0${i + 1}`)}</span><h3>{t(e.title, ['الدورة الأولى', 'مساحة للنمو', 'مقر جديد', 'الأكبر حتى الآن'][i])}</h3><p>{e.attendees} {t('attendees', 'مشارك')} · {t('Riyadh', 'الرياض')}</p></div><ArrowUpRight size={19} /></Link>)}<div className="journey-stop journey-next" data-reveal><span className="journey-year">2027</span><div><span className="journey-edition">{t('THE NEXT CHAPTER', 'الفصل القادم')}</span><h3>{t('The next conversation', 'الحوار القادم')}</h3><Link to="/register" className="text-link">{t('27–29 April · Join us', '27–29 أبريل · انضم إلينا')}<ArrowRight /></Link></div></div></div>
  </div>
 </div></section>;
}

export function EventArchive() {
 const { t } = useLanguage();
 const images = [auditorium, conference, mission, auditorium];
 return <section className="section work-archive"><div className="container"><div className="work-list">{editions.map((e, i) => <Link to="/events/$year" params={{ year: e.year }} className="work-edition" key={e.year} data-reveal>
  <div className="work-photo"><img src={images[i]} alt={`Illustrative BPM ${e.year} scientific meeting`} width={640} height={440} loading={i < 2 ? 'eager' : 'lazy'} /><span className="work-photo-caption">BPM / {t('RIYADH', 'الرياض')}</span></div>
  <div className="work-details"><div className="work-edition-top"><span>{t(`EDITION 0${4 - i}`, `الدورة 0${4 - i}`)}</span><ArrowUpRight size={24} /></div><span className="work-year">{e.year}</span><h2>{t(e.title, ['الأكبر حتى الآن', 'مقر جديد', 'مساحة للنمو', 'الدورة الأولى'][i])}</h2><p className="work-date">{e.date}</p><p className="work-venue">{e.venue}</p><div className="work-numbers">{[[e.attendees, t('Attendees', 'مشارك')], [e.speakers, t('Speakers', 'متحدث')], [e.posters, t('Posters', 'ملصق بحثي')]].map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div><span className="work-view">{t('Explore this edition', 'استكشف هذه الدورة')}<ArrowRight size={16} /></span></div>
 </Link>)}</div><p className="sponsor-note">{t('Figures follow the supplied mockup. Photos are illustrative, not archival event photos.', 'الأرقام من التصميم المرفق. الصور توضيحية وليست صوراً أرشيفية للفعاليات.')}</p></div></section>;
}