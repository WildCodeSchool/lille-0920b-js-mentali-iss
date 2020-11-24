import styled from 'styled-components';
import { device } from "./Device";

export const Crewcards = styled.div ` 
    display: flex;
    justify-content: space-around;
    position: relative;
    border-radius: 20px;
    border: solid 1px white;
    padding-top: 1em;
    padding-bottom: 1em;
    background-color: rgb(53, 52, 52);
    `;

export const Crewheader = styled.header `
    display: flex;
    border-radius: 20px;
    border: solid 2px white;
    @media ${device.mobile} {
        display: none;
    }`;

export const Astrophoto = styled.img` 
    border-radius: 20px;
    filter: saturate(1.8);
    &:hover {
        filter: grayscale(100);
    }
    @media ${device.mobile} {
        display: none;
    }`;

export const Crewsection = styled.section`
    display: flex;
    flex-direction: column;
    width: 58%;
    height: 98%;
    align-items: center;
    @media ${device.mobile} {
        width:90%;
    }`;

export const Astrotitle = styled.div `
    display: flex;
    flex-wrap: wrap;
    font-family: "Vindemia";
    width: 98%;
    height: auto;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 2px 2px 2px 2px;
    @media ${device.mobile} {
        font-size: 1.8em;
        flex-direction: column;
        margin-top: 0.2em;
        }`;

export const Astroname = styled.h2`
    text-align: center;
    font-family: "Vindemia";
    font-size: 1em;
    color: white;
    @media ${device.mobile} {
    font-size: 0.4em;
    margin-bottom: 15px;
    }`;

export const Astroflag = styled.img`
    width: 20%;
    `;

export const Astrotag =styled.div`
    font-family: "Vindemia";
    text-align: left;
    `;

export const P = styled.p ` 
    font-family: "Vindemia";
    line-height: 2em;
    font-size: 0.6em;
    margin-top: 5px;
    margin-bottom: 10px;
    color: white;
    @media ${device.mobile} {
    font-size: 0.4em;
    line-height: 10px;
    margin-top: 20px;
    text-align: justify
    }`

export const Trait = styled.hr` 
    width: 98%;
    margin-top: 20px;
    border: solid 2px white;`

export const Learnmore = styled.a` 
    width: 98%;
    text-align: end;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "Vindemia";
    font-size: 0.5em;
    color: white;
    &:hover  {
    color: blue;
    }`;