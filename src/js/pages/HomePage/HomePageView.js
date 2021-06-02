export default function (props) {
    console.log(`view`);
    return `

      <div class="search-wrapper">
        <form id="search-form" class="form_search">
          <input
            type="text"
            name="query"
            autocomplete="off"
            placeholder="Write movie name and click"
            class="input_search"
          />
          <button type="submit" class="button_search"><i class="material-icons">search</i></button>
        </form>
      </div>

      <div>
        <ul class="cards__container" id="films-gallery"></ul>
      </div>

      <div class="pagination">
        <button tupe="button" data-action="prev_page" class="js-prevBtn paginBtn prevBtn">Prev page</button> 
        <span class="positionPagin">1</span>
        <button tupe="button" data-action="next-page" class="js-nextBtn paginBtn nextBtn">Next page</button> 
      </div>

    
    `;
}

{/* <div class="pagination">
<button class="btn-prev" disabled>Prev</button>
<span class="current-page">1</span>
<button class="btn-next">Next</button>
</div> */}

