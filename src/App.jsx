import { useMemo, useState } from 'react';
import {
  Activity, ArrowDown, ArrowDownRight, ArrowUpRight, Bell, BookOpen, Box, CalendarDays,
  Check, ChevronDown, ChevronLeft, ChevronRight, CircleHelp, Command, CreditCard, Ellipsis,
  FileText, Globe2, LayoutDashboard, LifeBuoy, LogOut, Mail, Menu, MessageCircle, Moon,
  MoreVertical, Package, Search, Settings2, ShoppingBag, Sparkles, Sun, Truck, Users,
  Wallet, X, Zap,
} from 'lucide-react';

const navGroups = [
  { label: 'WORKSPACE', items: [
    { name: 'Dashboard', icon: LayoutDashboard, badge: '3' },
    { name: 'Analytics', icon: Activity },
    { name: 'eCommerce', icon: ShoppingBag, expandable: true },
    { name: 'Logistics', icon: Truck },
  ] },
  { label: 'APPS & PAGES', items: [
    { name: 'Email', icon: Mail, count: '4' },
    { name: 'Chat', icon: MessageCircle },
    { name: 'Calendar', icon: CalendarDays },
    { name: 'Academy', icon: BookOpen, expandable: true },
    { name: 'Invoice', icon: FileText, expandable: true },
    { name: 'Settings', icon: Settings2 },
  ] },
];

const transactions = [
  { name: 'Zipcar', detail: 'Vuejs, React & HTML', amount: '$24,895.65', color: 'violet', mark: 'Z', progress: 74 },
  { name: 'Bitbank', detail: 'Sketch, Figma & XD', amount: '$8,650.20', color: 'blue', mark: '◉', progress: 58 },
  { name: 'Bitbank', detail: 'Sketch, Figma & XD', amount: '$12,420.00', color: 'orange', mark: '▰', progress: 82 },
];

const weekly = [
  { day: 'Mon', value: 42 }, { day: 'Tue', value: 61 }, { day: 'Wed', value: 48 },
  { day: 'Thu', value: 76 }, { day: 'Fri', value: 54 }, { day: 'Sat', value: 90 }, { day: 'Sun', value: 66 },
];

function Brand() {
  return <div className="brand"><span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></span><span>MATERIO</span><span className="brand-dot">✺</span></div>;
}

function Sidebar({ active, setActive, open, onClose }) {
  return <>
    {open && <button className="sidebar-scrim" aria-label="Close navigation" onClick={onClose} />}
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="sidebar-brand"><Brand /><button className="icon-button mobile-close" onClick={onClose} aria-label="Close menu"><X size={19} /></button></div>
      <div className="workspace-switch"><div className="workspace-avatar">N</div><div className="workspace-copy"><b>Nucleus Studio</b><span>Pro workspace</span></div><ChevronDown size={16} /></div>
      <nav className="side-nav" aria-label="Main navigation">
        {navGroups.map((group) => <section className="nav-group" key={group.label}>
          <div className="nav-label">{group.label}</div>
          {group.items.map(({ name, icon: Icon, badge, count, expandable }) => <button key={name} onClick={() => { setActive(name); onClose(); }} className={`nav-item ${active === name ? 'active' : ''}`}>
            <Icon size={18} strokeWidth={1.8} /><span>{name}</span>{badge && <em className="nav-badge">{badge}</em>}{count && <em className="nav-count">{count}</em>}{expandable && <ChevronRight className="nav-chevron" size={15} />}
          </button>)}
        </section>)}
      </nav>
      <div className="sidebar-bottom">
        <div className="help-card"><div className="help-icon"><LifeBuoy size={17} /></div><div><b>Need a hand?</b><span>We're here to help</span></div><ChevronRight size={15} /></div>
        <button className="profile-row"><div className="avatar avatar-small">AM<span className="online-dot" /></div><span className="profile-copy"><b>Alex Morgan</b><small>Administrator</small></span><MoreVertical size={17} /></button>
      </div>
    </aside>
  </>;
}

