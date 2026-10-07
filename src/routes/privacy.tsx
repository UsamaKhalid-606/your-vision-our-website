import { createFileRoute } from '@tanstack/react-router';
import { Page, Eyebrow } from '@/components/bpm/site';
import { pageHead } from '@/lib/bpm-data';
export const Route=createFileRoute('/privacy')({head:()=>pageHead('Privacy policy','Privacy and data handling information for the BPM website preview.'),component:Privacy});
function Privacy(){return <Page><section className="section container legal-content"><Eyebrow>PRIVACY</Eyebrow><h1>Privacy policy</h1><p>This website is a preview based on the supplied BPM mockups. Contact and registration forms are not connected to a delivery, registration or payment service.</p><h2>Your information</h2><p>Information entered into these forms stays on the current page and is not submitted or saved by this preview. No payments are collected.</p><h2>Before registration opens</h2><p>The BPM organizer’s final privacy policy, payment terms and refund policy will be provided before live registration is enabled.</p></section></Page>}
