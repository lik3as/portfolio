export const assert = (con: boolean, msg: string) => {
	if (!con) throw new Error(msg);
}
