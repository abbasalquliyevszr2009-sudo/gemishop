'use client' ;
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <h1>GemiShop</h1>
      <Image 
        src="/file_000000003b9871f4985f9b18d4ca92a3.png" 
        alt="GemiShop Logo" 
        width={300} 
        height={300} 
      />
      <p>Yenilandi</p>
    </div>
  );
}
