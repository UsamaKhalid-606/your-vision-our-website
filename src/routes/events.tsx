import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router';
import { Page, RegistrationBand, useLanguage } from '@/components/bpm/site';
import { EventArchive } from '@/components/bpm/editorial-sections';
import { pageHead } from '@/lib/bpm-data';
export const Route = createFileRoute('/events')({ head: () => pageHead('Previous events', 'Browse highlights and numbers from four editions of BPM in Riyadh, 2023–2026.'), component: Events });
function Events() {
 const { t } = useLanguage();
 const path = useLocation().pathname;
 if (path !== '/events' && path !== '/events/') return <Outlet />;
 return <Page><section className="archive-intro"><div className="container"><div className="archive-intro-top"><p className="chapter-number">{t('The BPM archive', 'أرشيف BPM')}</p><span>2023 — 2026</span></div><div className="editorial-heading"><h1>{t('Four editions.', 'أربع دورات.')}<br /><em>{t('Countless connections.', 'روابط لا تُحصى.')}</em></h1><p>{t('The people, the science and the moments that brought medicine and pharmacy closer together.', 'الأشخاص والعلم واللحظات التي قرّبت الطب والصيدلة من بعضهما.')}</p></div></div></section><EventArchive /><RegistrationBand /><Outlet /></Page>;
}
