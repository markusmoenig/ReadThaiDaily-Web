export const languagePreferenceKey = 'rtd-language';
export const supportedLanguages = ['en', 'de', 'fr', 'es'];

export function preferredLanguage(saved, browserLanguages = []) {
  if (supportedLanguages.includes(saved)) return saved;
  for (const language of browserLanguages) {
    const base = language.toLowerCase().split(/[-_]/)[0];
    if (supportedLanguages.includes(base)) return base;
  }
  return 'en';
}

export function homepageRedirect({pathname, search = '', hash = '', saved, browserLanguages}) {
  // Explicit locale URLs and deep links always keep their requested language.
  if (pathname !== '/') return null;
  const language = preferredLanguage(saved, browserLanguages);
  return language === 'en' ? null : `/${language}/${search}${hash}`;
}
