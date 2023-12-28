export const validateUserAge = (age: number) => {
    let isError = false;

    const isCorrectAgeRange = age <= 0 || age > 100;

    if (!age || !Number.isInteger(age) || isCorrectAgeRange) {
        isError = true;
    }

    return isError;
};
