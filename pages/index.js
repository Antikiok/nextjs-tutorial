import Link from 'next/link';
const Index = () => {
 return (
  <div>
   <Link href="/">
    <a>Home</a>
   </Link>
   <Link href="/users">
    <a>Users</a>
   </Link>

   <h1>Home Page</h1>
  </div>
 );
};

export default Index;
