import { useState, useEffect } from "react";

// ─── DATOS DE PRUEBA ────────────────────────────────────────────────────────
const MOCK_USERS = [
	{
		id: 1,
		email: "partnerships@techriders.com",
		password: "demo123",
		role: "partnerships",
		name: "Borja Piris",
		avatar: "BP",
	},
	{
		id: 2,
		email: "ops@techriders.com",
		password: "demo123",
		role: "operaciones",
		name: "Diego Zapico",
		avatar: "DZ",
	},
	{
		id: 3,
		email: "dir@techriders.com",
		password: "demo123",
		role: "direccion",
		name: "Sergio Hierro",
		avatar: "SH",
	},
	{
		id: 4,
		email: "legal@techriders.com",
		password: "demo123",
		role: "legal",
		name: "Ana María",
		avatar: "AM",
	},
	{
		id: 5,
		email: "partner@acmecorp.es",
		password: "demo123",
		role: "partnerships",
		name: "Diego Perez",
		avatar: "DP",
	},
];

const MOCK_PARTNERS = [
	{
		id: 1,
		nombre: "ACME Technologies S.L.",
		cif: "B12345678",
		sector: "SaaS",
		contacto: "jorge.acme@acmecorp.es",
		telefono: "+34 612 345 678",
		estado: "Activo",
		fechaAlta: "2025-03-10",
		scoring: 87,
		tendencia: "up",
		contratos: ["Contrato_Marco_ACME_2025.pdf", "Addendum_Q1_2025.pdf"],
		baseJuridica: "Interés Legítimo",
		notas: "Partner estratégico en verticales FinTech. Alta prioridad.",
		historial: [
			{
				id: 1,
				fecha: "2026-05-15",
				tipo: "Reunión",
				autor: "Borja Piris",
				texto:
					"Reunión de revisión Q2. Confirman ampliación de licencias x3. Muy positivos con el roadmap.",
			},
			{
				id: 2,
				fecha: "2026-04-28",
				tipo: "Llamada",
				autor: "Borja Piris",
				texto:
					"Llamada rápida para resolver dudas técnicas sobre API. Resuelto en 20 min.",
			},
			{
				id: 3,
				fecha: "2026-04-10",
				tipo: "Acuerdo",
				autor: "Diego Zapico",
				texto:
					"Firmado addendum de servicios profesionales. Alcance: 3 meses, 40h/mes.",
			},
			{
				id: 4,
				fecha: "2026-03-05",
				tipo: "Reunión",
				autor: "Sergio Hierro",
				texto: "Kick-off estratégico con CEO. Alineados en objetivos 2026.",
			},
		],
	},
	{
		id: 2,
		nombre: "Nexus Digital Agency",
		cif: "A87654321",
		sector: "Marketing",
		contacto: "paula@nexusdigital.es",
		telefono: "+34 699 123 456",
		estado: "Activo",
		fechaAlta: "2025-06-22",
		scoring: 72,
		tendencia: "stable",
		contratos: ["Contrato_Nexus_2025.pdf"],
		baseJuridica: "Consentimiento",
		notas: "Agencia de referencia para campañas de performance.",
		historial: [
			{
				id: 1,
				fecha: "2026-05-10",
				tipo: "Reunión",
				autor: "Borja Piris",
				texto: "Revisión de KPIs mensuales. Buen rendimiento en CAC.",
			},
			{
				id: 2,
				fecha: "2026-04-03",
				tipo: "Llamada",
				autor: "Borja Piris",
				texto: "Propuesta nueva campaña verano. Pendiente presupuesto.",
			},
		],
	},
	{
		id: 3,
		nombre: "Inversiones Globales S.A.",
		cif: "C11223344",
		sector: "Finanzas",
		contacto: "rbermejo@igsa.com",
		telefono: "+34 650 987 321",
		estado: "Inactivo",
		fechaAlta: "2024-11-01",
		scoring: 41,
		tendencia: "down",
		contratos: ["LOI_IGSA_2024.pdf"],
		baseJuridica: "Interés Legítimo",
		notas: "Sin actividad desde Q4 2025. Revisar relación.",
		historial: [
			{
				id: 1,
				fecha: "2025-12-12",
				tipo: "Llamada",
				autor: "Diego Zapico",
				texto: "Intento de contacto. No responde. Tercera llamada sin éxito.",
			},
			{
				id: 2,
				fecha: "2025-10-20",
				tipo: "Reunión",
				autor: "Borja Piris",
				texto:
					"Reunión inicial de valoración de partnership. Interés moderado.",
			},
		],
	},
	{
		id: 4,
		nombre: "Encamina",
		cif: "D55667788",
		sector: "Cloud",
		contacto: "javier@encamina.com",
		telefono: "+34 677 445 223",
		estado: "Activo",
		fechaAlta: "2026-01-15",
		scoring: 95,
		tendencia: "up",
		contratos: [
			"Contrato_Encamina_2026.pdf",
			"SLA_Encamina.pdf",
			"NDA_Encamina.pdf",
		],
		baseJuridica: "Interés Legítimo",
		notas: "Top partner tecnológico. Co-sell activo. Máxima prioridad 2026.",
		historial: [
			{
				id: 1,
				fecha: "2026-05-18",
				tipo: "Acuerdo",
				autor: "Sergio Hierro",
				texto:
					"Firmado acuerdo co-sell por €200K para H2 2026. Hito estratégico.",
			},
			{
				id: 2,
				fecha: "2026-05-05",
				tipo: "Reunión",
				autor: "Borja Piris",
				texto: "Workshop técnico conjunto. Integración API completada al 80%.",
			},
			{
				id: 3,
				fecha: "2026-04-22",
				tipo: "Llamada",
				autor: "Borja Piris",
				texto: "Seguimiento propuesta co-sell. Aprobado por su dirección.",
			},
			{
				id: 4,
				fecha: "2026-03-10",
				tipo: "Reunión",
				autor: "Diego Zapico",
				texto: "Due diligence técnica. Infraestructura compatible. Luz verde.",
			},
		],
	},
	{
		id: 5,
		nombre: "RetailPro Ibérica",
		cif: "E99887766",
		sector: "Retail",
		contacto: "marta.g@retailpro.es",
		telefono: "+34 601 234 567",
		estado: "En Negociación",
		fechaAlta: "2026-04-03",
		scoring: 63,
		tendencia: "up",
		contratos: [],
		baseJuridica: "Pendiente",
		notas: "Pipeline activo. Firma esperada Q3 2026.",
		historial: [
			{
				id: 1,
				fecha: "2026-05-14",
				tipo: "Reunión",
				autor: "Borja Piris",
				texto:
					"Segunda ronda de negociación. Reducción de 10% aceptada por dirección.",
			},
			{
				id: 2,
				fecha: "2026-04-28",
				tipo: "Llamada",
				autor: "Borja Piris",
				texto: "Llamada exploratoria. Fit de producto confirmado.",
			},
		],
	},
];

// ─── COLORES / TEMA ──────────────────────────────────────────────────────────
const T = {
	bg: "#0A0E1A",
	bgCard: "#111827",
	bgInput: "#1C2438",
	border: "#1E2D45",
	accent: "#00C9A7",
	accentB: "#0099FF",
	warn: "#FF6B6B",
	gold: "#FFD166",
	text: "#E8EDF5",
	textSub: "#8899AA",
	grad: "linear-gradient(135deg, #00C9A7 0%, #0099FF 100%)",
};

const LOGO_URL =
	"https://storagetajamarpgl.blob.core.windows.net/prueba2/techriders_es_logo.jpeg";

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const scoreColor = (s) =>
	s >= 80 ? "#00C9A7" : s >= 60 ? "#FFD166" : "#FF6B6B";