function Header({ dark, setDark, query, setQuery, onMenu }) {
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);
  return <header className="topbar">
    <button className="icon-button menu-button" aria-label="Open navigation" onClick={onMenu}><Menu size={21} /></button>
    <div className="breadcrumb"><span>Workspace</span><ChevronRight size={14} /><b>Dashboard</b></div>
    <label className="search-box"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search anything..." aria-label="Search dashboard" />{query && <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear search"><X size={14} /></button>}<kbd><Command size={11} /> K</kbd></label>
    <div className="top-actions">
      <button className="icon-button locale-button" title="Language"><Globe2 size={19} /></button>
      <button className="icon-button" onClick={() => setDark(!dark)} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-label="Toggle dark mode">{dark ? <Sun size={20} /> : <Moon size={20} />}</button>
      <button className={`icon-button ${favorite ? 'is-favorite' : ''}`} title="Add to favorites" aria-label="Toggle favorite" onClick={() => setFavorite(!favorite)}><Sparkles size={19} /></button>
      <div className="popover-wrap"><button className="icon-button notification-button" aria-label="Notifications" onClick={() => setNoticeOpen(!noticeOpen)}><Bell size={19} /><i /></button>{noticeOpen && <div className="popover notification-popover"><div className="popover-heading"><b>Notifications</b><span>2 new</span></div><p><span className="notice-dot purple" />Your weekly report is ready to view.</p><p><span className="notice-dot green" />Your order #4382 was delivered.</p><button className="popover-link" onClick={() => setNoticeOpen(false)}>Mark all as read</button></div>}</div>
      <div className="popover-wrap"><button className="header-avatar" onClick={() => setProfileOpen(!profileOpen)} aria-label="Open profile menu"><span>AM</span><i /></button>{profileOpen && <div className="popover profile-popover"><b>Alex Morgan</b><small>alex@materio.app</small><hr /><button onClick={() => setProfileOpen(false)}><Users size={15} /> My profile</button><button onClick={() => setProfileOpen(false)}><LogOut size={15} /> Sign out</button></div>}</div>
    </div>
  </header>;
}

function CardHeading({ title, subtitle, action = true }) {
  return <div className="card-heading"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{action && <button className="icon-button dots-button" aria-label={`More ${title} options`}><Ellipsis size={19} /></button>}</div>;
}

function OverviewCard() {
  return <section className="card overview-card"><div className="overview-copy"><div className="eyebrow">YOUR BUSINESS AT A GLANCE <span className="live-dot" /></div><h2>Good morning, Alex <span className="wave">✦</span></h2><p>Here’s what’s happening with your store today.</p><div className="overview-metrics"><div><span>Total revenue</span><strong>$48,294<span className="cents">.00</span></strong><em className="positive"><ArrowUpRight size={14} /> 12.8%</em></div><div className="metric-divider" /><div><span>Orders this month</span><strong>1,429</strong><em className="positive"><ArrowUpRight size={14} /> 8.2%</em></div></div><button className="primary-button">View reports <ArrowUpRight size={15} /></button></div><div className="hero-art" aria-hidden="true"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-spark spark-one">✦</div><div className="hero-spark spark-two">✧</div><div className="hero-cube"><Box size={46} strokeWidth={1.3} /></div><div className="hero-float"><span>+18.6%</span><small>vs. last month</small><ArrowUpRight size={19} /></div><div className="hero-base" /></div></section>;
}

function StatCard({ icon: Icon, label, value, change, color }) {
  return <div className="card stat-card"><div className={`stat-icon ${color}`}><Icon size={20} strokeWidth={1.8} /></div><div className="stat-details"><span>{label}</span><strong>{value}</strong><small className={change.startsWith('-') ? 'negative' : 'positive'}>{change} <span>vs last month</span></small></div><div className="stat-spark" aria-hidden="true"><svg viewBox="0 0 76 35"><path d={color === 'purple' ? 'M2 28 L14 20 L24 24 L36 11 L47 17 L59 5 L74 10' : color === 'green' ? 'M2 24 L14 27 L24 18 L36 21 L47 9 L59 15 L74 4' : color === 'yellow' ? 'M2 29 L14 16 L24 23 L36 8 L47 19 L59 13 L74 3' : 'M2 23 L14 19 L24 27 L36 15 L47 18 L59 8 L74 14'} /></svg></div></div>;
}

