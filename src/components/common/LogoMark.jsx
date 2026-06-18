import { LOGO_URL } from "../constants";

export const LogoMark = ({ size = 60, radius = 20 }) => (
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
