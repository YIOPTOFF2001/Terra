import { useState, useEffect } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

  :root {
    --cream: #F7F2EA;
    --cream-2: #EEE7D9;
    --green: #1E4D18;
    --green-mid: #2E6B27;
    --green-soft: #EAF1E8;
    --green-accent: #7AB872;
    --amber: #B8730A;
    --amber-soft: #FDF4E3;
    --red-soft: #FDEAEA;
    --red: #B83232;
    --white: #FFFFFF;
    --ink: #111C0F;
    --ink-2: #3D5238;
    --ink-3: #7A9175;
    --border: rgba(30,77,24,0.1);
    --shadow-sm: 0 1px 8px rgba(30,77,24,0.07);
    --shadow-md: 0 4px 24px rgba(30,77,24,0.11);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .t-root {
    font-family: 'Outfit', sans-serif;
    background: var(--cream);
    min-height: 100vh;
    color: var(--ink);
    display: flex;
  }

  .t-side {
    width: 260px;
    min-height: 100vh;
    background: var(--green);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0; left: 0; bottom: 0;
  }

  .t-side-top {
    padding: 30px 26px 26px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  .t-wordmark {
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px;
    font-weight: 700;
    color: var(--cream);
    letter-spacing: 3px;
  }
  .t-wordmark em { color: var(--green-accent); font-style: normal; }

  .t-portal-tag {
    margin-top: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(122,184,114,0.15);
    border: 1px solid rgba(122,184,114,0.25);
    border-radius: 20px;
    padding: 3px 10px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--green-accent);
  }

  .t-nav { flex: 1; padding: 18px 0; }

  .t-nav-item {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 13px 26px;
    font-size: 13.5px;
    font-weight: 400;
    color: rgba(255,255,255,0.5);
    cursor: pointer;
    border-left: 3px solid transparent;
    transition: all 0.18s ease;
    user-select: none;
  }

  .t-nav-item:hover { color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.05); }
  .t-nav-item.active { color: #fff; background: rgba(122,184,114,0.12); border-left-color: var(--green-accent); font-weight: 500; }

  .t-nav-ico { width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-size: 15px; }

  .t-side-user {
    padding: 20px 26px;
    border-top: 1px solid rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .t-avatar {
    width: 38px; height: 38px;
    border-radius: 50%;
    background: var(--green-accent);
    color: var(--green);
    font-weight: 700;
    font-size: 14px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .t-user-name { font-size: 13px; color: #fff; font-weight: 500; }
  .t-user-sub { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 1px; }

  .t-main { margin-left: 260px; flex: 1; padding: 36px 40px; max-width: calc(100vw - 260px); }

  .t-topbar { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 28px; }

  .t-page-title { font-family: 'Cormorant Garamond', serif; font-size: 34px; font-weight: 600; color: var(--ink); line-height: 1.1; }
  .t-page-sub { font-size: 13px; color: var(--ink-3); margin-top: 4px; }

  .t-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 500; }
  .t-badge-pending { background: var(--amber-soft); color: var(--amber); border: 1px solid rgba(184,115,10,0.2); }
  .t-badge-verified { background: var(--green-soft); color: var(--green); border: 1px solid rgba(30,77,24,0.2); }

  .t-flow { background: var(--white); border: 1px solid var(--border); border-radius: 18px; padding: 28px 32px; margin-bottom: 28px; box-shadow: var(--shadow-sm); }
  .t-flow-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600; color: var(--ink); margin-bottom: 22px; }

  .t-steps { display: grid; grid-template-columns: repeat(4, 1fr); position: relative; }

  .t-step { display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; }
  .t-step:not(:last-child)::after { content: ''; position: absolute; top: 20px; left: 55%; width: 90%; height: 2px; background: var(--border); }

  .t-step-num { width: 40px; height: 40px; border-radius: 50%; background: var(--green-soft); border: 2px solid var(--green-mid); color: var(--green); font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; position: relative; z-index: 1; }
  .t-step-num.active-step { background: var(--green); color: #fff; border-color: var(--green); }

  .t-step-label { font-size: 12px; font-weight: 600; color: var(--ink-2); margin-bottom: 4px; }
  .t-step-desc { font-size: 11px; color: var(--ink-3); line-height: 1.4; padding: 0 4px; }

  .t-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }

  .t-stat { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 22px 24px; box-shadow: var(--shadow-sm); transition: box-shadow 0.2s, transform 0.2s; }
  .t-stat:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }

  .t-stat-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .t-stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--ink-3); font-weight: 500; }
  .t-stat-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--green-soft); display: flex; align-items: center; justify-content: center; font-size: 16px; }
  .t-stat-val { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 700; color: var(--ink); line-height: 1; }
  .t-stat-unit { font-size: 12px; color: var(--ink-3); margin-top: 5px; }

  .t-card { background: var(--white); border: 1px solid var(--border); border-radius: 18px; box-shadow: var(--shadow-sm); overflow: hidden; margin-bottom: 24px; }
  .t-card-head { padding: 20px 28px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
  .t-card-title { font-family: 'Cormorant Garamond', serif; font-size: 21px; font-weight: 600; color: var(--ink); }
  .t-card-body { padding: 28px; }

  .t-table { width: 100%; border-collapse: collapse; }
  .t-table th { font-size: 10.5px; text-transform: uppercase; letter-spacing: 1px; color: var(--ink-3); font-weight: 500; padding: 10px 20px; text-align: left; border-bottom: 1px solid var(--border); background: var(--cream); }
  .t-table td { padding: 14px 20px; font-size: 13.5px; color: var(--ink); border-bottom: 1px solid rgba(30,77,24,0.05); }
  .t-table tr:last-child td { border-bottom: none; }
  .t-table tr:hover td { background: var(--cream); }

  .t-pill { display: inline-flex; align-items: center; gap: 5px; padding: 4px 11px; border-radius: 20px; font-size: 11px; font-weight: 500; }
  .t-pill-submitted { background: #EEF2FF; color: #4A5ACD; }
  .t-pill-broughtin { background: var(--amber-soft); color: var(--amber); }
  .t-pill-approved { background: var(--green-soft); color: var(--green); }
  .t-pill-rejected { background: var(--red-soft); color: var(--red); }
  .t-pill-paid { background: #E8F7F0; color: #1A7A4A; }
  .t-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex-shrink: 0; }

  .t-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .t-field { display: flex; flex-direction: column; gap: 7px; }
  .t-field.span2 { grid-column: 1 / -1; }
  .t-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; color: var(--ink-2); }

  .t-input, .t-select, .t-textarea { padding: 12px 15px; border: 1.5px solid var(--border); border-radius: 11px; font-family: 'Outfit', sans-serif; font-size: 14px; color: var(--ink); background: var(--cream); outline: none; transition: border-color 0.18s, background 0.18s; width: 100%; }
  .t-input:focus, .t-select:focus, .t-textarea:focus { border-color: var(--green-mid); background: #fff; }
  .t-textarea { resize: vertical; min-height: 85px; }
  .t-select { cursor: pointer; }

  .t-produce-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 24px; }
  .t-produce-card { border: 2px solid var(--border); border-radius: 14px; padding: 20px 16px; cursor: pointer; text-align: center; background: var(--cream); transition: all 0.18s; }
  .t-produce-card:hover { border-color: var(--green-mid); background: var(--green-soft); }
  .t-produce-card.sel { border-color: var(--green); background: var(--green-soft); box-shadow: 0 0 0 3px rgba(30,77,24,0.08); }
  .t-produce-emoji { font-size: 40px; margin-bottom: 10px; }
  .t-produce-name { font-size: 15px; font-weight: 600; color: var(--ink); }
  .t-produce-hint { font-size: 11px; color: var(--ink-3); margin-top: 3px; }

  .t-upload { border: 2px dashed var(--border); border-radius: 13px; padding: 28px 20px; text-align: center; cursor: pointer; background: var(--cream); transition: all 0.18s; }
  .t-upload:hover { border-color: var(--green-mid); background: var(--green-soft); }
  .t-upload-ico { font-size: 30px; margin-bottom: 8px; }
  .t-upload-txt { font-size: 13px; color: var(--ink-3); line-height: 1.5; }

  .t-callout { border-radius: 14px; padding: 20px 24px; display: flex; gap: 14px; align-items: flex-start; margin-bottom: 24px; }
  .t-callout-amber { background: var(--amber-soft); border: 1px solid rgba(184,115,10,0.18); }
  .t-callout-green { background: var(--green-soft); border: 1px solid rgba(30,77,24,0.15); }
  .t-callout-ico { font-size: 22px; flex-shrink: 0; margin-top: 1px; }
  .t-callout-head { font-size: 13px; font-weight: 700; color: var(--ink); margin-bottom: 5px; }
  .t-callout-body { font-size: 12.5px; color: var(--ink-2); line-height: 1.6; }
  .t-callout-body strong { color: var(--green); }

  .t-btn { padding: 12px 26px; border-radius: 11px; font-family: 'Outfit', sans-serif; font-size: 13.5px; font-weight: 600; cursor: pointer; border: none; transition: all 0.18s; }
  .t-btn-primary { background: var(--green); color: #fff; }
  .t-btn-primary:hover { background: var(--green-mid); transform: translateY(-1px); box-shadow: 0 4px 14px rgba(30,77,24,0.28); }
  .t-btn-ghost { background: transparent; color: var(--green); border: 1.5px solid var(--border); }
  .t-btn-ghost:hover { background: var(--green-soft); border-color: var(--green-mid); }

  .t-row-end { display: flex; justify-content: flex-end; gap: 12px; margin-top: 22px; }

  .t-success { text-align: center; padding: 56px 40px; }
  .t-success-ico { font-size: 56px; margin-bottom: 18px; }
  .t-success-title { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
  .t-success-body { font-size: 14px; color: var(--ink-3); line-height: 1.6; max-width: 420px; margin: 0 auto; }

  .t-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
  .t-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; color: var(--ink-3); margin-bottom: 16px; }
`;

const NAV = [
  { id: "overview", ico: "▦", label: "Overview" },
  { id: "submit",   ico: "＋", label: "Submit Produce" },
  { id: "listings", ico: "≡",  label: "My Listings" },
  { id: "banking",  ico: "◈",  label: "Banking Details" },
];

const LISTINGS = [
  { id: 1, produce: "🧅 Onions",   qty: "50 kg", price: "MT 2,500", date: "10 May 2026", status: "paid" },
  { id: 2, produce: "🍅 Tomatoes", qty: "30 kg", price: "MT 1,800", date: "8 May 2026",  status: "approved" },
  { id: 3, produce: "🧅 Onions",   qty: "20 kg", price: "MT 1,000", date: "1 May 2026",  status: "broughtin" },
  { id: 4, produce: "🍅 Tomatoes", qty: "15 kg", price: "MT 900",   date: "28 Apr 2026", status: "rejected" },
  { id: 5, produce: "🧅 Onions",   qty: "25 kg", price: "MT 1,250", date: "20 Apr 2026", status: "submitted" },
];

const STATUS_MAP = {
  submitted:  { label: "Submitted",  cls: "t-pill-submitted" },
  broughtin:  { label: "Brought In", cls: "t-pill-broughtin" },
  approved:   { label: "Approved",   cls: "t-pill-approved" },
  rejected:   { label: "Rejected",   cls: "t-pill-rejected" },
  paid:       { label: "Paid",       cls: "t-pill-paid" },
};

export default function FarmerDashboard() {
  const [nav, setNav] = useState("overview");
  const [produce, setProduce] = useState(null);
  const [form, setForm] = useState({ qty: "", price: "", notes: "" });
  const [done, setDone] = useState(false);
  const [banking, setBanking] = useState({
  bankName: '', accountName: '', accountNumber: '',
  mpesaNumber: '', mpesaName: ''
});
const [bankingSaved, setBankingSaved] = useState(false);

  const name = localStorage.getItem('name') || "Farmer";
  const initials = name.split(" ").map(n => n[0]).join("");
  const [farmer, setFarmer] = useState(null);
const [stats, setStats] = useState({ totalListings: 0, totalSoldKg: 0, totalRevenue: 0 });
const [listings, setListings] = useState([]);
const token = localStorage.getItem('token');

useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const [dashRes, produceRes, bankingRes] = await Promise.all([
        fetch('http://localhost:3000/api/farmer/dashboard', {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch('http://localhost:3000/api/farmer/produce', {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch('http://localhost:3000/api/farmer/banking', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      const dashData = await dashRes.json();
      const produceData = await produceRes.json();
      const bankingData = await bankingRes.json();

      if (dashRes.ok) {
        setFarmer(dashData.farmer);
        setStats(dashData.stats);
      }

      if (produceRes.ok) {
        setListings(produceData.listings);
      }
      if (bankingRes.ok && bankingData.details) {
        setBanking({
          bankName: bankingData.details.bankName || '',
          accountName: bankingData.details.accountName || '',
          accountNumber: bankingData.details.accountNumber || '',
          mpesaNumber: bankingData.details.mpesaNumber || '',
          mpesaName: bankingData.details.mpesaName || ''
        });
        }

    } catch (err) {
      console.error('Dashboard error:', err);
    }
  };
  fetchDashboard();
}, []);

 const submit = async () => {
  if (!produce || !form.qty || !form.price) return;
  try {
    const res = await fetch('http://localhost:3000/api/farmer/produce', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        produceType: produce,
        quantity: Number(form.qty),
        askingPrice: Number(form.price),
        notes: form.notes
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || 'Submission failed');
      return;
    }

    setDone(true);
    setListings(prev => [data.produce, ...prev]);
    setStats(prev => ({ ...prev, totalListings: prev.totalListings + 1 }));
    setTimeout(() => {
      setDone(false);
      setProduce(null);
      setForm({ qty: "", price: "", notes: "" });
    }, 4500);

  } catch (err) {
    alert('Something went wrong. Please try again.');
  }
};

const saveBanking = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/farmer/banking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(banking)
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || 'Failed to save banking details');
      return;
    }

    setBankingSaved(true);
    setTimeout(() => setBankingSaved(false), 3000);

  } catch (err) {
    alert('Something went wrong. Please try again.');
  }
};

  const Pill = ({ status }) => {
    const s = STATUS_MAP[status] || { label: status, cls: "" };
    return <span className={`t-pill ${s.cls}`}><span className="t-dot" />{s.label}</span>;
  };

  return (
    <>
      <style>{css}</style>
      <div className="t-root">

        <aside className="t-side">
          <div className="t-side-top">
            <div className="t-wordmark">TER<em>RA</em></div>
            <div className="t-portal-tag">🌱 Farmer Portal</div>
          </div>
          <nav className="t-nav">
            {NAV.map(n => (
              <div key={n.id} className={`t-nav-item ${nav === n.id ? "active" : ""}`} onClick={() => setNav(n.id)}>
                <span className="t-nav-ico">{n.ico}</span>{n.label}
              </div>
            ))}
          </nav>
          <div className="t-side-user">
            <div className="t-avatar">{initials}</div>
            <div>
              <div className="t-user-name">{name}</div>
              <div className="t-user-sub">Farmer ·{farmer?.location || '...'} </div>
            </div>
          </div>
        </aside>

        <main className="t-main">

          {nav === "overview" && <>
            <div className="t-topbar">
              <div>
                <div className="t-page-title">Welcome back, {name.split(" ")[0]}!</div>
                
                <div className="t-page-sub">Here's a summary of your activity with Terra.</div>
              </div>
    
            </div>

            <div className="t-flow">
              <div className="t-flow-title">How selling to Terra works</div>
              <div className="t-steps">
                {[
                  { n:1, label:"Submit Listing",  desc:"Fill in your produce details on the app", active:true },
                  { n:2, label:"Bring Produce",   desc:"Deliver to our Maputo collection point", active:false },
                  { n:3, label:"Quality Check",   desc:"Terra inspects your produce in person", active:false },
                  { n:4, label:"Get Paid",        desc:"Payment within 24 hrs if approved", active:false },
                ].map(s => (
                  <div key={s.n} className="t-step">
                    <div className={`t-step-num ${s.active ? "active-step" : ""}`}>{s.n}</div>
                    <div className="t-step-label">{s.label}</div>
                    <div className="t-step-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="t-stats">
              <div className="t-stat">
                <div className="t-stat-head"><div className="t-stat-label">Total Listings</div><div className="t-stat-icon">🌱</div></div>
                <div className="t-stat-val"> {stats.totalListings}</div>
                <div className="t-stat-unit">submitted to Terra</div>
              </div>
              <div className="t-stat">
                <div className="t-stat-head"><div className="t-stat-label">Produce Sold</div><div className="t-stat-icon">✓</div></div>
                <div className="t-stat-val"> {stats.totalSoldKg}<span style={{fontSize:20}}>kg</span></div>
                <div className="t-stat-unit">delivered & confirmed</div>
              </div>
              <div className="t-stat">
                <div className="t-stat-head"><div className="t-stat-label">Total Earned</div><div className="t-stat-icon">💰</div></div>
                <div className="t-stat-val" style={{fontSize:28}}>MT {stats.totalRevenue.toFixed(2)}</div>
                <div className="t-stat-unit">lifetime earnings</div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-card-head">
                <div className="t-card-title">Recent Submissions</div>
                <button className="t-btn t-btn-ghost" style={{fontSize:12,padding:'8px 16px'}} onClick={() => setNav("listings")}>View all</button>
              </div>
              <table className="t-table">
                <thead><tr><th>Produce</th><th>Qty</th><th>Price</th><th>Submitted</th><th>Status</th></tr></thead>
                <tbody>
                  {listings.slice(0,3).map(l => (
  <tr key={l._id}>
    <td>{l.produceType === 'onions' ? '🧅 Onions' : '🍅 Tomatoes'}</td>
    <td>{l.quantity} kg</td>
    <td>MT {l.askingPrice}</td>
    <td>{new Date(l.createdAt).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' })}</td>
    <td><Pill status={l.status} /></td>
  </tr>
))}
                  
                </tbody>
              </table>
            </div>
          </>}

          {nav === "submit" && <>
            <div className="t-topbar">
              <div>
                <div className="t-page-title">Submit Produce</div>
                <div className="t-page-sub">List your produce for Terra to consider purchasing.</div>
              </div>
            </div>

            {done ? (
              <div className="t-card">
                <div className="t-success">
                  <div className="t-success-ico">✅</div>
                  <div className="t-success-title">Submission Received!</div>
                  <div className="t-success-body">
                    Your listing is under review. You will be contacted and asked to <strong style={{color:'var(--green)'}}>bring your produce to our Maputo collection point</strong> for a quality inspection. If approved, payment reflects within 24 hours of delivery confirmation.
                  </div>
                </div>
              </div>
            ) : (
              <div className="t-card">
                <div className="t-card-head"><div className="t-card-title">New Produce Listing</div></div>
                <div className="t-card-body">

                  <div className="t-callout t-callout-amber">
                    <div className="t-callout-ico">📦</div>
                    <div>
                      <div className="t-callout-head">Read before submitting</div>
                      <div className="t-callout-body">
                        After submitting, you must <strong>physically bring your produce to our Maputo collection point</strong> for a quality inspection. Terra only buys produce <strong>after seeing it in person</strong>. Do not submit if you are not ready to deliver.<br /><br />
                        📍 <strong>Collection Point:</strong> Terra HQ, Maputo — [Address TBC]<br />
                        🕐 <strong>Drop-off Hours:</strong> Mon–Sat, 7:00 AM – 2:00 PM
                      </div>
                    </div>
                  </div>

                  <div className="t-section-label">Select Produce Type</div>
                  <div className="t-produce-grid">
                    {[
                      { id:"onions",   emoji:"🧅", name:"Onions",   hint:"Fresh bulb onions" },
                      { id:"tomatoes", emoji:"🍅", name:"Tomatoes", hint:"Ripe round tomatoes" },
                    ].map(p => (
                      <div key={p.id} className={`t-produce-card ${produce === p.id ? "sel" : ""}`} onClick={() => setProduce(p.id)}>
                        <div className="t-produce-emoji">{p.emoji}</div>
                        <div className="t-produce-name">{p.name}</div>
                        <div className="t-produce-hint">{p.hint}</div>
                      </div>
                    ))}
                  </div>

                  <div className="t-grid-2">
                    <div className="t-field">
                      <label className="t-label">Quantity (kg)</label>
                      <input className="t-input" type="number" placeholder="e.g. 50" value={form.qty} onChange={e => setForm({...form, qty:e.target.value})} />
                    </div>
                    <div className="t-field">
                      <label className="t-label">Asking Price (MT)</label>
                      <input className="t-input" type="number" placeholder="e.g. 2500" value={form.price} onChange={e => setForm({...form, price:e.target.value})} />
                    </div>
                  </div>

                  <div className="t-row-end">
                    <button className="t-btn t-btn-ghost" onClick={() => { setProduce(null); setForm({qty:"",price:"",notes:""}); }}>Clear</button>
                    <button className="t-btn t-btn-primary" onClick={submit}>Submit to Terra →</button>
                  </div>
                </div>
              </div>
            )}
          </>}

          {nav === "listings" && <>
            <div className="t-topbar">
              <div>
                <div className="t-page-title">My Listings</div>
                <div className="t-page-sub">All produce you've submitted to Terra.</div>
              </div>
              <button className="t-btn t-btn-primary" onClick={() => setNav("submit")}>＋ New Submission</button>
            </div>

            <div className="t-callout t-callout-green">
              <div className="t-callout-ico">ℹ️</div>
              <div>
                <div className="t-callout-head">Status Guide</div>
                <div className="t-callout-body">
                  <strong>Submitted</strong> → listing received &nbsp;·&nbsp; <strong>Brought In</strong> → produce at our location &nbsp;·&nbsp; <strong>Approved</strong> → quality confirmed &nbsp;·&nbsp; <strong>Paid</strong> → payment sent &nbsp;·&nbsp; <strong>Rejected</strong> → did not meet quality standards
                </div>
              </div>
            </div>

            <div className="t-card">
              <table className="t-table">
                <thead><tr><th>Produce</th><th>Qty</th><th>Price</th><th>Submitted</th><th>Status</th></tr></thead>
                <tbody>
                  {listings.length === 0 ? (
  <tr><td colSpan={5} style={{textAlign:'center', color:'var(--ink-3)', padding:'32px'}}>No listings yet. Submit your first produce above.</td></tr>
) : (
  listings.map(l => (
    <tr key={l._id}>
      <td>{l.produceType === 'onions' ? '🧅 Onions' : '🍅 Tomatoes'}</td>
      <td>{l.quantity} kg</td>
      <td>MT {l.askingPrice}</td>
      <td>{new Date(l.createdAt).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' })}</td>
      <td><Pill status={l.status} /></td>
    </tr>
  ))
)}
                </tbody>
              </table>
            </div>
          </>}

          {nav === "banking" && <>
  <div className="t-topbar">
    <div>
      <div className="t-page-title">Banking Details</div>
      <div className="t-page-sub">Where should Terra send your payments?</div>
    </div>
  </div>

  {bankingSaved && (
    <div className="t-callout t-callout-green" style={{marginBottom:24}}>
      <div className="t-callout-ico">✅</div>
      <div>
        <div className="t-callout-head">Details Saved</div>
        <div className="t-callout-body">Your banking details have been saved successfully.</div>
      </div>
    </div>
  )}

  <div className="t-callout t-callout-green">
    <div className="t-callout-ico">🔒</div>
    <div>
      <div className="t-callout-head">Secure & Confidential</div>
      <div className="t-callout-body">Your payment details are only used to transfer funds after Terra confirms receipt and approval of your produce. Payment reflects <strong>within 24 hours</strong> of delivery confirmation.</div>
    </div>
  </div>

  <div className="t-two-col">
    <div className="t-card">
      <div className="t-card-head"><div className="t-card-title">Bank Transfer</div></div>
      <div className="t-card-body">
        <div className="t-field" style={{marginBottom:16}}>
          <label className="t-label">Full Name (as on account)</label>
          <input className="t-input" placeholder="Maria Machava"
            value={banking.accountName}
            onChange={e => setBanking({...banking, accountName: e.target.value})}
          />
        </div>
        <div className="t-field" style={{marginBottom:16}}>
          <label className="t-label">Bank</label>
          <select className="t-select"
            value={banking.bankName}
            onChange={e => setBanking({...banking, bankName: e.target.value})}
          >
            <option value="">Select your bank</option>
            <option>BCI</option>
            <option>Millennium BIM</option>
            <option>Standard Bank Mozambique</option>
            <option>Absa Mozambique</option>
            <option>FNB Mozambique</option>
          </select>
        </div>
        <div className="t-field" style={{marginBottom:20}}>
          <label className="t-label">Account Number</label>
          <input className="t-input" placeholder="0000 0000 0000"
            value={banking.accountNumber}
            onChange={e => setBanking({...banking, accountNumber: e.target.value})}
          />
        </div>
        <button className="t-btn t-btn-primary" style={{width:'100%'}} onClick={saveBanking}>
          Save Bank Details
        </button>
      </div>
    </div>

    <div className="t-card">
      <div className="t-card-head"><div className="t-card-title">M-Pesa</div></div>
      <div className="t-card-body">
        <div className="t-field" style={{marginBottom:16}}>
          <label className="t-label">M-Pesa Number</label>
          <input className="t-input" placeholder="+258 84 000 0000"
            value={banking.mpesaNumber}
            onChange={e => setBanking({...banking, mpesaNumber: e.target.value})}
          />
        </div>
        <div className="t-field" style={{marginBottom:16}}>
          <label className="t-label">Registered Name</label>
          <input className="t-input" placeholder="Name on M-Pesa account"
            value={banking.mpesaName}
            onChange={e => setBanking({...banking, mpesaName: e.target.value})}
          />
        </div>
        <div style={{height:57}}></div>
        <button className="t-btn t-btn-primary" style={{width:'100%'}} onClick={saveBanking}>
          Save M-Pesa Details
        </button>
      </div>
    </div>
  </div>
</>}

        </main>
      </div>
    </>
  );
}