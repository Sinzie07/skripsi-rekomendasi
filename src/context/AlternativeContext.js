import { createContext, useEffect, useState } from "react";
import { alternatives } from "./data";

export const AlternativeContext = createContext(alternatives);

const AlternativeProvider = (props) => {
  const [alternative, setAlternative] = useState(alternatives);
  const { children } = props;

  function setRanking(ranking) {
    alternatives.forEach((item) => {
      if (item.id === "cross") {
        item.ranking = ranking["cross"];
      } else if (item.id === "blockchain") {
        item.ranking = ranking["blockchain"];
      } else if (item.id === "cyber_firewall") {
        item.ranking = ranking["cyber_firewall"];
      } else if (item.id === "cyber_cloud") {
        item.ranking = ranking["cyber_cloud"];
      } else if (item.id === "compas") {
        item.ranking = ranking["compas"];
      } else if (item.id === "game3d") {
        item.ranking = ranking["game3d"];
      } else if (item.id === "gamearvr") {
        item.ranking = ranking["gamearvr"];
      } else if (item.id === "multimedia") {
        item.ranking = ranking["multimedia"];
      } else if (item.id === "paralel") {
        item.ranking = ranking["paralel"];
      }
    });
  }

  function setAlternativeData(
    oop,
    dataStructure,
    algoritma,
    computerSecurity,
    cross,
    blockchain,
    game3d,
    gamearvr,
    compas,
    multimedia,
    paralel,
    cyberFirewall,
    cyberCloud
  ) {
    alternative.forEach((item) => {
      if (item.id === "cross") {
        item.bobotWP.nilai_sebelum = oop;
        item.bobotWP.minat = cross;
      } else if (item.id === "blockchain") {
        item.bobotWP.nilai_sebelum = dataStructure;
        item.bobotWP.minat = blockchain;
      } else if (item.id === "game3d") {
        item.bobotWP.nilai_sebelum = oop;
        item.bobotWP.minat = game3d;
      } else if (item.id === "gamearvr") {
        item.bobotWP.nilai_sebelum = oop;
        item.bobotWP.minat = gamearvr;
      } else if (item.id === "compas") {
        item.bobotWP.nilai_sebelum =
          (parseInt(oop) +
            parseInt(dataStructure) +
            parseInt(algoritma) +
            parseInt(computerSecurity)) /
          4;
        item.bobotWP.minat = compas;
      } else if (item.id === "multimedia") {
        item.bobotWP.nilai_sebelum =
          (parseInt(oop) +
            parseInt(dataStructure) +
            parseInt(algoritma) +
            parseInt(computerSecurity)) /
          4;
        item.bobotWP.minat = multimedia;
      } else if (item.id === "paralel") {
        item.bobotWP.nilai_sebelum = algoritma;
        item.bobotWP.minat = paralel;
      } else if (item.id === "cyber_firewall") {
        item.bobotWP.nilai_sebelum = computerSecurity;
        item.bobotWP.minat = cyberFirewall;
      } else if (item.id === "cyber_cloud") {
        item.bobotWP.nilai_sebelum = computerSecurity;
        item.bobotWP.minat = cyberCloud;
      }
    });
  }

  return (
    <AlternativeContext.Provider
      value={{ alternative, setAlternative, setAlternativeData, setRanking }}
    >
      {children}
    </AlternativeContext.Provider>
  );
};

export default AlternativeProvider;
