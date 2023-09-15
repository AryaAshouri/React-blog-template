import { useState } from 'react';
function LikeButton(){
  const [likes, setLikes] = useState(0);
  function like_blog() {
    setLikes(likes + 1)
  }
  return (
    <div id="like-section">
      <button id="view-button">View</button>
      <button id="like-button" onClick={like_blog}>Like</button>
      <p id="like-data">{likes}</p>
    </div>
  )
}

export default LikeButton
