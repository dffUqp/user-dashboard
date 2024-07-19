import { Theme } from '@mui/material/styles';
import merge from 'lodash/merge';

import { appBar } from './components/appbar';
import { button } from './components/button';
import { card } from './components/card';
import { menu } from './components/menu';
import { table } from './components/table';
import { textField } from './components/textfield';
import { defaultProps } from './default-props';

export function componentsOverrides(theme: Theme) {
  const components = merge(
    defaultProps(theme),

    card(theme),
    menu(theme),
    table(theme),
    button(theme),
    textField(theme),
    appBar(),
  );

  return components;
}
