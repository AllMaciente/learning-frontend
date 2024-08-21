document.getElementById("filterInput").addEventListener("keyup", function () {
  const filterValue = this.value.toLowerCase();
  const typeSections = document.querySelectorAll(".type");

  typeSections.forEach(function (typeSection) {
    const tagSections = typeSection.querySelectorAll(".tag");
    let sectionHasMatch = false;

    tagSections.forEach(function (tagSection) {
      const h3 = tagSection.querySelector("h3");
      const text = h3.textContent.toLowerCase();

      if (text.includes(filterValue)) {
        tagSection.style.display = ""; // Mostra a tag
        sectionHasMatch = true;
      } else {
        tagSection.style.display = "none"; // Esconde a tag
      }
    });

    // Se nenhuma tag dentro da section .type corresponder, esconde a section .type
    if (sectionHasMatch) {
      typeSection.style.display = "";
    } else {
      typeSection.style.display = "none";
    }
  });
});
