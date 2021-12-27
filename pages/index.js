import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/notes">
        Note
      </Link>
    </div>
  )
}
