import React from 'react'

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
  children: React.ReactNode;
};

export default function NFTLayout({ children, params }: NFTProps) {
  return (
    <div>{children}</div>
  )
}
