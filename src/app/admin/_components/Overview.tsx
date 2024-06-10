"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

// sample data for the chart

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 250) + 500,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 250) + 500,
  },
]

export default function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `PHP ${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}