import { THEME as T } from "../../constants";

// 🪟 MODAL COMPONENT - Professional dialog overlay
export const Modal = ({ title, children, onClose }) => (
	<div
		style={{
			position: "fixed",
			inset: 0,
			background: "rgba(0, 0, 0, 0.5)",
			backdropFilter: "blur(4px)",
			zIndex: 9999,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: 20,
			animation: "fadeIn 200ms ease",
		}}
		onClick={onClose}
	>
		<div
			style={{
				background: T.bgCard,
				border: `1px solid ${T.border}`,
				borderRadius: 14,
				maxWidth: 520,
				width: "100%",
				maxHeight: "85vh",
				overflow: "auto",
				boxShadow: T.shadowLg,
				animation: "slideUp 300ms ease",
			}}
			onClick={(e) => e.stopPropagation()}
		>
			{/* Header */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "20px 24px",
					borderBottom: `1px solid ${T.border}`,
					background: `linear-gradient(135deg, ${T.primaryLight} 0%, white 100%)`,
				}}
			>
				<span
					style={{
						fontWeight: 800,
						fontSize: 18,
						color: T.text,
						fontFamily: "'Syne', sans-serif",
						letterSpacing: -0.5,
					}}
				>
					{title}
				</span>
				<button
					onClick={onClose}
					style={{
						background: "none",
						border: "none",
						color: T.textSub,
						fontSize: 24,
						cursor: "pointer",
						lineHeight: 1,
						fontWeight: 700,
						transition: "color 200ms ease",
						padding: "4px",
					}}
					onMouseEnter={(e) => (e.target.style.color = T.primary)}
					onMouseLeave={(e) => (e.target.style.color = T.textSub)}
				>
					✕
				</button>
			</div>
			{/* Content */}
			<div style={{ padding: 24 }}>{children}</div>
		</div>
	</div>
);

// 🔔 TOAST COMPONENT - Notification popup
export const Toast = ({ msg, type }) => (
	<div
		style={{
			position: "fixed",
			bottom: 24,
			right: 24,
			zIndex: 99999,
			background:
				type === "error"
					? T.warn
					: type === "warn"
						? T.warning
						: T.success,
			color: "#fff",
			padding: "14px 20px",
			borderRadius: 8,
			fontWeight: 600,
			fontSize: 14,
			boxShadow: T.shadowLg,
			animation: "slideUp 300ms ease",
			maxWidth: 380,
			display: "flex",
			alignItems: "center",
			gap: 10,
			fontFamily: "'DM Sans', sans-serif",
			letterSpacing: 0.3,
		}}
	>
		<span style={{ fontSize: 18 }}>
			{type === "error" ? "⛔" : type === "warn" ? "⚠️" : "✅"}
		</span>
		<span>{msg}</span>
	</div>
);
