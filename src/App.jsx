import "./App.css";

function App() {
  return (
    <div>
      {/*
        Todo: 1 ให้ Declare ตัว Component ย่อย 
       เพื่อแบ่งสัดส่วนของ HTML Element ในส่วนของ <header> 
      */} 
      <Header />

      {/*
        Todo 2: ให้ Declare ตัว Component ย่อย
        เพื่อแบ่งสัดส่วนของ HTML Element ในส่วนของ <main> 
      */}
      <MianContent />

      {/*
        Todo 3: ให้ Declare ตัว Component ย่อย
        เพื่อแบ่งสัดส่วนของ HTML Element ในส่วนของ <section className="product-section"> 
      */}
      <ProductSection />

      {/*
        Todo 4: ให้ Declare ตัว Component ย่อย
        เพื่อแบ่งสัดส่วนของ HTML Element ในส่วนของ <footer> 
      */}
      <Footer />
    </div>
  );
}

function Header (){
  return (   <header>
    <nav>
      <div className="logo">🚀 XYZ CORP</div>
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>)
}

function MianContent(){
  return (<main>
    <div className="company-detail-left">
      <h1>Welcome to XYZ Corp</h1>
      <p>Your Trusted Partner in Excellence</p>
      <img src="https://placehold.co/300x300" />
    </div>
    <div className="company-detail-right">
      <h2>About Our Company</h2>
      <p>
        Welcome to XYZ Corp, where excellence meets innovation. We are a
        passionate team dedicated to providing high-quality solutions for
        the technology industry. With a track record of 10 years of success,
        we have become a trusted partner for clients worldwide.
      </p>
      <p>
        Our mission is to empower businesses through cutting-edge
        technology. We believe in integrity, collaboration, and innovation,
        and we strive to make a positive impact on businesses and
        communities alike.
      </p>
      <p>
        At XYZ Corp, we take pride in our commitment to staying at the
        forefront of technological advancements. Our team of experts is
        ready to collaborate with you to tackle your most complex challenges
        and drive your success.
      </p>
      <button className="learn-button">Learn More</button>
    </div>
  </main>)
}

// Product Section Component
function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section-container">
        <h2 className="product-featured-heading">Featured Products</h2>
        <ProductCardList />
      </div>
    </section>
  );
}

// Product Card List Component
function ProductCardList() {
  const products = [
    {
      id: 1,
      image: "https://placehold.co/300x300",
      title: "Premium Bluetooth Headphones",
      price: "2,400 Baht"
    },
    {
      id: 2,
      image: "https://placehold.co/300x300",
      title: "Classic Leather Watch",
      price: "4,000 Baht"
    },
    {
      id: 3,
      image: "https://placehold.co/300x300",
      title: "Organic Green Tea",
      price: "79.99 Baht"
    }
  ];

  return (
    <div className="product-card-list">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

// Product Card Component
function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt="The Lorem Ipsum for photos."
      />
      <h3>{title}</h3>
      <p className="product-price">{price}</p>
      {/*
        Todo 5: ให้ Declare ตัว Component Button เพื่อ Render ปุ่ม "Add to Cart" ที่ซ้ำกันอยู่
        (จุดที่ 1)
      */}
      <Button />

    </div>
  );
}

   {/*
        Todo 6: หลังกจากทำ Todo 5 เสร็จ
        ให้เปลี่ยน Style ของปุ่ม "Add to Card" แก้ไข className ใน Component `Button` ที่สร้างขึ้นมา
        จาก "add-to-cart-button" เป็น "add-to-cart-button-secondary"
      */}
// Button Component
function Button({ text, className = "add-to-cart-button-secondary", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      Add to Cart
    </button>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
    </footer>
  );
}

export default App;
