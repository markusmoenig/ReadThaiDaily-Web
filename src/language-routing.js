import {homepageRedirect, languagePreferenceKey, supportedLanguages} from './utils/language.mjs';

let listening = false;

export function onRouteDidUpdate({location}) {
  if (!listening) {
    // The desktop and mobile Docusaurus language menus both render links with lang.
    document.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[lang][href]') : null;
      if (!link || !supportedLanguages.includes(link.lang)) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      try { window.localStorage.setItem(languagePreferenceKey, link.lang); } catch { /* Navigation still works if storage is unavailable. */ }
    }, true);
    listening = true;
  }
  let saved;
  try { saved = window.localStorage.getItem(languagePreferenceKey); } catch { /* Use browser preferences when storage is unavailable. */ }
  const destination = homepageRedirect({
    ...location, saved, browserLanguages: navigator.languages?.length ? navigator.languages : [navigator.language],
  });
  if (destination) window.location.replace(destination);
}
