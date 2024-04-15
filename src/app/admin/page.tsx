import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Metadata } from "next";
import { TbArrowsExchange } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { jars } from "@/lib/core/api";
import { Overview } from "./_components";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

const AdminPage = async () => {
  const totalUsers = (await jars.getAllUsers()).length;

  // Example data for the dashboard cards
  const dashboardData = [
    {
      name: "Total Transactions",
      value: "325.4K",
      icon: <TbArrowsExchange className="text-3xl" />,
    },
    {
      name: "Tax Revenues",
      value: "160 MATIC",
      icon: (
        <Image
          src="/assets/cryptocurrency/polygon-matic.png"
          width={35}
          height={35}
          alt="MATIC"
        />
      ),
      growth: "+12%",
      percentage: "USD $115.47",
    },
    {
      name: "24h Trading Volume",
      value: "3.2K MATIC",
      icon: (
        <Image
          src="/assets/cryptocurrency/polygon-matic.png"
          width={35}
          height={35}
          alt="MATIC"
        />
      ),
      growth: "+5%",
      percentage: "USD $2309.50",
    },
    {
      name: "Total Users",
      value: totalUsers.toString(),
      icon: <FaUsers className="text-3xl" />,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="my-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dashboardData.map((data, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {data.name}
                </CardTitle>
                {data.growth && (
                  <p className="text-xs text-success">{data.growth}</p>
                )}
              </CardHeader>
              <CardContent className="flex flex-col px-5 pb-5">
                <div className="flex flex-row items-center gap-3">
                  {data.icon}
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">{data.value}</h1>
                    <p className="text-xs text-muted-foreground">
                      {data.percentage}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 my-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>
                  The marketplace made 265 transaction this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
