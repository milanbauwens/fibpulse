import { createContext, useContext } from 'react';

import i18n from './i18n';

const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const t = i18n.t.bind(i18n);

  const locale = i18n.locale;

  return <LocaleContext.Provider value={{ t, locale }}>{children}</LocaleContext.Provider>;
};

export const useTranslations = () => {
  return useContext(LocaleContext);
};

export default LocaleProvider;
