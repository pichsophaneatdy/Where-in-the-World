const Search = ({handleChange}) => {
    return (
        <div className="search-div">
            <input onChange={(e) => handleChange(e)} type='text' id="country" placeholder="Search for a country..."></input>
        </div>)
}
export default Search;