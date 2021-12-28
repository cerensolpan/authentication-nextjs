import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default ({content}) =>{
  return (
    <div>
      <h1>{content.title}</h1>
    </div>
  )
}
export function getStaticProps(){
  return{
    props:{
      content:{
        title: 'This is my really nice app'
      }
    }
  }
}