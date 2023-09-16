var columns = document.querySelectorAll(".chart-column");

function changeColumnColor(div){
  columns.forEach(column => {
    column.style.backgroundColor = "";
  });
  div.style.backgroundColor = "var(--primary-2)";
}