import { useState } from "react";

// document.*
export function Counter() {
  //let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      {/* onClick → camel case */}
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      {/*<button onClick={() => setLike(like + 1)}>👎{like}</button> */}
      <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
    </div>
  );
}
