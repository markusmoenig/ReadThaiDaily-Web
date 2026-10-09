import test from 'node:test';
import assert from 'node:assert/strict';
import {preferredLanguage, homepageRedirect} from '../src/utils/language.mjs';

test('matches regional languages in preference order and falls back to English', () => {
  assert.equal(preferredLanguage(null, ['de-CH', 'en']), 'de');
  assert.equal(preferredLanguage(null, ['fr-CA']), 'fr');
  assert.equal(preferredLanguage(null, ['es-MX']), 'es');
  assert.equal(preferredLanguage(null, ['th', 'fr']), 'fr');
  assert.equal(preferredLanguage(null, ['en-GB', 'de']), 'en');
  assert.equal(preferredLanguage(null, ['th']), 'en');
});
test('manual choices override browser preferences; invalid stored values are ignored', () => {
  assert.equal(preferredLanguage('en', ['de']), 'en');
  assert.equal(preferredLanguage('es', ['de']), 'es');
  assert.equal(preferredLanguage('invalid', ['de']), 'de');
});
test('redirects only the root homepage and retains query and hash', () => {
  assert.equal(homepageRedirect({pathname: '/', search: '?ref=app', hash: '#screenshots', browserLanguages: ['de']}), '/de/?ref=app#screenshots');
  assert.equal(homepageRedirect({pathname: '/', saved: 'en', browserLanguages: ['de']}), null);
  for (const pathname of ['/de/', '/fr/guide/lessons/', '/guide/privacy/', '/404.html']) {
    assert.equal(homepageRedirect({pathname, saved: 'es', browserLanguages: ['de']}), null);
  }
});
