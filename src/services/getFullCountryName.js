export function getCountryFullName(code) {
    if(!code) return "India";

    try {
        const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
        return regionNames.of(code);
    } catch (error) {
        console.warn(`Could not convert country code ${code}, using it directly.`);
        return code;
    }
}