export const isMatch = (s: string, p: string): boolean => {
    let stringPointer = 0;
    let patternPointer = 0;

    const isValidStringPointer = (sp: number) => sp < s.length;
    const isValidPatternPointer = (pp: number) => pp < p.length;

    while (stringPointer !== s.length - 1) {
        if (
            !isValidPatternPointer(patternPointer) ||
            !isValidStringPointer(stringPointer)
        ) {
            return false;
        }
        const isRepeat = p[patternPointer + 1] === "*";
        const isWildcard = p[patternPointer] === ".";

        // Ending with repeat wildcard
        if (isRepeat && isWildcard && patternPointer === p.length - 2)
            return true;

        // Repeat Wildcard with following characters
        if (isRepeat && isWildcard) {
            const nextPatternCharacter = p[patternPointer + 2];
            while (s[stringPointer] !== nextPatternCharacter) {
                stringPointer++;
                if (!isValidStringPointer(stringPointer)) return false;
            }
            patternPointer += 2;
            continue;
        }

        // Check next character
        if (!isWildcard && p[patternPointer] !== s[stringPointer]) {
            return false;
        }

        stringPointer++;
        patternPointer++;
    }

    return patternPointer === p.length - 1;
};
