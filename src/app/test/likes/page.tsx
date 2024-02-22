import OptimisticCounter from './_components/OptimisticCounter'

export default async function TestLikesLogic() {
  // I want the latest LIKE value from the server in SSR PAGES.
  const res = await fetch("http://localhost:3000/api/likes", {
    cache: "no-cache",
    next: {
      tags: ["likes"]
    }
  })

  const { likes } = await res.json()

  return (
    <div className='p-6'>
      <h1 className='text-xl font-semibold'>LIKE (LIVE VALUE) NO DELAY DEMO using useOptimistic Hook</h1>
      <OptimisticCounter likes={likes} />
    </div>
  )
}