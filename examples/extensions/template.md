---
created: <%= it.dateFns.format(new Date(), 'yyyy-MM-dd') %>
year:
<% it.years(it.date, getEnd()).forEach(function(date) { %>
  - <%= it.dateFns.format(date, 'yyyy') %>
<% }) %>
month:
<% it.months(it.date, getEnd()).forEach(function(date) { %>
  - <%= it.dateFns.format(date, 'MMMM') %>
<% }) %>
season:
<% it.seasons(it.date, getEnd()).forEach(function(season) { %>
  - <%= season %>
<% }) %>
tags:
  - 'type:review'
---
<%
function getEnd() {
  return it.dateFns.add(it.date, { days: 6 });
}
%>

## Things I did well

## Things I need to improve

## Daily Notes

<% it.days(it.date, getEnd()).forEach(function(date) { -%>
- [[<%= it.dateFns.format(date, 'yyyy-MM-dd') %>]]
<% }) %>
