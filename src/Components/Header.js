import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>FOod Items</h1>
        </a>
      </div>
      <div class="search-bar">
  <i class="icon fa fa-search"></i>
  <input class="input-text" type="text" name="eingabe" placeholder="SearchHere"></input>
</div>
    </header>
  );
}
