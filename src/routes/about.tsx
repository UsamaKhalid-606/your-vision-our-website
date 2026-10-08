import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Page, RegistrationBand, useLanguage } from '@/components/bpm/site';
import { pageHead, editions } from '@/lib/bpm-data';
import mission from '@/assets/mission.jpg';
import auditorium from '@/assets/auditorium.jpg';
import pattern from '@/assets/bpm-pattern.jpg.asset.json';
export const Route = createFileRoute('/about')({ head: () => pageHead('About BPM', 'Our mission is to bring medicine and pharmacy into one conversation, so better evidence reaches patients sooner.'), component: About });
function About() {
 const { t } = useLanguage();
 return <Page>
  <section className="brand-story">
   <img src={auditorium} alt="Medical professionals gathered for a scientific conversation" className="story-background" width={1280} height={960} />
   <div className="container story-content">
    <div className="story-kicker"><span>{t('BPM / OUR STORY', 'BPM / قصتنا')}</span><span>{t('RIYADH · SINCE 2023', 'الرياض · منذ 2023')}</span></div>
    <h1 className="story-title">{t('Bridging pharma.', 'نربط الصيدلة.')}<br /><em>{t('Bringing people together.', 'ونجمع الناس.')}</em></h1>
    <p className="story-intro">{t('Behind every discovery is a conversation. BPM brings physicians, pharmacists, researchers and industry together — with better care at the heart of it all.', 'وراء كل اكتشاف حوار. يجمع BPM الأطباء والصيادلة والباحثين والصناعة، وتبقى الرعاية الأفضل في قلب كل ما نقوم به.')}</p>
    <div className="story-bottom"><a href="#our-mission" className="text-link">{t('The purpose that brings us together', 'الهدف الذي يجمعنا')}<ArrowRight size={17} /></a><span className="edition-note">{t('An annual scientific meeting. A shared commitment to care.', 'ملتقى علمي سنوي. والتزام مشترك بالرعاية.')}</span></div>
   </div>
  </section>
  <img src={pattern.url} alt="" className="story-pattern-strip" />
  <section className="section container" id="our-mission">
   <div className="chapter-heading"><p className="chapter-number">{t('01 / Our purpose', '01 / هدفنا')}</p><h2>{t('Different disciplines.', 'تخصصات مختلفة.')}<br /><em>{t('One conversation.', 'وحوار واحد.')}</em></h2></div>
   <div className="mission-editorial">
    <figure className="mission-figure"><img src={mission} alt="Physician and pharmacist reviewing medical evidence together" width={1024} height={1024} loading="lazy" /><figcaption><span>{t('Medicine meets pharmacy.', 'حيث يلتقي الطب بالصيدلة.')}</span><span>BPM</span></figcaption></figure>
    <div className="mission-narrative"><p>{t('To bring medicine and pharmacy into one conversation, so better evidence reaches patients sooner.', 'نجمع الطب والصيدلة في حوار واحد، لتصل الأدلة الأفضل إلى المرضى أسرع.')}</p><div className="mission-items">{[
     ['Share the evidence', 'A program built on current research and real clinical practice.', 'شارك الأدلة', 'برنامج مبني على الأبحاث الحديثة والممارسة السريرية.'],
     ['Connect the disciplines', 'Physicians, pharmacists and industry learn side by side, not in separate rooms.', 'اربط التخصصات', 'يتعلم الأطباء والصيادلة والصناعة جنباً إلى جنب.'],
     ['Improve patient care', 'Every topic is chosen for what it changes at the bedside and the pharmacy counter.', 'حسّن رعاية المرضى', 'كل محور يُختار لأثره على رعاية المرضى وممارسة الصيدلة.'],
    ].map(([title, description, ar, ard], i) => <div key={title}><span>0{i + 1}</span><div><strong>{t(title, ar)}</strong><p>{t(description, ard)}</p></div></div>)}</div></div>
   </div>
  </section>
  <section className="section people-section"><div className="container">
   <div className="people-heading"><div><p className="chapter-number">{t('02 / The people behind BPM', '02 / الأشخاص وراء BPM')}</p><h2>{t('A meeting made by people,', 'ملتقى يصنعه الناس،')}<br /><em>{t('for people.', 'من أجل الناس.')}</em></h2></div><p>{t('BPM is shaped by a scientific committee, with an events team bringing every detail together throughout the year.', 'تشرف على BPM لجنة علمية وفريق فعاليات يجمع كل التفاصيل على مدار العام.')}</p></div>
   <div className="organizers">{[
    [t('Organizer', 'المنظم'), t('Founder and host of BPM since the first edition in 2023. Organizer details to be confirmed.', 'مؤسس ومستضيف BPM منذ الدورة الأولى في 2023. سيتم تأكيد بيانات المنظم.')],
    [t('Scientific committee', 'اللجنة العلمية'), t('Physicians, pharmacists and researchers who set the topics and review every abstract.', 'أطباء وصيادلة وباحثون يحددون المحاور ويراجعون كل ملخص.')],
    [t('Events team', 'فريق الفعاليات'), t('The people behind registration, the venue and our sponsor partnerships.', 'الأشخاص المسؤولون عن التسجيل والموقع وشراكات الرعاية.')],
   ].map(([title, desc], i) => <div className="organizer" key={title}><p className="organizer-index">0{i + 1}</p><h3>{title}</h3><p>{desc}</p></div>)}</div>
  </div></section>
  <section className="section history-section"><div className="container"><div className="section-heading"><div><p className="chapter-number">{t('03 / A shared journey', '03 / رحلة مشتركة')}</p><h2>{t('One year at a time.', 'عاماً بعد عام.')}</h2></div><Link to="/events" className="text-link">{t('Explore past editions', 'استكشف الدورات السابقة')}<ArrowRight /></Link></div><div className="timeline">{[...editions].reverse().map(e => <div key={e.year}><span>{e.year}</span><strong>{e.title}</strong><p>{e.attendees} attendees · {e.venue}, Riyadh</p></div>)}<div><span>2027</span><strong>{t('The next conversation', 'الحوار القادم')}</strong><Link to="/register" className="text-link">27–29 April · Riyadh<ArrowRight /></Link></div></div></div></section>
  <RegistrationBand />
 </Page>;
}
