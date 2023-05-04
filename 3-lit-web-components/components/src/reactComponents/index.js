import * as React from 'react'
import {createComponent} from '@lit-labs/react'

import {Forms} from "../forms.js"
import {MultiSelect} from "../multi-select/multi-select.js"

export const OFormsTSX = createComponent({
  tagName: 'o-forms',
  elementClass: Forms,
  react: React,
  // events: {
  //   onactivate: 'activate',
  //   onchange: 'change',
  // },
});

export const OMultiSelectTSX = createComponent({
  tagName: 'o-multi-select',
  elementClass: MultiSelect,
  react: React,
  // events: {
  //   onactivate: 'activate',
  //   onchange: 'change',
  // },
});