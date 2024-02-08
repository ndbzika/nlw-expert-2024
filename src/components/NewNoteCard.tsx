import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'sonner';


export const NewNoteCard = () => {
  const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true);
  const [content, setContent] = useState('')

  const handleStartEditor = () => {
    setShouldShowOnBoarding(false)
  }

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    
    if (e.target.value === '') {
      setShouldShowOnBoarding(true)
    }
  }

  const handleSaveNote = (e: FormEvent) => {
    e.preventDefault()

    toast.success('Nota salva com sucesso!')
  }

    return (
        <Dialog.Root>
          <Dialog.Trigger className='rounded-md flex flex-col bg-slate-700 p-5 text-left gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
            <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
            <p className='text-sm leading-6 text-slate-400'>
              Grave uma nota em áudio que será convertida para texto automaticamente.
            </p>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="inset-0 fixed bg-black/60">
              <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none overflow-hidden">
                <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                  <X className="size-5"/>
                </Dialog.Close>

                <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>
                  <div className="flex flex-1 flex-col gap-1 p-5">
                    <span className='text-sm font-medium text-slate-300'>
                      Adicionar nota
                    </span>
                    {shouldShowOnBoarding ? (
                      <p className='text-sm leading-6 text-slate-400'>
                      Comece <button className='font-medium text-lime-400 hover:underline'>gravando uma nota</button> em áudio ou se preferir <button onClick={handleStartEditor} className='font-medium text-lime-400 hover:underline'>utilize apenas texto</button>.
                    </p>
                    ) : (
                      <textarea 
                        autoFocus
                        placeholder='Digite sua nota aqui' 
                        className='text-sm leading-6 text-slate-400 h-40 bg-transparent outline-none font-medium placeholder:text-slate-500'
                        onChange={handleContentChange}
                      />
                    )}
                  </div>

                  <button type='submit' className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500">
                    Salvar nota
                  </button>
                </form>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
    )
}