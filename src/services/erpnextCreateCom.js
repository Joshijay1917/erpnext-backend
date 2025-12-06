export async function createCompany(company_name, abbr, currency, country, email) {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/resource/Company`, {
            method: 'POST',
            headers: {
                'Authorization': `token ${process.env.API_KEY}:${process.env.API_SECRET}`,
                "Content-Type":" application/json"
            },
            body: JSON.stringify({
                "company_name": `${company_name}`,
                "abbr": "MNC",
                "default_currency": "USD",
                "country": "United States"
            })
        })
        const data = await res.json()
        return data;
    } catch (error) {
        console.error(`Failed to create company(${company_name})!! `, error)
        return null;
    }
}