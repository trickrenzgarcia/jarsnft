import jars from '@/lib/api';

async function test() {
  const response = await fetch('http://localhost:3000/api/v1/collections/trending?category=pfp', {
    headers: {
      'Authorization': 'Bearer ' + process.env.JWT_TOKEN
    }
  });
  const result = await response.json();
  console.log(result);
  return result;
}
test();