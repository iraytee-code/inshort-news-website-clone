const NewsItem = ({ user }) => {
  return (
    <div className="news-item">
      <div className="news-image">
        <img src={user.image} alt="" />
      </div>
      <div className="news-content">
        <div className="news-title">
          <p>{user.title}</p>
        </div>
        <div className="time-stamp">
          <p>{user.timestamp}</p>
        </div>
        <div className="news-body">
          <p>{user.description} </p>
        </div>
        <div className="read-more">
          <a href={user.read_more}>read more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
