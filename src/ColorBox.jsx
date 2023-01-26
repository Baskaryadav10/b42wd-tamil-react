
export function ColorBox({ color }) {
  const styles = {
    height: '25px',
    width: '250px',
    margin: '5px  0px',
    background: color,
  };
  return <div style={styles}></div>;
}
