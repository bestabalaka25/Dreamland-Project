export const dataFetch = async () => {
    try {
        const response = await fetch(import.meta.env.BASE_URL + "timelineData.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message)
    };
};
