export const monthName = (month, lang) => {
    switch (month) {
        case 1:
            return lang === "tr" ? "Ocak" : lang ==="en" ? "January" : "Januar";
            break;
        case 2:
            return lang === "tr" ? "Şubat" : lang ==="en" ? "February" : "Februar";
            break;
        case 3:
            return lang === "tr" ? "Mart" : lang ==="en" ? "March" : "Maerz";
            break;
        case 4:
            return lang === "tr" ? "Nisan" : "April";
            break;
        case 5:
            return lang === "tr" ? "Mayıs" : lang ==="en" ? "May" : "Mai";
            break;
        case 6:
            return lang === "tr" ? "Haziran" : lang ==="en" ? "June" : "Juni";
            break;
        case 7:
            return lang === "tr" ? "Temmuz" : lang ==="en" ? "July" : "Juli";
            break;
        case 8:
            return lang === "tr" ? "Ağustos" : "August";
            break;
        case 9:
            return lang === "tr" ? "Eylül" : "September";
            break;
        case 10:
            return lang === "tr" ? "Ekim" : "October";
            break;
        case 11:
            return lang === "tr" ? "Kasım" : "November";
            break;
    
        default:
            return lang === "tr" ? "Aralık" : lang ==="en" ? "December" : "Dezember";
            break;
    }
}