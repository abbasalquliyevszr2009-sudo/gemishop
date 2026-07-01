' client' ;
'use client' ;
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [cartCount, setCartCount] = useState(0);

  // Gəmi səsini çalmaq funksiyası
  const playShipHorn = () => {
    // Zəhmət olmasa public qovluğuna ship-horn.mp3 adlı fayl yüklə.
    const audio = new Audio('/ship-horn.mp3');
    audio.play().catch(error => {
      console.error("Səsi çalmaq mümkün olmadı. Zəhmət olmasa qovluqda mp3 faylının olduğuna əmin ol və səhifəni yenilə.", error);
    });
  };

  // Nümunə məhsullar
  const products = [
    { id: 1, name: 'Dənizçi Eynəyi', price: 50, desc: 'Yüksək keyfiyyətli polarizə eynək.', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=300&auto=format&fit=crop' },
    { id: 2, name: 'Xilasedici Dairə (Dekor)', price: 150, desc: 'Orijinal gəmi dekorasiyası.', img: 'https://images.unsplash.com/photo-1606850927629-b488a3630b85?q=80&w=300&auto=format&fit=crop' },
    { id: 3, name: 'Kompas Dəsti', price: 80, desc: 'Pirinç korpuslu dəqiq kompas.', img: 'https://images.unsplash.com/photo-1581235333278-7821f342a891?q=80&w=300&auto=format&fit=crop' },
  ];

   return (
  <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', padding: '0', margin: '0' }}>
    {/* Üst menyu */}
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/file_000000003b9871f4985f9b18d4ca92a3.png"
          alt="GemiShop Logo"
          width={40}
          height={40}
          style={{ cursor: 'pointer' }}
          onClick={playShipHorn}
          title="Loqoya basaraq gəmi səsini dinləyin!"
        />
        <h1 style={{ margin: 0, fontSize: '24px', color: '#0056b3' }}>GemiShop</h1>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '25px', margin: 0, padding: 0, fontWeight: '600' }}>
        <li style={{ cursor: 'pointer' }}>Ana Səhifə</li>
        <li style={{ cursor: 'pointer' }}>Məhsullar</li>
        <li style={{ cursor: 'pointer' }}>Əlaqə</li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '600' }}>
        <span>🛒 Səbət ({cartCount})</span>
      </div>
    </nav>

    {/* Əsas məzmun */}
    <main style={{ flexGrow: 1, padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <input type="text" placeholder="Məhsul axtar..." style={{ padding: '10px', width: '300px', borderRadius: '20px' }} />
        <button style={{ padding: '10px 20px', marginLeft: '10px', borderRadius: '20px', backgroundColor: '#0056b3', color: 'white', border: 'none' }}>Axtar</button>
      </div>

      {/* Məhsullar bölməsi */}
      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h3 style={{ marginBottom: '20px', color: '#333', borderBottom: '2px solid #0056b3', display: 'inline-block', paddingBottom: '5px' }}>Məhsullar</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ backgroundColor: 'white', border: '1px solid #e0e0e0', padding: '20px', borderRadius: '10px' }}>
              <img src={product.img} alt={product.name} width={300} height={200} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h4 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>{product.name}</h4>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px', height: '40px', overflow: 'hidden' }}>{product.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#0056b3' }}>{product.price} AZN</span>
                <button
                  onClick={() => setCartCount(cartCount + 1)}
                  style={{ backgroundColor: '#0056b3', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}
                >
                  Səbətə at
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '30px', marginTop: '50px', textAlign: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div>
          <h5>Əlaqə</h5>
          <p>Ünvan: Naxçıvan, Culfa</p>
          <p>Email: abbasalquiyev140@gmail.com</p>
          <p>Tel: +994 10 478 39 59</p>
        </div>
        <div>
          <h5>Bizim haqqımızda</h5>
          <p>GemiShop - dəniz tərzi və keyfiyyəti bir arada təqdim edən onlayn mağazanız.</p>
        </div>
        <div>
          <h5>Sosial Şəbəkələr</h5>
          <p>Instagram: @_gemishop</p>
          <p>TikTok: Tezliklə...</p>
        </div>
      </div>
      <p style={{ marginTop: '30px', fontSize: '12px', color: '#aaa' }}>© 2026 GemiShop. Bütün hüquqlar qorunur.</p>
    </footer>
  </div>
);
  
