function TextoMapa({ texto, top, left, color = "white", fontSize = "24px" }) {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        color: color,
        fontSize: fontSize,
        fontWeight: "bold",
        textShadow: "2px 2px 4px black",
        pointerEvents: "none", // para que el texto no interfiera con clicks
      }}
    >
      {texto}
    </div>
  );
}

export default TextoMapa;
