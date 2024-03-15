import OptimisticMessage from './OptimisticMessage';

const messages = [{ message: "this is a message" }]
export default function TestMessageLogicSample() {
  return (
    <div className='p-6'>
      <h1 className='text-xl font-semibold'>TEST Messaging/Comments/Threads using useOptimistic hooks</h1>
      <OptimisticMessage messages={messages} />
    </div>
  )
}