import React,{useState} from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' }
  ]
  
  const PostCategories = () => (
    <Dropdown placeholder='Tags' fluid multiple search selection options={options}  />
  )

export default PostCategories