var date = new Date()
var year = date.getFullYear()


if (year <= 1952) {
    document.write ('Builders')
} else if (year <= 1971 && year >= 1953) {
    document.write ('Baby Boommers')
} else if ( year <= 1989 && year >= 1972) {
    document.write ('Generation X')
} else if (year <= 2001 && year >= 1987 ) {
    document.write ('Generation Y')
} else if (year <= 2016 && year >= 2002 ) {
    document.write ('Generation Z')
} else if (year >= 2016) {
    document.write ('Generation Alpha')
}