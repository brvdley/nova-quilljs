Nova.booting((app, store) => {
  vue.component("index-quilljs", require("./components/IndexField"));
  vue.component("detail-quilljs", require("./components/DetailField"));
  vue.component("form-quilljs", require("./components/FormField"));
});
