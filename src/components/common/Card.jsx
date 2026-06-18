import { THEME as T } from "../../constants";

export const Card = ({ children, style }) => (
	<div
		style={{
			background: T.bgCard,
			border: `1px solid ${T.border}`,
			borderRadius: 12,
			padding: 24,
			boxShadow: T.shadowSm,
			transition: "all 200ms ease",
			...style,
		}}
		onMouseEnter={(e) => {
			e.currentTarget.style.boxShadow = T.shadowMd;
			e.currentTarget.style.borderColor = T.borderLight;
		}}
		onMouseLeave={(e) => {
			e.currentTarget.style.boxShadow = T.shadowSm;
			e.currentTarget.style.borderColor = T.border;
		}}
	>
		{children}
	</div>
);
