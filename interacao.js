document.addEventListener("DOMContentLoaded", function () {
  // Função utilitária para aplicar hover com estilo customizado
  function aplicarHoverDestaque(elementos, estiloHover, estiloLeave, tooltip = "") {
    elementos.forEach((el) => {
      // Salva os estilos originais
      const originalStyles = {
        backgroundColor: el.style.backgroundColor,
        border: el.style.border,
        padding: el.style.padding,
        borderRadius: el.style.borderRadius,
        transform: el.style.transform,
      };

      // Adiciona tooltip, se houver
      if (tooltip) {
        el.setAttribute("title", tooltip);
      }

      el.addEventListener("mouseenter", () => {
        Object.assign(el.style, estiloHover);
      });

      el.addEventListener("mouseleave", () => {
        Object.assign(el.style, originalStyles);
      });
    });
  }

  // Seleciona todos os pontos de melhoria
  const melhorias = document.querySelectorAll(".melhoria");

  // Estilo ao passar o mouse (hover)
  const estiloHoverMelhoria = {
    backgroundColor: "#fce4ec",
    border: "1px solid #e91e63",
    padding: "10px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    transform: "scale(1.02)",
  };

  const estiloLeave = {
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    borderRadius: "0",
    transform: "scale(1)",
  };

  // Aplica o efeito nos pontos de melhoria
  aplicarHoverDestaque(melhorias, estiloHoverMelhoria, estiloLeave, "Ponto de atenção individual");

  // (Opcional) Seleciona os pontos positivos e aplica destaque também
  const positivos = document.querySelectorAll(".section i.fa-thumbs-up");

  aplicarHoverDestaque(
    Array.from(positivos).map((i) => i.parentElement),
    {
      backgroundColor: "#e3f2fd",
      border: "1px solid #2196f3",
      padding: "10px",
      borderRadius: "6px",
      transition: "all 0.3s ease",
      transform: "scale(1.02)",
    },
    estiloLeave,
    "Ponto positivo individual"
  );
});
