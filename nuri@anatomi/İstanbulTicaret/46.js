const a_filterButton = document.querySelector("#filterMobileBtn");
const a_filter = document.querySelector("#filter");

const anatomi_filter_style = `
<style>

#leftColumn {
    position: sticky;
    -webkit-position: sticky;
    top: 10%;
}

#leftColumn .col.col-12.col-sm-6{
    border : 1px solid #e5e5e5;
    padding: 10px;
    margin: 50px 0;
}

#filterMobileBtn {
    display: none !important;
}

.filter-wrap {
    display: block !important;
}

.filter-title {
    background-color: #fff !important;
    pointer-events: none;
    padding: 10px 0px !important;
}

.filter-title .fr.icon-minus, .filter-title .fr.icon-plus {
    display: none;
}

.filter-item-list {
    max-height: 100%;
}

.filter-search, .filter-search-clear {
    display: none !important;

}
</style>
`;

const anatomiHead = document.querySelector("head");
anatomiHead.insertAdjacentHTML("beforeend", anatomi_filter_style);


