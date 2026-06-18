export const USERS_CACHE_KEY = "techridershub.users.v1";

export const loadCachedUsers = () => {
	try {
		if (typeof localStorage === "undefined") return [];
		const raw = localStorage.getItem(USERS_CACHE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
};

export const saveCachedUsers = (users) => {
	try {
		if (typeof localStorage === "undefined") return;
		localStorage.setItem(USERS_CACHE_KEY, JSON.stringify(users));
	} catch {
		// noop
	}
};
