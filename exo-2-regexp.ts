export const isMatch = (s: string, p: string): boolean => {
    const pattern = new RegExp(`^${p}$`);
    return pattern.test(s);
};
