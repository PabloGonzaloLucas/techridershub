export const TendArrow = ({ dir }) => (
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
