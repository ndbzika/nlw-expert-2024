import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/NewNoteCard'
import { NoteCard } from './components/NoteCard'
import { ChangeEvent, useState } from 'react'
import { INote } from './interfaces/Note'


export default function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<INote[]>(() => {
    const notesOnLocalStorage = localStorage.getItem('notes')

    if (notesOnLocalStorage) {
      return JSON.parse(notesOnLocalStorage)
    }

    return []
  })
  
  const onNoteCreated = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const newNotes = [newNote, ...notes]

    setNotes(newNotes)

    localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearch(query)
  }

  const onNoteDeleted = (id: string) => {
    const notesArr = notes.filter(note => note.id !== id)

    setNotes(notesArr)
    localStorage.setItem('notes', JSON.stringify(notesArr))
  }

  const filteredNotes = search !== '' ? notes.filter(note => note.content.toLowerCase().includes(search.toLowerCase())) : notes

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
      <img src={logo} alt="NLW Expert"/>
      <form className='w-full'>
        <input 
          type="text" 
          placeholder='Busque em suas notas' 
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
          onChange={handleSearch}
        />
      </form>

      <div className='h-px bg-slate-700'></div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]'>

        <NewNoteCard onNoteCreated={onNoteCreated}/>

        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted}/>
        ))}
      </div>

      </div>
  )
}