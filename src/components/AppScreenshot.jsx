import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

// Native app captures follow both the page language and the website appearance.
export default function AppScreenshot({name, alt, ...props}) {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const {withBaseUrl} = useBaseUrlUtils();
  const locale = ['en', 'de', 'fr', 'es'].includes(currentLocale) ? currentLocale : 'en';
  return <ThemedImage {...props} alt={alt} sources={{
    light: withBaseUrl(`/screenshots/${locale}/light/${name}.webp`),
    dark: withBaseUrl(`/screenshots/${locale}/dark/${name}.webp`),
  }}/>;
}
