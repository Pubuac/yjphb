        // 在页面加载时显示表格1
        window.onload = function () {
            var table1 = document.getElementById("table1");
            table1.style.display = "table";
          }
  
          function showTable() {
            var select = document.getElementById("tableSelect");
            var selectedValue = select.value;
            // 隐藏所有表格
            var tables = document.getElementsByTagName("table");
            for (var i = 0; i < tables.length; i++) {
              tables[i].style.display = "none";
            }
            // 隐藏图片容器
            var imageContainer = document.getElementById("imageContainer");
            imageContainer.style.display = "none";
            // 显示选中的表格
            if (selectedValue) {
              var table = document.getElementById(selectedValue);
              table.style.display = "table";
              // 如果选择了table1，则显示subTable
              if (selectedValue === "table1") {
                var subTable = document.getElementById("subTable");
                subTable.style.display = "table";
              }
            } else {
              // 如果选择了空值，则显示图片容器
              imageContainer.style.display = "block";
            }
          }