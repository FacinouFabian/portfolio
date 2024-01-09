import React from 'react'
import Link from 'next/link'

type Props = {
  title: string
  description?: string
  image?: string
  href?: string
}

const defaultImage =
  'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'

const ListItem = ({ title, description, image, href }: Props): JSX.Element => (
  <div className="relative overflow-hidden rounded-lg content">
    <Link href={href || '#'}>
      <div>
        <div className="content-overlay" />
        <img src={image || defaultImage} />
        <div className="content-details fadeIn-top">
          <h3 className="title-white uppercase text-3xl">{title}</h3>
          {description && <p className="text-white">{description}</p>}
        </div>
      </div>
    </Link>
  </div>
)

export default ListItem
