// 🎨 MODERN PROFESSIONAL DESIGN SYSTEM - BLUE TONES
// Paleta corporativa para TechRiders Hub

export const THEME = {
	// ─── PRIMARY COLORS (BLUE PALETTE) ───────────────────────────────
	primary: "#0099FF",         // Bright blue - main accent, CTAs
	primaryDark: "#0077CC",     // Darker blue - hover state
	primaryLight: "#E6F2FF",    // Light blue - backgrounds

	// ─── SECONDARY COLORS ────────────────────────────────────────────
	secondary: "#00C9A7",       // Teal - success, secondary accent
	secondaryLight: "#E8F9F5",  // Light teal
	accent: "#00C9A7",          // Keep for compatibility
	accentB: "#0099FF",         // Keep for compatibility

	// ─── BACKGROUNDS ─────────────────────────────────────────────────
	bg: "#F5F7FA",              // Light professional background
	bgDark: "#1E2D45",          // Dark navy for sections
	bgCard: "#FFFFFF",          // White cards
	bgCardHover: "#F9FAFB",     // Card hover state
	bgInput: "#F9FAFB",         // Input backgrounds
	bgInputFocus: "#E6F2FF",    // Input focus blue tint

	// ─── BORDERS ─────────────────────────────────────────────────────
	border: "#E5E7EB",          // Light gray border
	borderLight: "#F3F4F6",     // Very light border
	borderDark: "#D1D5DB",      // Darker border for emphasis
	borderBlue: "#0099FF",      // Blue border for focus

	// ─── TEXT COLORS ─────────────────────────────────────────────────
	text: "#1F2937",            // Primary text - dark gray/black
	textSub: "#6B7280",         // Secondary text - medium gray
	textLight: "#9CA3AF",       // Tertiary text - light gray
	textInverse: "#FFFFFF",     // Text on dark backgrounds

	// ─── STATUS COLORS ───────────────────────────────────────────────
	success: "#10B981",         // Green - success states
	successLight: "#ECFDF5",    // Light green
	warning: "#F59E0B",         // Amber - warnings
	warningLight: "#FFFBEB",    // Light amber
	warn: "#EF4444",            // Red - errors (updated)
	warnLight: "#FEE2E2",       // Light red
	error: "#DC2626",           // Dark red - critical
	gold: "#FFD166",            // Gold - keep for compatibility

	// ─── GRADIENTS ───────────────────────────────────────────────────
	grad: "linear-gradient(135deg, #0099FF 0%, #00C9A7 100%)",
	gradBlue: "linear-gradient(135deg, #0099FF 0%, #0077CC 100%)",
	gradSuccess: "linear-gradient(135deg, #10B981 0%, #00C9A7 100%)",

	// ─── SHADOWS ─────────────────────────────────────────────────────
	shadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
	shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
	shadowMd: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
	shadowLg: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
	shadowBlue: "0 4px 20px rgba(0, 153, 255, 0.15)",
};

export const LOGO_URL =
	"https://storagetajamarpgl.blob.core.windows.net/prueba2/techriders_es_logo.jpeg";

// Color score based on value (professional gradient)
export const scoreColor = (s) =>
	s >= 80 ? "#10B981" : s >= 60 ? "#FFD166" : "#EF4444";
