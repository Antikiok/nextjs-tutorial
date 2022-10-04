import { useRouter } from 'next/router';
export default function () {
 const router = useRouter();

 const { query } = router;
 console.log(query.id);

 return (
  <>
   <div>User with id {query.id}</div>
  </>
 );
}
