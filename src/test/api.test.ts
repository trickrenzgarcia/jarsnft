
// BASIC TESTING

import jars from '@/lib/api'

async function main() {
  const result = await jars.updateUser('0x25447F0aBBe59ab7c6A9820252D717aCA0135a4e', {
    email: 'test',
    name: 'test',
    isListed: 1
  })
  console.log(result)
}

main().catch(error => console.error(error))