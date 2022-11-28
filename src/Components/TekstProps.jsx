//  Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

const TekstProps = ({text}) => {
    return(
        <>
            <h1>{text}</h1>
        </>
    );
}

export default TekstProps;