export const dataFetch = async () => {
    try {
        const response = await fetch("./timelineData.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message)
    };
};
