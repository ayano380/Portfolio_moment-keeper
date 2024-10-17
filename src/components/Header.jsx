import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header">
        <h1>Moment Keeper</h1>
        <form action="#" className="search-form-4">
          <button type="submit" aria-label="検索"></button>
          <label>
            <input type="text" placeholder="キーワードを入力" />
          </label>
        </form>
      </div>
    </header>
  );
};

export default Header;
