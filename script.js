const formPreview = document.getElementById("formPreview");
const codeBox = document.getElementById("generatedCode");

let fields = [];

function addCustomField() {
  const type = document.getElementById("fieldType").value;
  const label = document.getElementById("fieldLabel").value || "Label";
  const placeholder = document.getElementById("fieldPlaceholder").value || "";
  const required = document.getElementById("fieldRequired").checked;

  let html = "";

  if (type === "text" || type === "email") {
    html = `<label>${label}: 
      <input type="${type}" placeholder="${placeholder}" ${
      required ? "required" : ""
    } />
    </label>`;
  } else if (type === "textarea") {
    html = `<label>${label}: 
      <textarea placeholder="${placeholder}" ${
      required ? "required" : ""
    }></textarea>
    </label>`;
  } else if (type === "dropdown") {
    html = `<label>${label}:
      <select ${required ? "required" : ""}>
        <option value="">--Select--</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </label>`;
  }

  fields.push(html);
  renderForm();
}

function renderForm() {
  const title = document.getElementById("formTitle").value || "My Form";
  const fontSize = document.getElementById("fontSizeSelect").value;
  const formWidth = document.getElementById("formWidthSelect").value;
  const bgColor = document.getElementById("bgColorPicker").value;

  formPreview.style.fontSize = fontSize;
  formPreview.style.width = formWidth;
  formPreview.style.backgroundColor = bgColor;

  const formContent = `
    <h3>${title}</h3>
    ${fields.join("\n")}
    <button type="submit">Submit</button>
  `;

  formPreview.innerHTML = formContent;
  codeBox.textContent = `<form style="font-size:${fontSize}; width:${formWidth}; background:${bgColor};">\n  <h3>${title}</h3>\n  ${fields.join(
    "\n  "
  )}\n  <button type="submit">Submit</button>\n</form>`;
}

function handleSubmit(e) {
  e.preventDefault();
  if (formPreview.checkValidity()) {
    alert("✅ Form is valid and ready to submit!");
  } else {
    alert("❌ Please fill in all required fields correctly.");
  }
}

function clearForm() {
  fields = [];
  renderForm();
}
