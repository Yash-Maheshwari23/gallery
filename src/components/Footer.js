import React from 'react'

import { useSelector } from 'react-redux'

import { sourceSelector } from '../slices/source'

export const Footer = () => {
  const { source } = useSelector(sourceSelector)

  return (
    <footer>
      <p>
        Site by <a href="https://github.com/Yash-Maheshwari23">Yash Maheshwari</a>
      </p>
      {source === 'openverse' ? (
        <p>
          Images from <a href="https://wordpress.org/openverse/">Openverse</a>{' '}
        </p>
      ) : (
        <p></p>
      )}
    </footer>
  )
}
