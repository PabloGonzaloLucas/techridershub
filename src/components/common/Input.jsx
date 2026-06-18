import { THEME as T } from "../../constants";

export const Input = ({
	label,
	type = "text",
	value,
	onChange,
	placeholder,
	required,
}) => (
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
			{required && <span style={{ color: T.warn, marginLeft: 3 }}>*</span>}
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
				padding: "11px 14px",
				color: T.text,
				fontSize: 14,
				fontFamily: "'DM Sans', sans-serif",
				outline: "none",
				boxSizing: "border-box",
				transition: "border-color 200ms ease, background-color 200ms ease, box-shadow 200ms ease",
				fontWeight: 500,
			}}
			onFocus={(e) => {
				e.target.style.borderColor = T.primary;
				e.target.style.backgroundColor = T.bgInputFocus;
				e.target.style.boxShadow = `0 0 0 3px ${T.primaryLight}`;
			}}
			onBlur={(e) => {
				e.target.style.borderColor = T.border;
				e.target.style.backgroundColor = T.bgInput;
				e.target.style.boxShadow = "none";
			}}
		/>
	</div>
);
