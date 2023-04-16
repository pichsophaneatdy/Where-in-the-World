import Navigation from "./Navigation";
import "./CountryDetail.css";
const CountryDetail = ({country, handleBack}) => {
    console.log(country.name.nativeName);
    console.log(Object.keys(country.name.nativeName));
    return (
        <>
            <Navigation/>
            <div className="detail-section">
                <button className="back-button" onClick={handleBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arrow bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                    Back
                </button>
                <div className="detail-content d-flex flex-column flex-lg-row">
                    <img className="flag" src={country.flags.svg} alt={country.alt} />
                    <div className="text-content">
                        <p className="title-text">{country.name.common}</p>
                        <div className="d-flex flex-column flex-lg-row justify-content-between">
                            
                            {/* Section 1 */}
                            
                            <div className="section-1">
                                <div className="d-flex flex-row">
                                    <p className="bold margin-right">Native Name:</p>
                                    {
                                        Object.keys(country.name.nativeName).map((key) => {
                                            return <p className="margin-right"> {country.name.nativeName[key].official} </p>
                                        })
                                    }
                                </div>
                                
                                <p><span className="bold">Population:</span> {country.population}</p>
                                <p><span className="bold">Region: </span>{country.region}</p>
                                <p><span className="bold">Sub Region:</span> {country.subregion}</p>
                                <p><span className="bold">Capital:</span> {country.capital}</p>
                            </div>
                            {/* Section 2 */}
                            <div className="d-flex flex-column flex-lg-column">

                            
                                <p><span className="bold">Top Level Domain:</span> {country.tld}</p>
                                <div className="currencies-div d-flex flew-row">
                                    <p className="bold margin-right">Currencies: </p>
                                    {
                                        Object.keys(country.currencies).map((currency) => {
                                            return <p className="margin-right">{currency}</p>
                                        })
                                    }
                                </div>
                                <div className="language-div d-flex flex-row">
                                    <p className="bold margin-right">Languages:</p>
                                    {
                                        Object.keys(country.languages).map((key) => {
                                            return <p className="margin-right" key={key}>{country.languages[key]}</p>
                                        })
                                    }     
                                </div>
                            </div>
                        </div>
                        {/* Section 3 */}
                        <div className="section-3 border-div">
                            {country.borders && <p class="bold">Border Countries: </p>}
                            <div className="d-flex flex-row justify-content-start flex-wrap">
                            {
                                country.borders ? (
                                    country.borders.map((border) => {
                                        return <p className="item">{border}</p>
                                    }) 
                                ) : (
                                    <p>{country.name.common} does not share any borders with other countries.</p>
                                )
            
                            }
                
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </>
        
    )
}

export default CountryDetail;