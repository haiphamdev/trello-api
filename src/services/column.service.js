import { ColumnModel } from "../models/column.model.js";

const createNew = async (data) => {
  try {
    const createdColumn = await ColumnModel.createNew(data);
    const getNewColumn = await ColumnModel.findOneById(
      createdColumn.insertedId.toString()
    );
    getNewColumn.cards = [];

    return getNewColumn;
  } catch (error) {
    throw new Error(error);
  }
};

const update = async (id, data) => {
  try {
    const updateData = {
      ...data,
      updatedAt: Date.now(),
    };

    const createdColumn = await ColumnModel.update(id, updateData);
    const getNewColumn = await ColumnModel.findOneById(
      createdColumn.insertedId.toString()
    );
    getNewColumn.cards = [];

    return getNewColumn;
  } catch (error) {
    throw new Error(error);
  }
};

export const ColumnService = { createNew, update };