function TransactionsCard({ filter }) {
  const rows = transactions.filter((item) => `${item.name} ${item.detail}`.toLowerCase().includes(filter.toLowerCase()));
  return <section className="card transactions-card"><CardHeading title="Recent transactions" subtitle="Your latest business activity" /><div className="transaction-table"><div className="table-head"><span>PROJECT</span><span>AMOUNT</span><span>PROGRESS</span></div>{rows.length ? rows.map((item, index) => <div className="transaction-row" key={`${item.name}-${index}`}><div className={`project-mark ${item.color}`}>{item.mark}</div><div className="project-name"><b>{item.name}</b><span>{item.detail}</span></div><strong className="transaction-amount">{item.amount}</strong><div className="progress-track"><i className={item.color} style={{ width: `${item.progress}%` }} /></div></div>) : <div className="no-results">No matching transactions found.</div>}</div><button className="text-button">View all transactions <ArrowUpRight size={14} /></button></section>;
}

function WeeklyCard() {
  const [period, setPeriod] = useState('This week');
  const [periodOpen, setPeriodOpen] = useState(false);
  const [selected, setSelected] = useState('Sat');
  return <section className="card weekly-card"><div className="card-heading"><div><h2>Weekly overview</h2><p>Revenue performance</p></div><div className="select-wrap"><button className="period-select" onClick={() => setPeriodOpen(!periodOpen)}>{period}<ChevronDown size={14} /></button>{periodOpen && <div className="select-menu">{['This week', 'Last week', 'This month'].map((item) => <button key={item} onClick={() => { setPeriod(item); setPeriodOpen(false); }}>{item}{period === item && <Check size={14} />}</button>)}</div>}</div></div><div className="chart-legend"><span><i className="legend-dot primary" />Revenue</span><span><i className="legend-dot muted" />Orders</span><b>$12,480 <em>+12.6%</em></b></div><div className="bar-chart" role="img" aria-label="Weekly revenue bar chart"><div className="chart-y-labels"><span>$4k</span><span>$3k</span><span>$2k</span><span>$1k</span><span>$0</span></div><div className="chart-plot"><div className="chart-grid"><i /><i /><i /><i /><i /></div><div className="bars">{weekly.map((bar) => <button className={`bar-group ${selected === bar.day ? 'bar-selected' : ''}`} key={bar.day} title={`${bar.day}: $${(bar.value * 42).toLocaleString()}`} onClick={() => setSelected(bar.day)}><span className="bar-value">${(bar.value * 42).toLocaleString()}</span><i className="bar" style={{ height: `${bar.value}%` }} /><span className="bar-day">{bar.day}</span></button>)}</div></div></div></section>;
}

function EarningCard() {
  return <section className="card earning-card"><CardHeading title="Earning report" subtitle="Yearly earnings overview" /><div className="earning-total"><strong>$24,895</strong><span className="positive"><ArrowUpRight size={14} /> 10.2%</span></div><div className="earning-note">Compared to $22,573 last year</div><div className="earning-chart"><div className="earning-y"><span>$8k</span><span>$6k</span><span>$4k</span><span>$2k</span></div><div className="earning-bars">{[{ m: 'Jan', a: 43, b: 25 }, { m: 'Feb', a: 60, b: 37 }, { m: 'Mar', a: 48, b: 31 }, { m: 'Apr', a: 79, b: 53 }, { m: 'May', a: 58, b: 40 }, { m: 'Jun', a: 88, b: 62 }].map((x) => <div className="earning-month" key={x.m}><div className="double-bar"><i style={{ height: `${x.a}%` }} /><i style={{ height: `${x.b}%` }} /></div><span>{x.m}</span></div>)}</div></div><div className="earning-legend"><span><i className="legend-dot primary" />2025</span><span><i className="legend-dot muted" />2024</span><button aria-label="View earning report"><ArrowUpRight size={16} /></button></div></section>;
}

function ProfitCard() {
  return <section className="card mini-card profit-card"><div className="mini-top"><div className="mini-icon profit-icon"><Activity size={18} /></div><button className="icon-button dots-button" aria-label="Profit options"><Ellipsis size={19} /></button></div><div className="mini-value">$86.4K <span className="positive">+12.4%</span></div><div className="line-graph"><svg viewBox="0 0 170 55" preserveAspectRatio="none" aria-label="Profit trending upward"><defs><linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#8b5cf6" stopOpacity=".23" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" /></linearGradient></defs><path className="line-fill" d="M0 48 L23 28 L44 37 L65 13 L85 29 L107 7 L128 24 L150 2 L170 12 L170 55 L0 55Z" /><path className="line-stroke" d="M0 48 L23 28 L44 37 L65 13 L85 29 L107 7 L128 24 L150 2 L170 12" /></svg></div><div className="mini-label">Total profit</div></section>;
}

