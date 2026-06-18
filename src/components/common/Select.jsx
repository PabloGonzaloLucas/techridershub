import { THEME as T } from "../../constants";

export const Select = ({ label, value, onChange, options }) => (
	<div style={{ marginBottom: 16 }}>
		<label
			style={{
				display: "block",
				color: T.textSub,
				fontSize: 11,
				fontWeight: 700,
				letterSpacing: 0.8,
				marginBottom: 6,
				textTransform: "uppercase",
				fontFamily: "'DM Sans', sans-serif",
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
				padding: "11px 14px",
				color: T.text,
				fontSize: 14,
				fontFamily: "'DM Sans', sans-serif",
				fontWeight: 500,
				outline: "none",
				boxSizing: "border-box",
				transition: "border-color 200ms ease, background-color 200ms ease",
				cursor: "pointer",
			}}
			onFocus={(e) => {
				e.target.style.borderColor = T.primary;
				e.target.style.backgroundColor = T.bgInputFocus;
			}}
			onBlur={(e) => {
				e.target.style.borderColor = T.border;
				e.target.style.backgroundColor = T.bgInput;
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
