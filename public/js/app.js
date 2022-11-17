const form = document.querySelector("#form");
const tr = document.querySelectorAll("tbody tr");
const addBtn = document.querySelector("#update");
const bulk_check = document.querySelector("#bulk_check");
const all_check_boxes = document.querySelectorAll(".check_box");

/* update functionality */
[...tr].forEach((tr) => {
  tr.addEventListener("click", function (e) {
    if (this.dataset.id === e.target.dataset.id) {
      form.action = `/update/${this.dataset.id}`;
      addBtn.value = `Update`;
      [...this.children].forEach((td) => {
        if (td.className === "word") {
          form[0].value = td.innerHTML;
        }
        if (td.className === "description") {
          form[1].value = td.innerHTML;
        }
      });
    }
  });
});

/* delete functionality */

/* const deleteBtn = document.querySelector("#delete");

deleteBtn.addEventListener("click", function (e) {
  console.log(this.dataset.id);
});
 */

// get check data id here
let checkData = [];

// select single data
[...all_check_boxes].forEach((cBox) => {
  const trId = cBox.parentElement.parentElement.dataset.id;
  // console.log(cBox.checked);
  cBox.addEventListener("click", function () {
    if (cBox.checked) {
      checkData.push(trId);
    } else {
      const indexAddedData = checkData.findIndex((tdId) => {
        return tdId === trId;
      });
      checkData.splice(indexAddedData, 1);
    }
    console.log(checkData);
  });
});

// bulk selection
bulk_check.addEventListener("click", function (e) {
  const checked = e.target.checked;
  if (checked) {
    [...all_check_boxes].forEach((checkBox) => {
      const tr = checkBox.parentElement.parentElement;
      checkData.push(tr.dataset.id);
      checkBox.checked = true;
    });
  } else {
    [...all_check_boxes].forEach((checkBox) => {
      checkBox.checked = false;
      checkData.length = 0;
    });
  }
  console.log(checkData);
});
