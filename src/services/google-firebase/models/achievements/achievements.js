// Schema & methods for 'achievements' collection

import { db } from "../../setup";

/**
 * A class to handle the schema & methods of 'achievements' collection in Firestore
 *
 * **Schema**
 * @field `posterLink`: `string` Image source link for the poster. Mostly, a Firebase Storage file link.
 * @field `header`: `string` The title of the achievement
 * @field `date`: `timestamp` The event date; this is for sorting the events
 * @field `body`: `string` Event description & highlights
 *
 * **Methods**
 * @method `getAllAchievements` To retrieve the snapshot of all documents
 */
class Achievements {
  static collectionName = "achievements";

  /**
   * A static async function to retrieve the snapshot of all documents
   * in the 'achievements' collection
   * @returns Snapshot of documents
   */
  static async getAllAchievements() {
    return db
      .collection(Achievements.collectionName)
      .orderBy("date", "desc")
      .get();
  }
}

export default Achievements;