const rolLabel = {
	partnerships: "Partnerships",
	operaciones: "Operaciones",
	direccion: "Dirección",
	legal: "Legal",
};
const rolBadge = {
	partnerships: "#0099FF",
	operaciones: "#9B59B6",
	direccion: "#FFD166",
	legal: "#FF6B6B",
};

const USERS_CACHE_KEY = "techridershub.users.v1";

const loadCachedUsers = () => {
	try {
		if (typeof localStorage === "undefined") return [];
		const raw = localStorage.getItem(USERS_CACHE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
};

const saveCachedUsers = (users) => {
	try {
		if (typeof localStorage === "undefined") return;
		localStorage.setItem(USERS_CACHE_KEY, JSON.stringify(users));
	} catch {
		// noop
	}
};

const mergeUsersByEmail = (base, extra) => {
	const out = [];
	const seen = new Set();
	[...base, ...extra].forEach((u) => {
		const email = (u?.email || "").trim().toLowerCase();
		if (!email || seen.has(email)) return;
		seen.add(email);
		out.push({ ...u, email });
	});
	return out;
};

const avatarFromName = (name) => {
	const parts = String(name || "")
		.trim()
		.split(/\s+/)
		.filter(Boolean);
	if (!parts.length) return "U";
	const first = parts[0]?.[0] || "";
	const last = parts.length > 1 ? parts[parts.length - 1]?.[0] || "" : "";
	return (first + last).toUpperCase();
};

const LogoMark = ({ size = 60, radius = 20 }) => (
	<img
		src={LOGO_URL}
		alt="TechRiders"
		style={{
			width: size,
			height: size,
			borderRadius: radius,
			objectFit: "contain",
			display: "block",
			padding: size >= 40 ? 6 : 4,
		}}
	/>
);

const Chip = ({ label, color }) => (
	<span
		style={{
			background: color + "22",
			color,
			border: `1px solid ${color}44`,
			borderRadius: 20,
			padding: "2px 10px",
			fontSize: 11,
			fontWeight: 700,
			letterSpacing: 1,
		}}
	>
		{label}
	</span>
);

const TendArrow = ({ dir }) => (
	<span
		style={{
			color: dir === "up" ? "#00C9A7" : dir === "down" ? "#FF6B6B" : "#FFD166",
			fontWeight: 900,
			fontSize: 18,
		}}
	>
		{dir === "up" ? "↑" : dir === "down" ? "↓" : "→"}
	</span>
);

const ScoreRing = ({ score }) => {
	const c = scoreColor(score);
	const r = 30,
		circ = 2 * Math.PI * r;
	const dash = (score / 100) * circ;
	return (
		<svg width="80" height="80" viewBox="0 0 80 80">
			<circle
				cx="40"
				cy="40"
				r={r}
				fill="none"
				stroke="#1E2D45"
				strokeWidth="7"
			/>
			<circle
				cx="40"
				cy="40"
				r={r}
				fill="none"
				stroke={c}
				strokeWidth="7"
				strokeDasharray={`${dash} ${circ}`}
				strokeLinecap="round"
				transform="rotate(-90 40 40)"
				style={{ transition: "stroke-dasharray 1s ease" }}
			/>
			<text
				x="40"
				y="45"
				textAnchor="middle"
				fill={c}
				fontSize="18"
				fontWeight="800"
				fontFamily="'DM Mono', monospace"
			>
				{score}
			</text>
		</svg>
	);
};

// ─── COMPONENTES COMUNES ─────────────────────────────────────────────────────
const Input = ({
	label,
	type = "text",
	value,
	onChange,
	placeholder,
	required,
}) => (
	<div style={{ marginBottom: 14 }}>
		<label
			style={{
				display: "block",
				color: T.textSub,
				fontSize: 11,
				fontWeight: 700,
				letterSpacing: 1,
				marginBottom: 5,
				textTransform: "uppercase",
			}}
		>
			{label}
			{required && <span style={{ color: T.warn }}> *</span>}
		</label>
		<input
			type={type}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			style={{
				width: "100%",
				background: T.bgInput,
				border: `1.5px solid ${T.border}`,
				borderRadius: 8,
				padding: "10px 14px",
				color: T.text,
				fontSize: 14,
				outline: "none",
				boxSizing: "border-box",
				fontFamily: "inherit",
				transition: "border-color .2s",
			}}
			onFocus={(e) => (e.target.style.borderColor = T.accent)}
			onBlur={(e) => (e.target.style.borderColor = T.border)}
		/>
	</div>
);

const Select = ({ label, value, onChange, options }) => (
	<div style={{ marginBottom: 14 }}>
		<label
			style={{
				display: "block",
				color: T.textSub,
				fontSize: 11,
				fontWeight: 700,
				letterSpacing: 1,
				marginBottom: 5,
				textTransform: "uppercase",
			}}
		>
			{label}
		</label>
		<select
			value={value}
			onChange={(e) => onChange(e.target.value)}
			style={{
				width: "100%",
				background: T.bgInput,
				border: `1.5px solid ${T.border}`,
				borderRadius: 8,
				padding: "10px 14px",
				color: T.text,
				fontSize: 14,
				outline: "none",
				boxSizing: "border-box",
				fontFamily: "inherit",
			}}
		>
			{options.map((o) => (
				<option key={o.value} value={o.value}>
					{o.label}
				</option>
			))}
		</select>
	</div>
);

const Btn = ({
	children,
	onClick,
	variant = "primary",
	small,
	disabled,
	full,
}) => {
	const bg =
		variant === "primary"
			? T.grad
			: variant === "danger"
				? T.warn
				: variant === "ghost"
					? "transparent"
					: T.bgInput;
	const border = variant === "ghost" ? `1.5px solid ${T.border}` : "none";
	const color = variant === "danger" ? "#fff" : T.text;
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			style={{
				background: bg,
				border,
				borderRadius: 8,
				padding: small ? "6px 14px" : "10px 20px",
				color,
				fontFamily: "inherit",
				fontWeight: 700,
				fontSize: small ? 12 : 14,
				cursor: disabled ? "not-allowed" : "pointer",
				opacity: disabled ? 0.5 : 1,
				width: full ? "100%" : "auto",
				letterSpacing: 0.5,
				transition: "opacity .15s, transform .1s",
				whiteSpace: "nowrap",
			}}
			onMouseEnter={(e) => {
				if (!disabled) e.target.style.opacity = ".85";
				e.target.style.transform = "scale(1.02)";
			}}
			onMouseLeave={(e) => {
				e.target.style.opacity = "1";
				e.target.style.transform = "scale(1)";
			}}
		>
			{children}
		</button>
	);
};

const Card = ({ children, style }) => (
	<div
		style={{
			background: T.bgCard,
			border: `1px solid ${T.border}`,
			borderRadius: 14,
			padding: 24,
			...style,
		}}
	>
		{children}
	</div>
);

const Modal = ({ title, children, onClose }) => (
	<div
		style={{
			position: "fixed",
			inset: 0,
			background: "#00000088",
			zIndex: 9999,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: 20,
		}}
	>
		<div
			style={{
				background: T.bgCard,
				border: `1px solid ${T.border}`,
				borderRadius: 16,
				maxWidth: 520,
				width: "100%",
				maxHeight: "85vh",
				overflow: "auto",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "20px 24px",
					borderBottom: `1px solid ${T.border}`,
				}}
			>
				<span style={{ fontWeight: 800, fontSize: 18, color: T.text }}>
					{title}
				</span>
				<button
					onClick={onClose}
					style={{
						background: "none",
						border: "none",
						color: T.textSub,
						fontSize: 22,
						cursor: "pointer",
						lineHeight: 1,
					}}
				>
					✕
				</button>
			</div>
			<div style={{ padding: 24 }}>{children}</div>
		</div>
	</div>
);

const Toast = ({ msg, type }) => (
	<div
		style={{
			position: "fixed",
			bottom: 30,
			right: 30,
			zIndex: 99999,
			background:
				type === "error" ? T.warn : type === "warn" ? T.gold : T.accent,
			color: type === "warn" ? "#111" : "#fff",
			padding: "14px 22px",
			borderRadius: 10,
			fontWeight: 700,
			fontSize: 14,
			boxShadow: "0 8px 30px #0006",
			animation: "fadeInUp .3s ease",
			maxWidth: 380,
		}}
	>
		{type === "error" ? "⛔ " : type === "warn" ? "⚠️ " : "✅ "}
		{msg}
	</div>
);

// ─── VISTAS ───────────────────────────────────────────────────────────────────

// LOGIN
const LoginView = ({ users, onLogin, onGoRegister }) => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [err, setErr] = useState("");
	const [loading, setLoading] = useState(false);

	const handleLogin = () => {
		setErr("");
		setLoading(true);
		setTimeout(() => {
			const normalizedEmail = String(email || "")
				.trim()
				.toLowerCase();
			const user = (users || []).find(
				(u) => u.email === normalizedEmail && u.password === pass,
			);
			if (user) onLogin(user);
			else {
				setErr("Credenciales incorrectas. Revisa email y contraseña.");
				setLoading(false);
			}
		}, 800);
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				background: T.bg,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: "'Syne', 'DM Sans', sans-serif",
				padding: 20,
			}}
		>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeInUp { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:.6; } 50% { opacity:1; } }
      `}</style>
			<div
				style={{ width: "100%", maxWidth: 440, animation: "fadeInUp .5s ease" }}
			>
				{/* Logo */}
				<div style={{ textAlign: "center", marginBottom: 36 }}>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 10,
							marginBottom: 8,
						}}
					>
						<div
							style={{
								width: 42,
								height: 42,
								borderRadius: 12,
								background: "#fff",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								overflow: "hidden",
							}}
						>
							<LogoMark size={55} radius={12} />
						</div>
						<span
							style={{
								fontFamily: "'Syne', sans-serif",
								fontWeight: 800,
								fontSize: 24,
								color: T.text,
								letterSpacing: -1,
							}}
						>
							TechRiders{" "}
							<span
								style={{
									background: T.grad,
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								Hub
							</span>
						</span>
					</div>
					<p style={{ color: T.textSub, fontSize: 13 }}>
						Sistema Central de Gestión de Partners
					</p>
				</div>
				<Card>
					<h2
						style={{
							color: T.text,
							margin: "0 0 20px",
							fontSize: 20,
							fontWeight: 800,
						}}
					>
						Acceder a la plataforma
					</h2>
					<Input
						label="Email corporativo"
						type="email"
						value={email}
						onChange={setEmail}
						placeholder="tu@empresa.com"
					/>
					<Input
						label="Contraseña"
						type="password"
						value={pass}
						onChange={setPass}
						placeholder="••••••••"
					/>
					{err && (
						<div
							style={{
								background: "#FF6B6B22",
								border: "1px solid #FF6B6B44",
								borderRadius: 8,
								padding: "10px 14px",
								color: T.warn,
								fontSize: 13,
								marginBottom: 14,
							}}
						>
							{err}
						</div>
					)}
					<Btn onClick={handleLogin} full disabled={loading}>
						{loading ? "Autenticando..." : "Entrar al Hub"}
					</Btn>
					<div style={{ marginTop: 16, textAlign: "center" }}>
						<span style={{ color: T.textSub, fontSize: 13 }}>
							¿No tienes cuenta?{" "}
						</span>
						<button
							onClick={onGoRegister}
							style={{
								background: "none",
								border: "none",
								color: T.accent,
								fontWeight: 700,
								fontSize: 13,
								cursor: "pointer",
								fontFamily: "inherit",
							}}
						>
							Regístrate aquí
						</button>
					</div>
					<div
						style={{
							marginTop: 20,
							padding: "12px 14px",
							background: "#0099FF11",
							border: "1px solid #0099FF22",
							borderRadius: 8,
						}}
					>
						<p
							style={{
								color: T.textSub,
								fontSize: 11,
								margin: "0 0 6px",
								fontWeight: 700,
								letterSpacing: 0.5,
								textTransform: "uppercase",
							}}
						>
							Usuarios de demo
						</p>
						{MOCK_USERS.map((u) => (
							<div
								key={u.id}
								style={{ fontSize: 11, color: T.textSub, marginBottom: 2 }}
							>
								<span style={{ color: T.text }}>{u.email}</span> ·{" "}
								<span style={{ color: rolBadge[u.role] }}>
									{rolLabel[u.role]}
								</span>{" "}
								· pass: <code style={{ color: T.accent }}>demo123</code>
							</div>
						))}
					</div>
				</Card>
			</div>
		</div>
	);
};

// REGISTRO
const RegisterView = ({ onGoLogin, onRegistered, existingUsers }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [role, setRole] = useState("partnerships");
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState("");

	const handleReg = () => {
		setErr("");
		const normalizedName = String(name || "").trim();
		const normalizedEmail = String(email || "")
			.trim()
			.toLowerCase();
		if (!normalizedName || !normalizedEmail || !pass) {
			setErr("Rellena todos los campos obligatorios.");
			return;
		}
		if (pass.length < 8) {
			setErr("La contraseña debe tener al menos 8 caracteres.");
			return;
		}
		const emailDup = (existingUsers || []).some(
			(u) => (u?.email || "").trim().toLowerCase() === normalizedEmail,
		);
		if (emailDup) {
			setErr("Ese email ya está registrado. Inicia sesión o usa otro email.");
			return;
		}
		setLoading(true);
		setTimeout(() => {
			onRegistered({
				name: normalizedName,
				email: normalizedEmail,
				password: pass,
				role,
			});
		}, 900);
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				background: T.bg,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: "'Syne', 'DM Sans', sans-serif",
				padding: 20,
			}}
		>
			<div
				style={{ width: "100%", maxWidth: 480, animation: "fadeInUp .5s ease" }}
			>
				<div style={{ textAlign: "center", marginBottom: 28 }}>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 10,
							marginBottom: 6,
						}}
					>
						<div
							style={{
								width: 38,
								height: 38,
								borderRadius: 10,
								background: "#fff",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								overflow: "hidden",
							}}
						>
							<LogoMark size={38} radius={10} />
						</div>
						<span
							style={{
								fontFamily: "'Syne', sans-serif",
								fontWeight: 800,
								fontSize: 22,
								color: T.text,
							}}
						>
							TechRiders{" "}
							<span
								style={{
									background: T.grad,
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								Hub
							</span>
						</span>
					</div>
				</div>
				<Card>
					<h2
						style={{
							color: T.text,
							margin: "0 0 20px",
							fontSize: 20,
							fontWeight: 800,
						}}
					>
						Crear cuenta
					</h2>
					<Input
						label="Nombre completo"
						value={name}
						onChange={setName}
						placeholder="Tu nombre"
						required
					/>
					<Input
						label="Email"
						type="email"
						value={email}
						onChange={setEmail}
						placeholder="correo@empresa.com"
						required
					/>
					<Input
						label="Contraseña"
						type="password"
						value={pass}
						onChange={setPass}
						placeholder="Mínimo 8 caracteres"
						required
					/>
					<Select
						label="Tipo de cuenta"
						value={role}
						onChange={setRole}
						options={[
							{
								value: "partnerships",
								label: "Equipo Partnerships (requiere aprobación)",
							},
						]}
					/>
					{err && (
						<div
							style={{
								background: "#FF6B6B22",
								border: "1px solid #FF6B6B44",
								borderRadius: 8,
								padding: "10px 14px",
								color: T.warn,
								fontSize: 13,
								marginBottom: 14,
							}}
						>
							{err}
						</div>
					)}
					<Btn onClick={handleReg} full disabled={loading}>
						{loading ? "Creando cuenta..." : "Crear cuenta"}
					</Btn>
					<div style={{ marginTop: 14, textAlign: "center" }}>
						<button
							onClick={onGoLogin}
							style={{
								background: "none",
								border: "none",
								color: T.textSub,
								fontSize: 13,
								cursor: "pointer",
								fontFamily: "inherit",
							}}
						>
							← Volver al login
						</button>
					</div>
				</Card>
			</div>
		</div>
	);
};

// NAVBAR
const Navbar = ({ user, onLogout, onNav, activeView }) => (
	<nav
		style={{
			background: T.bgCard,
			borderBottom: `1px solid ${T.border}`,
			padding: "0 24px",
			display: "flex",
			alignItems: "center",
			gap: 8,
			height: 60,
			position: "sticky",
			top: 0,
			zIndex: 100,
		}}
	>
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: 8,
				marginRight: 24,
				cursor: "pointer",
			}}
			onClick={() => onNav("partners")}
		>
			<div
				style={{
					width: 30,
					height: 30,
					borderRadius: 8,
					background: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					overflow: "hidden",
				}}
			>
				<LogoMark size={45} radius={20} />
			</div>
			<span
				style={{
					fontFamily: "'Syne', sans-serif",
					fontWeight: 800,
					fontSize: 16,
					color: T.text,
				}}
			>
				TechRiders Hub
			</span>
		</div>
		<div style={{ display: "flex", gap: 4, flex: 1 }}>
			{[
				"partners",
				...(["direccion", "admin"].includes(user.role) ? ["admin"] : []),
			].map((v) => (
				<button
					key={v}
					onClick={() => onNav(v)}
					style={{
						background: activeView === v ? T.grad : "transparent",
						border: "none",
						borderRadius: 7,
						padding: "6px 14px",
						color: activeView === v ? "#fff" : T.textSub,
						fontFamily: "inherit",
						fontWeight: 700,
						fontSize: 13,
						cursor: "pointer",
						transition: ".2s",
					}}
				>
					{v === "partners" ? "🤝 Partners" : "⚙️ Panel Admin"}
				</button>
			))}
		</div>
		<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
			<div style={{ textAlign: "right" }}>
				<div style={{ fontSize: 13, fontWeight: 700, color: T.text }}>
					{user.name}
				</div>
				<Chip label={rolLabel[user.role]} color={rolBadge[user.role]} />
			</div>
			<div
				style={{
					width: 36,
					height: 36,
					borderRadius: "50%",
					background: T.grad,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontWeight: 800,
					fontSize: 13,
					color: "#fff",
				}}
			>
				{user.avatar}
			</div>
			<Btn variant="ghost" small onClick={onLogout}>
				Salir
			</Btn>
		</div>
	</nav>
);

// LISTA DE PARTNERS
const PartnerList = ({ user, partners, onViewPartner, onNewPartner }) => {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("todos");
	const filtered = partners.filter((p) => {
		const q = search.toLowerCase();
		const matchSearch =
			p.nombre.toLowerCase().includes(q) ||
			p.cif.includes(q) ||
			p.sector.toLowerCase().includes(q);
		const matchFilter = filter === "todos" || p.estado.toLowerCase() === filter;
		return matchSearch && matchFilter;
	});

	const canCreate = ["partnerships", "operaciones", "admin"].includes(
		user.role,
	);

	return (
		<div style={{ width: "100%", padding: "32px 24px" }}>
			{/* Header */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: 28,
				}}
			>
				<div>
					<h1
						style={{
							margin: 0,
							fontSize: 28,
							fontWeight: 800,
							color: T.text,
							fontFamily: "'Syne', sans-serif",
						}}
					>
						Base de Partners
					</h1>
					<p style={{ margin: "4px 0 0", color: T.textSub, fontSize: 14 }}>
						{filtered.length} partners encontrados
					</p>
				</div>
				{canCreate && <Btn onClick={onNewPartner}>+ Nuevo Partner</Btn>}
			</div>

			{/* KPIs rápidos */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
					gap: 14,
					marginBottom: 24,
				}}
			>
				{[
					{
						label: "Total Partners",
						val: partners.length,
						icon: "🤝",
						color: T.accent,
					},
					{
						label: "Activos",
						val: partners.filter((p) => p.estado === "Activo").length,
						icon: "✅",
						color: "#00C9A7",
					},
					{
						label: "En Negociación",
						val: partners.filter((p) => p.estado === "En Negociación").length,
						icon: "🔄",
						color: T.gold,
					},
					{
						label: "Score Medio",
						val: Math.round(
							partners.reduce((a, p) => a + p.scoring, 0) / partners.length,
						),
						icon: "📊",
						color: T.accentB,
					},
				].map((k) => (
					<Card key={k.label} style={{ padding: 16 }}>
						<div style={{ fontSize: 22, marginBottom: 6 }}>{k.icon}</div>
						<div
							style={{
								fontSize: 24,
								fontWeight: 800,
								color: k.color,
								fontFamily: "'DM Mono', monospace",
							}}
						>
							{k.val}
						</div>
						<div
							style={{
								fontSize: 11,
								color: T.textSub,
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: 0.5,
							}}
						>
							{k.label}
						</div>
					</Card>
				))}
			</div>

			{/* Filtros */}
			<div
				style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}
			>
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="🔍 Buscar por nombre, CIF, sector..."
					style={{
						flex: 1,
						minWidth: 200,
						background: T.bgInput,
						border: `1.5px solid ${T.border}`,
						borderRadius: 8,
						padding: "10px 14px",
						color: T.text,
						fontSize: 14,
						outline: "none",
						fontFamily: "inherit",
					}}
				/>
				{["todos", "activo", "en negociación", "inactivo"].map((f) => (
					<button
						key={f}
						onClick={() => setFilter(f)}
						style={{
							background: filter === f ? T.grad : T.bgInput,
							border: `1px solid ${T.border}`,
							borderRadius: 8,
							padding: "8px 14px",
							color: filter === f ? "#fff" : T.textSub,
							fontFamily: "inherit",
							fontWeight: 700,
							fontSize: 12,
							cursor: "pointer",
							textTransform: "capitalize",
							letterSpacing: 0.5,
						}}
					>
						{f === "todos" ? "Todos" : f}
					</button>
				))}
			</div>

			{/* Tabla */}
			<Card style={{ padding: 0, overflow: "hidden", overflowX: "auto" }}>
				<table style={{ width: "100%", borderCollapse: "collapse" }}>
					<thead>
						<tr style={{ borderBottom: `1px solid ${T.border}` }}>
							{[
								"Empresa",
								"CIF",
								"Sector",
								"Estado",
								"Score",
								"Tendencia",
								"Acciones",
							].map((h) => (
								<th
									key={h}
									style={{
										padding: "14px 16px",
										textAlign: "left",
										fontSize: 11,
										fontWeight: 700,
										color: T.textSub,
										textTransform: "uppercase",
										letterSpacing: 1,
									}}
								>
									{h}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{filtered.map((p, i) => (
							<tr
								key={p.id}
								style={{
									borderBottom: `1px solid ${T.border}`,
									background: i % 2 === 0 ? "transparent" : "#ffffff04",
									transition: "background .2s",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.background = "#0099FF08")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.background =
										i % 2 === 0 ? "transparent" : "#ffffff04")
								}
							>
								<td style={{ padding: "14px 16px" }}>
									<div style={{ fontWeight: 700, color: T.text, fontSize: 14 }}>
										{p.nombre}
									</div>
									<div style={{ fontSize: 11, color: T.textSub }}>
										{p.contacto}
									</div>
								</td>
								<td style={{ padding: "14px 16px" }}>
									<code
										style={{
											fontSize: 12,
											color: T.accent,
											background: T.accent + "11",
											padding: "3px 7px",
											borderRadius: 5,
										}}
									>
										{p.cif}
									</code>
								</td>
								<td
									style={{
										padding: "14px 16px",
										color: T.textSub,
										fontSize: 13,
									}}
								>
									{p.sector}
								</td>
								<td style={{ padding: "14px 16px" }}>
									<Chip
										label={p.estado}
										color={
											p.estado === "Activo"
												? T.accent
												: p.estado === "Inactivo"
													? T.warn
													: T.gold
										}
									/>
								</td>
								<td style={{ padding: "14px 16px" }}>
									<div
										style={{ display: "flex", alignItems: "center", gap: 8 }}
									>
										<div
											style={{
												width: 48,
												height: 6,
												borderRadius: 3,
												background: T.border,
												overflow: "hidden",
											}}
										>
											<div
												style={{
													width: `${p.scoring}%`,
													height: "100%",
													background: scoreColor(p.scoring),
													borderRadius: 3,
													transition: "width .8s ease",
												}}
											/>
										</div>
										<span
											style={{
												fontFamily: "'DM Mono', monospace",
												fontSize: 13,
												fontWeight: 700,
												color: scoreColor(p.scoring),
											}}
										>
											{p.scoring}
										</span>
									</div>
								</td>
								<td style={{ padding: "14px 16px" }}>
									<TendArrow dir={p.tendencia} />
								</td>
								<td style={{ padding: "14px 16px" }}>
									<Btn small onClick={() => onViewPartner(p)}>
										Ver ficha →
									</Btn>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{filtered.length === 0 && (
					<div style={{ textAlign: "center", padding: 40, color: T.textSub }}>
						Sin resultados para esta búsqueda.
					</div>
				)}
			</Card>
		</div>
	);
};

// FICHA DE PARTNER
const PartnerDetail = ({ partner, onBack, user, onAddInteraction }) => {
	const [tab, setTab] = useState("info");
	const canEdit = ["partnerships", "operaciones", "admin"].includes(user.role);
	const showContracts = ["legal", "direccion", "admin", "operaciones"].includes(
		user.role,
	);

	const tabs = [
		{ id: "info", label: "📋 Información" },
		{ id: "historial", label: "🕐 Historial" },
		...(showContracts ? [{ id: "contratos", label: "📁 Contratos" }] : []),
		{ id: "scoring", label: "📊 Scoring" },
	];

	return (
		<div style={{ width: "100%", padding: "32px 24px" }}>
			{/* Back */}
			<button
				onClick={onBack}
				style={{
					background: "none",
					border: "none",
					color: T.textSub,
					fontSize: 14,
					cursor: "pointer",
					fontFamily: "inherit",
					marginBottom: 20,
					display: "flex",
					alignItems: "center",
					gap: 6,
				}}
			>
				← Volver a Partners
			</button>

			{/* Header ficha */}
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "space-between",
					marginBottom: 24,
					flexWrap: "wrap",
					gap: 16,
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: 16 }}>
					<div
						style={{
							width: 60,
							height: 60,
							borderRadius: 14,
							background: T.grad,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: 26,
							fontWeight: 800,
							color: "#fff",
						}}
					>
						{partner.nombre.charAt(0)}
					</div>
					<div>
						<h1
							style={{
								margin: 0,
								fontSize: 24,
								fontWeight: 800,
								color: T.text,
								fontFamily: "'Syne', sans-serif",
							}}
						>
							{partner.nombre}
						</h1>
						<div
							style={{
								display: "flex",
								gap: 8,
								marginTop: 6,
								flexWrap: "wrap",
							}}
						>
							<code
								style={{
									fontSize: 12,
									color: T.accent,
									background: T.accent + "11",
									padding: "3px 8px",
									borderRadius: 5,
								}}
							>
								{partner.cif}
							</code>
							<Chip
								label={partner.estado}
								color={
									partner.estado === "Activo"
										? T.accent
										: partner.estado === "Inactivo"
											? T.warn
											: T.gold
								}
							/>
							<Chip label={partner.sector} color={T.accentB} />
							<Chip
								label={`Base legal: ${partner.baseJuridica}`}
								color={
									partner.baseJuridica === "Pendiente" ? T.warn : "#9B59B6"
								}
							/>
						</div>
					</div>
				</div>
				<ScoreRing score={partner.scoring} />
			</div>

			{/* Tabs */}
			<div
				style={{
					display: "flex",
					gap: 4,
					marginBottom: 20,
					borderBottom: `1px solid ${T.border}`,
					paddingBottom: 0,
				}}
			>
				{tabs.map((t) => (
					<button
						key={t.id}
						onClick={() => setTab(t.id)}
						style={{
							background: "none",
							border: "none",
							borderBottom:
								tab === t.id
									? `2px solid ${T.accent}`
									: "2px solid transparent",
							padding: "10px 16px",
							color: tab === t.id ? T.accent : T.textSub,
							fontFamily: "inherit",
							fontWeight: 700,
							fontSize: 13,
							cursor: "pointer",
							marginBottom: -1,
						}}
					>
						{t.label}
					</button>
				))}
			</div>

			{/* Contenido tabs */}
			{tab === "info" && (
				<div
					style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
				>
					{[
						{ label: "Contacto principal", val: partner.contacto },
						{ label: "Teléfono", val: partner.telefono },
						{ label: "Fecha de alta", val: partner.fechaAlta },
						{ label: "Sector", val: partner.sector },
						{ label: "Base jurídica RGPD", val: partner.baseJuridica },
						{ label: "Estado relación", val: partner.estado },
					].map((f) => (
						<Card key={f.label} style={{ padding: 16 }}>
							<div
								style={{
									fontSize: 11,
									color: T.textSub,
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: 0.5,
									marginBottom: 6,
								}}
							>
								{f.label}
							</div>
							<div style={{ fontWeight: 600, color: T.text, fontSize: 14 }}>
								{f.val}
							</div>
						</Card>
					))}
					<Card style={{ padding: 16, gridColumn: "1/-1" }}>
						<div
							style={{
								fontSize: 11,
								color: T.textSub,
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: 0.5,
								marginBottom: 6,
							}}
						>
							Notas estratégicas
						</div>
						<div style={{ color: T.text, fontSize: 14, lineHeight: 1.6 }}>
							{partner.notas}
						</div>
					</Card>
				</div>
			)}

			{tab === "historial" && (
				<div>
					{canEdit && (
						<div style={{ marginBottom: 20 }}>
							<Btn onClick={() => onAddInteraction(partner)}>
								+ Registrar interacción
							</Btn>
						</div>
					)}
					<div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
						{partner.historial.map((h) => (
							<Card
								key={h.id}
								style={{
									padding: 16,
									borderLeft: `3px solid ${h.tipo === "Acuerdo" ? T.gold : h.tipo === "Reunión" ? T.accent : T.accentB}`,
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: 10,
										marginBottom: 8,
									}}
								>
									<Chip
										label={h.tipo}
										color={
											h.tipo === "Acuerdo"
												? T.gold
												: h.tipo === "Reunión"
													? T.accent
													: T.accentB
										}
									/>
									<span style={{ fontSize: 12, color: T.textSub }}>
										{h.fecha}
									</span>
									<span style={{ fontSize: 12, color: T.textSub }}>
										· {h.autor}
									</span>
								</div>
								<p
									style={{
										margin: 0,
										color: T.text,
										fontSize: 14,
										lineHeight: 1.6,
									}}
								>
									{h.texto}
								</p>
							</Card>
						))}
						{partner.historial.length === 0 && (
							<div
								style={{ color: T.textSub, textAlign: "center", padding: 32 }}
							>
								Sin interacciones registradas.
							</div>
						)}
					</div>
				</div>
			)}

			{tab === "contratos" && showContracts && (
				<div>
					<div
						style={{
							marginBottom: 12,
							padding: "12px 16px",
							background: "#9B59B611",
							border: "1px solid #9B59B633",
							borderRadius: 8,
						}}
					>
						<span style={{ fontSize: 12, color: "#9B59B6", fontWeight: 700 }}>
							🔒 Acceso restringido — Solo roles autorizados (Legal / Dirección
							/ Operaciones)
						</span>
					</div>
					{partner.contratos.length > 0 ? (
						partner.contratos.map((c) => (
							<Card
								key={c}
								style={{
									padding: 14,
									marginBottom: 10,
									display: "flex",
									alignItems: "center",
									gap: 12,
								}}
							>
								<span style={{ fontSize: 22 }}>📄</span>
								<div style={{ flex: 1 }}>
									<div style={{ fontWeight: 700, color: T.text, fontSize: 14 }}>
										{c}
									</div>
									<div style={{ fontSize: 12, color: T.textSub }}>
										Enlace al repositorio legal
									</div>
								</div>
								<Btn small variant="ghost">
									Abrir →
								</Btn>
							</Card>
						))
					) : (
						<div style={{ color: T.textSub, textAlign: "center", padding: 32 }}>
							Sin contratos enlazados aún.
						</div>
					)}
				</div>
			)}

			{tab === "scoring" && (
				<div
					style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
				>
					<Card
						style={{
							padding: 24,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gridColumn: "1/-1",
						}}
					>
						<ScoreRing score={partner.scoring} />
						<div
							style={{
								marginTop: 12,
								fontWeight: 800,
								fontSize: 20,
								color: scoreColor(partner.scoring),
								fontFamily: "'Syne', sans-serif",
							}}
						>
							Score Estratégico: {partner.scoring}/100
						</div>
						<div style={{ color: T.textSub, fontSize: 13, marginTop: 4 }}>
							{partner.scoring >= 80
								? "Alta prioridad — Maximizar recursos"
								: partner.scoring >= 60
									? "Prioridad media — Seguimiento activo"
									: "Baja prioridad — Revisar viabilidad"}
						</div>
					</Card>
					{[
						{
							label: "Actividad reciente",
							val: Math.min(100, partner.historial.length * 22),
							desc: "Basado en interacciones",
						},
						{
							label: "Contratos activos",
							val: partner.contratos.length > 0 ? 90 : 20,
							desc: "Documentación formal",
						},
						{
							label: "Base jurídica",
							val: partner.baseJuridica === "Pendiente" ? 30 : 85,
							desc: "Cumplimiento RGPD",
						},
						{
							label: "Estado relación",
							val:
								partner.estado === "Activo"
									? 95
									: partner.estado === "En Negociación"
										? 60
										: 10,
							desc: "Pipeline comercial",
						},
					].map((m) => (
						<Card key={m.label} style={{ padding: 16 }}>
							<div
								style={{
									fontSize: 11,
									color: T.textSub,
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: 0.5,
									marginBottom: 10,
								}}
							>
								{m.label}
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 10,
									marginBottom: 6,
								}}
							>
								<div
									style={{
										flex: 1,
										height: 8,
										borderRadius: 4,
										background: T.border,
									}}
								>
									<div
										style={{
											width: `${m.val}%`,
											height: "100%",
											borderRadius: 4,
											background: scoreColor(m.val),
										}}
									/>
								</div>
								<span
									style={{
										fontFamily: "'DM Mono', monospace",
										fontSize: 13,
										fontWeight: 700,
										color: scoreColor(m.val),
										minWidth: 28,
									}}
								>
									{m.val}
								</span>
							</div>
							<div style={{ fontSize: 11, color: T.textSub }}>{m.desc}</div>
						</Card>
					))}
				</div>
			)}
		</div>
	);
};

// NUEVO PARTNER MODAL
const NewPartnerModal = ({ onClose, onSave, existingCIFs }) => {
	const [nombre, setNombre] = useState("");
	const [cif, setCif] = useState("");
	const [sector, setSector] = useState("SaaS");
	const [contacto, setContacto] = useState("");
	const [telefono, setTelefono] = useState("");
	const [baseJuridica, setBaseJuridica] = useState("Interés Legítimo");
	const [notas, setNotas] = useState("");
	const [err, setErr] = useState("");

	const handleSave = () => {
		if (!nombre || !cif || !contacto) {
			setErr("Nombre, CIF y contacto son obligatorios.");
			return;
		}
		if (existingCIFs.includes(cif)) {
			setErr(
				`⚠️ CIF duplicado: "${cif}" ya existe en la base de datos. Motor de deduplicación activado.`,
			);
			return;
		}
		onSave({ nombre, cif, sector, contacto, telefono, baseJuridica, notas });
	};

	return (
		<Modal title="Registrar nuevo partner" onClose={onClose}>
			<Input
				label="Nombre de la empresa"
				value={nombre}
				onChange={setNombre}
				required
			/>
			<Input
				label="CIF / NIF"
				value={cif}
				onChange={setCif}
				placeholder="B12345678"
				required
			/>
			<Select
				label="Sector"
				value={sector}
				onChange={setSector}
				options={[
					"SaaS",
					"Marketing",
					"Finanzas",
					"Cloud",
					"Retail",
					"Industria",
					"Otro",
				].map((s) => ({ value: s, label: s }))}
			/>
			<Input
				label="Email de contacto"
				value={contacto}
				onChange={setContacto}
				required
			/>
			<Input label="Teléfono" value={telefono} onChange={setTelefono} />
			<Select
				label="Base jurídica RGPD"
				value={baseJuridica}
				onChange={setBaseJuridica}
				options={[
					{ value: "Interés Legítimo", label: "Interés Legítimo" },
					{ value: "Consentimiento", label: "Consentimiento" },
					{ value: "Pendiente", label: "Pendiente validación" },
				]}
			/>
			<div style={{ marginBottom: 14 }}>
				<label
					style={{
						display: "block",
						color: T.textSub,
						fontSize: 11,
						fontWeight: 700,
						letterSpacing: 1,
						marginBottom: 5,
						textTransform: "uppercase",
					}}
				>
					Notas estratégicas
				</label>
				<textarea
					value={notas}
					onChange={(e) => setNotas(e.target.value)}
					rows={3}
					style={{
						width: "100%",
						background: T.bgInput,
						border: `1.5px solid ${T.border}`,
						borderRadius: 8,
						padding: "10px 14px",
						color: T.text,
						fontSize: 14,
						outline: "none",
						resize: "vertical",
						boxSizing: "border-box",
						fontFamily: "inherit",
					}}
				/>
			</div>
			{err && (
				<div
					style={{
						background: "#FF6B6B22",
						border: "1px solid #FF6B6B44",
						borderRadius: 8,
						padding: "10px 14px",
						color: T.warn,
						fontSize: 13,
						marginBottom: 14,
					}}
				>
					{err}
				</div>
			)}
			<div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
				<Btn variant="ghost" onClick={onClose}>
					Cancelar
				</Btn>
				<Btn onClick={handleSave}>Guardar partner</Btn>
			</div>
		</Modal>
	);
};

// NUEVA INTERACCION MODAL
const NewInteractionModal = ({ partner, onClose, onSave }) => {
	const [tipo, setTipo] = useState("Reunión");
	const [texto, setTexto] = useState("");
	const [err, setErr] = useState("");
	const handleSave = () => {
		if (!texto.trim()) {
			setErr("El contenido es obligatorio.");
			return;
		}
		onSave({ tipo, texto, fecha: new Date().toISOString().slice(0, 10) });
	};
	return (
		<Modal title={`Nueva interacción — ${partner.nombre}`} onClose={onClose}>
			<Select
				label="Tipo de interacción"
				value={tipo}
				onChange={setTipo}
				options={["Reunión", "Llamada", "Acuerdo", "Email", "Otro"].map(
					(t) => ({ value: t, label: t }),
				)}
			/>
			<div style={{ marginBottom: 14 }}>
				<label
					style={{
						display: "block",
						color: T.textSub,
						fontSize: 11,
						fontWeight: 700,
						letterSpacing: 1,
						marginBottom: 5,
						textTransform: "uppercase",
					}}
				>
					Descripción <span style={{ color: T.warn }}>*</span>
				</label>
				<textarea
					value={texto}
					onChange={(e) => setTexto(e.target.value)}
					rows={5}
					placeholder="Describe la interacción con el partner..."
					style={{
						width: "100%",
						background: T.bgInput,
						border: `1.5px solid ${T.border}`,
						borderRadius: 8,
						padding: "10px 14px",
						color: T.text,
						fontSize: 14,
						outline: "none",
						resize: "vertical",
						boxSizing: "border-box",
						fontFamily: "inherit",
					}}
				/>
			</div>
			{err && (
				<div
					style={{
						background: "#FF6B6B22",
						border: "1px solid #FF6B6B44",
						borderRadius: 8,
						padding: "10px 14px",
						color: T.warn,
						fontSize: 13,
						marginBottom: 14,
					}}
				>
					{err}
				</div>
			)}
			<div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
				<Btn variant="ghost" onClick={onClose}>
					Cancelar
				</Btn>
				<Btn onClick={handleSave}>Registrar interacción</Btn>
			</div>
		</Modal>
	);
};

// PANEL ADMIN (Dirección)
const AdminPanel = ({ partners, user }) => {
	const top5 = [...partners].sort((a, b) => b.scoring - a.scoring).slice(0, 5);
	const total = partners.length;
	const activos = partners.filter((p) => p.estado === "Activo").length;
	const scoreAvg = Math.round(
		partners.reduce((a, p) => a + p.scoring, 0) / total,
	);
	const enNeg = partners.filter((p) => p.estado === "En Negociación").length;

	return (
		<div style={{ width: "100%", padding: "32px 24px" }}>
			<div style={{ marginBottom: 28 }}>
				<h1
					style={{
						margin: 0,
						fontSize: 28,
						fontWeight: 800,
						color: T.text,
						fontFamily: "'Syne', sans-serif",
					}}
				>
					Panel de {rolLabel[user.role]}
				</h1>
				<p style={{ margin: "4px 0 0", color: T.textSub, fontSize: 14 }}>
					Vista ejecutiva y estratégica del ecosistema de partners
				</p>
			</div>

			{/* KPIs */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
					gap: 14,
					marginBottom: 24,
				}}
			>
				{[
					{ icon: "🤝", label: "Total Partners", val: total, color: T.accent },
					{
						icon: "✅",
						label: "Partners Activos",
						val: activos,
						color: "#00C9A7",
					},
					{ icon: "🔄", label: "En Negociación", val: enNeg, color: T.gold },
					{
						icon: "📊",
						label: "Score Promedio",
						val: scoreAvg,
						color: T.accentB,
					},
				].map((k) => (
					<Card key={k.label} style={{ padding: 20, textAlign: "center" }}>
						<div style={{ fontSize: 28, marginBottom: 8 }}>{k.icon}</div>
						<div
							style={{
								fontSize: 30,
								fontWeight: 800,
								color: k.color,
								fontFamily: "'DM Mono', monospace",
							}}
						>
							{k.val}
						</div>
						<div
							style={{
								fontSize: 11,
								color: T.textSub,
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: 0.5,
								marginTop: 4,
							}}
						>
							{k.label}
						</div>
					</Card>
				))}
			</div>

			{/* Ranking */}
			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
				<Card>
					<h3
						style={{
							margin: "0 0 16px",
							color: T.text,
							fontWeight: 800,
							fontSize: 16,
							fontFamily: "'Syne', sans-serif",
						}}
					>
						🏆 Top Partners por Score Estratégico
					</h3>
					{top5.map((p, i) => (
						<div
							key={p.id}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 12,
								marginBottom: 14,
								padding: "10px 12px",
								background: T.bgInput,
								borderRadius: 10,
								border: `1px solid ${T.border}`,
							}}
						>
							<div
								style={{
									width: 28,
									height: 28,
									borderRadius: "50%",
									background:
										i === 0
											? T.gold
											: i === 1
												? "#C0C0C0"
												: i === 2
													? "#CD7F32"
													: T.bgCard,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: 13,
									fontWeight: 800,
									color: i < 3 ? "#111" : T.textSub,
								}}
							>
								{i + 1}
							</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontWeight: 700, color: T.text, fontSize: 13 }}>
									{p.nombre}
								</div>
								<div style={{ fontSize: 11, color: T.textSub }}>
									{p.sector} · {p.estado}
								</div>
							</div>
							<div style={{ display: "flex", alignItems: "center", gap: 6 }}>
								<TendArrow dir={p.tendencia} />
								<span
									style={{
										fontFamily: "'DM Mono', monospace",
										fontWeight: 800,
										fontSize: 16,
										color: scoreColor(p.scoring),
									}}
								>
									{p.scoring}
								</span>
							</div>
						</div>
					))}
				</Card>

				<div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
					{/* Distribución por sector */}
					<Card>
						<h3
							style={{
								margin: "0 0 14px",
								color: T.text,
								fontWeight: 800,
								fontSize: 16,
								fontFamily: "'Syne', sans-serif",
							}}
						>
							📈 Distribución por Sector
						</h3>
						{Object.entries(
							partners.reduce((acc, p) => {
								acc[p.sector] = (acc[p.sector] || 0) + 1;
								return acc;
							}, {}),
						).map(([sector, count]) => (
							<div key={sector} style={{ marginBottom: 10 }}>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										marginBottom: 4,
									}}
								>
									<span
										style={{ fontSize: 12, color: T.text, fontWeight: 600 }}
									>
										{sector}
									</span>
									<span style={{ fontSize: 12, color: T.textSub }}>
										{count} partner{count > 1 ? "s" : ""}
									</span>
								</div>
								<div
									style={{ height: 6, background: T.border, borderRadius: 3 }}
								>
									<div
										style={{
											width: `${(count / total) * 100}%`,
											height: "100%",
											borderRadius: 3,
											background: T.grad,
										}}
									/>
								</div>
							</div>
						))}
					</Card>
					{/* Alertas */}
					<Card>
						<h3
							style={{
								margin: "0 0 14px",
								color: T.text,
								fontWeight: 800,
								fontSize: 16,
								fontFamily: "'Syne', sans-serif",
							}}
						>
							⚠️ Alertas de Actividad
						</h3>
						{partners
							.filter((p) => p.scoring < 60 || p.estado === "Inactivo")
							.map((p) => (
								<div
									key={p.id}
									style={{
										display: "flex",
										gap: 10,
										alignItems: "flex-start",
										marginBottom: 10,
										padding: "10px 12px",
										background: "#FF6B6B11",
										border: "1px solid #FF6B6B22",
										borderRadius: 8,
									}}
								>
									<span style={{ fontSize: 18 }}>🔴</span>
									<div>
										<div
											style={{ fontWeight: 700, color: T.text, fontSize: 13 }}
										>
											{p.nombre}
										</div>
										<div style={{ fontSize: 11, color: T.textSub }}>
											Score: {p.scoring} · Estado: {p.estado}
										</div>
									</div>
								</div>
							))}
						{partners
							.filter((p) => p.baseJuridica === "Pendiente")
							.map((p) => (
								<div
									key={`rgpd-${p.id}`}
									style={{
										display: "flex",
										gap: 10,
										alignItems: "flex-start",
										marginBottom: 10,
										padding: "10px 12px",
										background: "#FFD16611",
										border: "1px solid #FFD16622",
										borderRadius: 8,
									}}
								>
									<span style={{ fontSize: 18 }}>⚖️</span>
									<div>
										<div
											style={{ fontWeight: 700, color: T.text, fontSize: 13 }}
										>
											{p.nombre}
										</div>
										<div style={{ fontSize: 11, color: T.gold }}>
											Base jurídica RGPD pendiente de validación
										</div>
									</div>
								</div>
							))}
					</Card>
				</div>
			</div>
		</div>
	);
};

// ─── APP PRINCIPAL ─────────────────────────────────────────────────────────────
export default function App() {
	const [screen, setScreen] = useState("login"); // login | register | app
	const [user, setUser] = useState(null);
	const [users, setUsers] = useState(() =>
		mergeUsersByEmail(MOCK_USERS, loadCachedUsers()),
	);
	const [partners, setPartners] = useState(MOCK_PARTNERS);
	const [view, setView] = useState("partners");
	const [selectedPartner, setSelectedPartner] = useState(null);
	const [showNewPartner, setShowNewPartner] = useState(false);
	const [showNewInteraction, setShowNewInteraction] = useState(false);
	const [interactionTarget, setInteractionTarget] = useState(null);
	const [toast, setToast] = useState(null);

	useEffect(() => {
		const demoEmails = new Set(
			MOCK_USERS.map((u) => (u.email || "").trim().toLowerCase()),
		);
		const onlyCustom = (users || []).filter(
			(u) => !demoEmails.has((u?.email || "").trim().toLowerCase()),
		);
		saveCachedUsers(onlyCustom);
	}, [users]);

	const showToast = (msg, type = "success") => {
		setToast({ msg, type });
		setTimeout(() => setToast(null), 3500);
	};

	const handleLogin = (u) => {
		setUser(u);
		setScreen("app");
		setView("partners");
	};
	const handleLogout = () => {
		setUser(null);
		setScreen("login");
		setSelectedPartner(null);
	};
	const handleRegistered = ({ name, email, password, role }) => {
		const newUser = {
			id: Date.now(),
			email,
			password,
			role,
			name,
			avatar: avatarFromName(name),
		};
		setUsers((prev) => mergeUsersByEmail(prev || [], [newUser]));
		showToast(`Cuenta creada para ${name}. Accediendo...`);
		setTimeout(() => setScreen("login"), 1500);
	};

	const handleSavePartner = (data) => {
		const newP = {
			...data,
			id: Date.now(),
			estado: "En Negociación",
			fechaAlta: new Date().toISOString().slice(0, 10),
			scoring: 50,
			tendencia: "stable",
			contratos: [],
			historial: [],
		};
		setPartners((prev) => [newP, ...prev]);
		setShowNewPartner(false);
		showToast(`Partner "${data.nombre}" registrado correctamente.`);
	};

	const handleAddInteraction = (partner) => {
		setInteractionTarget(partner);
		setShowNewInteraction(true);
	};
	const handleSaveInteraction = (data) => {
		setPartners((prev) =>
			prev.map((p) =>
				p.id === interactionTarget.id
					? {
							...p,
							historial: [
								{ id: Date.now(), ...data, autor: user.name },
								...p.historial,
							],
							scoring: Math.min(100, p.scoring + 3),
						}
					: p,
			),
		);
		if (selectedPartner?.id === interactionTarget.id) {
			setSelectedPartner((prev) => ({
				...prev,
				historial: [
					{ id: Date.now(), ...data, autor: user.name },
					...prev.historial,
				],
				scoring: Math.min(100, prev.scoring + 3),
			}));
		}
		setShowNewInteraction(false);
		setInteractionTarget(null);
		showToast("Interacción registrada.");
	};

	if (screen === "login")
		return (
			<>
				<style>{`* { margin:0; padding:0; box-sizing:border-box; } @keyframes fadeInUp { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
				<LoginView
					users={users}
					onLogin={handleLogin}
					onGoRegister={() => setScreen("register")}
				/>
				{toast && <Toast msg={toast.msg} type={toast.type} />}
			</>
		);
	if (screen === "register")
		return (
			<>
				<style>{`* { margin:0; padding:0; box-sizing:border-box; } @keyframes fadeInUp { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
				<RegisterView
					onGoLogin={() => setScreen("login")}
					onRegistered={handleRegistered}
					existingUsers={users}
				/>
				{toast && <Toast msg={toast.msg} type={toast.type} />}
			</>
		);

	return (
		<div
			style={{
				minHeight: "100vh",
				background: T.bg,
				fontFamily: "'DM Sans', sans-serif",
				color: T.text,
			}}
		>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; scrollbar-width: thin; scrollbar-color: #1E2D45 transparent; }
        @keyframes fadeInUp { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
			<Navbar
				user={user}
				onLogout={handleLogout}
				onNav={(v) => {
					setView(v);
					setSelectedPartner(null);
				}}
				activeView={view}
			/>
			<main style={{ animation: "fadeInUp .35s ease" }}>
				{view === "partners" && !selectedPartner && (
					<PartnerList
						user={user}
						partners={partners}
						onViewPartner={(p) => setSelectedPartner(p)}
						onNewPartner={() => setShowNewPartner(true)}
					/>
				)}
				{view === "partners" && selectedPartner && (
					<PartnerDetail
						partner={selectedPartner}
						user={user}
						onBack={() => setSelectedPartner(null)}
						onAddInteraction={handleAddInteraction}
					/>
				)}
				{view === "admin" && <AdminPanel partners={partners} user={user} />}
			</main>
			{showNewPartner && (
				<NewPartnerModal
					onClose={() => setShowNewPartner(false)}
					onSave={handleSavePartner}
					existingCIFs={partners.map((p) => p.cif)}
				/>
			)}
			{showNewInteraction && interactionTarget && (
				<NewInteractionModal
					partner={interactionTarget}
					onClose={() => {
						setShowNewInteraction(false);
						setInteractionTarget(null);
					}}
					onSave={handleSaveInteraction}
				/>
			)}
			{toast && <Toast msg={toast.msg} type={toast.type} />}
		</div>
	);
}
