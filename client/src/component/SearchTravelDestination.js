import CopyClip from "./CopyClip";

function SearchTravelDestination(props) {
  return (
    <div className="all-result-box">
      {props.destinations.map((list) => {
        return (
          <div key={list.eid} className="result-box">
            <img className="main-img" src={list.photos[0]} alt="firstimage" />
            <div className="info-box">
              <a href={list.url} className="info-title">
                {list.title}
              </a>
              <div className="info-description">
                {list.description.slice(0, 150)}
                <a className="read-more" href={list.url}>
                  {"  "}
                  ..Read more
                </a>
              </div>
              <div className="info-tag-box" role="list">
                <div className="info-tag">หมวด</div>
                {list.tags.map((tag, index) => {
                  return (
                    <p
                      role="listitem"
                      className="tag"
                      key={index}
                      onClick={() => props.handleSearchTextTag(tag)}
                    >
                      {tag}
                    </p>
                  );
                })}
              </div>
              <div className="more-image">
                {list.photos.slice(1).map((inList, idx) => {
                  return (
                    <div>
                      <img
                        className="other-img"
                        key={idx}
                        src={inList}
                        alt="img"
                      />
                    </div>
                  );
                })}
                <CopyClip url={list.url} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchTravelDestination;
