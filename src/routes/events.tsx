import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router';
import { Page, RegistrationBand, useLanguage } from '@/components/bpm/site';
import { EventArchive } from '@/components/bpm/editorial-sections';
import { pageHead } from '@/lib/bpm-data';
export const Route = createFileRoute('/events')({ head: () => pageHead('Previous events', 'Browse highlights and numbers from four editions of BPM in Riyadh, 2023–2026.'), component: Events });
function Events() {
 const { t } = useLanguage();
 const path = useLocation().pathname;
 if (path !== '/events' && path !== '/events/') return <Outlet />;
 return <Page><section className="work-intro"><div className="container"><div className="work-intro-label"><p className="chapter-number">{t('The BPM collection', 'مجموعة BPM')}</p><span>2023 — 2026</span></div><div className="work-intro-heading"><h1>{t('Previous', 'الفعاليات')}<br /><em>{t('events.', 'السابقة.')}</em></h1><div><span className="work-collection-count">04</span><p>{t('The people, the science and the moments that brought medicine and pharmacy closer together.', 'الأشخاص والعلم واللحظات التي قرّبت الطب والصيدلة من بعضهما.')}</p></div></div></div></section><EventArchive /><RegistrationBand /><Outlet /></Page>;
}
