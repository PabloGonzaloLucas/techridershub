import { scoreColor } from "../../constants";

export const ScoreRing = ({ score }) => {
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
