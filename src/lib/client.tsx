import { createThirdwebClient } from 'thirdweb';

const client = createThirdwebClient(process.env.NEXT_PUBLIC_THIRDWEB_CLIENT ? {
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT,
} : {
  secretKey: process.env.THIRDWEB_SECRET_KEY!
})

export default client;