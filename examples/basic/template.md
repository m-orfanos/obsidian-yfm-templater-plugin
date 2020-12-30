---
created: <%= it.dateFns.format(new Date(), 'yyyy-MM-dd') %>
year:
<% getYearsOfInterval(it.date, getEnd())
  .forEach(function(date) { %>
  - <%= it.dateFns.format(date, 'yyyy') %>
<% }) %>
month:
<% getMonthsOfInterval(it.date, getEnd())
  .forEach(function(date) { %>
  - <%= it.dateFns.format(date, 'MMMM') %>
<% }) %>
season:
<% getSeasonsOfInterval(it.date, getEnd())
  .forEach(function(season) { %>
  - <%= season %>
<% }) %>
tags:
  - 'type:review'
---
<%
function getEnd() {
  return it.dateFns.add(it.date, {days: 6});
}

function getDaysOfInterval(start, end) {
  return it.dateFns.eachDayOfInterval({
    start: start,
    end: end
  });
}

function getYearsOfInterval(start, end) {
  return it.dateFns.eachYearOfInterval({
    start: start,
    end: end
  });
}

function getMonthsOfInterval(start, end) {
  return it.dateFns.eachMonthOfInterval({
    start: start,
    end: end
  });
}

function unique(value, index, self) {
  return self.indexOf(value) === index;
}

function getSeasonsOfInterval(start, end) {
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
  return getMonthsOfInterval(start, end)
    .map(m => seasons[it.dateFns.format(m, 'MMMM')])
    .filter(unique);
}
%>

## Things I did well

## Things I need to improve

## Daily Notes

<% getDaysOfInterval(it.date, getEnd()).forEach(function(date) { -%>
- [[<%= it.dateFns.format(date, 'yyyy-MM-dd') %>]]
<% }) %>
