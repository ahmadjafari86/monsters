// import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component";
import { Monster } from '../../App';

type CardListProps = {
    monsters: Array<Monster>
};

const CardList = ({monsters}: CardListProps) => (
        <div className="card-list">
            {monsters.map( monster => <Card key={monster.id} monster={monster} />)}
        </div>
    );
 
export default CardList;