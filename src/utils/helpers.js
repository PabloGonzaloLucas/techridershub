export const mergeUsersByEmail = (base, extra) => {
	const out = [];
	const seen = new Set();
	[...base, ...extra].forEach((u) => {
		const email = (u?.email || "").trim().toLowerCase();
		if (!email || seen.has(email)) return;
		seen.add(email);
		out.push({ ...u, email });
	});
	return out;
};

export const avatarFromName = (name) => {
	const parts = String(name || "")
		.trim()
		.split(/\s+/)
		.filter(Boolean);
	if (!parts.length) return "U";
	const first = parts[0]?.[0] || "";
	const last = parts.length > 1 ? parts[parts.length - 1]?.[0] || "" : "";
	return (first + last).toUpperCase();
};
