const form = document.querySelector("#form");
const tr = document.querySelectorAll("tbody tr");
const addBtn = document.querySelector("#update");

/* update functionality */
[...tr].forEach(tr => {
  tr.addEventListener("click", function (e) {
    if (this.dataset.id === e.target.dataset.id) {
      form.action = `/update/${this.dataset.id}`;
      addBtn.value = `Update`;
      [...this.children].forEach(td => {
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
