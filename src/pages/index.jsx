import React, {useRef, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import siteLinks from '../../site-links';

const words = [
  {id:'field',thai:'นา',meaning:'rice field',parts:['น','า'],note:'Start with n, then hold the long aa sound. The vowel is written after the consonant.',x:57,y:63},
  {id:'crow',thai:'กา',meaning:'crow',parts:['ก','า'],note:'The same long aa vowel, with a different consonant. One small change makes a new word.',x:92,y:60},
  {id:'snake',thai:'งู',meaning:'snake',parts:['ง','ู'],note:'The ng sound of ง meets a long oo vowel. This vowel is written underneath the consonant.',x:77,y:89},
];
const shots = [
  {id:'discover',label:'01 / Discover',title:'A picture is your first teacher.',text:'Explore the scene before you try to read it. Tap a person, a rice field or a snake to meet the Thai word.',alt:'Read Thai Daily Discover mode showing Dao and Din in a rice field with interactive object markers.'},
  {id:'talk',label:'02 / Talk',title:'One small sentence at a time.',text:'Big Thai text, clearly selectable words and a meaning panel right beside the story. Listen normally or slowly, then explore any word.',alt:'Read Thai Daily Talk mode with the Thai word นา, audio controls and an explanation of its consonant and vowel.'},
  {id:'script',label:'03 / Learn Thai Script',title:'Every letter has a picture.',text:'Consonants are grouped by class, vowels have their own section, and familiar pictures follow each symbol into the script map.',alt:'Read Thai Daily Learn Thai Script showing mid-class consonants and an illustrated explanation of จ.'},
];
const chapters = [
  {name:'Phrae',thai:'แพร่',image:'phrae.jpg',kind:'Start here · Free',description:'Meet Dao and Din. Rice fields, breakfast, market days and a little life in northern Thailand.'},
  {name:'Chiang Mai',thai:'เชียงใหม่',image:'chiang-mai.jpg',kind:'Continue · Subscription',description:'Catch a bus, settle into a guesthouse, order khao soi and explore the old city.'},
  {name:'Bangkok',thai:'กรุงเทพฯ',image:'bangkok.jpg',kind:'Explore · Subscription',description:'Trains, river boats, café stops and making plans in the big city.'},
  {name:'Hua Hin',thai:'หัวหิน',image:'hua-hin.jpg',kind:'By the sea · Subscription',description:'Beach colors, seafood, weather, bicycles and a sweet stop at the night market.'},
];
const steps = [
  ['01','Discover','Find words in an illustrated scene. Meaning comes first.'],
  ['02','Talk','Listen and explore short lines with familiar words.'],
  ['03','Build','Put consonants and vowels together in written order.'],
  ['04','Read','Try the text yourself, then check your understanding.'],
  ['05','Type','Optional keyboard practice. See the word and find its letters.'],
];

function SceneDemo() {
  const [selected,setSelected] = useState(words[0]);
  return <div className="scene-demo">
    <div className="scene-art">
      <img src={useBaseUrl('/img/rice-field.jpg')} width="1536" height="1024" alt="Dao and Din beside a rice field in Phrae, with a crow on the fence and a snake at the field edge." fetchPriority="high" />
      <div className="picture-hint"><span aria-hidden="true">✧</span> Tap a marker. Meet a word.</div>
      {words.map(word=><button key={word.id} className={`scene-marker ${selected.id===word.id?'is-selected':''}`} style={{left:`${word.x}%`,top:`${word.y}%`}} aria-label={`Explore ${word.meaning}, ${word.thai}`} aria-pressed={selected.id===word.id} onClick={()=>setSelected(word)}><span aria-hidden="true">+</span></button>)}
    </div>
    <div className="word-reveal" aria-live="polite" aria-atomic="true">
      <div className="word-identity"><span className="eyebrow">Your first words</span><span lang="th" className="demo-thai">{selected.thai}</span><span className="word-meaning">{selected.meaning}</span></div>
      <div className="word-explanation"><div className="demo-parts" aria-label="Written parts">{selected.parts.map((part,i)=><React.Fragment key={part}>{i>0&&<span className="plus" aria-hidden="true">+</span>}<span lang="th" className="part">{part === "ู" ? "◌ู" : part}</span></React.Fragment>)}</div><p>{selected.note}</p></div>
    </div>
    <p className="demo-caption">A tiny interactive taste of the app. Try the crow or the snake.</p>
  </div>;
}

function ScreenshotGallery() {
  const [index,setIndex] = useState(1);
  const dialog = useRef(null);
  const shot=shots[index];
  return <section id="screenshots" className="screenshots section-wrap" aria-labelledby="screenshots-title">
    <div className="section-heading"><div><span className="eyebrow">Inside the app</span><h2 id="screenshots-title">A little help.<br/>Right where you need it.</h2></div><p>No hunting through menus for the letter you forgot. Tap a word or symbol and keep the story in view.</p></div>
    <div className="screenshot-tabs" aria-label="Choose an app screenshot">{shots.map((item,i)=><button key={item.id} className={index===i?'selected':''} aria-pressed={index===i} onClick={()=>setIndex(i)}>{item.label}</button>)}</div>
    <figure className="app-window">
      <div className="window-bar" aria-hidden="true"><i/><i/><i/><span>Read Thai Daily · Mac</span></div>
      <button className="capture" aria-label={`Enlarge ${shot.id} screenshot`} onClick={()=>dialog.current.showModal()}><img src={useBaseUrl(`/screenshots/${shot.id}.svg`)} width="2880" height="1816" loading="lazy" alt={shot.alt}/><span className="enlarge-label">View larger ↗</span></button>
      <figcaption><div><strong>{shot.title}</strong><p>{shot.text}</p></div><span className="capture-label">Actual app screenshot</span></figcaption>
    </figure>
    <dialog ref={dialog} className="screenshot-dialog" aria-label={`${shot.id} app screenshot`}><button className="dialog-close" autoFocus onClick={()=>dialog.current.close()} aria-label="Close enlarged screenshot">Close ×</button><img src={useBaseUrl(`/screenshots/${shot.id}.svg`)} alt={shot.alt}/><p>{shot.title}</p></dialog>
  </section>;
}

export default function Home() {
  const {withBaseUrl} = useBaseUrlUtils();
  const brokenLinks = useBrokenLinks();
  ['hero-title','how-it-works','how-title','screenshots','screenshots-title','script-title','chapters','chapters-title','pricing','pricing-title','closing-title'].forEach(id => brokenLinks.collectAnchor(id));
  return <Layout title="Learn to read Thai, one small story at a time" description="Start from zero with illustrated Thai lessons. Follow Dao and Din from Phrae to Chiang Mai, Bangkok and Hua Hin, on iPhone, iPad and Mac.">
    <main className="home">
      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><span className="eyebrow"><span className="sun" aria-hidden="true">☀</span> A little Thai. Every day.</span><h1 id="hero-title">From your<br/>first letter to<br/><em>your first story.</em></h1><p>You don’t need to know the alphabet to begin. Meet Dao and Din, explore Thailand, and learn to read Thai—one small lesson at a time.</p><div className="hero-actions"><a className="cta" href={siteLinks.appStoreUrl}>Download on the App Store <span aria-hidden="true">↗</span></a><a className="text-link" href="#screenshots">Take a look inside <span aria-hidden="true">↓</span></a></div><div className="device-note"><span className="status-dot"/> For iPhone, iPad & Mac <span className="note-divider">/</span> Phrae is free</div></div>
        <SceneDemo/>
      </section>
      <div className="woven-divider" aria-hidden="true"/>
      <section className="intro-strip section-wrap" aria-label="App overview"><p><span className="mini-thai" lang="th">อ่าน</span> A new way into the Thai script.</p><div><strong>Start from zero</strong><span>No alphabet test at the door</span></div><div><strong>Read in context</strong><span>Pictures, people & everyday life</span></div><div><strong>Four teaching languages</strong><span>English · Deutsch · Français · Español</span></div></section>
      <section id="how-it-works" className="how-section section-wrap" aria-labelledby="how-title"><div className="section-heading"><div><span className="eyebrow">Small steps. A real journey.</span><h2 id="how-title">See it. Hear it.<br/><em>Then read it.</em></h2></div><p>Inspired by the natural method: understandable scenes, short texts and familiar words returning in new situations. Add script explanations whenever you need them.</p></div><ol className="lesson-steps">{steps.map(([number,title,text])=><li key={number}><span className="step-number">{number}</span><h3>{title}{title==='Type'&&<span className="optional">optional</span>}</h3><p>{text}</p></li>)}</ol><Link className="text-link" to="/guide/lessons">Walk through a lesson <span aria-hidden="true">↗</span></Link></section>
      <ScreenshotGallery/>
      <section className="script-feature" aria-labelledby="script-title"><div className="section-wrap script-layout"><div className="script-copy"><span className="eyebrow">The script, without the overwhelm</span><h2 id="script-title">A letter.<br/>A picture.<br/><em>A way to remember.</em></h2><p>Learn consonants by class and explore vowel patterns at your own pace. Traditional naming words, illustrated associations and plain-language sound explanations stay close at hand.</p><Link className="text-link" to="/guide/thai-script">Meet the Thai script <span aria-hidden="true">↗</span></Link></div><div className="letter-display"><div className="letter-card"><img src={useBaseUrl('/img/chicken.jpg')} alt="Illustrated chicken, the traditional naming picture for ก" loading="lazy" width="512" height="512"/><span className="letter-glyph" lang="th">ก</span><div><span className="eyebrow">Mid-class consonant</span><h3 lang="th">ก ไก่</h3><p>Chicken. Your first familiar face.</p></div></div><div className="vowel-strip"><span lang="th">น</span><span className="plus">+</span><span lang="th">า</span><span className="plus">=</span><div><strong lang="th">นา</strong><span>rice field</span></div></div><span className="letter-footnote">The picture stays with the letter in the app’s script map.</span></div></div></section>
      <section id="chapters" className="chapters section-wrap" aria-labelledby="chapters-title"><div className="section-heading"><div><span className="eyebrow">From Phrae into the world</span><h2 id="chapters-title">Learn the words.<br/><em>Live the little stories.</em></h2></div><p>Dao and Din begin at home in Phrae. Each chapter brings ten lessons, local food and everyday language, building on the words you already know.</p></div><div className="chapter-grid">{chapters.map((chapter,index)=><Link key={chapter.name} className="chapter" to={`/guide/chapters#${['phrae','chiang-mai','bangkok','hua-hin'][index]}`}><div className="chapter-image"><img src={withBaseUrl(`/img/${chapter.image}`)} alt={`Dao and Din in ${chapter.name}`} width="900" height="600" loading="lazy"/><span className="chapter-number">0{index+1}</span></div><div className="chapter-meta"><span>{chapter.kind}</span><span lang="th">{chapter.thai}</span></div><h3>{chapter.name}<span aria-hidden="true">↗</span></h3><p>{chapter.description}</p></Link>)}</div><div className="chapter-note"><span aria-hidden="true">✧</span><p>At the end of each chapter, a longer reading brings familiar vocabulary together into a story you can try for yourself.</p></div><div className="monthly-chapter"><span className="eyebrow">The journey keeps growing</span><h3>A new chapter every month.</h3><p>New places, local food and everyday Thai—built on the words you already know. Every new chapter is included in your subscription.</p></div></section>
      <section id="pricing" className="pricing-section section-wrap" aria-labelledby="pricing-title"><div className="pricing-intro"><span className="eyebrow">Start in Phrae</span><h2 id="pricing-title">Your first chapter<br/><em>is on us.</em></h2><p>Learn Thai Script and Phrae are free. Continue the journey with one subscription for the premium chapters.</p><Link className="text-link" to="/guide/chapters">What’s included <span aria-hidden="true">↗</span></Link></div><div className="pricing-options"><div className="free-plan"><span className="eyebrow">Phrae + Learn Thai Script</span><h3>Free</h3><p>Meet the characters. Explore the script. Start reading.</p></div><div className="paid-plan"><span className="eyebrow">Continue the journey</span><div className="price"><strong>$2.99</strong><span>USD / month</span></div><p>or $24.99 USD per year</p><span className="plan-detail">Chiang Mai · Bangkok · Hua Hin</span></div><p className="price-note">Local App Store prices may vary. New chapters every month are included in both plans.</p></div></section>
      <section className="closing section-wrap" aria-labelledby="closing-title"><div><span className="eyebrow">Made by a learner, for learners</span><h2 id="closing-title">Let’s read a little<br/><em>Thai today.</em></h2><p>Built in Phrae, from a simple wish to read more Thai. A new chapter every month brings another place to explore.</p><a className="cta" href={siteLinks.appStoreUrl}>Get Read Thai Daily <span aria-hidden="true">↗</span></a></div><div className="closing-art"><img src={useBaseUrl('/img/farewell.jpg')} width="900" height="600" loading="lazy" alt="Dao and Din wave goodbye to a friend by the sea in Hua Hin."/></div></section>
    </main>
  </Layout>;
}
