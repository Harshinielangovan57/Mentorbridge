import React from 'react'
import { DescriptionTitle } from '../Atoms/DescriptionTitle'
import { Description } from '../Atoms/Description'
import { AuthorName } from '../Atoms/AuthorName'


export const ArticlePage = ({image, authorName, title, description}) => {
  return (
    <div className='d-flex flex-column w-50 shadow p-3 '>
        <img className='w-100' src={image} alt={authorName} />
        <div className='mt-2 d-flex flex-column w-100'>
        <AuthorName authorName={authorName} />
        <DescriptionTitle descriptiontitle={title} />
        <Description content={description} />
        </div>
    </div>
  )
}

