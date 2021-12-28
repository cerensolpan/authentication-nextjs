import React from 'react'
import Link from 'next/link'

export default ({notes}) => {
    return (
      <div>
        <h1>My Notes</h1>
  
        <div>
          {notes.map(note => (
            <div>
              <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                <a>
                  <div>
                    <strong>{note.title}</strong>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/note`)
    const {data} = await res.json()
  
    return {
      props: {notes: data}
    }
  }