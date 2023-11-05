import { MONTHS } from "./app.constants"

export const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    
    return MONTHS[new Date().getMonth() + 1] + ", " + date.getDate().toString().padStart(2, '0') + " " + date.getFullYear();
}