import { THEME as T } from "../../constants";

export const Button = ({
	children,
	onClick,
	variant = "primary",
	small,
	disabled,
	full,
}) => {
	// ─── PROFESSIONAL COLOR VARIANTS ────────────────────────────────
	const variants = {
		primary: {
			bg: T.gradBlue,
			color: "#fff",
			border: "none",
			hover: { shadow: T.shadowBlue, opacity: 0.9 },
		},
		danger: {
			bg: T.warn,
			color: "#fff",
			border: "none",
			hover: { shadow: T.shadowMd, opacity: 0.9 },
		},
		ghost: {
			bg: "transparent",
			color: T.primary,
			border: `1.5px solid ${T.border}`,
			hover: { bg: T.primaryLight, shadow: T.shadowSm },
		},
		success: {
			bg: T.success,
			color: "#fff",
			border: "none",
			hover: { shadow: T.shadowMd, opacity: 0.9 },
		},
	};

	const style = variants[variant] || variants.primary;
	const isDisabled = disabled;

	return (
		<button
			onClick={onClick}
			disabled={isDisabled}
			style={{
				background: style.bg,
				border: style.border,
				borderRadius: 8,
				padding: small ? "6px 14px" : "11px 22px",
				color: style.color,
				fontFamily: "'DM Sans', sans-serif",
				fontWeight: 700,
				fontSize: small ? 12 : 14,
				letterSpacing: 0.5,
				cursor: isDisabled ? "not-allowed" : "pointer",
				opacity: isDisabled ? 0.5 : 1,
				width: full ? "100%" : "auto",
				whiteSpace: "nowrap",
				transition: "all 200ms ease",
				boxShadow: "none",
				outline: "none",
			}}
			onMouseEnter={(e) => {
				if (!isDisabled) {
					e.target.style.opacity = style.hover.opacity || "1";
					if (style.hover.shadow) e.target.style.boxShadow = style.hover.shadow;
					if (style.hover.bg) e.target.style.background = style.hover.bg;
					e.target.style.transform = "translateY(-1px)";
				}
			}}
			onMouseLeave={(e) => {
				e.target.style.opacity = "1";
				e.target.style.boxShadow = "none";
				e.target.style.background = style.bg;
				e.target.style.transform = "translateY(0)";
			}}
			onFocus={(e) => {
				if (!isDisabled) {
					e.target.style.outline = `2px solid ${T.primary}`;
					e.target.style.outlineOffset = "2px";
				}
			}}
			onBlur={(e) => {
				e.target.style.outline = "none";
			}}
		>
			{children}
		</button>
	);
};
