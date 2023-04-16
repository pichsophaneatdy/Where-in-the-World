import "./Countries.css";
const Countries = ({countries, handleDetail}) => {
    return (
        <section className="country-section d-flex flex-column flex-md-row flex-wrap">
            {
                countries.map((country) => {
                    return (
                        <div key={country.name.common} className="country-card">
                            <img className="country-flag" src={country.flags.svg} alt={country.alt}/>
                            <div className="content">
                                <p className="country-name">{country.name.common}</p>
                                <p><span className="bold">Population:</span> {country.population}</p>
                                <p><span className="bold">Region:</span> {country.region}</p>
                                <p><span className="bold">Capital:</span> {country.capital}</p>
                                <button onClick={() => handleDetail(country.name.common)} className="detail-button">Detail</button>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Countries;