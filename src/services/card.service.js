import { CardModel } from "../models/card.model.js";

const createNew = async (data) => {
  try {
    const createdBoard = await CardModel.createNew(data);
    const getNewBoard = await CardModel.findOneById(
      createdBoard.insertedId.toString()
    );
    getNewBoard.cards = [];

    return getNewBoard;
  } catch (error) {
    throw new Error(error);
  }
};

export const CardService = { createNew };
