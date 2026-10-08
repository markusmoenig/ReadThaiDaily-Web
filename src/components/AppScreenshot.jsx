import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

// Keep the app capture in the same appearance as the website, including the enlarged view.
export default function AppScreenshot({name, alt, ...props}) {
  const {withBaseUrl} = useBaseUrlUtils();
  return <ThemedImage {...props} alt={alt} sources={{
    light: withBaseUrl(`/screenshots/light/${name}.png`),
    dark: withBaseUrl(`/screenshots/${name}.svg`),
  }}/>;
}
