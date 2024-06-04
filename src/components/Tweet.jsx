function Tweet(tweet) {
  return (
    <div className="tweet">
      <img src="{tweet-image}" className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{tweet - name}</span>
            <span className="handle">{tweet - handle}</span>
          </span>

          <span className="timestamp">{tweet - timestamp}</span>
        </div>

        <p className="message">{tweet - message}</p>
      </div>
    </div>
  );
}

export default Tweet;

{
  /*
        <div className="actions">
          {/* Font Awesome icons 
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>*/
}
