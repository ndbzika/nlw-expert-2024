export const NoteCard = () => {
    return (
        <button className='rounded-md text-left outline-none bg-slate-800 p-5 space-y-3 relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
          <span className='text-sm font-medium text-slate-300'>Há 5 dias</span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae voluptate mollitia voluptatibus enim ipsum inventore ex incidunt provident rerum obcaecati magni magnam officia reprehenderit repellendus accusantium, ea, deserunt et?
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'></div>
        </button>
    )
}