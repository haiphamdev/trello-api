import { BoardModel } from "../models/board.model.js";

const createNew = async (data) => {
  try {
    const createdBoard = await BoardModel.createNew(data);
    const getNewBoard = await BoardModel.findOneById(
      createdBoard.insertedId.toString()
    );
    getNewBoard.cards = [];

    return getNewBoard;
  } catch (error) {
    throw new Error(error);
  }
};

export const BoardService = { createNew };
