export const dayName = (day, lang) => {
    switch (day) {
        case 0:
            return lang === "tr" ? "Pazar" : lang ==="en" ? "Sunday" : "Sonntag";
            break;
        case 1:
            return lang === "tr" ? "Pazartesi" : lang ==="en" ? "Monday" : "Montag";
            break;
        case 2:
            return lang === "tr" ? "Salı" : lang ==="en" ? "Tuesday" : "Dienstag";
            break;
        case 3:
            return lang === "tr" ? "Çarşamba" : lang ==="en" ? "Wednesday" : "Mittwoch";
            break;
        case 4:
            return lang === "tr" ? "Perşembe" : lang ==="en" ? "Thursday" : "Donnerstag";
            break;
        case 5:
            return lang === "tr" ? "Cuma" : lang ==="en" ? "Friday" : "Freitag";
            break;
        default:
            return lang === "tr" ? "Cumartesi" : lang ==="en" ? "Saturday" : "Samstag";
            break;
    }
}