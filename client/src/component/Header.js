import "../App.css";

function Header(props) {
  return (
    <div className="main-title-box">
      <h1 className="main-title">เที่ยวไหนดี</h1>
      <div class="group">
        <input
          type="text"
          required
          onChange={props.handleSearchTextChange}
          value={props.searchText}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>ค้นหาที่เที่ยว</label>
      </div>
    </div>
  );
}

export default Header;
