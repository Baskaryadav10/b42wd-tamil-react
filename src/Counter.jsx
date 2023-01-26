import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

// document.*
export function Counter() {
  //let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <IconButton 
        onClick={() => setLike(like + 1)} 
        aria-label="like movie"
        color="primary"
        >
          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
      </IconButton>

      
      {/* onClick → camel case */}
      {/*<button onClick={() => setLike(like + 1)}>👎{like}</button> */}
      <IconButton 
        onClick={() => setDislike(dislike + 1)} 
        aria-label="dislike movie" 
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
        
      </IconButton>
    </div>
  );
}
