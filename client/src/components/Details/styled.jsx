import styled from "styled-components";

const Main = styled.main`
    width: 50%;
    margin: 1em auto;
    padding: 0 1em;

    position: relative;

    div {
        margin: 1em 0;
    }

    .heading {
        font-size: 40px;
    }

    .rent {
        position: absolute;
        top: 1em;
        right: 1em;

        letter-spacing: 0.3em;

        font-weight: 100;

        color: rgb(43, 43, 43);

        font-size: 18px;
    }

    .price {
        color: rgba(229, 14, 11);
        font-size: 19px;
    }

    img {
        width: 100%;
        margin: 2em 0;
    }

    .desc {
        width: 70%;
    }

    .sub-title {
        font-size: 19px;
        margin-bottom: 1em;

        letter-spacing: 1.4px;

        width: fit-content;
        border-bottom: 2px solid black;
    }

    .para {
        line-height: 2em;
        font-size: 16px;

        color: rgba(43, 43, 43);

        font-family: "Roboto", sans-serif;
    }

    .icons-wrapper {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .contact-details {
        font-size: 20px;
    }
`;

const IconDiv = styled.div`
    font-family: "Poppins", sans-serif;

    svg {
        width: 40px;
        height: 40px;
    }

    p {
        font-size: 16px;
    }

    strong {
        font-size: 20px;
    }
`;

export { Main, IconDiv };
