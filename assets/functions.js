var coll = document.getElementsByClassName("collapsible");
var coll_inner = document.getElementsByClassName("collapsible-inner");
var coll_first = document.getElementsByClassName("collapsible-first");
var coll_inner_first = document.getElementsByClassName("collapsible-inner-first");
var drop = document.getElementsByClassName("dropdown");
var c;
var ci;
var cf;
var cif;

for (c = 0; c < coll.length; c++) {
  coll[c].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.visibility === "unset") {
          content.style.visibility = "hidden";
          content.style.height = "0px";
      }
      else {
          content.style.visibility = "unset";
          content.style.height = "auto";
      }
  });
}

for (ci = 0; ci < coll_inner.length; ci++) {
coll_inner[ci].addEventListener("click", function() {
      this.classList.toggle("active");
      var content_inner = this.nextElementSibling;
      if (content_inner.style.visibility === "unset") {
           content_inner.style.visibility = "hidden";
           content_inner.style.height = "0px";
          }
      else {
          content_inner.style.visibility = "unset";
          content_inner.style.height = "auto";
      }
  });
}

for (cf = 0; cf < coll_first.length; cf++) {
  coll_first[cf].addEventListener("click", function() {
      this.classList.toggle("active");
      var content_first = this.nextElementSibling;
      if (content_first.style.visibility === "hidden") {
          content_first.style.visibility = "unset";
          content_first.style.height = "auto";
      }
      else {
          content_first.style.visibility = "hidden";
          content_first.style.height = "0px";
      }
  });
}

for (cif = 0; cif < coll_inner_first.length; cif++) {
  coll_inner_first[cif].addEventListener("click", function() {
      this.classList.toggle("active");
      var content_inner_first = this.nextElementSibling;
      if (content_inner_first.style.visibility === "hidden") {
          content_inner_first.style.visibility = "unset";
          content_inner_first.style.height = "auto";
          }
      else {
          content_inner_first.style.visibility = "hidden";
          content_inner_first.style.height = "0px";
      }
  });
}