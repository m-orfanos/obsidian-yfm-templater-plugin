function unique(value, index, self) {
    return self.indexOf(value) === index;
}

function days(start, end) {
    return dateFns.eachDayOfInterval({
        start: start,
        end: end
    });
}

function months(start, end) {
    return dateFns.eachMonthOfInterval({
        start: start,
        end: end
    });
}

function seasons(start, end) {
    let seasons = {
        January: "Winter",
        February: "Winter",
        March: "Winter",
        April: "Winter",
        May: "Winter",
        June: "Winter",
        July: "Winter",
        August: "Winter",
        September: "Winter",
        October: "Winter",
        November: "Winter",
        December: "Winter",
    };
    return months(start, end)
        .map(m => seasons[dateFns.format(m, 'MMMM')])
        .filter(unique);
}

function years(start, end) {
    return dateFns.eachYearOfInterval({
        start: start,
        end: end
    });
}

(function() {    
    return {
        days,
        months,
        seasons,
        years
    } ;
})();
