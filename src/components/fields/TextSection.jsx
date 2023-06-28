import React from 'react'

import Section from '../layout/Section'
import SectionTitle from '../layout/SectionTitle'
import JsonTextField from '../fields/JsonTextField'
import parseValues from '../../model/fieldParsing'

export default function TextSection(props) {
  const { isExperiment, isRequired, nameAttr, values, ...fieldProps } = props
  const selfString = isExperiment ? 'experiment' : 'dataset'
  const { description, name } = parseValues(values, selfString)
  const requiredStar = isRequired ? ' *' : ''
  return (
    <Section>
      <SectionTitle name={`${name}${requiredStar}`} tooltip={description} />

      <JsonTextField
        fullWidth
        isExperiment={isExperiment}
        isRequired={isRequired}
        nameAttr={nameAttr}
        values={values}
        {...fieldProps}
      />
    </Section>
  )
}
