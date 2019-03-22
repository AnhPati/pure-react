import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "./index.css";

function Exercices() {
    return (
        <div className="mainContainer">
            <h1 className="title-xl u-marginBottom-md">PropTypes Exercices</h1>
            <ul className="exercicesContainer c-listeNone u-flexBox centered column">
                <li className="exercicesItem u-flexBox centered column">
                    <h2 class="title-md u-marginBottom-md">Exercice 1 :</h2>
                    <ExerciceUn/>
                </li>
                <li className="exercicesItem u-flexBox centered column">
                    <h2 class="title-md u-marginBottom-md">Exercice 2 :</h2>
                    <ExerciceDeux/>
                </li>
                <li className="exercicesItem u-flexBox centered column">
                    <h2 class="title-md u-marginBottom-md">Exercice 3 :</h2>
                    <ExerciceTrois/>
                </li>
                <li className="exercicesItem u-flexBox centered column">
                    <h2 class="title-md u-marginBottom-md">Exercice 4 :</h2>
                    <ExerciceQuatre/>
                </li>
            </ul>
        </div>
    );
};

function ExerciceUn() {
    return (
        <div className="u-flexBox centered adressLabel u-marginBottom-md">
            <AdressLabel person={defaultPerson}/>
        </div>
    );
};

function AdressLabel({person}) {
    return (
        <div>
            <ul className="c-listeNone u-flexBox column">
                <li className="u-flexBox fullname paragraph-md">
                    {person.fullname}
                </li>
                <li className="u-flexBox adress paragraph-sm">
                    {person.adress}
                </li>
                < li className = "u-flexBox city paragraph-md bold" >
                    {person.city}
                </li>
            </ul>
        </div>
    );
};

AdressLabel.propTypes = {
    person: PropTypes.shape({
        fullname: PropTypes.string,
        adress: PropTypes.string,
        city: PropTypes.string
    }).isRequired
}

var defaultPerson = {
    fullname: "Full Name",
    adress: "123 Fake St.",
    city: "Boston, MA 02118"
}

function ExerciceDeux() {
    return (
        <div className="u-flexBox centered envelope">
            <Envelope infos={infosCourrier}/>
        </div>
    );
};

function Envelope({infos}) {
    return (
        <div className="u-flexBox column">
            <div className="fromContainer u-flexBox u-marginBottom-md">
                <div className="from">
                    <AdressLabel person={infos.fromPerson}/>
                </div>
                < div className = "stamp u-marginLeft-xl" >
                    <img src={infos.stamp} alt="stamp"/>
                </div>
            </div>
            <div className="to u-flexBox centered">
                <AdressLabel person={infos.toPerson}/>
            </div>
        </div>
    )
};

Envelope.propTypes = {
    toPerson: PropTypes.object.isRequired,
    fromPerson: PropTypes.object,
    stamp: PropTypes.string.isRequired
}

var infosCourrier = {
    toPerson: {
        fullname: "Mr.Sender",
        adress: "123 Fake St.",
        city: "Boston, MA 02118"
    },
    fromPerson: {
        fullname: "Mrs.Receiver",
        adress: "123 Fake St.",
        city: " San Francisco, CA 94101"
    },
    stamp: "https://i.pinimg.com/originals/47/58/89/47588906f1bb5634462bd7afe40c32c5.jpg"
};

function ExerciceTrois() {
    return (
        <div className="u-flexBox centered">
            <CreditCard cardInfo={infoCreditCard}/>
        </div>
    );
};

function CreditCard({cardInfo}) {
    return (
        <div className="creditCard">
            <div className="bankName">
                <h3 className="title-sm">{cardInfo.bankName}</h3>
            </div>
            <div className="u-flexBox u-marginBottom-sm column">
                <p className="cardNumber paragraph-sm u-marginNone">{cardInfo.creditCardNumber.cardNumber}</p>
                <p className="paragraph-xxs u-marginNone">{cardInfo.creditCardNumber.confirmationNumber}</p>
            </div>
            <div className="u-flexBox centered">
                <p className="expirationBox paragraph-xxs u-marginNone">{cardInfo.expirationDate.entitled}</p>
                <p className="paragraph-xs u-marginNone">{cardInfo.expirationDate.date}</p>
            </div>
            <div>
                <h3 className="paragraph-xs">{cardInfo.personName}</h3>
            </div>
        </div>
    )
};

CreditCard.propTypes = {
    bankName: PropTypes.string.isRequired,
    creditCardNumber: PropTypes.shape({
        cardNumber: PropTypes.string,
        confirmationNumber: PropTypes.number
    }).isRequired,
    expirationDate: PropTypes.shape({
        entitled: PropTypes.string,
        date: PropTypes.string
    }).isRequired,
    personName: PropTypes.string.isRequired
}

var infoCreditCard = {
    bankName: "Big Bank, Inc.",
    creditCardNumber: {
        cardNumber: "1234 5678 8765 4321",
        confirmationNumber: 1234
    },
    expirationDate: {
        entitled: "VALID THRU",
        date: "08/19"
    },
    personName: "CARDHOLDER NAME"
};

function ExerciceQuatre() {
    return (
        <div className="u-flexBox centered">
            <Poster posterInfo={createYourself}/>
        </div>
    );
};

function Poster({posterInfo}) {
    return (
        <div>
            <div>
                <img src={posterInfo.image.url} alt={posterInfo.image.description}/>
            </div>
            <h3>
                {posterInfo.title}
            </h3>
            <div>
                <p>
                    {posterInfo.text}
                </p>
            </div>
        </div>
    )
};

Poster.propTypes = {
    image: PropTypes.shape({
        url: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
    title: PropTypes.string,
    text: PropTypes.string
}

var createYourself = {
    image: {
        url: "",
        description: ""
    },
    title: "",
    text: ""
};

ReactDOM.render(<Exercices/>, document.getElementById("root"))