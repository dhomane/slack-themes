import React from 'react'
import Link from 'next/link'

const Box = (props) => {

  const defaultClasses = "border border-gray-200 bg-gray-100 dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"
  const transparentClasses = "bg-gray-100 dark:bg-transparent border border-gray-200 dark:border-white dark:border-opacity-20"

  return(
    <div
      className={`${props.flex ? 'flex' : 'block'} ${props.marginBottom ? 'mb-' + props.marginBottom : 'mb-0'} ${props.paddingAll ? 'p-' + props.paddingAll : 'p-4'} rounded-md ${props.transparent ? transparentClasses : defaultClasses}`}
    >
      {props.children}
    </div>
  )
}

export const BoxOutbound = (props) => {

  const defaultClasses = "rounded-md border border-gray-200 dark:border-white dark:border-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 shadow hover:shadow-lg dark:hover:border-opacity-20"

  return(
    <a
      className={`${props.flex ? 'flex' : 'block'}  ${props.marginBottom ? 'mb-' + props.marginBottom : 'mb-0'} ${props.padding ? 'p-' + props.padding : 'p-4'} rounded-md ${defaultClasses}`}
      href={props.href}
      target="_blank"
    >
      {props.children}
    </a>
  )
}

export const BoxLink = (props) => {

  const defaultClasses = "rounded-md border border-gray-200 dark:border-white dark:border-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 shadow hover:shadow-lg dark:hover:border-opacity-20"

  return(
    <Link href={props.href}>
      <a
        className={`${props.flex ? 'flex' : 'block'}  ${props.marginBottom ? 'mb-' + props.marginBottom : 'mb-0'} ${props.padding ? 'p-' + props.padding : 'p-4'} rounded-md ${defaultClasses}`}
      >
        {props.children}
      </a>
    </Link>
  )
}

export default Box;