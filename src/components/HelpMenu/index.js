import React from "react";
import Badge from "../Badge";
import ArrowIcon from "../../icons/arrow";
import CardIcon from "../../icons/cards";
import NumbersIcon from "../../icons/numbers";
import GuestsIcon from "../../icons/guests";

export const Cards = () => (
  <div className="menu">
    <Badge value={1} />
    <CardIcon fill="#013161" />
    <br />
    <span>Cartas</span>
  </div>
);
export const Arrow = () => (
  <div className="menu">
    <Badge value={3} />
    <ArrowIcon fill="#013161" />
    <br />
    <span>Pular</span>
  </div>
);

export const Numbers = () => (
  <div className="menu">
    <Badge value={1} />
    <NumbersIcon fill="#013161" />
    <br />
    <span>Placas</span>
  </div>
);

export const Guests = () => (
  <div className="menu">
    <Badge value={1} />
    <GuestsIcon fill="#013161" />
    <br />
    <span>Convidados</span>
  </div>
);
