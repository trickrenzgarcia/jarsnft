import AdminMenuToggle from './_components/admin-menu';
import { TransactionTable } from './_components/transaction-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminPage() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl'>Dashboard</h1>
        <AdminMenuToggle className='md:hidden' />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className='bg-purple-300/70 dark:bg-[#404040] shadow-[rgba(0,0,15,1)_0px_6px_0px_0px] rounded-2xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transfers</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent className='p-4'>
            <div className="text-2xl font-bold">10,100</div>
          </CardContent>
        </Card>
        <Card className='bg-purple-300/70 dark:bg-[#404040] shadow-[rgba(0,0,15,1)_0px_6px_0px_0px] rounded-2xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total NFTs</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent className='p-4'>
            <div className="text-2xl font-bold">2350</div>
          </CardContent>
        </Card>
        <Card className='bg-purple-300/70 dark:bg-[#404040] shadow-[rgba(0,0,15,1)_0px_6px_0px_0px] rounded-2xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Listed NFTs</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent className='p-4'>
            <div className="text-2xl font-bold">12,234</div>
          </CardContent>
        </Card>
        <Card className='bg-purple-300/70 dark:bg-[#404040] shadow-[rgba(0,0,15,1)_0px_6px_0px_0px] rounded-2xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Users</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent className='p-4'>
            <div className="text-2xl font-bold">573</div>
          </CardContent>
        </Card>
      </div>
      <div className=''>
        <TransactionTable />
      </div>
    </div>
  )
}
