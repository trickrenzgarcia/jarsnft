import AdminMenuToggle from './_components/admin-menu';
import TotalRevenue from './_components/total-revenue';
import { TransactionTable } from './_components/transaction-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

async function getListedNftsCount(): Promise<number> {
  const response = await fetch(process.env.APP_URL + '/api/v1/getListedNfts/count', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.JWT_TOKEN}`
    },
    next: {
      revalidate: 5
    }
  });
  const data = await response.json() as number;
  return data;
}

async function getTotalNftsCount(): Promise<number> {
  const response = await fetch(process.env.APP_URL + '/api/v1/nfts/totalNfts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.JWT_TOKEN}`
    },
    next: {
      revalidate: 5
    }
  });
  const data = await response.json();
  return data;
}

async function getAllUsersCount(): Promise<number> {
  const response = await fetch(process.env.APP_URL + '/api/v1/user/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.JWT_TOKEN}`
    },
    next: {
      revalidate: 10
    }
  });
  const data = await response.json();
  return data.length;
}

export default async function AdminPage() {
  const listedNftsCount = await getListedNftsCount();
  const usersCount = await getAllUsersCount();

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl'>Dashboard</h1>
        <AdminMenuToggle className='md:hidden' />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className='bg-purple-300/70 dark:bg-[#404040] shadow-[rgba(0,0,15,1)_0px_6px_0px_0px] rounded-2xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Fees Collected</CardTitle>
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
            <TotalRevenue />
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
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            
          </CardHeader>
          <CardContent className='p-4'>
            <div className="text-2xl font-bold">{0}</div>
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
            <div className="text-2xl font-bold">{listedNftsCount}</div>
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent className='p-4'>
            <div className="text-2xl font-bold">{usersCount}</div>
          </CardContent>
        </Card>
      </div>
      <div className=''>
        <TransactionTable />
      </div>
    </div>
  )
}
