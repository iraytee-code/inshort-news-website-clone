import useFetchData from "../useFetchData";
import DownloadInfo from "./DownloadInfo";
import NewsItem from "./NewsItem";
import LoadMore from "./LoadMore";
import DownloadInfoSmall from "./DownloadinfoSmall";

const SectionBody = () => {
  const { data } = useFetchData(
    "https://inshorts.vercel.app/news?category=all"
  );

  return (
    <div className="content-body">
      <DownloadInfo />
      <div>{data && data.articles.map((user) => <NewsItem user={user} />)}</div>
      <LoadMore />
      <DownloadInfoSmall />
    </div>
  );
};

export default SectionBody;