function WeeklyProfitCard() {
  return <section className="card mini-card weekly-profit-card"><div className="mini-top"><div className="mini-icon green-icon"><Zap size={18} /></div><button className="icon-button dots-button" aria-label="Weekly profit options"><Ellipsis size={19} /></button></div><div className="mini-value">$25.6K <span className="positive">+42%</span></div><div className="mini-bars" aria-hidden="true">{[48, 73, 58, 84, 65, 92, 75].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="mini-label">Weekly profit</div></section>;
}

function ProjectCard() {
  return <section className="card mini-card project-card"><div className="mini-top"><div className="mini-icon purple-icon"><Package size={18} /></div><button className="icon-button dots-button" aria-label="Project options"><Ellipsis size={19} /></button></div><div className="mini-label project-title">New projects</div><div className="mini-value">862 <span className="negative">−18%</span></div><div className="mini-sub-label">Yearly profit</div></section>;
}

function SessionsCard() {
  return <section className="card mini-card sessions-card"><div className="sessions-number">2,856 <span className="positive">+8.4%</span></div><div className="session-columns" aria-label="Sessions by day"><div><i style={{ height: '58%' }} /><i className="session-fill coral" style={{ height: '42%' }} /></div><div><i style={{ height: '35%' }} /><i className="session-fill purple-fill" style={{ height: '65%' }} /></div><div><i style={{ height: '62%' }} /><i className="session-fill coral" style={{ height: '38%' }} /></div><div><i style={{ height: '72%' }} /><i className="session-fill purple-fill" style={{ height: '28%' }} /></div></div><div className="mini-label">Sessions</div></section>;
}

function App() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState('Dashboard');
  const [query, setQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState('');
  const filteredStats = useMemo(() => [
    { icon: Wallet, label: 'Total sales', value: '$48.2K', change: '+12.8%', color: 'purple' },
    { icon: Users, label: 'Customers', value: '12,584', change: '+8.2%', color: 'green' },
    { icon: Package, label: 'Products', value: '1,549', change: '+4.6%', color: 'yellow' },
    { icon: CreditCard, label: 'Revenue', value: '$88.4K', change: '+18.4%', color: 'blue' },
  ].filter((stat) => `${stat.label} ${stat.value}`.toLowerCase().includes(query.toLowerCase())), [query]);

  const handleNav = (name) => {
    setActive(name);
    if (name !== 'Dashboard') {
      setToast(`${name} view selected`);
      window.setTimeout(() => setToast(''), 2400);
    }
  };

  return <div className={`app-shell ${dark ? 'theme-dark' : ''}`}>
    <Sidebar active={active} setActive={handleNav} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    <main className="main-area"><Header dark={dark} setDark={setDark} query={query} setQuery={setQuery} onMenu={() => setSidebarOpen(true)} />
      <div className="dashboard-content"><div className="page-title-row"><div><div className="page-kicker">MONDAY, JUNE 23, 2025 <span className="kicker-line" /></div><h1>{active === 'Dashboard' ? 'Dashboard' : active}<span className="title-sparkle">✦</span></h1><p>Welcome back, Alex. Here’s your store’s performance today.</p></div><div className="date-control"><CalendarDays size={16} /><span>Jun 1 – Jun 30, 2025</span><ChevronDown size={15} /></div></div>
        <div className="dashboard-grid">
          <OverviewCard />
          <div className="stats-grid">{filteredStats.map((stat) => <StatCard key={stat.label} {...stat} />)}{filteredStats.length === 0 && <div className="card no-stats">No matching statistics.</div>}</div>
          <WeeklyCard />
          <EarningCard />
          <TransactionsCard filter={query} />
          <div className="mini-grid"><ProfitCard /><WeeklyProfitCard /><ProjectCard /><SessionsCard /></div>
        </div>
        <footer className="dashboard-footer"><span>© 2025 Materio Dashboard</span><span>Designed for your next big idea <span className="footer-heart">♥</span></span></footer>
      </div>
    </main>
    {toast && <div className="toast"><Check size={16} />{toast}</div>}
  </div>;
}

export default App;
