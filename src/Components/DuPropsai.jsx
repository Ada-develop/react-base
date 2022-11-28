// Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.

const DuPropsai = ({pirmaAntraste, antraAntraste}) =>{
    return(
        <>
            <h1>{pirmaAntraste}</h1>
            <h2>{antraAntraste}</h2>
        </>
    );
}

export default DuPropsai;