import { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

  :root {
    --bg: #FAFAF8;
    --white: #FFFFFF;
    --cream-side: #F0EBE1;
    --green: #2A5C22;
    --green-pale: #F0F5EF;
    --amber: #B8730A;
    --amber-pale: #FDF6ED;
    --ink: #141A12;
    --ink-2: #4A5E46;
    --ink-3: #9AAD96;
    --border: rgba(0,0,0,0.07);
    --shadow: 0 2px 20px rgba(0,0,0,0.06);
    --shadow-hover: 0 8px 32px rgba(0,0,0,0.1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .c-root { font-family: 'Outfit', sans-serif; background: var(--bg); min-height: 100vh; display: flex; color: var(--ink); }

  /* SIDEBAR */
  .c-side { width: 220px; min-height: 100vh; background: var(--cream-side); border-right: 1px solid var(--border); display: flex; flex-direction: column; position: fixed; top: 0; left: 0; bottom: 0; }
  .c-logo { padding: 32px 28px 28px; border-bottom: 1px solid var(--border); }
  .c-wordmark { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 700; letter-spacing: 4px; color: var(--ink); }
  .c-wordmark span { color: var(--green); }
  .c-portal { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--ink-3); margin-top: 4px; font-weight: 500; }
  .c-nav { flex: 1; padding: 24px 0; }
  .c-nav-item { display: flex; align-items: center; gap: 12px; padding: 11px 28px; font-size: 13px; font-weight: 400; color: var(--ink-3); cursor: pointer; border-left: 2px solid transparent; transition: all 0.15s; user-select: none; }
  .c-nav-item:hover { color: var(--ink); background: rgba(0,0,0,0.04); }
  .c-nav-item.active { color: var(--green); border-left-color: var(--green); background: rgba(42,92,34,0.1); font-weight: 500; }
  .c-nav-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
  .c-side-foot { padding: 20px 28px; border-top: 1px solid var(--border); }
  .c-user { display: flex; align-items: center; gap: 10px; }
  .c-avatar { width: 34px; height: 34px; border-radius: 50%; background: var(--green-pale); color: var(--green); font-size: 12px; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1.5px solid rgba(42,92,34,0.15); }
  .c-user-name { font-size: 12.5px; font-weight: 500; color: var(--ink); }
  .c-user-sub { font-size: 11px; color: var(--ink-3); margin-top: 1px; }

  /* MAIN */
  .c-main { margin-left: 220px; flex: 1; padding: 48px 56px; max-width: calc(100vw - 220px); }
  .c-header { margin-bottom: 48px; display: flex; align-items: flex-end; justify-content: space-between; }
  .c-title { font-family: 'Cormorant Garamond', serif; font-size: 42px; font-weight: 600; color: var(--ink); line-height: 1; letter-spacing: -0.5px; }
  .c-subtitle { font-size: 13px; color: var(--ink-3); margin-top: 8px; font-weight: 300; }

  /* PRODUCE CARDS */
  .c-produce-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px; }
  .c-produce-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 28px; transition: box-shadow 0.2s, transform 0.2s; }
  .c-produce-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
  .c-produce-top { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
  .c-produce-emoji { font-size: 40px; }
  .c-produce-name { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600; color: var(--ink); }
  .c-produce-stock { font-size: 11px; color: var(--ink-3); margin-top: 2px; font-weight: 300; }

  .c-price-tag { 
    background: var(--green-pale); 
    border: 1px solid rgba(42,92,34,0.12);
    border-radius: 10px; 
    padding: 12px 16px; 
    margin-bottom: 20px;
    display: flex;
    align-items: baseline;
    gap: 6px;
  }
  .c-price-amount { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 700; color: var(--green); line-height: 1; }
  .c-price-unit { font-size: 13px; color: var(--ink-3); font-weight: 300; }

  .c-qty-row { display: flex; align-items: center; gap: 12px; }
  .c-qty-btn { width: 34px; height: 34px; border-radius: 8px; border: 1.5px solid var(--border); background: var(--bg); font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); transition: all 0.15s; }
  .c-qty-btn:hover { border-color: var(--green); color: var(--green); }
  .c-qty-val { font-size: 16px; font-weight: 500; color: var(--ink); min-width: 30px; text-align: center; }
  .c-qty-unit { font-size: 12px; color: var(--ink-3); font-weight: 300; }
  .c-add-btn { margin-left: auto; padding: 10px 20px; background: var(--green); color: #fff; border: none; border-radius: 9px; font-family: 'Outfit', sans-serif; font-size: 12.5px; font-weight: 500; cursor: pointer; transition: all 0.15s; }
  .c-add-btn:hover { opacity: 0.88; transform: translateY(-1px); }

  /* CART */
  .c-cart { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 28px; margin-bottom: 24px; }
  .c-cart-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--ink); margin-bottom: 20px; }
  .c-cart-empty { font-size: 13px; color: var(--ink-3); font-weight: 300; text-align: center; padding: 20px 0; }
  .c-cart-item { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--border); font-size: 13.5px; }
  .c-cart-item:last-of-type { border-bottom: none; }
  .c-cart-item-name { color: var(--ink); font-weight: 400; }
  .c-cart-item-detail { color: var(--ink-3); font-size: 12px; font-weight: 300; margin-top: 2px; }
  .c-cart-item-price { color: var(--green); font-weight: 500; font-family: 'Cormorant Garamond', serif; font-size: 18px; }
  .c-cart-remove { color: var(--ink-3); cursor: pointer; font-size: 18px; transition: color 0.15s; margin-left: 16px; }
  .c-cart-remove:hover { color: #C83232; }
  .c-cart-total { display: flex; justify-content: space-between; align-items: center; margin-top: 16px; padding-top: 16px; border-top: 1.5px solid var(--border); }
  .c-cart-total-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--ink-3); font-weight: 500; }
  .c-cart-total-val { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 600; color: var(--ink); }
  .c-order-btn { width: 100%; margin-top: 20px; padding: 14px; background: var(--green); color: #fff; border: none; border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.15s; }
  .c-order-btn:hover { opacity: 0.88; }
  .c-order-btn:disabled { opacity: 0.35; cursor: not-allowed; }

  /* PAYMENT INSTRUCTIONS */
  .c-pay-box { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 36px; margin-bottom: 24px; }
  .c-pay-title { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 600; color: var(--ink); margin-bottom: 8px; }
  .c-pay-sub { font-size: 13px; color: var(--ink-3); font-weight: 300; margin-bottom: 28px; }

  .c-pay-amount { background: var(--green-pale); border: 1px solid rgba(42,92,34,0.12); border-radius: 12px; padding: 18px 22px; margin-bottom: 28px; display: flex; align-items: baseline; gap: 8px; }
  .c-pay-amount-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--ink-3); font-weight: 500; }
  .c-pay-amount-val { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 700; color: var(--green); }

  .c-pay-methods { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
  .c-pay-method { border: 1.5px solid var(--border); border-radius: 12px; padding: 20px; background: var(--bg); }
  .c-pay-method-title { font-size: 13px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
  .c-pay-method-detail { font-size: 12px; color: var(--ink-2); line-height: 1.8; font-weight: 300; }
  .c-pay-method-detail strong { color: var(--ink); font-weight: 500; font-size: 13px; }

  .c-pay-divider { height: 1px; background: var(--border); margin: 0 0 28px; }

  .c-ref-section { margin-bottom: 24px; }
  .c-ref-label { font-size: 13px; font-weight: 500; color: var(--ink); margin-bottom: 8px; }
  .c-ref-sub { font-size: 12px; color: var(--ink-3); font-weight: 300; margin-bottom: 14px; }
  .c-input { padding: 13px 16px; border: 1.5px solid var(--border); border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 300; color: var(--ink); background: var(--white); outline: none; transition: border-color 0.15s; width: 100%; }
  .c-input:focus { border-color: var(--green); }

  .c-method-select { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
  .c-method-opt { border: 1.5px solid var(--border); border-radius: 10px; padding: 12px 16px; cursor: pointer; font-size: 13px; color: var(--ink-3); text-align: center; transition: all 0.15s; background: var(--white); }
  .c-method-opt:hover { border-color: var(--green); color: var(--green); }
  .c-method-opt.sel { border-color: var(--green); color: var(--green); background: var(--green-pale); font-weight: 500; }

  .c-confirm-btn { width: 100%; padding: 14px; background: var(--green); color: #fff; border: none; border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.15s; }
  .c-confirm-btn:hover { opacity: 0.88; }
  .c-confirm-btn:disabled { opacity: 0.35; cursor: not-allowed; }
  .c-back-link { font-size: 12px; color: var(--ink-3); cursor: pointer; text-decoration: underline; text-underline-offset: 3px; margin-bottom: 24px; display: inline-block; }

  /* SUCCESS */
  .c-success { text-align: center; padding: 80px 40px; }
  .c-success-ico { font-size: 52px; margin-bottom: 20px; }
  .c-success-title { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 600; color: var(--ink); margin-bottom: 12px; }
  .c-success-body { font-size: 14px; color: var(--ink-3); line-height: 1.7; max-width: 400px; margin: 0 auto; font-weight: 300; }
  .c-success-body strong { color: var(--green); font-weight: 500; }
  .c-success-btn { margin-top: 28px; padding: 13px 28px; background: var(--green); color: #fff; border: none; border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; }

  /* TABLE */
  .c-table { width: 100%; border-collapse: collapse; }
  .c-table th { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--ink-3); font-weight: 500; padding: 0 0 12px; text-align: left; border-bottom: 1px solid var(--border); }
  .c-table td { padding: 16px 0; font-size: 13.5px; color: var(--ink); border-bottom: 1px solid var(--border); font-weight: 300; }
  .c-table tr:last-child td { border-bottom: none; }

  .c-pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; }
  .c-pill-pending   { background: var(--amber-pale); color: var(--amber); }
  .c-pill-confirmed { background: #F0F0FF; color: #5050C8; }
  .c-pill-shipped   { background: var(--green-pale); color: var(--green); }
  .c-pill-delivered { background: #F0FAF5; color: #1A7A4A; }
  .c-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }

  /* DELIVERY */
  .c-box { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 32px; max-width: 560px; }
  .c-box-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: var(--ink); margin-bottom: 24px; }
  .c-field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
  .c-label { font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.2px; color: var(--ink-3); }
  .c-select { padding: 13px 16px; border: 1.5px solid var(--border); border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 300; color: var(--ink); background: var(--white); outline: none; transition: border-color 0.15s; width: 100%; cursor: pointer; }
  .c-select:focus { border-color: var(--green); }
  .c-textarea { padding: 13px 16px; border: 1.5px solid var(--border); border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 300; color: var(--ink); background: var(--white); outline: none; transition: border-color 0.15s; width: 100%; resize: vertical; min-height: 80px; }
  .c-textarea:focus { border-color: var(--green); }
  .c-save-btn { width: 100%; padding: 13px; background: var(--green); color: #fff; border: none; border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.15s; margin-top: 8px; }
  .c-save-btn:hover { opacity: 0.88; }

  .c-guide { background: var(--green-pale); border: 1px solid rgba(42,92,34,0.1); border-radius: 14px; padding: 18px 22px; margin-bottom: 32px; font-size: 12px; color: var(--ink-2); line-height: 1.7; font-weight: 300; }
  .c-guide strong { color: var(--green); font-weight: 500; }

  .c-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: var(--ink-3); font-weight: 500; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; }
  .c-link { font-size: 11px; color: var(--green); cursor: pointer; text-decoration: underline; text-underline-offset: 3px; font-weight: 400; letter-spacing: 0; text-transform: none; }
  .c-divider { height: 1px; background: var(--border); margin: 0 0 40px; }
  .c-btn { padding: 13px 28px; border-radius: 10px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; border: none; transition: all 0.15s; }
  .c-btn-primary { background: var(--green); color: #fff; }
  .c-btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
`;

const NAV = [
  { id: "shop",     label: "Shop" },
  { id: "orders",   label: "My Orders" },
  { id: "delivery", label: "Delivery Address" },
];

const STOCK = [
  { id: "onions",   emoji: "🧅", name: "Onions",   stock: "240 kg available", pricePerKg: 55 },
  { id: "tomatoes", emoji: "🍅", name: "Tomatoes", stock: "180 kg available", pricePerKg: 70 },
];

const ORDERS = [
  { id:"#ORR-001", items:"Onions 20kg + Tomatoes 10kg", total:"MT 1,800", date:"10 May 2026", status:"delivered" },
  { id:"#ORR-002", items:"Tomatoes 15kg",               total:"MT 1,050", date:"6 May 2026",  status:"shipped"   },
  { id:"#ORR-003", items:"Onions 30kg",                 total:"MT 1,650", date:"1 May 2026",  status:"confirmed" },
  { id:"#ORR-004", items:"Onions 10kg + Tomatoes 5kg",  total:"MT 900",   date:"25 Apr 2026", status:"pending"   },
];

const ORDER_STATUS = {
  pending:   { label:"Pending",   cls:"c-pill-pending"   },
  confirmed: { label:"Confirmed", cls:"c-pill-confirmed" },
  shipped:   { label:"Shipped",   cls:"c-pill-shipped"   },
  delivered: { label:"Delivered", cls:"c-pill-delivered" },
};

// Terra's payment details (placeholder)
const TERRA_BANK = { bank: "Millennium BIM", account: "1234 5678 9012", name: "Terra Lda" };
const TERRA_MPESA = { number: "+258 84 000 0000", name: "Terra Lda" };

export default function CustomerDashboard() {
  const [nav, setNav] = useState("shop");
  const [qty, setQty] = useState({ onions: 1, tomatoes: 1 });
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState("shop"); // shop | pay | done
  const [payMethod, setPayMethod] = useState(null);
  const [ref, setRef] = useState("");

  const name = localStorage.getItem("name") || "Customer";
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2);

  const changeQty = (id, delta) => setQty(q => ({ ...q, [id]: Math.max(1, q[id] + delta) }));

  const addToCart = (product) => {
    const kg = qty[product.id];
    const total = kg * product.pricePerKg;
    setCart(c => {
      const exists = c.find(i => i.id === product.id);
      if (exists) return c.map(i => i.id === product.id ? { ...i, kg, total } : i);
      return [...c, { ...product, kg, total }];
    });
  };

  const removeFromCart = (id) => setCart(c => c.filter(i => i.id !== id));
  const cartTotal = cart.reduce((sum, i) => sum + i.total, 0);

  const confirmPayment = () => {
    if (!payMethod || !ref.trim()) return;
    setStep("done");
  };

  const Pill = ({ status }) => {
    const s = ORDER_STATUS[status] || { label: status, cls: "" };
    return <span className={`c-pill ${s.cls}`}><span className="c-dot" />{s.label}</span>;
  };

  return (
    <>
      <style>{css}</style>
      <div className="c-root">

        {/* SIDEBAR */}
        <aside className="c-side">
          <div className="c-logo">
            <div className="c-wordmark">TER<span>RA</span></div>
            <div className="c-portal">Customer Portal</div>
          </div>
          <nav className="c-nav">
            {NAV.map(n => (
              <div key={n.id} className={`c-nav-item ${nav === n.id ? "active" : ""}`} onClick={() => { setNav(n.id); setStep("shop"); }}>
                <span className="c-nav-dot" />{n.label}
              </div>
            ))}
          </nav>
          <div className="c-side-foot">
            <div className="c-user">
              <div className="c-avatar">{initials}</div>
              <div>
                <div className="c-user-name">{name}</div>
                <div className="c-user-sub">Customer</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="c-main">

          {/* ── SHOP ── */}
          {nav === "shop" && step === "shop" && <>
            <div className="c-header">
              <div>
                <div className="c-title">Shop.</div>
                <div className="c-subtitle">Fresh produce, delivered to your door in Maputo.</div>
              </div>
            </div>

            <div className="c-produce-grid">
              {STOCK.map(p => (
                <div key={p.id} className="c-produce-card">
                  <div className="c-produce-top">
                    <div className="c-produce-emoji">{p.emoji}</div>
                    <div>
                      <div className="c-produce-name">{p.name}</div>
                      <div className="c-produce-stock">{p.stock}</div>
                    </div>
                  </div>

                  <div className="c-price-tag">
                    <div className="c-price-amount">MT {p.pricePerKg}</div>
                    <div className="c-price-unit">per kilogram</div>
                  </div>

                  <div className="c-qty-row">
                    <button className="c-qty-btn" onClick={() => changeQty(p.id, -1)}>−</button>
                    <span className="c-qty-val">{qty[p.id]}</span>
                    <button className="c-qty-btn" onClick={() => changeQty(p.id, +1)}>+</button>
                    <span className="c-qty-unit">kg</span>
                    <span style={{marginLeft:'auto', fontSize:12, color:'var(--ink-3)', fontWeight:300}}>
                      = MT {(qty[p.id] * p.pricePerKg).toLocaleString()}
                    </span>
                    <button className="c-add-btn" onClick={() => addToCart(p)}>Add</button>
                  </div>
                </div>
              ))}
            </div>

            {/* CART */}
            <div className="c-cart">
              <div className="c-cart-title">Your Order</div>

              {cart.length === 0 ? (
                <div className="c-cart-empty">No items yet — select produce above and click Add.</div>
              ) : <>
                {cart.map(item => (
                  <div key={item.id} className="c-cart-item">
                    <div>
                      <div className="c-cart-item-name">{item.emoji} {item.name}</div>
                      <div className="c-cart-item-detail">{item.kg} kg × MT {item.pricePerKg} per kg</div>
                    </div>
                    <div style={{display:'flex', alignItems:'center'}}>
                      <span className="c-cart-item-price">MT {item.total.toLocaleString()}</span>
                      <span className="c-cart-remove" onClick={() => removeFromCart(item.id)}>×</span>
                    </div>
                  </div>
                ))}

                <div className="c-cart-total">
                  <span className="c-cart-total-label">Total to Pay</span>
                  <span className="c-cart-total-val">MT {cartTotal.toLocaleString()}</span>
                </div>
              </>}

              <button
                className="c-order-btn"
                disabled={cart.length === 0}
                onClick={() => setStep("pay")}
              >
                Proceed to Payment →
              </button>
            </div>
          </>}

          {/* ── PAYMENT INSTRUCTIONS ── */}
          {nav === "shop" && step === "pay" && <>
            <span className="c-back-link" onClick={() => setStep("shop")}>← Back to order</span>

            <div className="c-pay-box">
              <div className="c-pay-title">Complete Your Payment</div>
              <div className="c-pay-sub">Send the exact amount below to one of Terra's accounts, then enter your reference number to confirm.</div>

              <div className="c-pay-amount">
                <div>
                  <div style={{fontSize:11, textTransform:'uppercase', letterSpacing:'1.5px', color:'var(--ink-3)', fontWeight:500, marginBottom:4}}>Amount to Pay</div>
                  <div className="c-pay-amount-val">MT {cartTotal.toLocaleString()}</div>
                </div>
              </div>

              <div style={{fontSize:12, fontWeight:500, color:'var(--ink)', marginBottom:14, textTransform:'uppercase', letterSpacing:'1px'}}>Terra's Payment Details</div>
              <div className="c-pay-methods">
                <div className="c-pay-method">
                  <div className="c-pay-method-title">🏦 Bank Transfer</div>
                  <div className="c-pay-method-detail">
                    Bank: <strong>{TERRA_BANK.bank}</strong><br />
                    Account: <strong>{TERRA_BANK.account}</strong><br />
                    Name: <strong>{TERRA_BANK.name}</strong>
                  </div>
                </div>
                <div className="c-pay-method">
                  <div className="c-pay-method-title">📱 M-Pesa</div>
                  <div className="c-pay-method-detail">
                    Number: <strong>{TERRA_MPESA.number}</strong><br />
                    Name: <strong>{TERRA_MPESA.name}</strong><br />
                    <br />Send exact amount shown above.
                  </div>
                </div>
              </div>

              <div className="c-pay-divider" />

              <div className="c-ref-section">
                <div className="c-ref-label">Which method did you use to pay?</div>
                <div className="c-ref-sub">Select the payment method you used.</div>
                <div className="c-method-select">
                  <div className={`c-method-opt ${payMethod === 'bank' ? 'sel' : ''}`} onClick={() => setPayMethod('bank')}>🏦 Bank Transfer</div>
                  <div className={`c-method-opt ${payMethod === 'mpesa' ? 'sel' : ''}`} onClick={() => setPayMethod('mpesa')}>📱 M-Pesa</div>
                </div>

                <div className="c-ref-label" style={{marginBottom:6}}>Payment Reference / Transaction ID</div>
                <div className="c-ref-sub">Enter the reference number from your payment confirmation.</div>
                <input
                  className="c-input"
                  placeholder="e.g. MP240510ABC123"
                  value={ref}
                  onChange={e => setRef(e.target.value)}
                />
              </div>

              <button
                className="c-confirm-btn"
                disabled={!payMethod || !ref.trim()}
                onClick={confirmPayment}
              >
                I Have Paid — Confirm Order →
              </button>
            </div>
          </>}

          {/* ── ORDER CONFIRMED ── */}
          {nav === "shop" && step === "done" && <>
            <div className="c-pay-box">
              <div className="c-success">
                <div className="c-success-ico">✅</div>
                <div className="c-success-title">Order Confirmed!</div>
                <div className="c-success-body">
                  Thank you! Your payment reference has been received. Terra will verify your payment and <strong>arrange delivery to your address in Maputo</strong>. You'll be notified once your order is on its way.
                </div>
                <button className="c-success-btn" onClick={() => { setCart([]); setStep("shop"); setRef(""); setPayMethod(null); setNav("orders"); }}>
                  View My Orders
                </button>
              </div>
            </div>
          </>}

          {/* ── ORDERS ── */}
          {nav === "orders" && <>
            <div className="c-header">
              <div>
                <div className="c-title">My Orders.</div>
                <div className="c-subtitle">Track your order history with Terra.</div>
              </div>
              <button className="c-btn c-btn-primary" onClick={() => { setNav("shop"); setStep("shop"); }}>+ New Order</button>
            </div>

            <div className="c-guide">
              <strong>Pending</strong> — payment being verified &nbsp;·&nbsp;
              <strong>Confirmed</strong> — payment confirmed, order being prepared &nbsp;·&nbsp;
              <strong>Shipped</strong> — on its way to you &nbsp;·&nbsp;
              <strong>Delivered</strong> — order complete
            </div>

            <table className="c-table">
              <thead>
                <tr><th>Order</th><th>Items</th><th>Total</th><th>Date</th><th>Status</th></tr>
              </thead>
              <tbody>
                {ORDERS.map(o => (
                  <tr key={o.id}>
                    <td style={{fontWeight:500}}>{o.id}</td>
                    <td>{o.items}</td>
                    <td>{o.total}</td>
                    <td>{o.date}</td>
                    <td><Pill status={o.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>}

          {/* ── DELIVERY ── */}
          {nav === "delivery" && <>
            <div className="c-header">
              <div>
                <div className="c-title">Delivery Address.</div>
                <div className="c-subtitle">Where should Terra deliver your orders?</div>
              </div>
            </div>

            <div className="c-guide">
              Terra currently delivers within <strong>Maputo city</strong>. Delivery is arranged after your payment is confirmed. Make sure your address is accurate.
            </div>

            <div className="c-box">
              <div className="c-box-title">Your Address</div>
              <div className="c-field">
                <label className="c-label">Full Name</label>
                <input className="c-input" placeholder="Recipient name" />
              </div>
              <div className="c-field">
                <label className="c-label">Phone Number</label>
                <input className="c-input" placeholder="+258 84 000 0000" />
              </div>
              <div className="c-field">
                <label className="c-label">Street Address</label>
                <input className="c-input" placeholder="Av. Eduardo Mondlane, No. 123" />
              </div>
              <div className="c-field">
                <label className="c-label">Neighbourhood / Bairro</label>
                <input className="c-input" placeholder="e.g. Sommerschield, Polana, Malhangalene" />
              </div>
              <div className="c-field">
                <label className="c-label">Delivery Notes (optional)</label>
                <textarea className="c-textarea" placeholder="Gate colour, landmark, floor number, etc." />
              </div>
              <button className="c-save-btn">Save Address</button>
            </div>
          </>}

        </main>
      </div>
    </>
  );
}