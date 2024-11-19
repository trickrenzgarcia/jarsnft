import { createThirdwebClient } from "thirdweb";
import { polygon } from "thirdweb/chains";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
const secretKey = process.env.NEXT_PUBLIC_THIRDWEB_API_KEY;
const chain = polygon;

const client = createThirdwebClient({
  secretKey,
});

export { chain, client };
