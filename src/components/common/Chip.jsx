export const Chip = ({ label, color }) => (
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
