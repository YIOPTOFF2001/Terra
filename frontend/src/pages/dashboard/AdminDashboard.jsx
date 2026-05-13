import { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

  :root {
    --bg: #FAFAF8;
    --white: #FFFFFF;
    --cream-side: #F0EBE1;
    --green: #2A5C22;
    --green-pale: #F0F5EF;
    --green-mid: #3D7A32;
    --amber: #B8730A;
    --amber-pale: #FDF6ED;
    --red: #C83232;
    --red-pale: #FDF0F0;
    --blue-pale: #F0F0FF;
    --blue: #5050C8;
    --ink: #141A12;
    --ink-2: #4A5E46;
    --ink-3: #9AAD96;
    --border: rgba(0,0,0,0.07);
    --shadow: 0 2px 20px rgba(0,0,0,0.06);
    --shadow-hover: 0 8px 32px rgba(0,0,0,0.1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .a-root { font-family: 'Outfit', sans-serif; background: var(--bg); min-height: 100vh; display: flex; color: var(--ink); }

  /* SIDEBAR */
  .a-side { width: 230px; min-height: 100vh; background: var(--cream-side); border-right: 1px solid var(--border); display: flex; flex-direction: column; position: fixed; top: 0; left: 0; bottom: 0; }
  .a-logo { padding: 32px 28px 28px; border-bottom: 1px solid var(--border); }
  .a-wordmark { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 700; letter-spacing: 4px; color: var(--ink); }
  .a-wordmark span { color: var(--green); }
  .a-portal { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--ink-3); margin-top: 4px; font-weight: 500; }

  .a-nav { flex: 1; padding: 24px 0; }
  .a-nav-section { font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: var(--ink-3); font-weight: 500; padding: 16px 28px 8px; }
  .a-nav-item { display: flex; align-items: center; justify-content: space-between; padding: 11px 28px; font-size: 13px; font-weight: 400; color: var(--ink-3); cursor: pointer; border-left: 2px solid transparent; transition: all 0.15s; user-select: none; }
  .a-nav-item:hover { color: var(--ink); background: rgba(0,0,0,0.04); }
  .a-nav-item.active { color: var(--green); border-left-color: var(--green); background: rgba(42,92,34,0.1); font-weight: 500; }
  .a-nav-left { display: flex; align-items: center; gap: 12px; }
  .a-nav-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
  .a-badge { background: var(--red); color: #fff; font-size: 10px; font-weight: 600; border-radius: 20px; padding: 2px 7px; min-width: 20px; text-align: center; }
  .a-badge-amber { background: var(--amber); }

  .a-side-foot { padding: 20px 28px; border-top: 1px solid var(--border); }
  .a-user { display: flex; align-items: center; gap: 10px; }
  .a-avatar { width: 34px; height: 34px; border-radius: 50%; background: var(--green); color: #fff; font-size: 12px; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .a-user-name { font-size: 12.5px; font-weight: 500; color: var(--ink); }
  .a-user-sub { font-size: 11px; color: var(--ink-3); margin-top: 1px; }

  /* MAIN */
  .a-main { margin-left: 230px; flex: 1; padding: 48px 56px; max-width: calc(100vw - 230px); }
  .a-header { margin-bottom: 40px; display: flex; align-items: flex-end; justify-content: space-between; }
  .a-title { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 600; color: var(--ink); line-height: 1; letter-spacing: -0.5px; }
  .a-subtitle { font-size: 13px; color: var(--ink-3); margin-top: 6px; font-weight: 300; }

  /* STAT CARDS */
  .a-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 40px; }
  .a-stat { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 22px 24px; transition: box-shadow 0.2s, transform 0.2s; }
  .a-stat:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
  .a-stat-label { font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--ink-3); font-weight: 500; margin-bottom: 10px; }
  .a-stat-value { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 600; color: var(--ink); line-height: 1; }
  .a-stat-note { font-size: 11px; color: var(--ink-3); margin-top: 6px; font-weight: 300; }
  .a-stat-urgent { border-color: rgba(200,50,50,0.2); }
  .a-stat-urgent .a-stat-value { color: var(--red); }

  /* DIVIDER */
  .a-divider { height: 1px; background: var(--border); margin: 0 0 36px; }

  /* SECTION LABEL */
  .a-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: var(--ink-3); font-weight: 500; margin-bottom: 18px; }

  /* TABLE */
  .a-table { width: 100%; border-collapse: collapse; margin-bottom: 32px; }
  .a-table th { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--ink-3); font-weight: 500; padding: 0 12px 12px 0; text-align: left; border-bottom: 1px solid var(--border); }
  .a-table td { padding: 15px 12px 15px 0; font-size: 13px; color: var(--ink); border-bottom: 1px solid var(--border); font-weight: 300; vertical-align: middle; }
  .a-table tr:last-child td { border-bottom: none; }
  .a-table tr:hover td { background: var(--bg); }

  /* PILLS */
  .a-pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; }
  .a-pill-pending   { background: var(--amber-pale); color: var(--amber); }
  .a-pill-approved  { background: var(--green-pale); color: var(--green); }
  .a-pill-rejected  { background: var(--red-pale); color: var(--red); }
  .a-pill-confirmed { background: var(--blue-pale); color: var(--blue); }
  .a-pill-shipped   { background: var(--green-pale); color: var(--green); }
  .a-pill-delivered { background: #F0FAF5; color: #1A7A4A; }
  .a-pill-broughtin { background: var(--amber-pale); color: var(--amber); }
  .a-pill-verified  { background: var(--green-pale); color: var(--green); }
  .a-pill-unverified{ background: var(--bg); color: var(--ink-3); border: 1px solid var(--border); }
  .a-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }

  /* ACTION BUTTONS */
  .a-actions { display: flex; gap: 8px; }
  .a-btn-sm { padding: 6px 14px; border-radius: 7px; font-family: 'Outfit', sans-serif; font-size: 11.5px; font-weight: 500; cursor: pointer; border: none; transition: all 0.15s; }
  .a-btn-approve { background: var(--green-pale); color: var(--green); border: 1px solid rgba(42,92,34,0.2); }
  .a-btn-approve:hover { background: var(--green); color: #fff; }
  .a-btn-reject { background: var(--red-pale); color: var(--red); border: 1px solid rgba(200,50,50,0.2); }
  .a-btn-reject:hover { background: var(--red); color: #fff; }
  .a-btn-ship { background: var(--blue-pale); color: var(--blue); border: 1px solid rgba(80,80,200,0.2); }
  .a-btn-ship:hover { background: var(--blue); color: #fff; }
  .a-btn-verify { background: var(--green-pale); color: var(--green); border: 1px solid rgba(42,92,34,0.2); }
  .a-btn-verify:hover { background: var(--green); color: #fff; }
  .a-btn-primary { background: var(--green); color: #fff; padding: 10px 22px; border-radius: 9px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; border: none; transition: all 0.15s; }
  .a-btn-primary:hover { opacity: 0.88; }

  /* STOCK CARDS */
  .a-stock-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 32px; }
  .a-stock-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 28px; }
  .a-stock-top { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
  .a-stock-emoji { font-size: 36px; }
  .a-stock-name { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 600; color: var(--ink); }
  .a-stock-available { font-size: 11px; color: var(--ink-3); font-weight: 300; margin-top: 2px; }
  .a-stock-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
  .a-field { display: flex; flex-direction: column; gap: 6px; }
  .a-label { font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; color: var(--ink-3); }
  .a-input { padding: 11px 14px; border: 1.5px solid var(--border); border-radius: 9px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 300; color: var(--ink); background: var(--bg); outline: none; transition: border-color 0.15s; width: 100%; }
  .a-input:focus { border-color: var(--green); background: var(--white); }

  /* GUIDE */
  .a-guide { background: var(--green-pale); border: 1px solid rgba(42,92,34,0.1); border-radius: 12px; padding: 16px 20px; margin-bottom: 28px; font-size: 12px; color: var(--ink-2); line-height: 1.7; font-weight: 300; }
  .a-guide strong { color: var(--green); font-weight: 500; }

  .a-empty { text-align: center; padding: 32px; font-size: 13px; color: var(--ink-3); font-weight: 300; }
`;

// ── MOCK DATA ──
const initSubmissions = [
  { id:1, farmer:"Amina Dlamini",  produce:"🧅 Onions",   qty:"80 kg",  price:"MT 3,200", date:"13 May 2026", status:"broughtin" },
  { id:2, farmer:"Carlos Nuvunga", produce:"🍅 Tomatoes", qty:"50 kg",  price:"MT 2,500", date:"12 May 2026", status:"broughtin" },
  { id:3, farmer:"Fatima Sitoe",   produce:"🧅 Onions",   qty:"40 kg",  price:"MT 1,600", date:"11 May 2026", status:"approved"  },
  { id:4, farmer:"João Machava",   produce:"🍅 Tomatoes", qty:"30 kg",  price:"MT 1,500", date:"10 May 2026", status:"rejected"  },
];

const initOrders = [
  { id:"#ORR-005", customer:"Lucia Tembe",    items:"Onions 20kg",              total:"MT 1,100", date:"13 May 2026", method:"M-Pesa",  ref:"MP240513XYZ", status:"pending"   },
  { id:"#ORR-004", customer:"Pedro Cossa",    items:"Tomatoes 15kg",            total:"MT 1,050", date:"12 May 2026", method:"Bank",    ref:"BNK20240512", status:"confirmed" },
  { id:"#ORR-003", customer:"Ana Bila",       items:"Onions 10kg + Tomatoes 5kg", total:"MT 900", date:"10 May 2026", method:"M-Pesa", ref:"MP240510ABC", status:"shipped"   },
  { id:"#ORR-002", customer:"Marco Ferreira", items:"Tomatoes 20kg",            total:"MT 1,400", date:"8 May 2026",  method:"Bank",    ref:"BNK20240508", status:"delivered" },
];

const initUsers = [
  { id:1, name:"Amina Dlamini",  email:"amina@gmail.com",   role:"farmer",   joined:"10 May 2026", verified:false, approved:true  },
  { id:2, name:"Carlos Nuvunga", email:"carlos@gmail.com",  role:"farmer",   joined:"8 May 2026",  verified:true,  approved:true  },
  { id:3, name:"Lucia Tembe",    email:"lucia@gmail.com",   role:"vendor",   joined:"12 May 2026", verified:false, approved:true  },
  { id:4, name:"Pedro Cossa",    email:"pedro@gmail.com",   role:"vendor",   joined:"11 May 2026", verified:false, approved:false },
  { id:5, name:"Fatima Sitoe",   email:"fatima@gmail.com",  role:"farmer",   joined:"5 May 2026",  verified:true,  approved:true  },
];

const NAV = [
  { id:"overview",     label:"Overview",            section:"main"  },
  { id:"submissions",  label:"Farmer Submissions",  section:"main",  badge:2, badgeType:"red"   },
  { id:"stock",        label:"Manage Stock",         section:"main"  },
  { id:"orders",       label:"Customer Orders",      section:"main",  badge:1, badgeType:"amber" },
  { id:"users",        label:"User Management",      section:"main"  },
];

const SUBMISSION_STATUS = {
  broughtin: { label:"Brought In", cls:"a-pill-broughtin" },
  approved:  { label:"Approved",   cls:"a-pill-approved"  },
  rejected:  { label:"Rejected",   cls:"a-pill-rejected"  },
};

const ORDER_STATUS = {
  pending:   { label:"Pending",   cls:"a-pill-pending"   },
  confirmed: { label:"Confirmed", cls:"a-pill-confirmed" },
  shipped:   { label:"Shipped",   cls:"a-pill-shipped"   },
  delivered: { label:"Delivered", cls:"a-pill-delivered" },
};

export default function AdminDashboard() {
  const [nav, setNav] = useState("overview");
  const [submissions, setSubmissions] = useState(initSubmissions);
  const [orders, setOrders] = useState(initOrders);
  const [users, setUsers] = useState(initUsers);
  const [stock, setStock] = useState({
    onions:   { qty: 240, price: 55 },
    tomatoes: { qty: 180, price: 70 },
  });
  const [stockEdit, setStockEdit] = useState({
    onions:   { qty: 240, price: 55 },
    tomatoes: { qty: 180, price: 70 },
  });

  const approveSubmission = (id) => setSubmissions(s => s.map(i => i.id === id ? { ...i, status:"approved" } : i));
  const rejectSubmission  = (id) => setSubmissions(s => s.map(i => i.id === id ? { ...i, status:"rejected" } : i));

  const advanceOrder = (id) => {
    const flow = { pending:"confirmed", confirmed:"shipped", shipped:"delivered" };
    setOrders(o => o.map(i => i.id === id ? { ...i, status: flow[i.status] || i.status } : i));
  };

  const verifyUser   = (id) => setUsers(u => u.map(i => i.id === id ? { ...i, verified:true } : i));
  const approveUser  = (id) => setUsers(u => u.map(i => i.id === id ? { ...i, approved:true } : i));

  const saveStock = () => setStock({ ...stockEdit });

  const Pill = ({ status, map }) => {
    const s = map[status] || { label: status, cls:"" };
    return <span className={`a-pill ${s.cls}`}><span className="a-dot" />{s.label}</span>;
  };

  const pendingSubmissions = submissions.filter(s => s.status === "broughtin").length;
  const pendingOrders      = orders.filter(o => o.status === "pending").length;
  const verifiedFarmers    = users.filter(u => u.role === "farmer" && u.verified).length;
  const totalRevenue       = orders.filter(o => o.status === "delivered")
    .reduce((sum, o) => sum + parseInt(o.total.replace(/\D/g,"")), 0);

  return (
    <>
      <style>{css}</style>
      <div className="a-root">

        {/* SIDEBAR */}
        <aside className="a-side">
          <div className="a-logo">
            <div className="a-wordmark">TER<span>RA</span></div>
            <div className="a-portal">Admin Portal</div>
          </div>

          <nav className="a-nav">
            {NAV.map(n => (
              <div key={n.id} className={`a-nav-item ${nav === n.id ? "active" : ""}`} onClick={() => setNav(n.id)}>
                <div className="a-nav-left">
                  <span className="a-nav-dot" />{n.label}
                </div>
                {n.badge && <span className={`a-badge ${n.badgeType === "amber" ? "a-badge-amber" : ""}`}>{n.badge}</span>}
              </div>
            ))}
          </nav>

          <div className="a-side-foot">
            <div className="a-user">
              <div className="a-avatar">A</div>
              <div>
                <div className="a-user-name">Admin</div>
                <div className="a-user-sub">Terra HQ · Maputo</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="a-main">

          {/* ── OVERVIEW ── */}
          {nav === "overview" && <>
            <div className="a-header">
              <div>
                <div className="a-title">Overview.</div>
                <div className="a-subtitle">Here's what needs your attention today.</div>
              </div>
            </div>

            <div className="a-stats">
              <div className={`a-stat ${pendingSubmissions > 0 ? "a-stat-urgent" : ""}`}>
                <div className="a-stat-label">Pending Submissions</div>
                <div className="a-stat-value">{pendingSubmissions}</div>
                <div className="a-stat-note">farmers awaiting review</div>
              </div>
              <div className={`a-stat ${pendingOrders > 0 ? "a-stat-urgent" : ""}`}>
                <div className="a-stat-label">Pending Orders</div>
                <div className="a-stat-value">{pendingOrders}</div>
                <div className="a-stat-note">payment to verify</div>
              </div>
              <div className="a-stat">
                <div className="a-stat-label">Verified Farmers</div>
                <div className="a-stat-value">{verifiedFarmers}</div>
                <div className="a-stat-note">of {users.filter(u=>u.role==="farmer").length} total farmers</div>
              </div>
              <div className="a-stat">
                <div className="a-stat-label">Total Revenue</div>
                <div className="a-stat-value" style={{fontSize:28}}>MT {totalRevenue.toLocaleString()}</div>
                <div className="a-stat-note">from delivered orders</div>
              </div>
            </div>

            <div className="a-divider" />

            <div className="a-section-label">Recent Farmer Submissions</div>
            <table className="a-table">
              <thead><tr><th>Farmer</th><th>Produce</th><th>Qty</th><th>Price</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                {submissions.slice(0,3).map(s => (
                  <tr key={s.id}>
                    <td style={{fontWeight:400}}>{s.farmer}</td>
                    <td>{s.produce}</td><td>{s.qty}</td><td>{s.price}</td><td>{s.date}</td>
                    <td><Pill status={s.status} map={SUBMISSION_STATUS} /></td>
                    <td>
                      {s.status === "broughtin" && (
                        <div className="a-actions">
                          <button className="a-btn-sm a-btn-approve" onClick={() => approveSubmission(s.id)}>Approve</button>
                          <button className="a-btn-sm a-btn-reject"  onClick={() => rejectSubmission(s.id)}>Reject</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="a-section-label">Recent Customer Orders</div>
            <table className="a-table">
              <thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Method</th><th>Ref</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                {orders.slice(0,3).map(o => (
                  <tr key={o.id}>
                    <td style={{fontWeight:500}}>{o.id}</td>
                    <td>{o.customer}</td><td>{o.total}</td><td>{o.method}</td>
                    <td style={{fontFamily:'monospace', fontSize:11}}>{o.ref}</td>
                    <td><Pill status={o.status} map={ORDER_STATUS} /></td>
                    <td>
                      {o.status !== "delivered" && (
                        <button className="a-btn-sm a-btn-ship" onClick={() => advanceOrder(o.id)}>
                          {o.status === "pending" ? "Confirm Payment" : o.status === "confirmed" ? "Mark Shipped" : "Mark Delivered"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>}

          {/* ── FARMER SUBMISSIONS ── */}
          {nav === "submissions" && <>
            <div className="a-header">
              <div>
                <div className="a-title">Farmer Submissions.</div>
                <div className="a-subtitle">Review produce brought in for quality inspection.</div>
              </div>
            </div>

            <div className="a-guide">
              Farmers bring their produce to Terra's collection point. <strong>Approve</strong> if quality meets standards — payment will be processed within 24 hours. <strong>Reject</strong> if produce does not meet requirements.
            </div>

            <table className="a-table">
              <thead><tr><th>Farmer</th><th>Produce</th><th>Qty</th><th>Asking Price</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                {submissions.length === 0 ? (
                  <tr><td colSpan={7}><div className="a-empty">No submissions yet.</div></td></tr>
                ) : submissions.map(s => (
                  <tr key={s.id}>
                    <td style={{fontWeight:400}}>{s.farmer}</td>
                    <td>{s.produce}</td><td>{s.qty}</td><td>{s.price}</td><td>{s.date}</td>
                    <td><Pill status={s.status} map={SUBMISSION_STATUS} /></td>
                    <td>
                      {s.status === "broughtin" ? (
                        <div className="a-actions">
                          <button className="a-btn-sm a-btn-approve" onClick={() => approveSubmission(s.id)}>✓ Approve</button>
                          <button className="a-btn-sm a-btn-reject"  onClick={() => rejectSubmission(s.id)}>✕ Reject</button>
                        </div>
                      ) : (
                        <span style={{fontSize:11, color:'var(--ink-3)'}}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>}

          {/* ── STOCK ── */}
          {nav === "stock" && <>
            <div className="a-header">
              <div>
                <div className="a-title">Manage Stock.</div>
                <div className="a-subtitle">Update available produce and pricing for customers.</div>
              </div>
            </div>

            <div className="a-guide">
              Update the <strong>available quantity</strong> and <strong>price per kg</strong> that customers see in the shop. Save after making changes.
            </div>

            <div className="a-stock-grid">
              {[
                { id:"onions",   emoji:"🧅", name:"Onions"   },
                { id:"tomatoes", emoji:"🍅", name:"Tomatoes" },
              ].map(p => (
                <div key={p.id} className="a-stock-card">
                  <div className="a-stock-top">
                    <div className="a-stock-emoji">{p.emoji}</div>
                    <div>
                      <div className="a-stock-name">{p.name}</div>
                      <div className="a-stock-available">Current: {stock[p.id].qty} kg @ MT {stock[p.id].price}/kg</div>
                    </div>
                  </div>
                  <div className="a-stock-fields">
                    <div className="a-field">
                      <label className="a-label">Available (kg)</label>
                      <input
                        className="a-input"
                        type="number"
                        value={stockEdit[p.id].qty}
                        onChange={e => setStockEdit(s => ({ ...s, [p.id]: { ...s[p.id], qty: e.target.value }}))}
                      />
                    </div>
                    <div className="a-field">
                      <label className="a-label">Price per kg (MT)</label>
                      <input
                        className="a-input"
                        type="number"
                        value={stockEdit[p.id].price}
                        onChange={e => setStockEdit(s => ({ ...s, [p.id]: { ...s[p.id], price: e.target.value }}))}
                      />
                    </div>
                  </div>
                  <button className="a-btn-primary" onClick={saveStock}>Save Changes</button>
                </div>
              ))}
            </div>
          </>}

          {/* ── ORDERS ── */}
          {nav === "orders" && <>
            <div className="a-header">
              <div>
                <div className="a-title">Customer Orders.</div>
                <div className="a-subtitle">Verify payments and manage deliveries.</div>
              </div>
            </div>

            <div className="a-guide">
              <strong>Pending</strong> — verify the payment reference before confirming. Once confirmed, prepare and ship the order. Mark as <strong>Delivered</strong> once the customer receives it.
            </div>

            <table className="a-table">
              <thead><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Method</th><th>Ref</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o.id}>
                    <td style={{fontWeight:500}}>{o.id}</td>
                    <td>{o.customer}</td>
                    <td style={{fontSize:12}}>{o.items}</td>
                    <td>{o.total}</td>
                    <td>{o.method}</td>
                    <td style={{fontFamily:'monospace', fontSize:11, color:'var(--ink-3)'}}>{o.ref}</td>
                    <td><Pill status={o.status} map={ORDER_STATUS} /></td>
                    <td>
                      {o.status !== "delivered" ? (
                        <button className="a-btn-sm a-btn-ship" onClick={() => advanceOrder(o.id)}>
                          {o.status === "pending"   ? "Confirm Payment" :
                           o.status === "confirmed" ? "Mark Shipped"    : "Mark Delivered"}
                        </button>
                      ) : (
                        <span style={{fontSize:11, color:'var(--ink-3)'}}>Complete</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>}

          {/* ── USERS ── */}
          {nav === "users" && <>
            <div className="a-header">
              <div>
                <div className="a-title">User Management.</div>
                <div className="a-subtitle">Approve accounts and verify farmers.</div>
              </div>
            </div>

            <div className="a-guide">
              <strong>Approve</strong> new accounts that are pending access. <strong>Verify</strong> farmers who have proven consistent quality and reliability over time.
            </div>

            <table className="a-table">
              <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th><th>Approved</th><th>Verified</th><th>Actions</th></tr></thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id}>
                    <td style={{fontWeight:400}}>{u.name}</td>
                    <td style={{fontSize:12, color:'var(--ink-3)'}}>{u.email}</td>
                    <td>
                      <span style={{fontSize:11, textTransform:'uppercase', letterSpacing:'1px', fontWeight:500, color: u.role==='farmer' ? 'var(--green)' : 'var(--blue)'}}>
                        {u.role}
                      </span>
                    </td>
                    <td>{u.joined}</td>
                    <td>
                      {u.approved
                        ? <span className="a-pill a-pill-approved"><span className="a-dot" />Yes</span>
                        : <span className="a-pill a-pill-pending"><span className="a-dot" />Pending</span>
                      }
                    </td>
                    <td>
                      {u.role === "farmer"
                        ? u.verified
                          ? <span className="a-pill a-pill-verified"><span className="a-dot" />Verified</span>
                          : <span className="a-pill a-pill-unverified"><span className="a-dot" />Not yet</span>
                        : <span style={{fontSize:11, color:'var(--ink-3)'}}>—</span>
                      }
                    </td>
                    <td>
                      <div className="a-actions">
                        {!u.approved && (
                          <button className="a-btn-sm a-btn-approve" onClick={() => approveUser(u.id)}>Approve</button>
                        )}
                        {u.role === "farmer" && !u.verified && (
                          <button className="a-btn-sm a-btn-verify" onClick={() => verifyUser(u.id)}>Verify Farmer</button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>}

        </main>
      </div>
    </>
  );
}