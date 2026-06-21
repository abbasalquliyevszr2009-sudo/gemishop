export default function Page() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Başlıq və Axtarış Bölməsi */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>GemiShop</h1>
        <input 
          type="text" 
          placeholder="Məhsul axtar..." 
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
      </header>

      {/* Əsas Məzmun */}
      <main>
        <p>Xoş gəlmisiniz! Məhsullarımızla tanış olun.</p>
        {/* Buraya məhsullarını əlavə edə bilərik */}
      </main>

      {/* Footer - Ayaq hissəsi */}
      <footer style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <p>© 2026 GemiShop. Bütün hüquqlar qorunur.</p>
        <p>Əlaqə: info@gemishop.com</p>
      </footer>
    </div>
  );
}
