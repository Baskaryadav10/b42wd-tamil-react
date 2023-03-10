import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState(['crimson', 'orange', 'purple']);
  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(event) => setColor(event.target.value)}
        value={color} />
      {/* Copy existing 'colorList' & add new color to it */}
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

    </div>
  );
}
